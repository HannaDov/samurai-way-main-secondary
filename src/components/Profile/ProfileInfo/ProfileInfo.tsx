import React from 'react';
import style from './ProfileInfo.module.css'

type ProfileInfoPropsType={

}

export const ProfileInfo=()=>{
    return  <div>
        <div>
            <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8IyuERXQkWv3yJLMCPUD_e3Dw6HBBi0l4fA&usqp=CAU'/>
        </div>
        <div className={style.descriptionBlock}>ava+discription</div>

    </div>
}