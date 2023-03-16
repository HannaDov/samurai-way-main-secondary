import React from 'react';
import style from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionsType, PostType} from "../../redux/state";




type ProfilePropsType={
    postData:PostType[]
    dispatch:(action:ActionsType)=>void
    message:string
   /* changePost:(newText:string)=>void*/
    /*  addPost:()=>void*/
   }
export const Profile=(props:ProfilePropsType)=>{
    return  <div>
        <ProfileInfo/>
       <MyPosts postData={props.postData} /*addPost={props.addPost}*/ dispatch={props.dispatch} message={props.message}
                /*changePost={props.changePost}*//>
    </div>
}