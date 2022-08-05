import * as React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { color } from 'react-native-reanimated';

import BottomSheet from 'reanimated-bottom-sheet';
import MyCity from './MyCity';

export default function ProfileScreen() {

  const renderContent = () => (
    <View style={styles.content}
    >
      
        <MyCity/>
    </View>
  );


  const sheetRef = React.useRef(null);

  return (
    <>
      <View style={styles.container}>
     
        <Button title="Open"  onPress={() => sheetRef.current.snapTo(350)}/>
        <Button title="Close" onPress={() => sheetRef.current.snapTo(0)} />
      
      </View>
      <BottomSheet
        ref={sheetRef}
        snapPoints={[350, 300, 0]}
        borderRadius={10}
        renderContent={renderContent}
       
      />
    </>
  );
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:"row",
    alignItems:"flex-start",
    justifyContent:"space-evenly",
    paddingTop:10,
    backgroundColor:"#FF5151"
  },
  content:{
    backgroundColor: 'white',
        padding: 16,
        height: 500,
        justifyContent:"center",
        alignItems:"center"
  },
  Text:{
    fontSize:40,
    color:"#FF4848",
    borderRadius:5,
    borderWidth:1,
    borderColor:"red",
    padding:10
   
  }

  
});
