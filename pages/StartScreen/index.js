import React from 'react';
import {View, Text} from 'react-native';
// import {Button} from 'native-base';
import {styles} from './styles';
import LottieView from 'lottie-react-native';
import {Button, Divider} from '../../Component';
import {secondaryColor} from '../../Utils';

export default (props) => {
  const {navigation} = props;
  return (
    <View style={styles.mainView}>
      <View style={styles.centerElement}>
        <View>
          <Text style={[styles.bigText, {color: secondaryColor}]}>
            Name The Fame
          </Text>
          <Divider />
          <Text style={styles.instruction}>
            Remember the name of famous person from history
          </Text>
        </View>

        <View style={styles.animationBox}>
          <LottieView
            source={require('../../assets/Animations/astro.json')}
            autoPlay
            loop
            style={styles.animation}
          />
        </View>

        <Button onPress={() => navigation.navigate('LevelOne', {level: 1})}>
          Start
        </Button>
      </View>
    </View>
  );
};
