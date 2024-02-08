import { BASE_URL } from '../constants/auth';
import { ISignupRequestBody, ISignupResponseModel } from '../interfaces/auth.interface';

export const signup = async (signupForm: ISignupRequestBody) : Promise<ISignupResponseModel> => {
    try {
        const response= await fetch(`${BASE_URL}/unsecure/signup`, {
            body: JSON.stringify(signupForm),
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