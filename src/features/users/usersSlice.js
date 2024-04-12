import { createSlice } from "@reduxjs/toolkit";
import { userList } from "../../data/Data";


function getStateFromLS() {
   return JSON.parse(localStorage.getItem("users")) || userList
}

const usersSlice = createSlice({
   name: "users",
   initialState: getStateFromLS(),
   reducers: {
      createUser: (state, action) => {
         state.push(action.payload)
         localStorage.setItem("users", JSON.stringify(state))
      },
      updateUser: (state, action) => {
         const { id, name, email } = action.payload
         const uu = state.find(item => item.id == id)
         if (uu) {
            uu.name = name
            uu.email = email
         }
         localStorage.setItem("users", JSON.stringify(state))
      },
      deleteUser: (state, action) => {
         state = state.filter(item => item.id !== action.payload.id)
         localStorage.setItem("users", JSON.stringify(state))
         return state
      }
   }
})

export default usersSlice.reducer
export const { createUser, updateUser, deleteUser } = usersSlice.actions