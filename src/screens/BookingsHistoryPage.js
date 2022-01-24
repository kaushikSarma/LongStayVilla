import React from 'react';
import { SafeAreaView, FlatList, TouchableOpacity, Text } from 'react-native';
import { useOritationChange } from './ScreenUtils';
import { LS_DARK_RED, LS_WHITE } from '../resources/ColorConstants';
import BookingDetails from '../components/BookingDetails';
import bookingList from '../resources/dummyData/bookingList';

export default BookingsHistoryPage = () => {
	const { dimension } = useOritationChange();

	const renderBookingHistoryItem = (data) => {
		return (
			<BookingDetails {...data.item} containerStyle={BookingsHistoryPageStyles.bookingCardStyle} />
		);
	}
	return (
		<SafeAreaView style={{height: dimension.height - 50, paddingVertical: 8 }}>
			<FlatList
				contentContainerStyle={BookingsHistoryPageStyles.bookingsListContainerStyle}
				data={bookingList}
				renderItem={renderBookingHistoryItem}
				keyExtractor={(_item, index) => `villa-${index.toString()}`}
				scrollEnabled
			/>
			<TouchableOpacity style={BookingsHistoryPageStyles.moreButtonStyle}>
				<Text style={BookingsHistoryPageStyles.moreButtonTextStyle}>Book More</Text>
			</TouchableOpacity>
		</SafeAreaView>
	);
}

const BookingsHistoryPageStyles = {
	appBarStyle: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingBottom: 10
	},
	bookingsListContainerStyle: {
		flexGrow: 1,
		overflow: 'hidden',
		paddingHorizontal: 8,
	},
	bookingCardStyle: {
		marginBottom: 30
	},
	logoutButtonStyle: {
		marginTop: 40
	},
	logoutButtonTextStyle: {
		color: LS_DARK_RED
	},
	moreButtonStyle: {
		backgroundColor: LS_DARK_RED,
		alignItems: 'center',
		paddingVertical: 20,
		paddingHorizontal: 40,
		position: 'absolute',
		bottom: 30,
		// TODO: apply transform through calculations instead of hard coding value
		transform: [{ translateX: -70}],
		left: '50%',
		borderRadius: 50,
		elevation: 10,
	},
	moreButtonTextStyle: {
		color: LS_WHITE,
		fontWeight: 'bold'
	}
};