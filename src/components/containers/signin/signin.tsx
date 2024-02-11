import { FormEventHandler } from "react";
import { Button, LabelInput } from "../../widgets";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { signinAction } from "../../../store/actions/auth";


type SigninProps  = {
    onSuccess?: () => void
}

const SignIn = ({ onSuccess }: SigninProps) => {
    const navigate = useNavigate();
    const dispatch = useDispatch<any>();

    const { loading } = useSelector((state: RootState) => state.auth);


    const signinHandler : FormEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault();

        const form = new FormData(event.target as HTMLFormElement);
        const email = form.get('signinemail') as string;
        const password = form.get('signinpassword') as string;

        try {
            const user = await dispatch(signinAction({
                    email,
                    password
                })
            ).unwrap();

            if (user && user.token) {
                onSuccess ? onSuccess() : navigate('/a');
            }
        } catch(err) {
            console.log("some error occured", err);
        }
    }

    const signupClickHandler = () => {
        navigate('/auth/signup');
    }

    const signinWithGoogleHandler = () => {
        console.log("signin with google coming soon...");
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
                        <Button classes='w-36' status={loading ? 'loading' : undefined}>
                            Login
                        </Button>
                    </div>
                    <div className='mb-6 text-center'>
                        <span className='text-xl text-primary-400 font-bold'>OR</span>
                    </div>
                    <div className='mb-6 text-center'>
                        <Button type='secondary' onClick={signinWithGoogleHandler}>
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