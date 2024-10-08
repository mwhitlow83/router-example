//matthew whitlow
//assignment 3



import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const contactSlice = createSlice({

name: 'contacts',
initialState,
reducers: {
addContacts: (state, action) => {
state.push(action.payload);
return state;
}
}

})
export const { addContacts} = contactSlice.actions;
export default contactSlice;