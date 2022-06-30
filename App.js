import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Vibration,
} from 'react-native';
import Constants from 'expo-constants';
import { colors, spacing } from './src/utils/anmarStyls';
import Focus from './src/features/Focus';
import Timer from './src/features/Timer';

// or any pure javascript modules available in npm
import Title from './src/components/Title';

export default function App() {
  const [currentSubject, setCurrentSubject] = useState(null);
  const [focusList, setFocusList] = useState([]);

  

  const ONE_SECOND_IN_MS = 1000;
  const PATTERN = [
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
    1 * ONE_SECOND_IN_MS,
  ];
  return (
    <SafeAreaView style={styles.container}>
      {!currentSubject ? (
        <Focus addSubject={setCurrentSubject} focusList={focusList} />
      ) : (
        <Timer
          focusSubject={currentSubject}
          onTimerEnd={(focusSubject) => {
            //Vibration.vibrate(PATTERN);
            // this mean to take old array and push new item
            setFocusList([...focusList,focusSubject])
            
          }}
          clearSubject={() => {
            setCurrentSubject(null);
          }}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, //when using safeareaview you have to add flex:1 and anything afetr will not work in ios howver safearea is not functional in android
    paddingTop:
      Platform.OS === 'android' ? StatusBar.currentHeight : spacing.xxxl, // the 80 here will reflect only on other devices
    backgroundColor: colors.darkBlue,
  },
});
