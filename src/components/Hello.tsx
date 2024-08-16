import { View, Text, StyleSheet, type TextStyle } from 'react-native'

interface Props {
  children: string
  bang?: boolean
  // bang?の?はオプションとして扱うので使っても使わなくても良い
  style?: TextStyle
}

const Hello = (props: Props): JSX.Element => {
  const { children, bang, style } = props
  return (
    <View>
      <Text style={[styles.text, style]}>
        {/* styleの上書きの優先順位は右から */}
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
