import React from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';

const ProfileCard = () => {
  const user = {
    avatar: require('./src/assets/sheesh.jpg'), // Use require for local images
    coverPhoto: require('./src/assets/wew.jpg'), // Add a cover photo
    name: "John Dave Jimenez",
    bio: "Software Engineer | Tech Enthusiast | Coffee Lover",
    location: "Cagayan De Oro, Philippines"
  };
  
  return (
    <View style={styles.container}>
      <Image source={user.coverPhoto} style={styles.coverPhoto} />
      <View style={styles.avatarContainer}>
        <Image source={user.avatar} style={styles.avatar} />
        <Text style={styles.name}>{user.name}</Text>
      </View>
      <View style={styles.infoBox}>
        <Text style={styles.bio}>{user.bio}</Text>
        <Text style={styles.location}>{user.location}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Like" onPress={() => {}} />
        <Button title="Message" onPress={() => {}} />
        <Button title="Share" onPress={() => {}} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // This makes the container take the full height of the screen
    alignItems: 'center',
    backgroundColor: '#fff', // Optional background color for the card
    paddingBottom: 20, // Add padding to avoid content touching the bottom
  },
  coverPhoto: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  avatarContainer: {
    alignItems: 'center',
    marginTop: -75,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 5,
    borderColor: 'white',
  },
  name: {
    marginTop: 15,
    fontSize: 20,
    fontWeight: 'bold',
  },
  infoBox: {
    backgroundColor: '#f8f8f8',
    padding: 15,
    borderRadius: 8,
    marginTop: 10,
    alignItems: 'center',
    width: '80%', // Adjust width as needed
    borderColor: '#e0e0e0', // Optional: Add a subtle border color
    borderWidth: 1, // Optional: Add a subtle border width
    elevation: 1, // Optional: Add a slight shadow for separation
  },
  bio: {
    fontSize: 16,
    textAlign: 'center',
  },
  location: {
    fontSize: 14,
    color: 'gray',
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 20,
    width: '60%',
    justifyContent: 'space-between',
  },
});

export default ProfileCard;
