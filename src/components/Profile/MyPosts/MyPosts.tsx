import React, {ChangeEvent} from 'react';
import style from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {ActionsType, PostType} from "../../../redux/state";
import {addPostAC, changePostAC} from "../../../redux/reducer-profile";


type MyPostPropsType = {
    postData: PostType[]
    dispatch: (action: ActionsType) => void
    message: string
    /*  addPost: (postText: string) => void*/
    /*  changePost: (newText: string) => void*/

}
export const MyPosts = (props: MyPostPropsType) => {


    const addPostHandler = () => {
        /*props.addPost(props.message)*/
        props.dispatch(addPostAC(props.message))

    }
    const changePostHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        /* props.changePost(e.currentTarget.value)*/
        props.dispatch(changePostAC(e.currentTarget.value))
    }
    return <div className={style.postBlock}>
        <h3>My post</h3>
        <div>
            <div>
                <textarea value={props.message}
                          onChange={changePostHandler}/>
            </div>
            <div>
                <button onClick={addPostHandler}>Add post</button>
            </div>


        </div>
        <div className={style.posts}>My Posts
            <div/>
            {props.postData.map(el => <div key={el.id}><Post message={el.message} likesCount={el.likesCount}/></div>)}

        </div>

    </div>


}