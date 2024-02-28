import { XMarkIcon } from "@heroicons/react/24/outline"

interface IBadge {
    label: string;
    onRemove?: () => void;
    enableClose: boolean;
}

const Badge = ({label, enableClose ,onRemove} : IBadge) => {
    return (
        <div className='flex items-center bg-primary-600 text-primary-200 rounded-xl px-4 py-1 me-3'>
            <span>{label}</span>
            { enableClose && <XMarkIcon className='h-4 w-4 ml-3 text-primary-200 cursor-pointer' onClick={onRemove}/> }
        </div>
    )
}

export default Badge;