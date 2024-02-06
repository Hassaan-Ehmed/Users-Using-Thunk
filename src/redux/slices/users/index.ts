import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'


// Action 
export const getUsers = createAsyncThunk('users-data', async ()=>{

const response = await fetch('https://jsonplaceholder.typicode.com/users');
const result  = await response.json();

return result;


})


const usersSlice = createSlice({
name:"users",
initialState:{

isLoading:false,
data:null,
isError:false

},
reducers:{},

// to listen getUsers. And builder for handeling states
extraReducers:(builder)=>{
    

    builder.addCase(getUsers.pending,(state,action)=>{
        state.isLoading = true;
    });

    builder.addCase(getUsers.fulfilled,(state,action)=>{
        state.isLoading = false;
        state.data = action.payload
    })


    builder.addCase(getUsers.rejected,(state,action)=>{

    state.isLoading = false;
    
    console.error("Error:",action.error.message);
    state.isError = true;


    })
}

});


export default usersSlice.reducer