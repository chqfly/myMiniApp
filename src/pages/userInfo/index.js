import Taro from '@tarojs/taro'
import { View, Text,Button } from '@tarojs/components'
import LifeCycle from '../../components/LifeCycle'

class UserInfo extends LifeCycle {

  componentName = 'UserInfo'

  config = {
    navigationBarTitleText: 'userInfo'
  }

  onBack() {
    // Taro.navigateTo({
    //   url: '/pages/index/index'
    // })

    const pages = Taro.getCurrentPages()
    const prePage = pages[pages.length - 2] // 上一个页面的实例
    prePage.data.add() // 调用上个页面的方法
    Taro.navigateBack()
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
