import { Breadcrumb } from ".."
import { UserCircleIcon } from '@heroicons/react/24/outline';

const Header = () => {
    return (
        <header className="pt-3 pb-6 w-full flex justify-between">
            <Breadcrumb />
            <section className="flex">
                <span className="px-3 text-lg font-medium">Hemant Chaudhary</span>
                <UserCircleIcon className="h-8 w-8 cursor-pointer"/>
            </section>     
        </header>
    )
}

export default Header;