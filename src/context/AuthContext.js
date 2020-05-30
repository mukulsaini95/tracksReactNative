import createDataContext from "./createDataContext"
import { AsyncStorage } from "react-native"
import trackApi from "../Api/api"
import { navigate } from '../navigationRef';

const authReducer = (state, action) => {
	switch (action.type) {
		case "signInError":
			return { ...state, singInError: action.error }
		case "singUpError":
			return { ...state, singUpError: action.error }
		case "signInSuccess":
			return { ...state, signInSuccess: action.token }
		case "clearErrorMessage":
			return { ...state, singUpError: "", singInError: "" }
		case 'signout':
			return { token: null, errorMessage: '' };
		default:
			return state;
	}

}


const signUp = dispatch => async (payload) => {
	try {
		trackApi.post("/signup", payload, {}).then((response) => {

			AsyncStorage.setItem("token", response.data.token)
			dispatch({ type: "singUpSuccess", token: response.data.token })

		}).catch((error) => {
			dispatch({
				type: "singUpError",
				error: error.response.data.message
			})
		});
	} catch (err) {

	}

}

const signIn = (dispatch) => async (payload, callback) => {
	try {
		trackApi.post("/signin", payload, {}).then((response) => {

			AsyncStorage.setItem("token", response.data.token)
			dispatch({ type: "signInSuccess", token: response.data.token })
			callback();
		}).catch((error) => {
			dispatch({
				type: "signInError",
				error: error.response.data.message
			})
		});
	} catch (err) {

	}

}
const clearErrorMessage = (dispatch) => {
	dispatch({ type: "clearErrorMessage" })

}


const signout = dispatch => async () => {
	await AsyncStorage.removeItem('token');
	dispatch({ type: 'signout' });
	navigate('LoginScreen');
};

export const { Context, Provider } = createDataContext(authReducer, { signUp, signIn, signout, }, { isSingedIn: false })


