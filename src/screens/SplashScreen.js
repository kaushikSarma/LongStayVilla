import React from 'react';
import {
  SafeAreaView,
  Image,
  Text,
  View,
  TouchableHighlight
} from 'react-native';
import { LS_DARK_RED, LS_WHITE } from '../resources/ColorConstants';
import { COVER_IMAGE } from '../resources/ImageConstants';

const EntryScreen = ({ onContinue }) => {
  return (
    <SafeAreaView style={SplashScreenStyles.pageContainer}>
      <Text style={SplashScreenStyles.pageHeaderText}>LongStay Villa</Text>
      <View style={{flex: 1}}>
        <Image style={{ height: '100%' }} source={COVER_IMAGE}></Image>
      </View>
      <View style={SplashScreenStyles.pageFooter}>
        <TouchableHighlight style={SplashScreenStyles.pageFooterButton} onPress={onContinue}>
          <Text style={{ color: LS_WHITE }}>GET STARTED</Text>
        </TouchableHighlight>
      </View>
    </SafeAreaView>
  );
}

const SplashScreenStyles = {
  pageContainer: { alignItems: 'center', flex: 1 },
  pageHeaderText: { fontSize: 55, fontWeight: 'bold', color: LS_DARK_RED },
  pageFooter: { width: '100%', alignItems: 'flex-end', paddingVertical: 20 },
  pageFooterButton: { backgroundColor: LS_DARK_RED, paddingHorizontal: 20, paddingVertical: 20, borderTopLeftRadius: 40,  borderBottomLeftRadius: 40 }
};

export default EntryScreen;