import { CommentSchema } from '#database/schema'
import { belongsTo } from '@adonisjs/lucid/orm'
import User from './user.ts'
import { type BelongsTo } from '@adonisjs/lucid/types/relations'
import Post from './post.ts'

export default class Comment extends CommentSchema {

    @belongsTo(() => Post)
    declare post: BelongsTo<typeof Post>

    @belongsTo(() => User)
    declare user: BelongsTo<typeof User>

}