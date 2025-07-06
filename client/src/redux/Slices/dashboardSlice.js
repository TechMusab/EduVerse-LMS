import {createSlice} from '@reduxjs/toolkit';
const intialState={
    sidebarOpen:true,
    currentTab:'overview',
}
const dashboardSlice=createSlice({
    name:'dashboard',
    initialState:intialState,
    reducers:{
        toggleSidebar:(state)=>{
            state.sidebarOpen=!state.sidebarOpen
        },
        setCurrentTab:(state,action)=>{
            state.currentTab=action.payload
        }
    }
})
export const {toggleSidebar,setCurrentTab}=dashboardSlice.actions;
export default dashboardSlice.reducer;