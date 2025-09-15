import { Component } from "react";
//import PropTypes from 'prop-types';

export default class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.handleSelfClick = this.handleSelfClick.bind(this);
    }

    render() {
        const { item, test } = this.props;
        return (
            <div
                onClick={this.handleSelfClick}
            >
                {test} - {item}
            </div>
        )
    }

    handleSelfClick() {
        const { clickFun, index } = this.props;
        clickFun(index);
        console.log('TodoItem::click myself')
    }
}

//参数类型约束
// TodoItem.propTypes = {
//     key: PropTypes.number,
//     test: PropTypes.string.isRequired,
//     index: PropTypes.number,
//     item: PropTypes.string,
//     clickFun: PropTypes.func
// }

//默认参数值
// TodoItem.defaultProps = {
//     test: 'hello world'
// }