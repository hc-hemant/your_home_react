import { ChangeEventHandler, FormEventHandler, useState } from 'react'
import { Button, Checkbox, LabelInput } from '../../widgets'
import { signup } from '../../../apis/auth';
import { ISignupRequestBody } from '../../../interfaces/auth.interface';

interface IFormInput {
    value: string;
    error?: boolean;
    message?: string;
}

interface ISignupForm {
    [key: string]: IFormInput; 
    firstName: IFormInput;
    lastName: IFormInput;
    email: IFormInput;
    phone: IFormInput;
    password: IFormInput;
    confirmPassword: IFormInput;
}

const SignUp = () => {
    const [signupForm, setSignupForm] = useState<ISignupForm>({
        firstName: { value: '' },
        lastName: { value: '' },
        email: { value: '' },
        phone: { value: '' },
        password: { value: '' },
        confirmPassword: { value: '' }
    });

    const submitHandler: FormEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault();

        const signupRequestBody: ISignupRequestBody = {
            email: signupForm.email.value,
            firstName: signupForm.firstName.value,
            lastName: signupForm.lastName.value,
            password: signupForm.password.value,
            phoneNumber: signupForm.phone.value,
        };

        console.log("sign up request body", signupRequestBody);

        const user = await signup(signupRequestBody);

        console.log('user instance', user);

    }

    const inputChangeHandler : ChangeEventHandler<HTMLInputElement> = (event) => {
        const inputElement = event.target as HTMLInputElement;
        const elementName = inputElement.name;

        setSignupForm(preFormState => {
            return {
                ...preFormState,
                [elementName]: {
                    value: inputElement.value
                }
            }
        });
    }

    return (
        <div className='p-12'>
            <p className='text-4xl mb-10 text-primary-200 font-medium'>Register</p>
            <form onSubmit={submitHandler}>
                <div className='grid grid-cols-4 gap-6'>
                    <div className='col-span-2'>
                        <LabelInput 
                            label='First Name' 
                            id='firstname' 
                            type='text'
                            placeholder='Enter first name'
                            name='firstName'
                            value={signupForm.firstName.value}
                            onChange={inputChangeHandler}
                        />
                    </div>
                    <div className='col-span-2'>
                        <LabelInput 
                            label='Last Name (Optional)' 
                            id='lastname' 
                            type='text'
                            placeholder='Enter last name'
                            name='lastName'
                            value={signupForm.lastName.value}
                            onChange={inputChangeHandler}
                        />
                    </div>
                    <div className='col-span-3'>
                        <LabelInput 
                            label='Email' 
                            id='email' 
                            type='enail'
                            placeholder='Enter your email'
                            name='email'
                            value={signupForm.email.value}
                            onChange={inputChangeHandler}
                        />
                    </div>
                    <div className='col-span-2'>
                        <LabelInput 
                            label='Phone Number' 
                            id='phone' 
                            type='tel'
                            placeholder='Enter your phone number'
                            name='phone'
                            value={signupForm.phone.value}
                            onChange={inputChangeHandler}
                        />
                    </div>
                    <div className='col-span-3'>
                        <LabelInput 
                            label='Password' 
                            id='password' 
                            type='password'
                            placeholder='Enter password'
                            name='password'
                            value={signupForm.password.value}
                            onChange={inputChangeHandler}
                        />
                    </div>
                    <div className='col-span-3'>
                        <LabelInput 
                            label='Confirm Password' 
                            id='confirmpassword' 
                            type='password'
                            placeholder='Re-enter your password'
                            name='confirmPassword'
                            value={signupForm.confirmPassword.value}
                            onChange={inputChangeHandler}
                        />
                    </div>
                    <div className='col-span-4'>
                        <Checkbox 
                            label='I agree all the statements in Terms of service' 
                            id='termsofservice' 
                            name='termsOfService'
                            value='termsofservice'
                        />
                    </div>
                    <div className='col-span-4'>
                        <Button classes='w-28'>Sign up</Button>
                    </div>
                </div>
            </form>
        </div>
        
    ) 
}

export default SignUp;