import { Outlet } from 'react-router-dom';
import LogoWhite from '../../../assets/yhome-logo-white.png';

const AuthWrapper = () => {
    return (
        <main className="bg-signup w-full h-full bg-cover relative">
            <section className="w-auto h-auto inset-0 absolute bg-gray-600 opacity-70"></section>
            <section className="flex h-full relative">
                <section className="w-6/12">
                    <div className="flex flex-col items-center justify-center h-full w-full p-16 ">
                        <img className="w-72" src={LogoWhite}></img>
                        <p className="text-white flex-none">
                            No hustle when looking for a new Home. Your Home!!
                        </p>
                    </div>
                </section>
                <section className="flex-1 bg-white">
                    <Outlet></Outlet>
                </section>
            </section>
        </main>
    ) 
}

export default AuthWrapper;