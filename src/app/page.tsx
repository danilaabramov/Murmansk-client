"use client"

import Cards from "@/app/Cards";
import styled from "styled-components";
import Adverts from "@/app/Adverts";
import {NextFont} from "next/dist/compiled/@next/font";
import {Montserrat} from "next/font/google";

const inter: NextFont = Montserrat({weight: '700', subsets: ['latin', 'cyrillic']})

const HomeContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`

const H1 = styled.h1`
  font-size: 40px;
  max-width: 1504px;
  width: calc(100% - 64px);

  @media (max-width: 1199px) {
    width: calc(100% - 32px);
  }

  @media (max-width: 1023px) {
    font-size: 30px;
  }

  @media (max-width: 767px) {
    font-size: 25px;
  }
`

export default function Home() {
    return (
        <HomeContainer>
            <Adverts/>
            <H1 className={inter.className}>Рекомендации для вас</H1>
            <Cards/>
        </HomeContainer>
    )
}
