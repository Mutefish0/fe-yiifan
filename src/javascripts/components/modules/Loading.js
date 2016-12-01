import React from 'react'

class Loading extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      flash: true
    }

    this.texts = [
      'L',
      'Lo',
      'Loa',
      'Load',
      'Loadi',
      'Loadin',
      'Loading',
      'Loadin',
      'Loadi',
      'Load',
      'Loa',
      'Lo',
      ''
    ]
    this.durations = [
      800,
      900,
      900,
      1800,
      600,
      600,
      600,
      300,200,200,100,100,200
    ]

    this.maxFrame = this.texts.length

    this.frame = 0
    this.timeout
  }

  componentDidMount() {
    this.change()
  }

  change() {
    let duration = this.durations[this.frame]
    this.refs.text.innerHTML = this.texts[this.frame]
    this.timeout = setTimeout(this.change.bind(this), duration)
    this.setState({flash: duration > 800})
    this.frame = (this.frame + 1) % this.maxFrame
  }

  componentWillUnmount() {
    clearTimeout(this.timeout)
  }

  render(){
    return (
      <div className="module-loading">
        <div className="text-wrap">
          <span ref="text">L</span>
          <span
            ref="cursor"
            className={`cursor ${this.state.flash && 'module-loading-cursor-flash' || ''}`}
          >
          </span>
        </div>
        <img className="bar" src="/images/loading-cylon.svg" />
      </div>
    )
  }
}

export default Loading
