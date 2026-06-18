import User from '#models/user'
import Post from '#models/post'
import { BasePolicy } from '@adonisjs/bouncer'

export default class PostPolicy extends BasePolicy {
  
    edit(user: User, post: Post){
        return user.id === post.userId
    }

    delete(user: User, post: Post){
        return user.id === post.userId
    }
}