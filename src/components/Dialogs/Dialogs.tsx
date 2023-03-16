import React, {ChangeEvent} from 'react';
import style from './Dialogs.module.css'
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem";
import {ActionsType, DialogType, MessageType} from "../../redux/state";
import {addMessageAC, changeMessageAC} from "../../redux/reducer-dialog";


export type DialogPropsType = {
    dialogData: DialogType[]
    messageData: MessageType[]
    newMessageText: string,
    dispatch:(action:ActionsType)=>void
    /*addMessage: (messageElement: string) => void
    changeMessage: (newMessageText: string) => void*/

}
export const Dialogs = (props: DialogPropsType) => {
    ;
    const addNewMessageElement = () => {
       /* props.addMessage(props.newMessageText)*/
props.dispatch(addMessageAC(props.newMessageText))

    }
    const changeMessageText = (e: ChangeEvent<HTMLTextAreaElement>) => {
props.dispatch(changeMessageAC(e.currentTarget.value))
        /*props.changeMessage(e.currentTarget.value)*/
    }
    return <div className={style.dialogs}>
        <div className={style.dialogsItems}>
            {props.dialogData.map(el => <div key={el.id}><DialogItem id={el.id} name={el.name}/></div>)}
        </div>
        <div className={style.messages}>

            {props.messageData.map(el => <div key={el.id}><Message title={el.message}/></div>)}
           <div>
               <div><textarea
                   value={props.newMessageText}
                   onChange={changeMessageText}/></div>
               <div><button onClick={addNewMessageElement}>add message</button></div>
           </div>


        </div>

    </div>
}