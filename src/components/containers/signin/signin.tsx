import { FormEventHandler, useState } from "react";
import { Button, LabelInput } from "../../widgets";
import { useNavigate } from "react-router-dom";
import { signin } from "../../../apis/auth";

const SignIn = () => {
    const navigate = useNavigate();
    const [signingIn, setSigningIn] = useState<boolean>();

    const signinHandler : FormEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault();

        setSigningIn(true);

        const form = new FormData(event.target as HTMLFormElement);
        const email = form.get('signinemail') as string;
        const password = form.get('signinpassword') as string;

        try {
            await signin({
                email,
                password
            });
            navigate('/a')
        } catch(err) {
            setSigningIn(false);
            console.log("some error occured", err);
        }
    }

    const signupClickHandler = () => {
        navigate('/auth/signup');
    }

    return (
        <div className="h-full flex p-12 flex-col justify-center items-center">
            <div className="w-8/12">
                <p className='text-4xl mb-10 text-primary-400 font-medium'>Login</p>
                <form onSubmit={signinHandler}>
                    <div className="mb-6">
                        <LabelInput 
                            label='Email' 
                            id='signinemail' 
                            type='email'
                            placeholder='Email'
                            name='signinemail'
                        />
                    </div>
                    <div className="mb-6">
                        <LabelInput 
                            label='Password' 
                            id='signinpassword' 
                            type='password'
                            placeholder='Password'
                            name='signinpassword'
                        />
                    </div>
                    <div className="mb-6">
                        <Button classes='w-36' status={signingIn ? 'loading' : undefined}>
                            Login
                        </Button>
                    </div>
                    <div className='mb-6 text-center'>
                        <span className='text-xl text-primary-400 font-bold'>OR</span>
                    </div>
                    <div className='mb-6 text-center'>
                        <Button type='secondary'>
                            Signin with google
                        </Button>
                    </div>
                    <div className='mb-6 text-center'>
                        <span>Doesn't have an account? 
                            <span className='text-primary-400 cursor-pointer ml-2' onClick={signupClickHandler}>Sign up</span>
                        </span>
                    </div>
                </form>
            </div>
        </div>
    ) 
}

export default SignIn;