import React from 'react';
import { SafeAreaView, Text, TouchableOpacity } from 'react-native';
import { useOritationChange } from './ScreenUtils';
import { LS_DARK_RED } from '../resources/ColorConstants';
import UserProfile from '../components/UserProfile';
import Menu from '../components/Menu';

export default LocationsPage = () => {
	const { dimension } = useOritationChange();

	const renderMenu = () => {
		const menuOptions = [
			{
				title: 'Booking Address'
			},
			{
				title: 'Payment Method'
			},
			{
				title: 'Currency'
			},
			{
				title: 'Language'
			}
		]
		return (
			<Menu type='profile' menuOptions={menuOptions} menuContainerStyle={{ width: '100%' }} />
		);
	};

	return (
		<SafeAreaView style={{height: dimension.height - 50, paddingHorizontal: 20, paddingVertical: 8, alignItems: 'center' }}>
			{renderMenu()}
			<TouchableOpacity style={MoreOptionsPageStyle.logoutButtonStyle}>
				<Text style={MoreOptionsPageStyle.logoutButtonTextStyle}>{'LOG OUT'}</Text>
			</TouchableOpacity>
		</SafeAreaView>
	);
}

const MoreOptionsPageStyle = {
	appBarStyle: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingBottom: 10
	},
	logoutButtonStyle: {
		marginTop: 40
	},
	logoutButtonTextStyle: {
		color: LS_DARK_RED
	}
};