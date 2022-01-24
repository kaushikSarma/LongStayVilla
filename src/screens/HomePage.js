import React from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import PropertyCard from '../components/PropertyCard';
import { useOritationChange } from './ScreenUtils';
import villaList from '../resources/dummyData/villaList';

export default HomePage = () => {
	const { dimension } = useOritationChange();

	const renderItem = (itemData) => {
		return <PropertyCard 
			cardContainerStyle={HomePageStyles.productCardStyle} 
			{...itemData.item} 
		/>;
	}
	return (
		<SafeAreaView style={{height: dimension.height - 50, paddingHorizontal: 8, paddingVertical: 8 }}>
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

const HomePageStyles = {
	productCardStyle: {
		marginBottom: 15,
		borderWidth: 1,
		borderColor: 'black',
		borderRadius: 5
	}
}