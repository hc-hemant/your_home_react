import { useSelector } from "react-redux";
import { Breadcrumb } from ".."
import { UserCircleIcon } from '@heroicons/react/24/outline';
import { RootState } from "../../../store/store";

const Header = () => {
    const { firstName, lastName } = useSelector((state: RootState) => state.auth.user);

    return (
        <header className="pt-3 pb-6 w-full flex justify-between">
            <Breadcrumb />
            <section className="flex">
                <span className="px-3 text-lg font-medium">
                    {
                        firstName
                            ? `${firstName} ${lastName}`
                            : 'Welcome'
                    }
                </span>
                <UserCircleIcon className="h-8 w-8 cursor-pointer"/>
            </section>     
        </header>
    )
}

export default Header;