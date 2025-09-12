import React, { Component, Fragment } from 'react';
import TodoItem from './TodoItem'
import './style.css'

export default class TodoList extends Component{

    constructor(props) {
        super(props);
        this.state = {
            inputValue: 'hello',
            list: []
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this);
        this.getTodoItem = this.getTodoItem.bind(this);
    }

    render(){
        return(
            <Fragment>
                <div>
                    {
                        // 下面是一个input框
                    }
                    <label htmlFor='inputArea'>输入内容</label>
                    <input 
                    id = 'inputArea'
                    className = 'input'
                    value = { this.state.inputValue } 
                    onChange = { this.handleInputChange }
                    />
                    <button onClick = { this.handleBtnClick }>提交</button>
                </div>
                <ul>
                   { this.getTodoItem() }
                </ul>
            </Fragment>
        )
    }
    
    getTodoItem () {
        return this.state.list.map((item, index) => {
            return (
            <TodoItem
                key = {index}
                index = {index} 
                item = {item} 
                clickFun = { this.handleItemDelete }/>
            )
        })
    }

    handleInputChange(e) {
        const value = e.target.value;
        this.setState(()=>{
            return {
                inputValue: value
            }
        })
    }

    handleBtnClick() {
        this.setState(()=>{
            const list = [...this.state.list, this.state.inputValue];
            return {
                list,
                inputValue: ''
            }
        })
    }

    handleItemDelete(index){
        this.setState((prevState)=>{
            const list = [...prevState.list];
            list.splice(index, 1);
            return {
                list
            }
        })
    }
}