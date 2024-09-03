import { View, Text, StyleSheet } from 'react-native'
import { router, useNavigation } from 'expo-router'

import MemoListItem from '../../components/MemoListitem'
import CircleButton from '../../components/CircleButton'
import Icon from '../../components/icon'

const handlePress = (): void => {
  router.push('/memo/create')
}

const List = (): JSX.Element => {
  const navigation = useNavigation()
  navigation.setOptions({
    headerRight: () => {
      return <Text>Test</Text>
    }
  })
  return (
    <View style={styles.container}>
      <View>
        <MemoListItem />
        <MemoListItem />
        <MemoListItem />
      </View>
      <CircleButton onPress={handlePress}>
        <Icon name='plus' size={40} color='#ffffff' />
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