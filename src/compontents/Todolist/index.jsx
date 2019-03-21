import React from 'react'
import { connect } from "react-redux";

import './style.scss'

 class Todolist extends React.Component {
    componentWillMount(){
      
    }
    render() {
        return <div className='page'>
            <ul>
                {this.props.state}
            </ul>
        </div>
    }
}
export default connect(

)(Todolist)