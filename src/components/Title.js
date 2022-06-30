import * as React from 'react';
import { Text, View, StyleSheet,Platform } from 'react-native';
import Constants from 'expo-constants';
import {colors,title,fontSizes,spacing} from '../utils/anmarStyls'



export default function Title({...props}) {
  return (
 
      <Text style={props.styles} >{props.children}</Text>

  );
}
  

