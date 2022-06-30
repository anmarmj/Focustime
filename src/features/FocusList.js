import { List } from 'react-native-paper';
import { View, StyleSheet , ScrollView } from 'react-native';
import { colors } from '../utils/anmarStyls';
import * as React from 'react';

export default function FocusList({ focusList }) {
  const [lbl, setLbl] = React.useState('anmar');
  let counter = 0;

  return (
    <ScrollView style={styles.container}>
      
      {focusList.map((item) => (
        <List.Item
          titleStyle={{ color: 'white' }}
          title={item}
          key= {item + counter++}
          left={(props) => (
            <List.Icon {...props} icon="check" color={colors.white} />
          )}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
