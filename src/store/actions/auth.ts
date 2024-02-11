import { createAsyncThunk } from "@reduxjs/toolkit";
import { signin, signup } from "../../apis/auth";
import { ISigninRequestBody, ISignupRequestBody, IUserResponseModel } from "../../interfaces/auth";

const siginInActionType = 'auth/sigininAction';
const siginUpActionType = 'auth/siginUpAction';

export const signinAction = createAsyncThunk<IUserResponseModel, ISigninRequestBody>(
        siginInActionType,
        async (signinReqBody: ISigninRequestBody,_) => {
        try {
            return await signin(signinReqBody);
        } catch(err) {
            console.log("Error captured in sign in action", err);
            throw err;
        }
    }
)

export const signupAction = createAsyncThunk<IUserResponseModel, ISignupRequestBody>(
        siginUpActionType,
        async (signupReqBody: ISignupRequestBody,_) => {
        try {
            return await signup(signupReqBody);
        } catch(err) {
            console.log("Error captured in sign up action", err);
            throw err;
        }
    }
)

