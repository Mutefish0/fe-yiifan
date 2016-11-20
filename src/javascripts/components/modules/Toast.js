import React from 'react'

class Toast extends React.Component {

  static defaultProps = {
    toastReceiver: _ => _,
    duration: 1500,
    beforeToast: _ => _,
    afterToast: _ => _
  }

  constructor(props) {
    super(props)

    this.state = {
      show: false
    }

    this.closeToast = this.closeToast.bind(this)
    this.toast = this.toast.bind(this)

    props.toastReceiver(this.toast)
  }

  toast(param) {
    this.props.beforeToast(param)
    this.setState({show: true, param})
    setTimeout(_ => this.closeToast(param), this.props.duration)
  }

  closeToast(param) {
    this.setState({show: false})
    setTimeout(_ => this.props.afterToast(param), 400)
  }

  render() {
    return(
      <div
        className={
          `${this.props.className}
          module-toast
          module-toast-${this.state.show? 'show': 'hide'}`
        }
      >
       {<this.props.component param={this.state.param}/>}
      </div>
    )
  }
}

export default Toast
