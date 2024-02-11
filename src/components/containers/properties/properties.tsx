import { FunnelIcon } from '@heroicons/react/24/outline';
import { Badge, Button, PropertyCard } from '../../widgets';

const Properties = () => {
    const onFilterClear = (filterName: string) => {
        console.log(filterName)
    }

    return (
        <section className='w-full'>
            <div className="flex justify-between items-center mt-3">
                <section className='flex'>
                    <Badge label='Bangalore' enableClose={true} onRemove={() => onFilterClear('Bangalore')}/>
                    <Badge label='Rent' enableClose={true} onRemove={() => onFilterClear('Rent')}/>
                    <Badge label='2BHK' enableClose={true} onRemove={() => onFilterClear('2BHK')}/>
                </section>
                <section className='flex items-center'>
                    <FunnelIcon className='h-6 w-6 mx-6 cursor-pointer text-black'/>
                    <Button >Add Property</Button>
                </section>
            </div>
            <section className='h-[78vh] grid grid-cols-1 2xl:grid-cols-3 lg:grid-cols-2 gap-10 mt-10 overflow-auto pe-3'>
                <PropertyCard />
                <PropertyCard />
                <PropertyCard />
                <PropertyCard />
                <PropertyCard />
                <PropertyCard />
                <PropertyCard />
                <PropertyCard />
                <PropertyCard />
                <PropertyCard />
            </section>
        </section>
    )
}

export default Properties;