import React, {Component} from 'react';
export default class TodoItems extends Component{
    constructor(props){
        super(props);
    }
    createTasks(item){
        return(
            <li key={item.key}>{item.text}</li>
          );  
    }
    render(){
        var todoEntries=this.props.entries;
        var listItems=todoEntries.map(this.createTasks);
        return(
            <ul className="theList">
                {listItems}
            </ul>
        );
    }
}