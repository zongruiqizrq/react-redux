import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Tooltip } from "antd";

import "./style.scss";
class Counter extends React.Component {

  render() {
    return (
      <div className='big-box'>
        <div className="page">
          <h1 className="title">计数器</h1>
          <h1 className="num">{this.props.a}</h1>
          <div className="box">
            <button
              className="btn"
              onClick={() => {
                this.props.add();
              }}
            >
              加1
            </button>
            <button
              className="btn"
              onClick={() => {
                this.props.minus();
              }}
            >
              减1
            </button>
          </div>
          <Link to="/todolist">
            <Tooltip placement="top" title={"to todolist"}>
              <div className="jump">todoList</div>
            </Tooltip>
          </Link>
        </div>
      </div>
    );
  }
}
export default connect(
  ({ counterReducer }) => ({
    a: counterReducer.a
  }),
  dispatch => ({
    add() {
      dispatch({ type: "ADD" });
    },
    minus() {
      dispatch({ type: "MINUS" });
    }
  })
)(Counter);
