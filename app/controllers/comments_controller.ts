import Comment from '#models/comment'
import CommentPolicy from '#policies/comment_policy'
import { createCommentValidator } from '#validators/comment'
import type { HttpContext } from '@adonisjs/core/http'

export default class CommentsController {

    async store({ request, auth, response, params }: HttpContext) {
        const payload = await request.validateUsing(createCommentValidator)

        await Comment.create({
            ...payload,
            postId: params.id,
            userId: auth.user!.id,
        })

        return response.redirect().back()

    }

    async destroy({ bouncer, params, response, session }: HttpContext) {
    const comment = await Comment.findOrFail(params.id)
    await comment.load('post')

    await bouncer.with(CommentPolicy).authorize('delete', comment)

    await comment.delete()

    session.flash('success', 'Comment deleted successfully')
    return response.redirect().toRoute('posts.show', { id: comment.post.id })
  }

}