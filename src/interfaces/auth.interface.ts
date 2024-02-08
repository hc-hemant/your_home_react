export interface ISignupRequestBody {
    firstName: string;
    phoneNumber: string;
    password: string;
    email: string;
    lastName?: string;
}

export interface ISignupResponseModel {
    firstName: string;
    phoneNumber: string;
    token: string;
    email: string;
    lastName?: string;
}