import {createSlice} from '@reduxjs/toolkit';
// import { v4 } from "uuid";
import uuid from 'react-native-uuid';
import Toast from 'react-native-toast-message';
const initialState = {
  todoList: [],
  status: false,
};

const todoSlice = createSlice({
  name: 'todoList',
  initialState,
  reducers: {
    addTodo: (state, {payload}) => {
      state.todoList = [...state.todoList, {text: payload, id: uuid.v4()}];
      Toast.show({
        type: 'success',
        text1: 'Add',
        text2: `${payload}`,
      });
      return state;
    },
    removeTodo: (state, {payload}) => {
      const removeItem = state.todoList.filter(
        (items, index) => items.id !== payload,
      );
      state.todoList = removeItem;
      Toast.show({
        type: 'success',
        text1: 'Delete',
        text2: `Delete Item`,
      });
      // return state;
    },
  },
});

export const {addTodo, removeTodo} = todoSlice.actions;

export default todoSlice.reducer;
