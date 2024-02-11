import { BASE_URL } from '../constants/auth';
import { ISigninRequestBody, ISignupRequestBody, IUserResponseModel } from '../interfaces/auth.interface';

export const signup = async (signupData: ISignupRequestBody) : Promise<IUserResponseModel> => {
    try {
        const response= await fetch(`${BASE_URL}/unsecure/signup`, {
            body: JSON.stringify(signupData),
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        return response.json();
    } catch(err) {
        throw err;
    }
}

export const signin = async (signinData: ISigninRequestBody) : Promise<IUserResponseModel> => {
    try {
        const response= await fetch(`${BASE_URL}/unsecure/signin`, {
            body: JSON.stringify(signinData),
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        return response.json();
    } catch(err) {
        throw err;
    }
}