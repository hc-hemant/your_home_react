import { Outlet, useNavigate } from "react-router-dom";
import { Modal, SideNav } from "../../widgets";
import AppLogoDark from '../../../assets/yhome-logo-dark.png';
import useSidenav from "../../../hooks/useSidenav";
import { INavlink } from "../../../interfaces/side-nav";
import { Header, SignIn } from "..";
import { useRef } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";

const AppWrapper = () => {
    const navigate = useNavigate();
    const modalRef = useRef();
    const { navOptions, updateNavOptions } = useSidenav();
    const { token } = useSelector((state: RootState) => state.auth.user);

    const onNavSelect = (navLink: INavlink) => {
        updateNavOptions(navLink.id);
        navigate(navLink.path);
    }

    const addPropertyHandler = () => {
        if (token) {
            navigate('/a/properties/add');
        } else {
            if (modalRef && modalRef.current) {
                (modalRef.current as any).open();
            }
        }
    }

    const signInSuccessHandler = () => {
        if (modalRef && modalRef.current) {
            (modalRef.current as any).close();
        }
        navigate('/a/properties/add');
    }

    return (
        <>
            <section className="h-full flex">
                <Modal ref={modalRef}>
                    <SignIn onSuccess={signInSuccessHandler}/>
                </Modal>
                <aside>
                    <SideNav 
                        logo={AppLogoDark} 
                        navLinks={navOptions} 
                        onNavOptionSelected={onNavSelect}
                        onBottomBtnClick={addPropertyHandler}
                    />
                </aside>
                <main className="flex-1 h-full flex">
                    <section className="p-6 flex-1 h-auto flex flex-col bg-primary-200 rounded-t-xl mt-4 mr-4">
                        <Header />
                        <section className="flex-1">
                            <Outlet></Outlet>
                        </section>
                    </section>
                </main>
            </section>
        </>
    ) 
}

export default AppWrapper;