import Taro, { Component } from '@tarojs/taro'
import { View, Text,Button } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { add, minus, asyncAdd } from '../../actions/counter'

import './index.less'


const mapState = ({counter}) => ({
  counter
})
const mapDispatch = (dispatch) => ({
  add: () => dispatch(add()),
  minus: () => dispatch(minus()),
  asyncAdd: () => dispatch(asyncAdd()),
})

@connect(mapState, mapDispatch)
class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  constructor(props) {
    super(props)
    console.log('constructor')
  }

  componentWillMount () {
    console.log('componentWillMount');
  }

  componentDidMount () {
    console.log('componentDidMount')
  }

  componentWillReceiveProps (nextProps) {
    console.log('current props: ', this.props.counter)
    console.log('nextProps: ', nextProps.counter)
  }

  componentWillUnmount () {
    console.log('componentWillUnmount')
  }

  componentDidShow () {
    console.log('componentDidShow')
  }

  componentDidHide () {
    console.log('componentDidHide')
  }

  render () {
    return (
      <View className='index'>
        <Text className='text-center'>{this.props.counter.num}</Text>
        <Button className='btn-max-w' plain type='primary' onClick={this.props.add}>+</Button>
        <Button className='btn-max-w' plain type='primary' onClick={this.props.minus}>-</Button>
        <Button className='btn-max-w' plain type='primary' onClick={this.props.asyncAdd}>asyncAdd</Button>
        <Button 
          className='btn-max-w' 
          plain 
          type='primary' 
          onClick={
            () => Taro.redirectTo({
              url: '/pages/userInfo/index'
            })
          }
        >跳转</Button>
      </View>
    )
  }
}

export default Index


