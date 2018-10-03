import React, {Component} from 'react';
import TodoItems from './TodoItems';
export default class ToDoList extends Component{
    constructor(props){
        super(props);
        this.state={
            items:[],
        }
    }
    addItem(e){
        var itemArray=this.state.items;
        itemArray.push({
            text:this._inputElement.value,
            key:Date.now()
        });
        this.setState({
            items:itemArray
        });
        this._inputElement.value="";
        this._inputElement.focus();
        e.preventDefault();
    }
    render(){
        return(
            <div className="todoListMain">
                <div className="header">
                    <form onSubmit={this.addItem.bind(this)}>
                        <input 
                        ref={
                            (a)=>{
                                this._inputElement=a;
                            }
                        }
                        placeholder="请输入一个任务"/>
                        <button type="sumit">添加</button>      
                    </form>
                </div>
                <TodoItems entries={this.state.items}/>
            </div>
        );
    }
}