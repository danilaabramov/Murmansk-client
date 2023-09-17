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
import Home from "@/icons/Home";
import Person from "@/icons/Person";

const inter: NextFont = Montserrat({weight: '700', subsets: ['latin', 'cyrillic']})

const MobileMenu = styled.div`
  height: 52px;
  background: #fff;
  width: 100vw;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  box-shadow: 0 4px 20px rgba(0, 0, 0, .1);  

  @media (min-width: 1024px) {
    display: none;
  }
`;

const MobileIcon = styled.div`
  width: calc(100% / 5);
  
  & a {
    width: 100%;
    height: 52px;
    align-items: center;
    display: flex;
    justify-content: center;
    cursor: pointer;
  }
`;

const HeaderContainer = styled.header`
  height: 170px;
  background: #9BCBBA;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1199px) {
    height: 260px;
  }

  @media (max-width: 1023px) {
    height: 60px;
  }
`;

const TopHeaderContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: space-between;
  height: 40px;
  max-width: 1504px;
  width: calc(100% - 64px);

  @media (max-width: 1199px) {
    width: calc(100% - 32px);
  }

  @media (max-width: 1023px) {
    display: none;
  }
`;

const MiddleHeaderContainer = styled.div<{ scroll: number }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 90px;
  position: ${(props): string => (props.scroll >= 40 ? 'fixed' : '')};
  background: #9BCBBA;
  z-index: 1000;
  width: 100%;
  padding: 0 max(32px, calc((100% - 1504px) / 2));
  flex-wrap: wrap;

  @media (max-width: 1199px) {
    padding: 0 max(16px, calc((100% - 1504px) / 2));
    height: 180px;
  }

  @media (max-width: 1023px) {
    height: 60px;
    position: fixed;
    gap: 20px;
    padding: 0 max(16px, calc((100% - 1504px) / 2));
  }
`;

const LeftHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  height: 90px;
  gap: 20px;

  @media (max-width: 1023px) {
    display: none;
  }
`;

const RightHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  height: 90px;
  gap: 20px;

  @media (max-width: 1023px) {
    gap: 0;
    height: 60px;
  }
`;

const BottomHeaderContainer = styled.div<{ scroll: number }>`
  display: flex;
  align-items: center;
  height: 40px;
  justify-content: space-between;
  margin-top: ${(props): string => (props.scroll >= 40 ? '90px' : '0')};
  color: rgba(0, 0, 0, ${(props): number => (20 / props.scroll)});
  max-width: 1504px;
  width: calc(100% - 64px);

  @media (max-width: 1199px) {
    margin-top: ${(props): string => (props.scroll >= 40 ? '180px' : '0')};
    width: calc(100% - 32px);
  }

  @media (max-width: 1023px) {
    margin-top: ${(props): string => (props.scroll >= 40 ? '90px' : '0')};
    display: none;
  }
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
  width: calc(100% - 650px);
  background: #EDEDED;
  border-radius: 18px;
  display: flex;
  align-items: center;
  padding: 0 23px;
  gap: 26px;
  flex-grow: 1;
  position: relative;
  margin: 0 20px;

  @media (max-width: 1199px) {
    width: 100%;
    order: 1;
    margin: 0;
  }

  @media (max-width: 1023px) {
    order: 0;
    width: calc(100% - 230px);
    height: 48px;
  }
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

  @media (max-width: 1023px) {
    display: none;

    &:nth-child(2) {
      display: flex;
      width: 48px;
      height: 48px;
    }
  }
`

const Avatar = styled.div`
  height: 70px;
  width: 70px;
  background: #EDEDED;
  border-radius: 100%;
  cursor: pointer;

  @media (max-width: 1023px) {
    display: none;
  }
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
                <LeftHeaderContainer>
                    <Link href='/'>
                        <Logo className={inter.className}><SvoyLogo/></Logo>
                    </Link>
                    <Catalog><Grid/>Каталог</Catalog>
                </LeftHeaderContainer>
                <Search>
                    <Magnifier/>
                    <InputSearch placeholder='Поиск услуги'/>
                </Search>
                <RightHeaderContainer>
                    <Icon><Cart/></Icon>
                    <Icon><Chat/></Icon>
                    <Icon><Notifications/></Icon>
                    <Link href='/cabinet'><Avatar/></Link>
                </RightHeaderContainer>
            </MiddleHeaderContainer>
            <BottomHeaderContainer scroll={scroll}>
                <LinkBottom>Категория</LinkBottom>
                <LinkBottom>Категория</LinkBottom>
                <LinkBottom>Категория</LinkBottom>
                <LinkBottom>Категория</LinkBottom>
                <LinkBottom>Категория</LinkBottom>
                <LinkBottom>Категория</LinkBottom>
            </BottomHeaderContainer>

            <MobileMenu>
                <MobileIcon><Link href='/'><Home/></Link></MobileIcon>
                <MobileIcon><Link href='/'><Grid/></Link></MobileIcon>
                <MobileIcon><Link href='/'><Cart/></Link></MobileIcon>
                <MobileIcon><Link href='/'><Notifications/></Link></MobileIcon>
               <MobileIcon><Link href='/cabinet' ><Person/></Link></MobileIcon>
            </MobileMenu>
        </HeaderContainer>
    )
}