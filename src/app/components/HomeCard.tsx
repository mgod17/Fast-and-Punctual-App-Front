import React from 'react'
import { ArrowIcon } from './Icons'

interface Props {
    paquetes: number;
}

const HomeCard = ({ paquetes }: Props) => {
    return (
        <>
            <div className=' w-[300px] h-[345px] top-56 left-8 rounded-[10px] bg-cardColor shadow-md' style={{ boxShadow: '0px 2px 6px 0px rgba(0, 0, 0, 0.24)' }}>
                <div className='relative top-8 left-64'>
                    <ArrowIcon className='' />
                </div>
                <div className='p-4'>
                    <h1 className='text-base font-semibold leading-5 text-left text-colorText'>
                        Historial de repartos!
                    </h1>

                    <h3 className='text-xs font-normal leading-5 text-left text-colorText'>
                        {paquetes} 58 paquetes entregados
                    </h3>

                </div>
            </div>
        </>
    )
}

export default HomeCard
