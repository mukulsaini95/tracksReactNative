import React ,{useState} from "react";
import { View, Text, StyleSheet ,Dimensions,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
const { width, height } = Dimensions.get('window')

import { Input } from 'react-native-elements';

const LoginScreen = ({navigation}) => {

	
	
	return <View style={{ flex: 1, justifyContent: "center", marginBottom: 100 }}>
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
			<View style={{ marginVertical: 5, marginHorizontal: 10 ,justifyContent:"center", alignItems:"center"}}>
				<Icon.Button
					name="user-lock"
					backgroundColor="black"
					style={{width:300,alignItems:"center",justifyContent:"center"}}
				>
					<Text style={{ fontFamily: 'Arial', textAlign:"center",fontSize: 15,color:"white" }}>
						Login
    				</Text>
				</Icon.Button>
				<TouchableOpacity onPress={() => navigation.navigate("RegisterScreen")} style={{ marginTop:20 }}>
					<Text style={{ color: "blue",fontWeight:"bold"}}>
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