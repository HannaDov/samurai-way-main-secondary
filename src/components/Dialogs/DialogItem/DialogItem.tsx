import React from 'react';
import style from './Dialogs.module.css';
import {NavLink} from 'react-router-dom'

type DialogItemPropsType={
    name:string;
    id:number
}
export const DialogItem:React.FC<DialogItemPropsType>=(props)=>{
    return(
        <div className={style.dialog + ' ' + style.active}>
            <NavLink to={'dialogs/' + props.id} >{props.name}</NavLink>
        </div>

    )

}