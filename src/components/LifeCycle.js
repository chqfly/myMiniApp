import Taro, { Component } from '@tarojs/taro'

class LifeCycle extends Component {

  constructor(props) {
    super(props)
  }

  log = (value) => {
    console.log(this.componentName, value)
  }

  componentWillMount () {
    this.log('componentWillMount');
  }

  componentDidMount () {
    this.log('componentDidMount')
  }

  componentWillReceiveProps () {
    this.log('componentWillReceiveProps')
  }

  componentWillUpdate() {
    this.log('componentWillUpdate')
  }

  shouldComponentUpdate() {
    this.log('shouldComponentUpdate')
    return true
  }

  componentDidUpdate() {
    this.log('componentDidUpdate')
  }

  componentWillUnmount () {
    this.log('componentWillUnmount')
  }

  componentDidShow () {
    this.log('componentDidShow')
  }

  componentDidHide () {
    this.log('componentDidHide')
  }
}

export default LifeCycle