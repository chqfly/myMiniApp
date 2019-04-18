import Taro, { Component } from '@tarojs/taro'
import { View, Text,Button } from '@tarojs/components'
import '../index/index.less'

class UserInfo extends Component {

  config = {
    navigationBarTitleText: 'userInfo'
  }

  log = (value) => {
    console.log('UserInfo', value)
  }

  constructor(props) {
    super(props)
    
    this.log('constructor')
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

  componentWillUnmount () {
    this.log('componentWillUnmount')
  }

  componentDidShow () {
    this.log('componentDidShow')
  }

  componentDidHide () {
    this.log('componentDidHide')
  }

  onBack() {
    Taro.redirectTo({
      url: '/pages/index/index'
    })
  }

  render () {
    return (
      <View className='index'>
        <Text className='text-center'>userInfo page</Text>
        <Button onClick={this.onBack}>返回</Button>
      </View>
    )
  }
}

export default UserInfo
