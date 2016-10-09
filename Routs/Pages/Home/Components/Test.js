import React from "react";
import {Motion, spring} from 'react-motion';




function SVGLineIcon(props) {
  let wrapperStyle = {
    cursor: 'pointer'
  }

  let innerStyle = {
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '3',
    strokeLinecap: 'round',
    strokeLinejoin: 'round'
  }

  return (
    <svg style={wrapperStyle} height="50px" width="50px" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
      <g style={innerStyle}>
        {props.children}
      </g>
    </svg>
  )
}

function ToggleButton(props) {
  const TOTALLENGTH = 176.881
  const CIRCLELENGTH = 135.696
  const CHECKEDLENGTH = -41.185

  let motionProps = {
    defaultStyle: {
      offset: -TOTALLENGTH
    },
    style: {
      offset: props.active ?
        spring(CIRCLELENGTH, {stiffness: 60, damping: 11}) :
        spring(CHECKEDLENGTH, {stiffness: 120, damping: 13.8})
    }
  }

  return (
    <SVGLineIcon>
      <Motion {...motionProps} >
        { ({ offset }) =>
          <path
            style={{
              strokeDasharray: `${TOTALLENGTH} ${TOTALLENGTH}`,
              strokeDashoffset: offset
            }}
            d="M44.5,25H3.4C3.7,13.3,13.2,3.4,25,3.4C37,3.4,46.6,13,46.6,25S37,46.6,25,46.6C13.2,46.6,3.6,36.7,3.4,25"
          />
        }
      </Motion>
    </SVGLineIcon>
  )
}


export default class Test extends React.Component {
  constructor() {
  super()
  this.state = {
    active: true
  }
}

get style() {
  return {
    fontSize: '6em',
    position: 'absolute'

  }
}

handleToggle() {
    this.setState({
      active: !this.state.active
    })
  }
  handleTouchStart(e) {
    e.preventDefault();
    this.handleToggle();
  }

render() {
  return (
    <span style={this.style}
          onMouseDown={this.handleToggle.bind(this)}
          onTouchStart={this.handleTouchStart.bind(this)}>
          <ToggleButton active={this.state.active} />
    </span>
  )
}
}
