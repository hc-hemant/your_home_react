import { configureStore } from "@reduxjs/toolkit";
import { authReducer, authState } from './slices/auth';



const store = configureStore({
    reducer: {
        auth: authReducer
    }
});

export type RootState = {
    auth: authState
}

export default store;