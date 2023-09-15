"use client"

import advert from "@/models/advert";
import Advert from "@/app/Advert";

export default function Adverts() {
    return (
        <>
            <div style={{width: 55, height: 55, position: 'absolute', background: 'rgba(217, 217, 217, .5)', borderRadius: '100%',
                transform: 'translate(112px, calc(-2px + ((100vw - 180px) / 32 * 5)))', cursor: 'pointer'}}></div>
            <div style={{width: 55, height: 55, position: 'absolute', background: 'rgba(217, 217, 217, .5)', borderRadius: '100%', right: 0,
                transform: 'translate(-112px, calc(-2px + ((100vw - 180px) / 32 * 5)))', cursor: 'pointer'}}></div>
            <div style={{padding: '50px 90px', aspectRatio: 16 / 5, overflow: 'hidden', display: 'flex', gap: 90}}>
                {
                    advert.map((item : any, index: number) => (
                        <Advert image={item.image} key={index}/>
                    ))
                }
            </div>
        </>
    )
}