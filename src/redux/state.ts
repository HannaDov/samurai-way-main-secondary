import {addPostAC, changePostAC, profileReducer, ReducerProfileActionType} from "./reducer-profile";
import {addMessageAC, changeMessageAC, dialogReducer, ReducerDialogActionType} from "./reducer-dialog";
import {ReducerSidebarActionType} from "./reducer-sidebar";

export type PostType = {
    id: number
    message: string
    likesCount: number
}
export type DialogType = {
    id: number,
    name: string
}
export type MessageType = {
    id: number,
    message: string
}
let sidebar = {}
export type SidebarType = {}
export type DialogPageType = {
    message: MessageType[]
    dialog: DialogType[]
    messageText: string
}
export type ProfilePageType = {
    messageForNewPost: string
    post: PostType[]
}
export type RootStateType = {
    dialogPage: DialogPageType
    profilePage: ProfilePageType
    sidebar: SidebarType

}
export type ActionsType = ReducerProfileActionType|ReducerDialogActionType


/*export const addPostAC=(postText:string)=>{
    return {
        type:'ADD-POST',
        postText:postText
    }as const
}
export const changePostAC=(newText:string)=>{
    return {type:'CHANGE-POST',
        newText:newText
    }as const
}*/
/*export const addMessageAC=(messageText:string)=>{
    return {type:'ADD-MESSAGE',
        messageText:messageText
    }as const
}
export const changeMessageAC=(newMessageText:string)=>{
    return {type:'CHANGE-MESSAGE',
       newMessageText:newMessageText
    }as const
}*/
export type StoreType = {
    _state: RootStateType,
    _renderTree: () => void,
    subscribe: (callback: () => void) => void,
    getState: () => RootStateType
    dispatch: (action:ActionsType) => void,
    /*addPost: () => void,*/
    /* changePost: (newText: string) => void,*/
    /* addMessage: () => void,*/
    /* changeMessage: (newMessageText: string) => void,*/

}

const store: StoreType = {
    _state: {
        dialogPage: {
            messageText: '',
            message: [
                {id: 1, message: 'How are your?'},
                {id: 2, message: 'Hi'},
                {id: 3, message: 'Where are your?'},
                {id: 4, message: 'Yo'}
            ],
            dialog: [
                {id: 1, name: 'Teya'},
                {id: 2, name: 'Timofey'},
                {id: 3, name: 'Olya'},
                {id: 4, name: 'Natasha'},
                {id: 5, name: 'Andrew'}
            ]
        },
        profilePage: {
            messageForNewPost: "",
            post: [
                {id: 1, message: "Hello, how are you?", likesCount: 15},
                {id: 2, message: "i am happy", likesCount: 20}
            ]
        },
        sidebar: {}

    }
    /*addPost() {
        const newPost: PostType = {
            id: new Date().getTime(),
            message: this._state.profilePage.messageForNewPost,
            likesCount: 0
        }
        this._state.profilePage.post.push(newPost)
        this._state.profilePage.messageForNewPost = ''
        this._renderTree()
    }*/,
    /* changePost(newText: string) {
         this._state.profilePage.messageForNewPost = newText
         this._renderTree()
     },*/
    /*  addMessage() {
          let newMessage: MessageType = {
              id: new Date().getTime(),
              message: this._state.dialogPage.messageText
          }
          this._state.dialogPage.message.push(newMessage)
          this._state.dialogPage.messageText = ''
          this._renderTree()
      },*/
    /*changeMessage(newMessageText: string) {
        this._state.dialogPage.messageText = newMessageText
        this._renderTree()
    },*/
    _renderTree() {

    },
    subscribe(callback) {
        this._renderTree = callback
    },
    getState() {
        return this._state
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogPage=dialogReducer(this._state.dialogPage, action)
        this._renderTree()
        /*if (action.type==='ADD-POST'){
            const newPost: PostType = {
                id: new Date().getTime(),
                message: action.postText,
                likesCount: 0
            }
            this._state.profilePage.post.push(newPost)
            this._state.profilePage.messageForNewPost = ''
            this._renderTree()
        }
        else if(action.type==='CHANGE-POST'){
            this._state.profilePage.messageForNewPost =action.newText
            this._renderTree()
        } else if (action.type==='ADD-MESSAGE'){
            let newMessage: MessageType = {
                id: new Date().getTime(),
                message: action.messageText
            }
            this._state.dialogPage.message.push(newMessage)
            this._state.dialogPage.messageText = ''
            this._renderTree()
        }
        else if (action.type==='CHANGE-MESSAGE'){
            this._state.dialogPage.messageText = action.newMessageText
            this._renderTree()
        }*/
    }
}
export default store