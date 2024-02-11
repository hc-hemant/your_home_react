import { PlusCircleIcon } from '@heroicons/react/24/solid';
import { Button } from '..';
import { ISideNavProps } from '../../../interfaces/side-nav';


const SideNav = ({ logo, navLinks, onNavOptionSelected, onBottomBtnClick}: ISideNavProps) => {
    const activeClass = 'bg-primary-600 text-primary-200 hover:bg-primary-600';


    return (
        <nav className="w-[280px] h-full flex flex-col justify-between p-6">
            <div>
                <img className='w-44 ml-6' src={logo}></img>
                <ul className='mt-12'>
                    {navLinks && navLinks.map(link => {
                        const Icon = link.icon;

                        return (
                            link.isVisible &&
                            <li key={link.id} className={`p-3 pl-8 mb-6 cursor-pointer flex hover:bg-primary-200 rounded-xl ${link.isActive && activeClass}`} 
                                onClick={() => onNavOptionSelected(link)}>
                                <Icon class="w-6 h-6" />
                                <span className='ml-3'>
                                    {link.label}
                                </span>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div>
                <Button type="light" classes='w-full h-20' onClick={onBottomBtnClick}>
                    <div className='flex items-center'>
                        <span className='me-4'>Add Property</span>
                        <PlusCircleIcon className='h-8 w-8 text-primary-600' />
                    </div>
                </Button>
            </div>
        </nav>
    )
}

export default SideNav;