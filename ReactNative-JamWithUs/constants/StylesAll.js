import { StyleSheet } from 'react-native'
  
 const screens = StyleSheet.create({   
   container: {                       
     marginTop: 150,
     backgroundColor: '#ededed',
     flexWrap: 'wrap'
   },
  header: {
    marginBottom: 10,
    paddingBottom: 10, 
    backgroundColor:'#FA9605',
    paddingTop: 40, 
  },
  title:{
	backgroundColor: '#FA9605',
	fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 60, 
    color: '#ffffff'	
  },
 })
 
 const form = StyleSheet.create({
	input: {
    height: 50,
    paddingLeft: 20,
    paddingRight: 20, 
    marginLeft: 40,
    marginRight: 40,
    marginBottom: 10,
    marginTop: 5,
    backgroundColor: '#f3f3f3', 
    borderRadius: 20,
	},
  
 })
 const buttons = StyleSheet.create({  
   primary: {                         
     flex: 1,
     height: 70,
     backgroundColor: 'red',
     justifyContent: 'center',
     alignItems: 'center',
     marginLeft: 20,
     marginRight: 20
   },
   opacity: {
    alignItems: 'center',
	backgroundColor: '#FFFFFF',
    borderColor: '#FA9605',
    padding: 10,
    borderWidth: 1,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10
  },
  name: {
	  marginLeft: 5,
	  marginRight: 5,
	  color : '#FA9605',
  }
 })
  
 export { screens, buttons, form }           