import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import LifeCycle from './LifeCycle'
import '../app.less'

class Child extends LifeCycle {
  componentName = 'Child'

  config = {
    navigationBarTitleText: 'child'
  }

  render () {
    return (
      <View className='index'>
        <Text className='text-center'>child component</Text>
      </View>
    )
  }
}

export default Child