import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const City5 = () => {
  const [city, setCity] = useState()

    const [location, setLocation] = useState()
    const [derece, setDerece] = useState()
    const [durum, setDurum] = useState()
    const [image, setImage] = useState()
    const [openSearchBar, setSearchBar] = useState(false);
 
 
 const key="8e6db8e498ad4c4d82a141021222307";
 const url=`http://api.weatherapi.com/v1/forecast.json?key=8e6db8e498ad4c4d82a141021222307&q=${city}&days=1&aqi=no&alerts=no`
 
 const loaddata= async ()=>{
 
   const data= await axios.get(url);
   
   console.log(data.data);
   setLocation(data.data.location.name);
   setDerece(data.data.current.temp_c)
   setDurum(data.data.current.condition.text)
   setImage(data.data.current.condition.icon)
   
 }
 useEffect(() => {
   loaddata();
   
   
   
 }, [city])
 console.log(location);
 

 
 
 
   return (
     <View style={styles.container}>


<View style={styles.topbar}>
    <Icon
    style={{padding:5}}
    name="search"
    size={25}
    color="gray"
    onPress={() => setSearchBar(!openSearchBar)}
    />
    
  </View>
      {openSearchBar ?
      <View style={styles.searchbar}>
      
      <TextInput
    style={styles.textinput}
    placeholder="Enter a city name"
    onChangeText={setCity}
    value={city}
    />
     <Icon
    style={{padding:5}}
    name='search'
    size={20}
    color="gray"
    onPress={loaddata}
    />
    </View>
    : null }
       <Text>{location}</Text>
       <Text>{derece}°C</Text>
       <Text>{durum}</Text>
       <Image
           style={styles.tinyLogo}
           source={{uri: "http:"+ image}}
         />
       <StatusBar style="auto" />
     </View>
   );
 }
 export default City5
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        
      },
      tinyLogo:{
        height:100,
        width:100,
      }, 
      searchbar: {
        width:'80%',
        marginTop:40,
        backgroundColor:'#F2F2F2',
        borderBottomWidth:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        borderRadius:6,
        height:'7%'
      },
      textinput:{
        marginLeft:15,
        width:'100%',
      },
    });