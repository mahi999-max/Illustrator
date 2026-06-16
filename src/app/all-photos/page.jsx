import PhotoCard from '@/component/PhotoCard';
import React from 'react';

const AllPhots = async() => {
       const res = await fetch('https://illustrator-inky.vercel.app/data.json')
    const photos = await res.json()
    return (
        <div>
            <div className='space-y-4 mt-4'>
            <h1 className='text-3xl font-bold'>Top generation</h1>
            <div className='grid grid-cols-4 gap-5'>
                {
                    photos.map(photo=><PhotoCard key={photo.id} photo={photo}></PhotoCard>)
                }
           </div>
        </div>
        </div>
    );
};

export default AllPhots;