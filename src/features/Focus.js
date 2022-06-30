import * as React from 'react';
import { Text, View, StyleSheet, Platform } from 'react-native';
import { TextInput } from 'react-native-paper';
import { colors, title, spacing, fontSizes } from '../utils/anmarStyls';
import FocusList from './FocusList';
import Title from '../components/Title';

export default function Focus({ addSubject, focusList }) {
  const [text, setText] = React.useState('');
  const [lbl, setLbl] = React.useState('');

  return (
    <View style={styles.container}>
      <View style={styles.textInput}>
        <TextInput
          label="What would you like to focus on?"
          value={text}
          onChangeText={setText}
          right={
            <TextInput.Icon name="plus" onPress={() => addSubject(text)} />
          }
        />
      </View>

      {focusList.length > 0 ? (
        <View style={styles.listItems}>
          <Title
            styles={{
              color: colors.white,
             
              fontWeight: 'bold',
              fontSize: fontSizes.lg,
            }}>
            {`Completed Focused list 👏`}
          </Title>

          <FocusList focusList={focusList} />
        </View>
      ) : (
        <View style={styles.listItems}>
          <Title
            styles={{
              color: colors.white,
             
              fontWeight: 'bold',
              fontSize: fontSizes.xl,
            }}>
            {`👆 Nothing here man ..start the jiggle`}
          </Title>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listItems: {
    
    flex: 0.5,
    justifyContent: 'top',
     padding: spacing.lg,
  },
  textInput: {
    padding: spacing.lg,
    justifyContent: 'top',
    color: colors.black,
  },
});
