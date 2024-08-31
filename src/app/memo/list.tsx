import { View, StyleSheet } from 'react-native'

import Header from '../../components/Header'
import MemoListItem from '../../components/MemoListitem'
import CircleButton from '../../components/CircleButton'
import Icon from '../../components/icon'

const List = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Header />
      <View>
        <MemoListItem />
        <MemoListItem />
        <MemoListItem />
      </View>
      <CircleButton>
        <Icon />
      </CircleButton>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
    // justifyContent: 'center',
    // // justifyContentは上下
    // alignItems: 'center'
    // // alignItemsは左右
  },
})

export default List