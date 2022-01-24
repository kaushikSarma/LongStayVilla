import React from 'react';
import { Dimensions } from 'react-native';

const getDeviceOrientation = () => {
	const dimension = Dimensions.get('window');
	return dimension.height > dimension.width;
}

export const useOritationChange = () => {
	const [ isPortrait, setIsPortrait ] = React.useState(getDeviceOrientation());
	const [ dimension, setDimension ] = React.useState(Dimensions.get('window'));
	React.useEffect(() => {
		const setOritentationCallback = () => {
			setIsPortrait(getDeviceOrientation());
			setDimension(Dimensions.get('window'));
		};
		const orientationChangeListener = Dimensions.addEventListener('change', setOritentationCallback);
		return () => {
			orientationChangeListener.remove();
		}
	}, []);
	return {
		isPortrait,
		dimension
	};
};