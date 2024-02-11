import { FunnelIcon } from '@heroicons/react/24/outline';
import { Badge, Button, PropertyCard, Modal } from '../../widgets';
import { useCallback, useRef } from 'react';
import { SignIn } from '..';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { useNavigate } from 'react-router-dom';

const Properties = () => {
    const modalRef = useRef();

    const { token } = useSelector((state: RootState) => state.auth.user);
    const navigate = useNavigate();


    const onFilterClear = (filterName: string) => {
        console.log(filterName)
    }

    const addPropertyHandler = () => {
        if (token) {
            navigate('/a/properties/add');
        } else {
            if (modalRef.current) {
                (modalRef.current as any).open();
            }
        }
    }

    const signInSuccessHandler = () => {
        if (modalRef.current) {
            (modalRef.current as any).close();
        }
        navigate('/a/properties/add');
    }

    const cardClickHandler = useCallback((id: string) => {
        navigate(`/a/properties/${id}`);
    }, []);

    return (
        <section className='w-full'>
            <Modal ref={modalRef}>
                <SignIn onSuccess={signInSuccessHandler}/>
            </Modal>
            <div className="flex justify-between items-center mt-3">
                <section className='flex'>
                    <Badge label='Bangalore' enableClose={true} onRemove={() => onFilterClear('Bangalore')}/>
                    <Badge label='Rent' enableClose={true} onRemove={() => onFilterClear('Rent')}/>
                    <Badge label='2BHK' enableClose={true} onRemove={() => onFilterClear('2BHK')}/>
                </section>
                <section className='flex items-center'>
                    <FunnelIcon className='h-6 w-6 mx-6 cursor-pointer text-black'/>
                    <Button onClick={addPropertyHandler}>Add Property</Button>
                </section>
            </div>
            <section className='h-[78vh] grid grid-cols-1 2xl:grid-cols-3 lg:grid-cols-2 gap-10 mt-10 overflow-auto pe-3'>
                <PropertyCard id='1' onClick={cardClickHandler}/>
                <PropertyCard id='2' onClick={cardClickHandler}/>
                <PropertyCard id='3' onClick={cardClickHandler}/>
                <PropertyCard id='4' onClick={cardClickHandler}/>
            </section>
        </section>
    )
}

export default Properties;