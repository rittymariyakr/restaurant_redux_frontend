import { configureStore } from "@reduxjs/toolkit";
import restaurantSlice from '../redux/restaurantSlice'


const store = configureStore({
    reducer:{
        restaurantSlice //key and value aresme. so give it as one
    }
})

export default store