import React from 'react'
import { ArrowIcon } from './Icons'

const HomeCard = () => {
    return (
        <>
            <div className='absolute w-[300px] h-[345px] top-[220px] left-[30px] bg-cardColor rounded-lg shadow-md' style={{ boxShadow: '0px 2px 6px 0px rgba(0, 0, 0, 0.24)' }}>
                <div className='flex items-center justify-between'>
                    <h1 className='w-[168px] h-5 font-bold text-colorText text-left ml-6 mt-4'>
                        Historial de repartos
                    </h1>
                    <ArrowIcon className='mt-6 mx-3 ' />
                </div>
                <div className='flex items-center'>
                    <h3 className='w-[149px] h-5  text-colorText ml-6 mt-2 text-xs font-normal leading-5 tracking-normal text-left'>
                        paquetes entregados
                    </h3>
                </div>
            </div>
        </>
    )
}

export default HomeCard
