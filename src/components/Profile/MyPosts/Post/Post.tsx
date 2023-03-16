import React from 'react';
import style from './Post.module.css'

 export type PostPostType={
    message:string;
    likesCount:number
 }
export const Post:React.FC<PostPostType>=(props)=>{
    return   (
        <div className={style.item}>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMO5PdKVIgtVCi8-psbn4_29y-BbgKjm42yg&usqp=CAU'/>
            {props.message}

        <div>
            <span>like</span>{props.likesCount}
        </div>
        </div>)

}