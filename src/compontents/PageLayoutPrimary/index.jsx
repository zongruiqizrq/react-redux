import React from 'react'
import './style.scss'

export default class Showpictures extends React.Component {

  render() {
    return (
      <div
        className='tripe'
      >
        <div className='nav'>
            <span className='title'>redux</span>
        </div>
        <div className='content'>{this.props.children}</div>
        <div className='footer'>
        </div>
      </div>
    )
  }
}
