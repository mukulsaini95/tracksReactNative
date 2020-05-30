import React, { useState, useContext,useEffect } from "react";
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
const { width, height } = Dimensions.get('window')
import { Context as AuthContext } from "../context/AuthContext"
import { Input } from 'react-native-elements';
import { NavigationEvents, SafeAreaView } from "react-navigation"
const LoginScreen = ({ navigation }) => {

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { signIn, state, clearErrorMessage } = useContext(AuthContext)

	// useEffect(()=>{
	// 	clearErrorMessage
	// },[])

	return  <View style={{ flex: 1, justifyContent: "center", marginBottom: 100 }}>
			{/* <NavigationEvents
				// onWillBlur={()=>{}}
				// onDidFocus={()=>{}}
				onWillFocus={() => clearErrorMessage()}
			// onDidBlur={()=>{}}
			/> */}
			<View style={{ minHeight: 10 }}>
				<Text style={{ color: "red" }}>{state.singInError && state.singInError}</Text>
			</View>
			<View style={{ margin: 20 }}>
				<View style={{ marginVertical: 5 }}>
					<Input
						placeholder='Email'
						autoCapitalize="none"
						value={email}
						autoCorrect={false}
						onChangeText={setEmail}
						style={
							{
								padding: 10,
							}
						}
						leftIcon={
							<Icon
								name='user'
								size={24}
								color='black'
							/>
						}
					/>
				</View>
				<View style={{ marginVertical: 5 }}>
					<Input
						placeholder='Password'
						secureTextEntry
						value={password}
						onChangeText={setPassword}
						autoCapitalize="none"
						autoCorrect={false}
						style={
							{
								padding: 10,
							}
						}
						leftIcon={
							<Icon
								name='unlock-alt'
								size={24}
								color='black'
							/>
						}
					/>
				</View>
				<View style={{ marginVertical: 5, marginHorizontal: 10, justifyContent: "center", alignItems: "center" }}>
					<Icon.Button
						name="user-lock"
						backgroundColor="black"
						style={{ width: 300, alignItems: "center", justifyContent: "center" }}
						onPress={() => {
							signIn({ email, password }, () => {
								navigation.navigate("TrackList")
							})
						}}
					>
						<Text style={{ textAlign: "center", fontSize: 15, color: "white" }}>
							Login
    				</Text>
					</Icon.Button>
					<TouchableOpacity onPress={() => navigation.navigate("RegisterScreen")} style={{ marginTop: 20 }}>
						<Text style={{ color: "blue", fontWeight: "bold" }}>
							You don't have an account ? Sign up instead.
				</Text>
					</TouchableOpacity>
				</View>


			</View>

		</View>

}


const styles = StyleSheet.create({

})

export default LoginScreen;