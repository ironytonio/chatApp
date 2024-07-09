// import React, { useEffect } from "react";
// import { StyleSheet, Text, View, Button, FlatList, TextInput } from "react-native";
// import { useDispatch, useSelector } from "react-redux";
// import { signOut } from "firebase/auth";
// import { useNavigation } from "@react-navigation/native";
// import { fetchChats, createChat, deleteChat } from "../core/chatsSlice";
// import { auth } from "../firebase";

// const Home = () => {
//   const dispatch = useDispatch();
//   const chats = useSelector(state => state.chats.chats);
//   const loading = useSelector(state => state.chats.loading);
//   const error = useSelector(state => state.chats.error);
//   const navigation = useNavigation();
//   const [chatName, setChatName] = React.useState("");

//   useEffect(() => {
//     dispatch(fetchChats());
//   }, [dispatch]);

//   const handleCreateChat = () => {
//     if (chatName.trim()) {
//       dispatch(createChat({ name: chatName, messages: [] }));
//       setChatName('');
//     }
//   };

//   const handleDeleteChat = (chatId) => {
//     dispatch(deleteChat(chatId));
//   };

//   const handleLogout = async () => {
//     try {
//       await signOut(auth);
//       navigation.navigate("Login");
//     } catch (error) {
//       console.error("Logout Error", error);
//     }
//   };

//   const renderItem = ({ item }) => (
//     <View style={styles.chatItem}>
//       <Text>{item.name}</Text>
//       <Button title="Join" onPress={() => navigation.navigate('Chat', { chatId: item.id })} />
//       <Button title="Delete" onPress={() => handleDeleteChat(item.id)} />
//     </View>
//   );

//   if (loading) {
//     return <Text>Loading...</Text>;
//   }

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Chat Rooms</Text>
//       <FlatList
//         data={chats}
//         renderItem={renderItem}
//         keyExtractor={(item) => item.id}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Enter chat name"
//         value={chatName}
//         onChangeText={setChatName}
//       />
//       <Button title="Create Chat" onPress={handleCreateChat} />
//       <Button title="Logout" onPress={handleLogout} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//     backgroundColor: "#fff",
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: "bold",
//     marginBottom: 20,
//   },
//   chatItem: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: 16,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ccc',
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     padding: 8,
//     marginBottom: 16,
//   },
// });

// export default Home;
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  TextInput,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { createChat, deleteChat } from "../core/chatsSlice";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const dispatch = useDispatch();
  const chats = useSelector((state) => state.chats.chats);
  const loading = useSelector((state) => state.chats.loading);
  const navigation = useNavigation();

  const [chatName, setChatName] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const handleCreateChat = () => {
    if (chatName.trim()) {
      dispatch(createChat({ name: chatName }));
      setChatName("");
    }
  };

  const handleDeleteChat = (chatId) => {
    dispatch(deleteChat(chatId));
  };

  const handleJoinChat = (chatId) => {
    navigation.navigate("Chat", { chatId });
  };

  const renderItem = ({ item }) => (
    <View style={styles.chatItem}>
      <Text>{item.name}</Text>
      <Button title="Join" onPress={() => handleJoinChat(item.id)} />
      <Button title="Delete" onPress={() => handleDeleteChat(item.id)} />
    </View>
  );

  const filteredChats = chats.filter((chat) =>
    chat.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chat Rooms</Text>
      <TextInput
        style={styles.input}
        placeholder="Search chat by name"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <FlatList
        data={filteredChats}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter chat name"
        value={chatName}
        onChangeText={setChatName}
      />
      <Button title="Create Chat" onPress={handleCreateChat} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  chatItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 8,
    marginBottom: 16,
  },
});

export default Home;
