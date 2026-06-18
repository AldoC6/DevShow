import { CommentSchema } from '#database/schema'
import { belongsTo } from '@adonisjs/lucid/orm'
import User from './user.js'
import { type BelongsTo } from '@adonisjs/lucid/types/relations'
import Post from './post.js'

export default class Comment extends CommentSchema {

    @belongsTo(() => Post)
    declare post: BelongsTo<typeof Post>

    @belongsTo(() => User)
    declare user: BelongsTo<typeof User>

}
