import { Outlet } from "react-router-dom";

const AppWrapper = () => {
    return (
        <>
            <aside>aside</aside>
            <main className="relative">
                <Outlet></Outlet>
            </main>

        </>
    ) 
}

export default AppWrapper;