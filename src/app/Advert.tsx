"use client"

import Image from "next/image";

export default function Advert({image} : {image: string}) {
    return (
        <Image alt='' src={image} style={{objectFit: 'cover', width: '100%', height: '100%'}}/>
    )
}