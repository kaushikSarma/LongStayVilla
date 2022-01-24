import React from 'react';
import { SafeAreaView, View, FlatList, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useOritationChange } from './ScreenUtils';
import { LS_LIGHT_GREY } from '../resources/ColorConstants';
import villaList from '../resources/dummyData/villaList';

export default LocationsPage = () => {
	const { dimension } = useOritationChange();

	const renderItem = (itemData) => {
		return <PropertyCard 
			isMinimalView
			cardContainerStyle={LocationsPageStyles.resultCardStyle}
			{...itemData.item} 
		/>;
	}
	return (
		<SafeAreaView style={{height: dimension.height - 50, paddingHorizontal: 8, paddingVertical: 8 }}>
			<View style={LocationsPageStyles.appBarStyle}>
				<Icon name='search-outline' size={20} />
				<TextInput 
					placeholder='Aspen'
					style={LocationsPageStyles.searchInputStyle}
				/>
			</View>
			<FlatList
				contentContainerStyle={{
					flexGrow: 1,
					overflow: 'hidden',
				}}
				data={villaList}
				renderItem={renderItem}
				keyExtractor={(_item, index) => `villa-${index.toString()}`}
				scrollEnabled
			/>
		</SafeAreaView>
	);
}

const LocationsPageStyles = {
	resultCardStyle: {
		marginBottom: 10
	},
	appBarStyle: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingBottom: 10
	},
	searchInputStyle: {
		backgroundColor: LS_LIGHT_GREY,
		flex: 1,
		borderRadius: 40,
		paddingHorizontal: 10,
		paddingVertical: 5,
		paddingLeft: 20
	}
};