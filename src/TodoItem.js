import { Component } from "react";

export default class TodoItem extends Component {
    constructor(props){
        super(props);
        this.handleSelfClick = this.handleSelfClick.bind(this);
    }

    render() {
        return (
            <div 
            onClick = {this.handleSelfClick} 
            dangerouslySetInnerHTML = {{__html: this.props.item}}
            >                            
            </div>
        )
    }

    handleSelfClick(){
        const { clickFun, index } = this.props;
        clickFun(index);
        console.log('TodoItem::click myself')
    }
}