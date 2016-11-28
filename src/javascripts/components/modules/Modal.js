import React from 'react'

function browserWidth() {
  return window.innerWidth
}

function browserHeight() {
  return window.innerHeight
}

class Modal extends React.Component {
  static defaultProps = {
    closeReceiver: _ => _,
    openReceiver: _ => _,
    shouldClose: false
  }

  constructor(props) {
    super(props)

    this.state = {
      show: false
    }

    this.onresize = this.onresize.bind(this)

    props.openReceiver(this.openModal.bind(this))
    props.closeReceiver(this.closeModal.bind(this))
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.shouldClose) this.closeModal()
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onresize)
  }

  onresize() {
    this.forceUpdate()
  }

  openModal() {
    this.refs.overlay.style.zIndex = 1000
    window.addEventListener('resize', this.onresize)
    this.setState({show: true})
  }

  closeModal() {
    setTimeout(_ => {
      this.refs.overlay.style.zIndex = -1000
    }, 500)
    window.removeEventListener('resize', this.onresize)
    this.setState({show: false})
  }

  render() {
      let renderEntry
      if(this.props.component)
        renderEntry = (<this.props.component close={this.closeModal.bind(this)} />)
      else if(this.props.children)
        renderEntry = this.props.children
      return (
        <div
          ref='overlay'
          style={{height: browserHeight(), width: browserWidth()}}
          className={`module-modal module-modal-${this.state.show? 'show': 'hide'}`}
        >
          {renderEntry}
        </div>
    )
  }
}

export default Modal
