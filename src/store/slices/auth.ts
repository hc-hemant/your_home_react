import { createSlice } from "@reduxjs/toolkit";
import { IUserResponseModel } from "../../interfaces/auth";
import { signinAction, signupAction } from '../actions/auth';

interface IAuthState {
    loading: boolean;
    user: IUserResponseModel
} 

const initialState : IAuthState = {
    loading: false,
    user: {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        token: ''
    }
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        signin(state, action) {
            state = action.payload; 
        },
        signout(state) {
            state = initialState;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(signinAction.pending, state => {
                if (!state.loading) {
                    state.loading = true;
                }
            })
            .addCase(signinAction.fulfilled, (state, action) => {
                if (state.loading) {
                    state.loading = false;
                    state.user = action.payload;
                }
            })
            .addCase(signinAction.rejected, state => {
                if (state.loading) {
                    state.loading = false; 
                }
            })

        builder
            .addCase(signupAction.pending, state => {
                if (!state.loading) {
                    state.loading = true;
                }
            })
            .addCase(signupAction.fulfilled, (state, action) => {
                if (state.loading) {
                    state.loading = false;
                    state.user = action.payload;
                }
            })
            .addCase(signupAction.rejected, state => {
                if (state.loading) {
                    state.loading = false; 
                }
            })
    }
})

export const authActions = authSlice.actions;
export const authReducer = authSlice.reducer;
export type authState = ReturnType<typeof authReducer>;