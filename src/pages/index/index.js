import Taro from '@tarojs/taro'
import { View, Text,Button } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { add, minus, asyncAdd } from '../../actions/counter'
import LifeCycle from '../../components/LifeCycle'
import Child from '../../components/Child'

const mapState = ({counter}) => ({
  counter
})
const mapDispatch = (dispatch) => ({
  add: () => dispatch(add()),
  minus: () => dispatch(minus()),
  asyncAdd: () => dispatch(asyncAdd()),
})

@connect(mapState, mapDispatch)
class Index extends LifeCycle {

  componentName = 'Index'

  config = {
    navigationBarTitleText: '首页'
  }
  
  componentWillReceiveProps (nextProps) {
    console.log('Index current props: ', this.props.counter)
    console.log('Index nextProps: ', nextProps.counter)
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
            () => Taro.navigateTo({
              url: '/pages/userInfo/index'
            })
          }
        >跳转</Button>

        <Child />
      </View>
    )
  }
}

export default Index


