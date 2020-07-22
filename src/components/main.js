import React ,{Component} from 'react';

class Main extends Component{
    render(){
        return (
            <div>
                <h1>计数器</h1>
                <button onClick={this.props.onIncrement}>++</button>
                <button onClick={this.props.onDecrement}>--</button>
                计数器的值是：{this.props.value}
            </div>

        )

    }
}

export default Main;