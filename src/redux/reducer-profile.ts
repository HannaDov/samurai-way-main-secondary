import {ActionsType, PostType, ProfilePageType} from "./state";


export type ReducerProfileActionType = ReturnType<typeof addPostAC> | ReturnType<typeof changePostAC>
export const addPostAC = (postText: string) => {
    return {
        type: 'ADD-POST',
        postText: postText
    } as const
}
export const changePostAC = (newText: string) => {
    return {
        type: 'CHANGE-POST',
        newText: newText
    } as const
}
export const profileReducer = (state: ProfilePageType, action: ActionsType) => {
    switch (action.type) {
        case "ADD-POST": {
            const newPost: PostType = {
                id: new Date().getTime(),
                message: action.postText,
                likesCount: 0
            }
            state.post.push(newPost)
            state.messageForNewPost = ''
            return state
        }
        case "CHANGE-POST": {
            state.messageForNewPost = action.newText
            return state
        }
        default:
            return state
    }
}
