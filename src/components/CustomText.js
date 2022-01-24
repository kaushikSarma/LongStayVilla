import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export const LocationText = ({ textValue, textStyle, containerStyle }) => {
	return (
		<View style={[containerStyle, { flexDirection: 'row', alignItems: 'center' }]}>
			<Icon name='location-sharp' size={20} />
			<Text style={textStyle}>{textValue}</Text>
		</View>
	);
}