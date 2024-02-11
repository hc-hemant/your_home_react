import { Outlet, useNavigate } from "react-router-dom";
import { SideNav } from "../../widgets";
import AppLogoDark from '../../../assets/yhome-logo-dark.png';
import useSidenav from "../../../hooks/useSidenav";
import { INavlink } from "../../../interfaces/side-nav";
import { Header } from "..";

const AppWrapper = () => {
    const { navOptions, updateNavOptions } = useSidenav();
    const navigate = useNavigate();

    const onNavSelect = (navLink: INavlink) => {
        updateNavOptions(navLink.id);
        navigate(navLink.path);
    }

    return (
        <>
            <section className="h-full flex">
                <aside>
                    <SideNav logo={AppLogoDark} navLinks={navOptions} onNavOptionSelected={onNavSelect}/>
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