import { BaseTransformer } from '@adonisjs/core/transformers'
import Comment from '#models/comment'
import UserTransformer from './user_transformer.js'
import { inject } from '@adonisjs/core'
import { HttpContext } from '@adonisjs/core/http'
import CommentPolicy from '#policies/comment_policy'


export default class CommentTransformer extends BaseTransformer<Comment> {
  toObject() {
    return {
      ...this.pick(this.resource, ['id', 'content', 'createdAt']),
      author: UserTransformer.transform(this.resource.user)
    }
  }

  @inject()
  async withAuthorization({bouncer}: HttpContext){
    return{
      ...this.toObject(),
      can: {
        delete: await bouncer.with(CommentPolicy).allows('delete', this.resource)
      }
    }
  }

}
