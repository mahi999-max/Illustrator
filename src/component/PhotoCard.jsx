import { Button } from '@heroui/react';
import Image from 'next/image';
import React from 'react';
import { BiDownload } from 'react-icons/bi';
import { FaHeart } from 'react-icons/fa';

const PhotoCard = ({ photo }) => {
    return (
        <div className='border p-4 my-4 rounded-xl space-y-4'>
            <Image src={photo.imageUrl} width={400} height={600} alt={photo.title} className='rounded-xl'></Image>
            <p className='font-medium'>{photo.title}</p>
            <div className='flex justify-between'> <div className='flex gap-2 items-center'><FaHeart /><p>
                {photo.likes}</p></div>
                <div className='flex gap-2 items-center'><BiDownload></BiDownload><p>{photo.downloads}</p>
                </div></div>
                <Button variant='outline' className='w-full'>Show Details</Button>
        </div>
    );
};

export default PhotoCard;