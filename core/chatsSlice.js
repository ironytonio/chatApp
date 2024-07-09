//import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
//import { firestore } from '../firebase';

//const initialState = {
//  chats: [],
// loading: false,
// error: null,
//};

// Async Thunks для взаємодії з Firebase Firestore

// export const fetchChats = createAsyncThunk('chats/fetchChats', async () => {
//   const snapshot = await firestore.collection('chats').get();
//   return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
// });

// export const createChat = createAsyncThunk('chats/createChat', async (chat) => {
//   const docRef = await firestore.collection('chats').add(chat);
//   return { id: docRef.id, ...chat };
// });

// export const deleteChat = createAsyncThunk('chats/deleteChat', async (chatId) => {
//   await firestore.collection('chats').doc(chatId).delete();
//   return chatId;
// });

// const chatSlice = createSlice({
//   name: 'chats',
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchChats.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(fetchChats.fulfilled, (state, action) => {
//         state.loading = false;
//         state.chats = action.payload;
//       })
//       .addCase(fetchChats.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message;
//       })
//       .addCase(createChat.fulfilled, (state, action) => {
//         state.chats.push(action.payload);
//       })
//       .addCase(deleteChat.fulfilled, (state, action) => {
//         state.chats = state.chats.filter(chat => chat.id !== action.payload);
//       });
//   },
// });

// export default chatSlice;
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  chats: [
    { id: 1, name: "Chat 1", messages: [] },
    { id: 2, name: "Chat 2", messages: [] },
  ],
  loading: false,
  error: null,
};

const chatSlice = createSlice({
  name: "chats",
  initialState,
  reducers: {
    // редуктор для створення чату
    createChat: (state, action) => {
      const newChat = {
        id: state.chats.length + 1,
        name: action.payload.name,
        messages: [],
      };
      state.chats.push(newChat);
    },
    //  редуктор для видалення чату
    deleteChat: (state, action) => {
      state.chats = state.chats.filter((chat) => chat.id !== action.payload);
    },
    //редуктор для додавання повідомлення до чату
    addMessage: (state, action) => {
      const { chatId, message } = action.payload;
      const chat = state.chats.find((chat) => chat.id === chatId);
      if (chat) {
        chat.messages.push(message);
      }
    },
    // редуктор для встановлення статусу загрузки
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    //редуктор для встановлення помилки
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { createChat, deleteChat, addMessage, setLoading, setError } =
  chatSlice.actions;

export default chatSlice.reducer;
