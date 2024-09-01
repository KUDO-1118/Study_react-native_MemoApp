import { View, Text, ScrollView, StyleSheet } from 'react-native'
import { router } from 'expo-router'

import Header from '../../components/Header'
import CircleButton from '../../components/CircleButton'
import Icon from '../../components/icon'

const handlePress = (): void => {
  router.push('/memo/edit')
}

const Detail = (): JSX.Element => {
  return (
    <View>
      <Header />
      <View style={styles.memoMeader}>
        <Text style={styles.memoTitle}>買い物リスト</Text>
        <Text style={styles.memoDate}>2023年12月23日</Text>
      </View>
      <ScrollView style={styles.memoBody}>
        <Text style={styles.memoBodyText}>
          買い物リスト
          ・米
          ・にく
          ・おみす
          ・カレー粉
          ・スパイスああああああああああああああああああああ
        </Text>
      </ScrollView>
      <CircleButton onPress={handlePress} style={{ top: 160, bottom: 'auto' }}>
        <Icon name='pencil' size={40} color='#ffffff' />
      </CircleButton>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  memoMeader: {
    backgroundColor: '#467FD3',
    height: 96,
    justifyContent: 'center',
    paddingVertical: 24,
    paddingHorizontal: 19
  },
  memoTitle: {
    color: '#ffffff',
    fontSize: 20,
    lineHeight: 32,
    fontWeight: 'bold'
  },
  memoDate: {
    color: '#ffffff',
    fontSize: 12,
    lineHeight: 16
  },
  memoBody: {
    paddingVertical: 32,
    paddingHorizontal: 27
  },
  memoBodyText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#000000'
  }
})

export default Detail