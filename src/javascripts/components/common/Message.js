import React from 'react'
import { connect } from 'react-redux'

function browserHeight() {
  return window.innerHeight
}

class Message extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      stage: 'sleep',
      message: {
        msg: '',
        style: 'success'
      }
    }
    this.busy = false
    this.queue = []
  }

  computeDivision() {
    let divs = this.queue.length * this.queue.length / 2  + 1.5
    if(divs > 8) divs = 8
    return divs
  }

  awaken() {
    this.refs.self.style.display = 'block'
    this.setState({ stage: 'awake', message: this.queue[0] })
    this.busy = true
    setTimeout(
      this.sleep.bind(this),
      3000 / this.computeDivision()
    )
  }

  sleep() {
    this.setState({ stage: 'sleep' })
    setTimeout(
      this.clearComp.bind(this),
      1000 / this.computeDivision()
    )
  }

  clearComp() {
    this.refs.self.style.display = 'none'
    this.queue.shift()
    if(this.queue.length)
      this.awaken()
    else this.busy = false
  }

  componentWillReceiveProps(nextProps) {
    this.queue.push(nextProps.message)
    if(!this.busy) this.awaken()
  }

  render() {
    return (
      <div className={[
              'common-message',
              `common-message-${this.state.stage}`,
              `common-message-${this.state.message.style}`
              ].join(' ')
            }
          ref="self"
          style={{
            top: browserHeight() - 72
          }}
      >
        { this.state.message.msg }
      </div>
    )
  }

}

export default connect(state => ({ message: state.message }))(Message)
