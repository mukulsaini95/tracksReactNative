import React, { useContext ,useEffect} from 'react';
import { StyleSheet, Text, FlatList, TouchableOpacity } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { ListItem } from 'react-native-elements';
import { Context as TrackContext } from '../context/TrackContext';

const TruckList = ({ navigation }) =>{
	const { state, fetchTracks } = useContext(TrackContext);
	useEffect(() => {
		fetchTracks()
	  }, [])
	return  <>
	{/* <NavigationEvents onWillFocus={fetchTracks} /> */}
	<FlatList
	  data={state}
	  keyExtractor={item => item._id}
	  renderItem={({ item }) => {
		return (
		  <TouchableOpacity
			onPress={() =>
			  navigation.navigate('TrackDetail', { _id: item._id })
			}
		  >
			<ListItem chevron title={item.name} />
		  </TouchableOpacity>
		);
	  }}
	/>
  </>
}


const styles = StyleSheet.create({

})

export default TruckList;