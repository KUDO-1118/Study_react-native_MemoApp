import { View, StyleSheet, FlatList } from 'react-native'
import { router, useNavigation } from 'expo-router'
import { useEffect, useState } from 'react'
import { collection, onSnapshot, query} from 'firebase/firestore'

import MemoListItem from '../../components/MemoListitem'
import CircleButton from '../../components/CircleButton'
import Icon from '../../components/icon'
import LogOutButton from '../../components/LogOutButton'
import { db, auth } from '../../config'
import { type Memo } from '../../../types/memo'

const handlePress = (): void => {
  router.push('/memo/create')
}

const List = (): JSX.Element => {
  const [memos, setMemos] = useState<Memo[]>([])//データを保持する
  const navigation = useNavigation()
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <LogOutButton />
      }
    })
  }, [])
  useEffect(() => {
    if (auth.currentUser === null) { return }
    const ref = collection(db, `users/${auth.currentUser.uid}/memos`)
    const q = query(ref)
    const unsubscribe = onSnapshot(q, (snapshot) => {
      // console.log('Snapshot size:', snapshot.size); // ドキュメントの数
      // console.log('Snapshot data:', snapshot.docs); // ドキュメントのデータ全体
      const remoteMemos: Memo[] = [] //一時保存
      snapshot.forEach((doc) => {
        console.log('memo', doc.data())
        const { bodyText, updateAt } = doc.data()
        // console.log('Memo data:', bodyText, updateAt)
        remoteMemos.push({//pushメソッドは配列にデータを１つ入れる
          id: doc.id,
          bodyText,
          updateAt
        })
      })
      setMemos(remoteMemos)
      // console.log('All memo list:', remoteMemos)
    })
    return unsubscribe
  }, [])

  return (
    <View style={styles.container}>
      <FlatList 
        data={memos}
        renderItem={({ item }) =>  <MemoListItem memo={item} />}//メモリストをスクロールできるようになる
      />
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