import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

const initialValue = {
  filterStatus: 'all',
  todoList: [],
};

const apiUrl = process.env.REACT_APP_APIURL;
const publicKey = process.env.REACT_APP_PUBLICKEY;
const privateKey = process.env.REACT_APP_PRIVATEKEY;

export const fetchTodoList = createAsyncThunk('getTodoList', async () => {
  const response = await fetch(apiUrl, {
    method: 'GET',
    headers: new Headers({
      Authorization: `Basic ${btoa(`${publicKey}:${privateKey}`)}`,
    }),
  });
  const list = await response.json();
  return list;
});

export const addTodoItem = createAsyncThunk('addTodoItem', async (data) => {
  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/json',
      Authorization: `Basic ${btoa(`${publicKey}:${privateKey}`)}`,
    }),
    body: JSON.stringify({
      description: data.desc,
      status: data.status,
      task: data.title,
    }),
  });

  const res = await response.json();
  if (res?.data?.result?.code === 200) {
    toast.success('Task added successfully');
  }
});

export const updateTodoItem = createAsyncThunk(
  'updateTodoItem',
  async (data) => {
    await fetch(apiUrl, {
      method: 'PUT',
      headers: new Headers({
        'Content-Type': 'application/json',
        Authorization: `Basic ${btoa(`${publicKey}:${privateKey}`)}`,
      }),
      body: JSON.stringify({
        id: data.id,
        status: data.status,
        task: data.task,
        description: data.desc,
      }),
    });
  }
);

export const deleteTodoItem = createAsyncThunk('deleteTodoItem', async (id) => {
  await fetch(`${apiUrl}?id=${id}`, {
    method: 'DELETE',
    headers: new Headers({
      'Content-Type': 'application/json',
      Authorization: `Basic ${btoa(`${publicKey}:${privateKey}`)}`,
    }),
  });
});

export const todoSlice = createSlice({
  name: 'todo',
  initialState: initialValue,
  reducers: {
    updateFilterStatus: (state, action) => {
      state.filterStatus = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTodoList.fulfilled, (state, action) => {
      if (action.payload.data?.result?.code === 200) {
        state.todoList = action.payload.data.rows;
      }
    });
    builder.addCase(addTodoItem.fulfilled, () => {});
    builder.addCase(updateTodoItem.fulfilled, () => {});
    builder.addCase(deleteTodoItem.fulfilled, () => {});
  },
});

export const { updateFilterStatus } = todoSlice.actions;
export default todoSlice.reducer;
