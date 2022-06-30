import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {
  colors,
  title,
  textInput,
  spacing,
  fontSizes,
} from '../utils/anmarStyls';
import { Countdown } from '../components/Countdown';
import Title from '../components/Title';
import { RoundedButton } from '../components/RoundedButton';
import { ProgressBar } from 'react-native-paper';

export default function Timer({ focusSubject, onTimerEnd, clearSubject }) {
  const [isPaused, setPause] = useState(true);
  const [btnTitle, setBtnTitle] = useState('start');
  const [progress, setProgress] = useState(0);
  const [minutes, setMin] = useState(0.5);
  const btnSize = 100;
  
  const resetVal = (reset)=>
  {
    
    setPause(true);
    onTimerEnd(focusSubject);
    reset()
    
    
  }
  

  useEffect(() => {
    setBtnTitle(isPaused ? 'Start' : 'Pause');
  }, [isPaused]);

  
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Title
          styles={{
            color: colors.white,
          
            fontWeight: 'bold',
            fontSize: fontSizes.xl,
            
           
          }}>{`Focusing on ${focusSubject}`}</Title>
      </View>
      <View style={styles.countdown}>
        <Countdown
          style={styles.countdown}
          minutes={minutes}
          isPaused={isPaused}
          onProgress={setProgress}
          onEnd={resetVal}
        />
      </View>
      <View style={styles.title}>
        <Title
          styles={{
            color: colors.white,
          
            fontWeight: 'bold',
            fontSize: fontSizes.lg,
          }}>
          Select Time
        </Title>
      </View>

      <View style={styles.buttonWraper1}>
        <RoundedButton
          title={0.5}
          onPress={() => {
            setMin(0.5);
          }}
          size={btnSize}
          style={{ backgroundColor: (minutes === 0.5) ? (colors.transBlue) : (colors.darkBlue) }}
        />
        <RoundedButton
          title={1}
          onPress={() => {
            setMin(1);
          }}
          size={btnSize}
           style={{ backgroundColor: (minutes === 1) ? (colors.transBlue) : (colors.darkBlue) }}
        />
        <RoundedButton
          title={2}
          onPress={() => {
            setMin(2);
          }}
          size={btnSize}
           style={{ backgroundColor: (minutes === 2) ? (colors.transBlue) :  (colors.darkBlue) }}
        />
      </View>
      <View style={styles.buttonWraper2}>
        <RoundedButton
          title={btnTitle}
          onPress={() => {
            setPause(!isPaused);
          }}
          size={btnSize + 50}
          style={{ backgroundColor: 'green' }}
        />
        <RoundedButton
          title={'Cancel'}
          onPress={() => {
            clearSubject();
          }}
          size={btnSize + 50}
          style={{ backgroundColor: 'red' }}
        />
      </View>
      <View style={styles.progressbar}>
        <ProgressBar progress={progress} color={colors.red} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    flex: 0.08,
    justifyContent: 'center',
    alignItems: 'center',
    //  backgroundColor:'yellow'
  },

  countdown: {
    flex: 0.2,
    alignItems: 'center',
    justifyContent: 'center',
    //  backgroundColor:'green'
  },
  buttonWraper1: {
    flex: 0.17,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    // backgroundColor:'red',
  },
  buttonWraper2: {
    flex: 0.2,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    // backgroundColor:'pink'
  },

  progressbar: {
    flex: 0.05,
    justifyContent: 'center',
    // backgroundColor:'black'
  },
});
