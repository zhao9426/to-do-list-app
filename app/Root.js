import React, {Component} from 'react';
import ToDoList from './ToDoList';
export default class Root extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <ToDoList/>
        );
    }
}