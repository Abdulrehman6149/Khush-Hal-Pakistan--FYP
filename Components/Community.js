import { View, Text, Image, TouchableOpacity, TextInput, SafeAreaView, ScrollView, FlatList } from 'react-native'
import React, { useEffect, useState, useContext } from 'react'
import COLORS from '../Components/Colors'
import { StatusBar } from 'expo-status-bar'
import AsyncStorage from '@react-native-async-storage/async-storage';


const Community = ({ navigation }) => {
  //To fetch all the posts from database
  const [data, setData] = useState([]);
  const [likedPosts, setLikedPosts] = useState([]);
  const [comment, setComment] = useState('');


  const fetchPosts = async () => {
    const token = await AsyncStorage.getItem('token');
    fetch('http://192.168.43.25:5000/allposts', {
      headers: {
        'Authorization': 'bearer ' + token
      }
    })
      .then(res => res.json())
      .then(result => {
        console.log(result)
        setData(result.posts);
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    fetchPosts();

  }, []);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      fetchPosts();
    });
    return unsubscribe;
  }, [navigation]);


  const likePost = async (id) => {
    const token = await AsyncStorage.getItem('token');
    fetch('http://192.168.43.25:5000/like', {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        'Authorization': 'bearer ' + token
      },
      body: JSON.stringify({
        postId: id
      })
    }).then(res => res.json())
      .then(result => {
        const newData = data.map(item => {
          if (item._id == result._id) {
            return result         //updated record
          } else {
            return item           //old record
          }
        })
        setData(newData)
        setLikedPosts([...likedPosts, result._id]); // Add the liked post to the state

      }).catch(err => {
        console.log(err)
      })
  }

  const unlikePost = async (id) => {
    const token = await AsyncStorage.getItem('token');
    fetch('http://192.168.43.25:5000/unlike', {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        'Authorization': 'bearer ' + token
      },
      body: JSON.stringify({
        postId: id
      })
    }).then(res => res.json())
      .then(result => {
        const newData = data.map(item => {
          if (item._id == result._id) {
            return result         //updated record
          } else {
            return item           //old record
          }
        })
        setData(newData)
        setLikedPosts(likedPosts.filter(postId => postId !== result._id)); // Remove the unliked post from the state

      }).catch(err => {
        console.log(err)
      })
  }

  const isPostLiked = (postId) => {
    return likedPosts.includes(postId);
  };


  const makeComment = async (text, postId) => {
    const token = await AsyncStorage.getItem('token');
    fetch('http://192.168.43.25:5000/comment', {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        'Authorization': 'bearer ' + token
      },
      body: JSON.stringify({
        postId,
        text
      })
    }).then(res => res.json())
      .then(result => {
        console.log(result)
        const newData = data.map(item => {
          if (item._id == result._id) {
            return result         //updated record
          } else {
            return item           //old record
          }
        })
        setData(newData)
      }).catch(err => {
        console.log(err)
      })
  }


  const renderItem = ({ item }) => {
    const handleSubmit = () => {
      makeComment(comment, item._id);
      setComment(''); // Clear the input field
    };
    const isLiked = isPostLiked(item._id);
    return (
      <View>
        <View style={{ flexDirection: 'row' }}>
          <Image
            source={require('../assets/Dp.jpg')}
            style={{
              width: 40,
              height: 40,
              borderRadius: 30,
              borderColor: '#5D9C59',
              borderWidth: 1,
              top: 10,
              marginLeft: 14
            }}
          />

          <Text style={{ fontWeight: 'bold', fontSize: 15, color: COLORS.DarkGreen, top: 18, marginLeft: 8 }}>{item.postedBy.name}</Text>
        </View>
        <Text style={{ fontSize: 14, top: 10, marginLeft: 16, fontWeight: 'bold' }}>{item.title}</Text>
        <Text style={{ fontSize: 13, top: 10, marginLeft: 16 }}>{item.body}</Text>
        {item.photo.map(photo => (
          <Image
            key={photo}
            source={{ uri: photo }}
            style={{ width: '100%', height: 350, top: 14 }}
          />
        ))}
        <View style={{ width: '90%', height: 3, backgroundColor: '#EDF1D6', marginTop: 15, alignSelf: 'center' }}></View>
        {/* Showing comments */}
        {item.comments.map(record => {
          return (
            <View key={record._id} style={{ width: '90%', flexDirection: 'row', marginLeft: 20, height: 30,borderRadius: 10, margin: 3, backgroundColor: COLORS.PaleGreen }}>
              <Text style={{ fontSize: 15, fontWeight: 'bold' }}>{record.postedBy.name} </Text>
              <Text style={{ fontSize: 15 }}> {record.text}</Text>
            </View>
          );
        })
        }

        <View style={{ width: '90%', height: 3, backgroundColor: '#EDF1D6', marginTop: 7, alignSelf: 'center' }}></View>
        <View style={{ flexDirection: 'row', marginLeft: 10 }}>
          <View style={{ width: '23%', height: 40, backgroundColor: '#fff', borderRadius: 30, flexDirection: 'row', marginTop: 5 }}>
            {isLiked
              ?
              <TouchableOpacity onPress={() => unlikePost(item._id)}>
                <Image
                  source={require('../assets/Like.png')}
                  style={{ width: 28, height: 28, marginTop: 7, marginLeft: 5 }}
                />
              </TouchableOpacity>
              :
              <TouchableOpacity onPress={() => likePost(item._id)}>
                <Image
                  source={require('../assets/UnLike.png')}
                  style={{ width: 30, height: 30, marginTop: 7, marginLeft: 5 }}
                />
              </TouchableOpacity>
            }
            <Text style={{ top: 11, fontWeight: 'bold', color: COLORS.LightGreen }}>{item.likes.length} likes</Text>
          </View>

          <View style={{ width: '75%', height: 40, marginRight: 10, borderWidth: 2, borderBottomColor: COLORS.LightGreen, borderColor: '#FFF', flexDirection: 'row', marginTop: 5 }}>
            <Image
              source={require('../assets/Comment.png')}
              style={{ width: 25, height: 25, marginTop: 7, marginLeft: 10 }}
            />
            <TextInput placeholder='Comment' value={comment} onChangeText={setComment} onSubmitEditing={handleSubmit} />
          </View>
        </View>
        <View style={{ width: '100%', height: 3, backgroundColor: '#EDF1D6', marginTop: 5 }}></View>
      </View>
    );
  };


  return (
    <SafeAreaView style={{ backgroundColor: '#fff', flex: 1 }}>
      <StatusBar backgroundColor={COLORS.LightGreen}/>
      <View style={{ width: '100%', height: 40, flexDirection: 'row', backgroundColor: COLORS.LightGreen, marginTop: 30, justifyContent: 'space-between' }}>
        <Text style={{ fontSize: 26, fontWeight: 'bold', color: '#fff', marginRight: 105, marginLeft: 110 }}>Community</Text>
      </View>
      <View style={{ flexDirection: 'row', marginTop: 10 }}>
        <View style={{ marginLeft: 11 }}>
          <TouchableOpacity onPress={() => navigation.navigate("UserProfile")}>
            <Image
              source={require('../assets/Dp.jpg')}
              style={{ width: 45, height: 45, borderRadius: 30 }}
            />
          </TouchableOpacity>
        </View>
        <View style={{ width: '70%', height: 40, backgroundColor: '#EDF1D6', marginLeft: 5, borderRadius: 20, justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity onPress={() => navigation.navigate("UploadPost")}>
            <Text style={{
              color: COLORS.LightGreen,
              fontWeight: 'bold'
            }}>What's on your mind?</Text></TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate("UploadPost")}>
            <Image
              source={require('../assets/Photo.png')}
              style={{ width: 35, height: 35, marginTop: 3, marginLeft: 5 }}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ width: '100%', height: 3, backgroundColor: '#EDF1D6', marginTop: 5 }}></View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item._id}
      />
    </SafeAreaView>


  )
}

export default Community