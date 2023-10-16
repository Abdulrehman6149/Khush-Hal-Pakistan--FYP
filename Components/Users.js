import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import COLORS from './Colors'


const Users = ({ navigation }) => {
       return (
              <SafeAreaView style={{ backgroundColor: '#fff', flex: 1 }}>
                     <StatusBar backgroundColor={COLORS.LightGreen} />

                     <View style={{ width: '100%', height: 40, backgroundColor: COLORS.LightGreen }}>
                            <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#fff', alignSelf: 'center', top: -3 }}>Select Your User Type</Text>
                     </View>
                     {/* User */}
                     <View style={{ width: '80%', backgroundColor: '#fff', flexDirection: 'row', height: 130, borderRadius: 20, top: 90, alignSelf: 'center', borderWidth: 2, borderColor: COLORS.LightGreen }}>
                            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                                   <Image
                                          source={require('../assets/Userr.jpg')}
                                          style={{ width: 100, height: 100, marginLeft: 10, top: 10 }}
                                   />
                                   <Text style={{
                                          fontSize: 30, top: -60, marginLeft: 170, fontWeight: 'bold',
                                          color: COLORS.LightGreen
                                   }}>User</Text>
                            </TouchableOpacity>
                     </View>

                     {/* Guest */}
                     <View style={{ width: '80%', flexDirection: 'row', height: 130, borderRadius: 20, top: 130, alignSelf: 'center', borderWidth: 2, borderColor: COLORS.LightGreen }}>
                            <TouchableOpacity onPress={() => navigation.navigate("GuestHome")}>
                                   <Image
                                          source={require('../assets/Guestt.jpg')}
                                          style={{ width: 100, height: 100, marginLeft: 10, top: 10 }}
                                   />
                                   <Text style={{
                                          fontSize: 30, top: -60, marginLeft: 160,
                                          fontWeight: 'bold', color: COLORS.LightGreen
                                   }}>Guest</Text>
                            </TouchableOpacity>
                     </View>
                     {/* Expert Signup */}
                     <View style={{ width: '80%', flexDirection: 'row', height: 130, borderRadius: 20, top: 170, alignSelf: 'center', borderWidth: 2, borderColor: COLORS.LightGreen }}>
                            <TouchableOpacity onPress={() => navigation.navigate("ExpertSignup")}>
                                   <Image
                                          source={require('../assets/Expertt.jpg')}
                                          style={{ width: 100, height: 100, marginLeft: 10, top: 10 }}
                                   />
                                   <Text style={{
                                          fontSize: 30, top: -60, marginLeft: 160,
                                          fontWeight: 'bold', color: COLORS.LightGreen
                                   }}>Expert</Text>
                            </TouchableOpacity>
                     </View>
              </SafeAreaView>
       )
}

export default Users;