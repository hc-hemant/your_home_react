import { ChangeEventHandler, FormEventHandler, useState } from 'react'
import { Button, Checkbox, LabelInput } from '../../widgets'
import { signup } from '../../../apis/auth';
import { ISignupRequestBody } from '../../../interfaces/auth';
import { useNavigate } from 'react-router-dom';

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
    const navigate = useNavigate();
    const [signingUp, setSigningUp] = useState<boolean>();
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

        setSigningUp(true);

        try{
            await signup(signupRequestBody);

            navigate('/a');
        } catch(err) {
            setSigningUp(false);
            console.log("some error occured while signing up", err);
        }
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

    const signinClickHandler = () => {
        navigate('/auth/signin');
    }

    return (
        <div className='h-full flex p-12 flex-col justify-center items-center'>
            <div className='w-8/12'>
                <p className='text-4xl mb-10 text-primary-400 font-medium'>Register</p>
                <form onSubmit={submitHandler}>
                    <div className='mb-4'>
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
                    <div className='mb-4'>
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
                    <div className='mb-4'>
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
                    <div className='mb-4'>
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
                    <div className='mb-4'>
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
                    <div className='mb-4'>
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
                    <div className='mb-4'>
                        <Checkbox 
                            label='I agree all the statements in Terms of service' 
                            id='termsofservice' 
                            name='termsOfService'
                            value='termsofservice'
                        />
                    </div>
                    <div className='mb-4'>
                        <Button classes='w-28' status={signingUp ? 'loading' : undefined}>Sign up</Button>
                    </div>
                    <div className='mb-4 text-center'>
                        <span className='text-xl text-primary-400 font-bold'>OR</span>
                    </div>
                    <div className='mb-4 text-center'>
                        <Button type='secondary'>
                            Register with google
                        </Button>
                    </div>
                    <div className='mb-4 text-center'>
                        <span>Already have an account?
                            <span className='text-primary-400 cursor-pointer ml-2' onClick={signinClickHandler}>Signin</span>
                        </span>
                    </div>
                </form>
            </div>
        </div>
        
    ) 
}

export default SignUp;