import React from 'react';
import './App.css';
import {Header} from './components/Header/Header'
import {Profile} from "./components/Profile/Profile";
import {NavBar} from "./components/NavBar/NavBar";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {Music} from "./components/Music/Music";
import {News} from "./components/News/News";
import {Setting} from "./components/Setting/Setting";
import {StoreType} from "./redux/state";


type AppPropsType = {
    store: StoreType

}

const App: React.FC<AppPropsType> = (props) => {
    const state = props.store.getState()
    return (
        <BrowserRouter>
            <div className="App-wrapper">
                <Header/>
                <NavBar/>
                <div className='App-wrapper-content'>
                    <Route path='/dialogs'
                           render={() => <Dialogs messageData={state.dialogPage.message}
                                                  dialogData={state.dialogPage.dialog}
                                                  dispatch={props.store.dispatch.bind(props.store)}
                                                  /*addMessage={props.store.addMessage.bind(props.store)}
                                                  changeMessage={props.store.changeMessage.bind(props.store)}*/
                                                  newMessageText={state.dialogPage.messageText}/>}/>
                    <Route path='/profile'
                           render={() => <Profile postData={state.profilePage.post}
                                                  dispatch={props.store.dispatch.bind(props.store)}
                                                  /*addPost={props.store.addPost.bind(props.store)}*/
                                                  message={state.profilePage.messageForNewPost}
                                                  /*changePost={props.store.changePost.bind(props.store)}*//>}/>
                    <Route path='/music'
                           render={() => <Music/>}/>
                    <Route path='/news'
                           render={() => <News/>}/>
                    <Route path='/settings'
                           render={() => <Setting/>}/>
                </div>

            </div>
        </BrowserRouter>


    );
}

export default App;
