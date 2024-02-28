import { HomeIcon } from '@heroicons/react/24/outline'
import { ChartBarIcon } from '@heroicons/react/24/outline'
import { BanknotesIcon } from '@heroicons/react/24/outline'
import { BookOpenIcon } from '@heroicons/react/24/outline'
import { ChatBubbleOvalLeftEllipsisIcon } from '@heroicons/react/24/outline'
import { useEffect, useState } from 'react'
import { INavlink } from '../interfaces/side-nav';

const sideNavOptions: Array<INavlink> = [
    {
        path: '/a/properties',
        label: 'Properties',
        icon: HomeIcon,
        isActive: true,
        isVisible: true,
        id: 'properties'
    },
    {
        path: '/a/dashboard',
        label: 'Dashboard',
        icon: ChartBarIcon,
        isActive: false,
        isVisible: true,
        id: 'dashboard'
    },
    {
        path: '/a/plans',
        label: 'Plans',
        icon: BanknotesIcon,
        isActive: false,
        isVisible: true,
        id: 'plans'
    },
    {
        path: '/a/blogs',
        label: 'Blogs',
        icon: BookOpenIcon,
        isActive: false,
        isVisible: true,
        id: 'blogs'
    },
    {
        path: '/a/contact-us',
        label: 'Contact us',
        icon: ChatBubbleOvalLeftEllipsisIcon,
        isActive: false,
        isVisible: true,
        id: 'contactUs'
    }

];

const useSidenav = () => {
    const [navOptions, setNavOptions] = useState<Array<INavlink>>([]);

    useEffect(() => {
        setNavOptions(sideNavOptions);
    }, []);

    const updateNavOptions = (id: string) => {
        setNavOptions(options => options?.map(option => {
            return {
                ...option,
                isActive: id === option.id
            }
        }))
    }

    return {
        navOptions,
        updateNavOptions
    }
}

export default useSidenav;