import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { useOritationChange } from './ScreenUtils';
import UserProfile from '../components/UserProfile';
import Menu from '../components/Menu';

export default LocationsPage = () => {
	const { dimension } = useOritationChange();

	const renderCurrentUserProfile = () => {
		return (
			<UserProfile
				userName='Jane Doe'
				userEmail='jannedoe123@email.com'
			/>
		);
	};

	const renderMenu = () => {
		const menuOptions = [
			{
				title: 'All My Booking'
			},
			{
				title: 'Pending Visits'
			},
			{
				title: 'Pending Payments'
			},
			{
				title: 'Feedback'
			}
		]
		return (
			<Menu type='profile' menuOptions={menuOptions} />
		);
	};

	return (
		<SafeAreaView style={{height: dimension.height - 50}}>
			<ScrollView style={{height: dimension.height - 50, paddingHorizontal: 20, paddingVertical: 8, overflow: 'hidden'}}>
				{renderCurrentUserProfile()}
				{renderMenu()}
			</ScrollView>
		</SafeAreaView>
	);
}

const ProfilePageStyles = {
	resultCardStyle: {
		marginBottom: 10
	},
	appBarStyle: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingBottom: 10
	},
};