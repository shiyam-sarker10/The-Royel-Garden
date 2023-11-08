import React from 'react';

const WorksCard = ({data}) => {
    const { id , title, description} = data
    return (
        <div className='border-2 bg-blue-500 white rounded-2xl  text-white p-5  border-none'>

            <h2 className='flex-row flex items-center'><span className=' lg:text-4xl text-3xl font-bold leading-[42px]'>{id}.</span> <span className='text-2xl font-bold leading-[28px]'>{title}</span></h2>
            <p className='mt-4 '>
                {description}
            </p>
        </div>
    );
};

export default WorksCard;