import React, { useContext, useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
import CreateTrack from "../screens/CreateTrack";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import TrackDetail from "../screens/TrackDetail";
import TrackLIst from "../screens/TrackLIst";
import AccountScreen from "../screens/AccountScreen";
import { Provider as AuthProvider } from "../context/AuthContext"
import { Context as AuthContext } from "../context/AuthContext"
import { Provider as TrackProvider } from '../context/TrackContext';

import { Provider as LocationProvider } from '../context/LocationContext';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

const { Navigator, Screen } = Stack;
import { AsyncStorage } from "react-native"

export default function App() {
	const LoggedIn = [
		{ name: "CreateTrack", component: CreateTrack, options: {} },
		{ name: "TrackDetail", component: TrackDetail, options: {} },
		{ name: "TrackList", component: TrackLIst, options: { title: "Truck" } },
		{ name: "AccountScreen", component: AccountScreen, options: {} },
		{ name: "RegisterScreen", component: RegisterScreen, options: { title: "Register" } },
		{ name: "LoginScreen", component: LoginScreen, options: { title: "Login", headerLeft: null } },
	]
	const [fetching, setFetching] = useState(false)
	const state = useContext(AuthContext);
	const [homeScreen, setHomeScreen] = useState("RegisterScreen")
	useEffect(() => {
		getToken()
	}, [])

	var getToken = async () => {
		try {
			const value = await AsyncStorage.getItem('token');
			setHomeScreen(value ? "TrackList" : "RegisterScreen");
			setFetching(false)
		} catch (error) {
			// Error retrieving data
		}
	}


	if (fetching) {
		return <Text>fetching</Text>
	} else {
		return (
			<>
				{homeScreen == "RegisterScreen" ?
					<Navigator initialRouteName={homeScreen} headerMode="screen" screenOptions={{ headerTintColor: 'white', headerStyle: { backgroundColor: "black", color: "white" }, }}>
						{LoggedIn.map((temp, index) => (
							<Screen name={temp.name} key={index} component={temp.component} options={temp.options} />
						))}
					</Navigator>
					:
					<TrackProvider>
						<LocationProvider>
							<Tab.Navigator>
								<Tab.Screen name="TrackList" component={TrackLIst} />
								<Tab.Screen name="CreateTrack" component={CreateTrack} />
								<Tab.Screen name="AccountScreen" component={AccountScreen} />
							</Tab.Navigator>
						</LocationProvider>
					</TrackProvider>
				}

			</>
		);
	}

}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
