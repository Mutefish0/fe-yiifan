import React from 'react'

function browserWidth() {
  return window.innerWidth
}

function browserHeight() {
  return window.innerHeight
}

class Modal extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      show: false
    }
    this.onresize = this.onresize.bind(this)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onresize)
  }

  onresize() {
    this.forceUpdate()
  }

  render() {
      return (
        <div>
          <span
            className={this.props.className}
            onClick = { e => {
              this.refs.overlay.style.zIndex = 1000
              window.addEventListener('resize', this.onresize)
              this.setState({show: true})
          }}
          >
            { this.props.children }
          </span>

          <div
            ref="overlay"
            style={{height: browserHeight(), width: browserWidth()}}
            className={`module-modal module-modal-${this.state.show? 'show': 'hide'}`}
          >
            {
              <this.props.component
                close={ e => {
                    setTimeout(_ => {
                      this.refs.overlay.style.zIndex = -1000
                    }, 500)
                    window.removeEventListener('resize', this.onresize)
                    this.setState({show: false})
                  }}
              />
            }
          </div>

        </div>
    )
  }
}

export default Modal
