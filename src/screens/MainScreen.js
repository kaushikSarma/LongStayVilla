import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from './HomePage';
import LocationsPage from './LocationsPage';
import ProfilePage from './ProfilePage';
import MoreOptionsPage from './MoreOptionsPage';
import BookingsHistoryPage from './BookingsHistoryPage';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const CustomTabBar = ({ state, descriptors, navigation }) => {
	return (
		<View style={{ flexDirection: 'row', height: 55, alignItems: 'center' }}>
		{state.routes.map((route, index) => {
			const { options } = descriptors[route.key];
			const label = route.name;

			const isFocused = state.index === index;
			const onPress = () => {
			const event = navigation.emit({
				type: 'tabPress',
				target: route.key,
				canPreventDefault: true,
			});

			if (!isFocused && !event.defaultPrevented) {
				// The `merge: true` option makes sure that the params inside the tab screen are preserved
				navigation.navigate({ name: route.name, merge: true });
				}
			};

			const onLongPress = () => {
				navigation.emit({
					type: 'tabLongPress',
					target: route.key,
				});
			};

			return (
				<TouchableOpacity
					accessibilityRole="button"
					accessibilityState={isFocused ? { selected: true } : {}}
					accessibilityLabel={options.tabBarAccessibilityLabel}
					testID={options.tabBarTestID}
					onPress={onPress}
					onLongPress={onLongPress}
					style={{ flex: 1, alignItems: 'center' }}
				>
					<Icon name={options.icon} size={20} />
					<Text style={{ color: isFocused ? '#673ab7' : '#222' }}>{label}</Text>
				</TouchableOpacity>
			);
		})}
		</View>
	);
}

const Tab = createBottomTabNavigator();

export default MainScreen = () => {
  return (
	<NavigationContainer>
		<Tab.Navigator 
			screenOptions={{
				headerShown: false,
			}}
			tabBar={CustomTabBar}
		>
			<Tab.Screen name={'Home'} options={{ icon: 'home-outline' }} component={HomePage} />
			<Tab.Screen name={'Location'} options={{ icon: 'search-outline' }} component={LocationsPage} />
			<Tab.Screen name={'Bookings'} options={{ icon: 'heart-outline' }} component={BookingsHistoryPage} />
			<Tab.Screen name={'Profile'} options={{ icon: 'person-outline' }} component={ProfilePage} />
			<Tab.Screen name={'More'} options={{ icon: 'menu-sharp' }} component={MoreOptionsPage} />
		</Tab.Navigator>
	</NavigationContainer>
  );
};
