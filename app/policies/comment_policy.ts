import User from '#models/user'
import Comment from '#models/comment'
import { BasePolicy } from '@adonisjs/bouncer'

export default class CommentPolicy extends BasePolicy {

    delete(user: User, comment: Comment){
        return user.id === comment.userId
    }
  
}