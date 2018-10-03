import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import Root from './Root';
const root = document.querySelector("#root");

ReactDOM.render(
    <AppContainer>
        <Root/>
    </AppContainer>,
        root
);

if(module.hot){
    module.hot.accept('./Root',()=>{
        const NewRoot=require('./Root').default;
        ReactDOM.render(
            <AppContainer>
                <NewRoot/>
            </AppContainer>,
             root
        )
    })
}
