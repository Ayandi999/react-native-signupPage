import React from 'react'
import { Pressable,View,Text,TextInput,KeyboardAvoidingView, Platform } from 'react-native'
import { Image } from 'expo-image'

const Signup = () => {
  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} >
     <Image source={require("@/assets/logo.svg")} style={{ width: 100, height: 100 }}/>
     <Text>Sign in</Text>
     <Text>Let's experiance the joy of telecare AI.</Text>
     <Text>Email Address</Text>
     <View style={{ flexDirection: 'row', alignItems: 'center',borderWidth: 1, borderColor: '#5fdb00ff', borderRadius: 13, margin:20 }}>
     <Image source={require('@/assets/mail.svg')} style={{ height: 30, width: 30 }} />
     <TextInput 
       placeholder='elimentary221b@gmail.com' 
       style={{ flex: 1, }} 
     />
     </View>
     <Text>Password</Text>
     <View style={{ flexDirection: 'row', alignItems: 'center',borderWidth: 1, borderColor: '#5fdb00ff', borderRadius: 13, margin:20 }}>
     <Image source={require('@/assets/lock.svg')} style={{ height: 30, width: 30 }} />
     <TextInput 
       placeholder='Enter your password...' 
       style={{ flex: 1, }} 
     />
     </View>
     <Pressable
          style={{
               flexDirection: 'row', 
               alignItems: 'center',
               height:40,
               borderRadius:13,
               margin:20,
               paddingLeft:110,
               backgroundColor:'#5fdb00ff'
          }}
     ><Text style={{
          color:"#ffff",
          alignSelf:'center',
          padding:5,
          fontSize:20
     }}>Sign In</Text>
     <Image source={require('@/assets/arrow.svg')} style={{height: 30, width: 30,color:'#ffff'}}/>
     </Pressable>
    </KeyboardAvoidingView>
  )
}

export default Signup