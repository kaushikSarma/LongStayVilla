import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { LS_DARK_RED, LS_WHITE } from '../resources/ColorConstants';
import { LocationText } from './CustomText';

const CURRENCY_SYM = '$';

export default PropertyCard = ({
	description,
	price,
	location,
	imageSource,
	cardContainerStyle,
	isMinimalView
}) => {
	if(isMinimalView) {
		return (
			<View style={[cardContainerStyle]}>
				<Image source={imageSource} style={PropertyCardMinStyles.imageStyle} />
			</View>
		);
	}
	return (
		<View style={[PropertyCardStyles.cardContainerStyle, cardContainerStyle]}>
			{imageSource && <Image
				source={imageSource}
				style={PropertyCardStyles.isMinimalView}
			/>}
			<Text style={PropertyCardStyles.descriptionTextStyle}>{description}</Text>
			<Text style={PropertyCardStyles.priceTextStyle}>{`${CURRENCY_SYM}${price}`}</Text>
			<View style={PropertyCardStyles.cardFooterContainerStyle}>
				<LocationText textValue={location} />
				<View style={{ flex: 1 }}></View>
				<TouchableOpacity style={PropertyCardStyles.buttonStyle}><Text style={PropertyCardStyles.buttonTextStyle}>MORE</Text></TouchableOpacity>
				<TouchableOpacity style={PropertyCardStyles.buttonStyle}><Text style={PropertyCardStyles.buttonTextStyle}>Book Villa</Text></TouchableOpacity>
			</View>
		</View>
	);
}

const PropertyCardMinStyles = {
	imageStyle: {
		height: 200,
		width: '100%'
	}
}
const PropertyCardStyles = {
	cardContainerStyle: {
		paddingBottom: 8
	},
	imageStyle: {
		height: 200,
		width: '100%',
		borderWidth: 2,
		borderColor: 'black'
	},
	descriptionTextStyle: {
		fontSize: 14,
		marginHorizontal: 8,
		marginTop: 8
	},
	priceTextStyle: {
		marginHorizontal: 8,
		color: LS_DARK_RED
	},
	cardFooterContainerStyle: {
		paddingHorizontal: 8,
		flexDirection: 'row',
		alignItems: 'center'
	},
	buttonStyle: {
		backgroundColor: LS_DARK_RED,
		paddingVertical: 5,
		paddingHorizontal: 15,
		marginRight: 5,
		borderRadius: 20
	},
	buttonTextStyle: {
		color: LS_WHITE
	}
}