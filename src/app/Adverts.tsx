"use client"

import adverts from "@/models/adverts";
import Advert from "@/app/Advert";
import ArrowForward from "@/icons/ArrowForward";
import React, {useEffect, useState} from "react";
import styled from "styled-components";

export default function Adverts() {
    const [currentAdvert, setCurrentAdvert] = useState<number[]>([0, 0])

    const CarouselContainer = styled.div`
      max-width: 1504px;
      display: flex;
      align-items: center;
      margin: 0 32px;
    `

    const CarouselWrapper = styled.div`
      margin: 50px 0;
      width: 100%;
      aspect-ratio: 16 / 5;
      overflow: hidden;
      display: flex;
      gap: 90px;
      border-radius: 18px
    `

    const Carousel = styled.div`
      z-index: 0;
      animation: slide 1s ease-in-out forwards;
      display: flex;
      
      @keyframes slide {
        from { transform: translateX(calc(-100% * ${currentAdvert[0]})); }
        to { transform: translateX(calc(-100% *  ${currentAdvert[1]})); }
      }
    `

    const ArrowLeft = styled.div`
      width: 55px;
      height: 55px;
      position: relative;
      background: rgba(217, 217, 217, .5);
      border-radius: 100%;
      transform: translate(22px, 0);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1
    `

    const Arrow = styled.div`
      width: 0
    `

    const ArrowRight = styled.div`
      width: 55px;
      height: 55px;
      position: relative;
      background: rgba(217, 217, 217, .5);
      border-radius: 100%;
      transform: translate(-77px, 0) rotate(180deg);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1
    `

    useEffect((): () => void => {
        const interval: NodeJS.Timeout = setInterval(
            () => setCurrentAdvert(
                (ca: number[]): number[] => ca[1] < adverts.length - 1 ? [ca[1], ++ca[1]] : [ca[1], 0]
            ), 10000
        )
        return (): void => {
            clearInterval(interval)
        }
    }, [...currentAdvert])

    return (
        <CarouselContainer>
            <Arrow>
                <ArrowLeft onClick={() => setCurrentAdvert(
                    (ca: number[]): number[] => ca[1] ? [ca[1], --ca[1]] : [ca[1], adverts.length - 1] )}>
                    <ArrowForward/>
                </ArrowLeft>
            </Arrow>
                    <CarouselWrapper>
                        <Carousel>
                            {
                                adverts.map((item: any, index: number) => (
                                    <Advert image={item.image} key={index}/>
                                ))
                            }
                        </Carousel>
                    </CarouselWrapper>
            <Arrow>
                <ArrowRight onClick={() => setCurrentAdvert(
                    (ca: number[]): number[] => ca[1] < adverts.length - 1 ? [ca[1], ++ca[1]] : [ca[1], 0]
                )}>
                    <ArrowForward/>
                </ArrowRight>
            </Arrow>
        </CarouselContainer>
    )
}