import React from 'react';
import { View, Text, Image } from 'react-native';
import { CURRENCY_USD } from '../resources/CommonConstants';
import { LocationText } from './CustomText';

export default BookingDetails = ({
	// dataProps
	price: pricePerDay,
	checkinDate,
	checkoutDate,
	location,
	imageSource,
	numberOfDays,
	description,
	// styleProps
	containerStyle
}) => {
	const totalPrice = numberOfDays * pricePerDay;
	return (
		<View style={[BookingDetailsStyle.containerStyle, containerStyle]}>
			<Image source={imageSource} style={[{
				width: '100%',
				height: 200
			}, BookingDetailsStyle.marginBottom20]} />
			<Text style={[BookingDetailsStyle.marginBottom20]}>{description}</Text>
			<Text style={[BookingDetailsStyle.marginBottom20]}>{`Price: ${CURRENCY_USD}${pricePerDay}/Per Day   Total: ${CURRENCY_USD}${totalPrice}`}</Text>
			<View style={[BookingDetailsStyle.footerContainer]}>
				<View style={{flex: 1}}>
					<Text style={[BookingDetailsStyle.marginBottom20]}>{`Check In Date: ${checkinDate}`}</Text>
					<Text>{`Check Out Date: ${checkoutDate}`}</Text>
				</View>
				<LocationText textValue={location} />
			</View>
		</View>
	);
}

const BookingDetailsStyle = {
	containerStyle: {
		width: '100%'
	},
	marginBottom20: {
		marginBottom: 20
	},
	imageStyle: {

	},
	descriptionTextStyle: {
		
	},
	priceTextStyle: {

	},
	dateTextStyle: {

	},
	footerContainer: {
		flexDirection: 'row',
		alignItems: 'flex-end'
	}
}