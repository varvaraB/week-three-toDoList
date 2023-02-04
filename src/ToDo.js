import {Component} from 'react';
import check from './check.jpg';



export class ToDo extends Component {
    constructor(){
        super();
    
    this.state = {
    userInput:"",
    todoList: [],
    }
}

onChangeEvent(e) {
    this.setState({userInput:e})
}

addItem(input) {
    if (input===''){
        alert("Please, fill it the line.")
    }
    else {
    let whatToDo=this.state.todoList;
    whatToDo.push(input);
    this.setState({todoList: whatToDo, userInput:""})
    }
}

crossed=(event)=> {
    const li = event.target;
    li.classList.toggle('afterCrossed');
}

deleteItem(){
    let whatToDo=this.state.todoList;
    whatToDo=[];
    this.setState({todoList:whatToDo})
}

onFormSubmit(e){
    e.preventDefault();
}

render(){
    return(
        <div>
            <form onSubmit={this.onFormSubmit}>
        <div className='block'>
            <h2>What are you need to do?</h2>
        </div>
        <div className='block'>
            <input type="text"
            placeholder='What is your plans?' 
            onChange={(e) => {this.onChangeEvent(e.target.value)}} value={this.state.userInput} />
        </div>
        <div className='block'>
            <button onClick={() => this.addItem(this.state.userInput)} className="btn add"> Add </button>
        </div>
        <div className='block'>
            <ul>
                {this.state.todoList.map((item,index) => (<li key={index} onClick={this.crossed}> <img src={check} alt="check" className='image'/> {item} </li>))}
            </ul>
        </div>
        <div className='block'>
            <button onClick={() => this.deleteItem()} className="btn delete"> Done</button>
        </div>
        </form>
        </div>
    )
}

}

