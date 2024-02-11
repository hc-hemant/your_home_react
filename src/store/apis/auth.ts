// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { ISigninRequestBody, ISignupRequestBody, IUserResponseModel } from "../../interfaces/auth";
// import { BASE_URL } from "../../constants/auth";

// const authApis = createApi({
//     reducerPath: 'auth',
//     baseQuery: fetchBaseQuery({baseUrl: `${BASE_URL}/unsecure`}),
//     endpoints: builder => ({
//         signInUser: builder.mutation<IUserResponseModel, ISigninRequestBody>({
//             query: reqBody => ({
//                 url: '/signin',
//                 method: 'POST',
//                 body: reqBody
//             })
//         }),
//         signUpUser: builder.mutation<IUserResponseModel, ISignupRequestBody>({
//             query: reqBody => ({
//                 url: '/signup',
//                 method: 'POST',
//                 body: reqBody
//             })
//         })
//     })
// });

// authApis.endpoints.signInUser.select()


// export  const { useSignInUserMutation, useSignUpUserMutation } = authApis;
// export default authApis;