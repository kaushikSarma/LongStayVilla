import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { LS_LIGHT_GREY } from '../resources/ColorConstants';

export default UserProfile = ({
	userName,
	userEmail,
	userImage
}) => {
	return (
		<View style={UserProfileStyles.profileCardContainerStyle}>
			<Image style={UserProfileStyles.profileImageStyle} source={userImage} />
			<View style={UserProfileStyles.profileDetailsContainer}>
				<Text style={UserProfileStyles.profileTitleTextStyle}>{userName}</Text>
				<Text style={UserProfileStyles.profileSubtitleTextStyle}>{userEmail}</Text>
				<TouchableOpacity style={UserProfileStyles.editButtonStyle}>
					<Text>EDIT PROFILE</Text>
				</TouchableOpacity>
			</View>
		</View>
	)
}

const UserProfileStyles = {
	profileCardContainerStyle: {
		flexDirection: 'row',
		alignItems: 'center',
		// borderColor: 'red', borderWidth: 1
	},
	profileImageStyle: {
		marginLeft: 10,
		height: 120,
		width: 120,
		borderRadius: 200,
		borderWidth: 1,
		borderColor: LS_LIGHT_GREY
	},
	profileDetailsContainer: {
		padding: 20,
		alignItems: 'flex-start'
	},
	profileTitleTextStyle: {
		fontSize: 35,
		fontWeight: 'bold'
	},
	profileSubtitleTextStyle: {
		fontSize: 16,
		marginTop: 10
	},
	editButtonStyle: {
		marginTop: 15,
		paddingVertical: 10,
		paddingHorizontal: 20,
		borderRadius: 50,
		borderColor: LS_LIGHT_GREY,
		borderWidth: 2,
	}
}