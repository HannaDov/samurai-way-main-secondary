import React from 'react';
import style from './Message.module.css'


type MessagePropsType={
    title:string
}
export const Message:React.FC<MessagePropsType>=(props)=>{
    return    (

            <div className={style.dialog}>{props.title}</div>

        )

}