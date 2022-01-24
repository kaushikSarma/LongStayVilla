import React from 'react';
import { View, Text } from 'react-native';
import { LS_WHITE, LS_LIGHT_GREY } from '../resources/ColorConstants';

export default Menu = ({
	type,
	menuOptions,
	menuContainerStyle
}) => {
	return (
		<View style={[MenuStyles.menuContainerStyle, menuContainerStyle]}>
			{menuOptions.map((menuOption, index) => {
				return (
					<View key={`${type}-menu-${index}`} style={MenuStyles.menuItemStyle}>
						<Text>{menuOption.title}</Text>
					</View>
				);
			})}
		</View>
	);
};

const MenuStyles = {
	menuContainerStyle: {
		backgroundColor: LS_WHITE,
		borderRadius: 10,
		paddingVertical: 10,
		paddingHorizontal: 20,
		elevation: 20
	},
	menuItemStyle: {
		paddingVertical: 10,
		flexDirection: 'row',
		alignItems: 'center',
		borderBottomWidth: 1,
		borderColor: LS_LIGHT_GREY
	}
}