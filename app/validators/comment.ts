import vine from '@vinejs/vine'

export const createCommentValidator = vine.create({
    content: vine.string().trim().minLength(1)
})