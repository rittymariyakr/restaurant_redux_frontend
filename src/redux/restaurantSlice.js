import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//creating thunk
//thunk accepts an action type string and a function that returns a promise
//action type string = slicename/thunkname -> restaurantList/fetchrestaurant
//function - give a function as call back for api call //using axios
export const fetchrestaurant = createAsyncThunk('restaurantList/fetchrestaurant', ()=>{
   const result = axios.get('/restaurant.json').then(response=>response.data.restaurants)
   console.log(result);
   return result //if this function called by anyone, then return this result
})

const restaurantSlice = createSlice({
    name:'restaurantList',
    initialState:{
        loading:false, //pending
        allrestaurant:[], //resolve// in thunk resolve state is called FULLFILLED
        searchRestaurant:[], //now allrestaurant and searchrestaurant are holging same value //when filter is applied on allrestaurant, then the array is having only the filtered items. so we create new array for filtering
        error:"" //reject
    },

//action

//builder hold response or values from thunk
    extraReducers:(builder)=>{ 
        //actions for updating state
        //addCase is used for value updation inside state
        //if thnk is in pending state then set value of loading as true
        builder.addCase(fetchrestaurant.pending,(state)=>{ 
            state.loading  = true
        })  
        // if thUnk is in FULFILLED state
        builder.addCase(fetchrestaurant.fulfilled,(state, action)=>{
            state.loading = false
            state.allrestaurant = action.payload //RESPONSE FROM ACTION.PAYLOAD IS GIVING TO allresaurant:[]
            state.searchRestaurant=action.payload 
            state.error = ""
        })
        builder.addCase(fetchrestaurant.rejected,(state, action)=>{
            state.loading = false
            state.allrestaurant = ""
            state.error = action.error.message
        })

    },

    //action for search (in this, there is no api call. so give this in reducers key)
    //search neighbourhood
    reducers:{
        search : (state, action)=>{
            //search is only for neighbourhood. so filter is only for neighbourhood and convert it into small letters
            state.allrestaurant = state.searchRestaurant.filter(item => item.neighborhood.toLowerCase().includes(action.payload))

        }
    }

})

export const {search} = restaurantSlice.actions //exporrting action
export default restaurantSlice.reducer //export reducer //and import it at store. inside reducer key