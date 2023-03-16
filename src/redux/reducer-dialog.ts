import {ActionsType, DialogPageType, MessageType} from "./state";


export type ReducerDialogActionType=ReturnType<typeof addMessageAC>|ReturnType<typeof changeMessageAC>
 export const addMessageAC=(messageText:string)=>{
    return {type:'ADD-MESSAGE',
        messageText:messageText
    }as const
}
 export const changeMessageAC=(newMessageText:string)=>{
    return {type:'CHANGE-MESSAGE',
        newMessageText:newMessageText
    }as const
}
export const dialogReducer=(state:DialogPageType,action:ActionsType)=>{
    switch (action.type){
        case "ADD-MESSAGE":
            let newMessage: MessageType = {
                id: new Date().getTime(),
                message: action.messageText
            }
            state.message.push(newMessage);
            state.messageText = '';
            return state;

        case "CHANGE-MESSAGE":
            state.messageText = action.newMessageText;
            return state;
         default: return state
    }
}
