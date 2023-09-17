"use client"

import React from "react";
import Image from "next/image";

export default function Advert({image}: { image: string }) {
    return (
        <Image className='img' alt='advert' src={image} style={{width: '100%', height: '100%', objectFit: 'cover'}}/>
    )
}