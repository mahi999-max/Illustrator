import { Button, Card, CloseButton } from '@heroui/react';
import Image from 'next/image';
import React from 'react';

const PhotoDetails = async({params}) => {
    const {id}=await params
    const res=await fetch('https://illustrator-inky.vercel.app/data.json')
    const details= await res.json()
    const photo=details.find(p=>p.id==id)
    console.log(photo);
    return (
        <div>
            <Card className="w-full items-stretch md:flex-row">
      <div className="relative h-[440px] w-full shrink-0 overflow-hidden rounded-2xl sm:h-[120px] sm:w-[120px]">
       <Image src={photo.imageUrl} fill alt={photo.title} className='rounded-xl'></Image>
      </div>
      <div className="flex flex-1 flex-col gap-3">
        <Card.Header className="gap-1">
          <Card.Title className="pr-8">{photo.title}</Card.Title>
          <Card.Description>
            {photo.prompt}
          </Card.Description>
          <CloseButton aria-label="Close banner" className="absolute top-3 right-3" />
        </Card.Header>
        <Card.Footer className="mt-auto flex w-full flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col">
            <span className="text-sm font-medium text-foreground">Only 10 spots</span>
            <span className="text-xs text-muted">Submission ends Oct 10.</span>
          </div>
          <Button className="w-full sm:w-auto">Apply Now</Button>
        </Card.Footer>
      </div>
    </Card>
        </div>
    );
};

export default PhotoDetails;