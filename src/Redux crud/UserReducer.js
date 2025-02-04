import { createSlice } from "@reduxjs/toolkit";
import { UserList } from "./Data";
const UserSlice = createSlice({
    name : 'users' ,
    initialState : UserList ,
    reducers : {
        addUser : (state , action) => {
           state.push(action.payload)
        }
    }
})
export const {addUser} = UserSlice.actions;
export default UserSlice.reducer;





