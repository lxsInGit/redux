import React,{Component} from 'react';
import {connect} from 'react-redux';
import {fetchMiaoshaData} from '../../actions'

class Main extends Component{
    componentDidMount(){
        
        this.props.dispatch(fetchMiaoshaData()) //注意发送的是函数,别漏了()
        // this.fetchMiaoshaData
    }
    render(){
        return <div>
            首页
        </div>
    }
}

const mapStateToProps=(state)=>{
    const miaoshaList=state.qcsdata.miaoshaList||[];
    return {miaoshaList}
}

export default connect(mapStateToProps)(Main);