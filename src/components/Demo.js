import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

class Demo extends Component {
  config = {
    navigationBarTitleText: 'demo'
  }
  render () {
    return (
      <View className='index'>
        <Text>Hello world!</Text>
      </View>
    )
  }
}

export default Demo