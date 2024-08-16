import { View, Text, StyleSheet } from 'react-native'

interface Props {
  children: string
  bang?: boolean
  // bang?はオプションとして扱うので使っても使わなくても良い
}

const Hello = (props: Props): JSX.Element => {
  const { children, bang } = props
  return (
    <View>
      <Text style={styles.text}>
        Hello {children}{bang === true ? '!' : ''}
        {/* ===は等しいという意味 */}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    color: '#ffffff',
    backgroundColor: 'blue',
    fontSize: 40,
    fontWeight: 'bold',
    padding: 16
  }
})

export default Hello
