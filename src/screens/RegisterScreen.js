import React, { useState, useContext } from "react";
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Context as AuthContext } from "../context/AuthContext"
const { width, height } = Dimensions.get('window')
const { Button } = Icon;
import { Input } from 'react-native-elements';
import { NavigationEvents } from "react-navigation";

const RegisterScreen = ({ navigation }) => {

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { signUp, state } = useContext(AuthContext)

	return <View style={{ flex: 1, justifyContent: "center",alignItems:"center" ,marginBottom: 100 }}>
		<View style={{minHeight:10}}>
			<Text style={{ color: "red" }}>{state.singUpError && state.singUpError}</Text>
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
				<Button
					name="user-lock"
					backgroundColor="black"
					style={{ width: 300, alignItems: "center", justifyContent: "center" }}
					onPress={() => {
						signUp({ email, password })
					}}
				>
					<Text style={{ textAlign: "center", fontSize: 15, color: "white" }}>
						Register
    				</Text>
				</Button>
				<TouchableOpacity onPress={() => navigation.navigate("LoginScreen")} style={{ marginTop: 20 }}>
					<Text style={{ color: "blue", fontWeight: "bold" }}>
						Already have an account ? Sign in instead.
				</Text>
				</TouchableOpacity>
			</View>


		</View>

	</View>
}


const styles = StyleSheet.create({

})

export default RegisterScreen;