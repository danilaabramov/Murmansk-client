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
      margin: 32px 32px;

      @media (max-width: 1199px) {
        margin: 32px 16px;
      }

      @media (max-width: 1023px) {
        margin: 16px 16px;
      }
    `

    const CarouselWrapper = styled.div`
      width: 100%;
      overflow: hidden;
      display: flex;
      gap: 90px;
      border-radius: 18px;
      
      @media (min-width: 1024px) {
        height: 370px;
      }

      @media (max-width: 1023px) {
        aspect-ratio: 1.7;
      }
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
      width: 0;

      @media (max-width: 1023px) {
        display: none;
      }
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