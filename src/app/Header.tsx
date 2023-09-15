"use client"

import React, {useEffect, useState} from "react"
import styled from "styled-components";
import Cart from "@/icons/Cart";
import Chat from "@/icons/Chat";
import Notifications from "@/icons/Notifications";
import Magnifier from "@/icons/Magnifier";
import {NextFont} from "next/dist/compiled/@next/font";
import {Montserrat} from "next/font/google";
import SvoyLogo from "@/icons/SvoyLogo";
import Grid from "@/icons/Grid";
import Location from "@/icons/Location";
import Link from "next/link";

const inter: NextFont = Montserrat({weight: '700', subsets: ['latin', 'cyrillic']})

const HeaderContainer = styled.header`
  height: 170px;
  background: #9BCBBA;
`;

const TopHeaderContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: space-between;
  height: 40px;
  padding: 0 90px;
`;

const MiddleHeaderContainer = styled.div<{ scroll: number }>`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
  height: 90px;
  position: ${(props): string => (props.scroll >= 40 ? 'fixed' : '')};
  margin-top: ${(props): string => (props.scroll >= 40 ? '-40px' : '0')};
  width: 100vw;
  background: #9BCBBA;
  z-index: 1000;
`;

const BottomHeaderContainer = styled.div<{ scroll: number }>`
  display: flex;
  align-items: center;
  height: 40px;
  justify-content: space-between;
  margin-top: ${(props): string => (props.scroll >= 40 ? '90px' : '0')};
  color: rgba(0, 0, 0, ${(props): number => (20 / props.scroll)});
  padding: 0 90px;
`;

const Logo = styled.div`
  cursor: pointer;
`

const Catalog = styled.div`
  height: 57px;
  width: 150px;
  background: #EDEDED;
  border-radius: 18px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-size: 18px;

`

const Search = styled.div`
  height: 57px;
  width: calc(100vw - 820px);
  background: #EDEDED;
  border-radius: 18px;
  display: flex;
  align-items: center;
  padding: 0 23px;
  gap: 26px
`

const InputSearch = styled.input`
  width: calc(100% - 50px);
`

const Icon = styled.div`
  height: 57px;
  width: 57px;
  background: #EDEDED;
  border-radius: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

const Avatar = styled.div`
  height: 70px;
  width: 70px;
  background: #EDEDED;
  border-radius: 100%;
  cursor: pointer;
`

const LinksTop = styled.div`
  display: flex;
  gap: 36px;
  align-items: center;
  height: 40px;
`

const LinkTop = styled.div`
  cursor: pointer;
`

const LinkBottom = styled.div`
  font-size: 20px;
  cursor: pointer;
`

const LocationContainer = styled.div`
  cursor: pointer;
  display: flex;
  margin-top: 5px;
  gap: 3px
`

export default function Header() {
    const [scroll, setScroll] = useState<number>(0)

    useEffect((): void => {
        document.addEventListener('scroll', (): void => {
            setScroll(window.scrollY)
        })
    })

    return (
        <div>
            <HeaderContainer>
                <TopHeaderContainer>
                    <LocationContainer><Location/>Мурмурманск</LocationContainer>
                    <LinksTop>
                        <LinkTop>Стать продавцом</LinkTop>
                        <LinkTop>О маркетплейсе</LinkTop>
                        <LinkTop>Бла бла бла бла</LinkTop>
                        <LinkTop>Абудаби детка</LinkTop>
                    </LinksTop>
                </TopHeaderContainer>
                <MiddleHeaderContainer scroll={scroll}>
                    <Link href='/'>
                        <Logo className={inter.className}><SvoyLogo/></Logo>
                    </Link>
                    <Catalog><Grid/>Каталог</Catalog>
                    <Search>
                        <Magnifier/>
                        <InputSearch placeholder='Поиск услуги'/>
                    </Search>
                    <Icon><Cart/></Icon>
                    <Icon><Chat/></Icon>
                    <Icon><Notifications/></Icon>
                    <Avatar/>
                </MiddleHeaderContainer>
                <BottomHeaderContainer scroll={scroll}>
                    <LinkBottom>Категория</LinkBottom>
                    <LinkBottom>Категория</LinkBottom>
                    <LinkBottom>Категория</LinkBottom>
                    <LinkBottom>Категория</LinkBottom>
                    <LinkBottom>Категория</LinkBottom>
                    <LinkBottom>Категория</LinkBottom>
                </BottomHeaderContainer>
            </HeaderContainer>
        </div>
    )
}