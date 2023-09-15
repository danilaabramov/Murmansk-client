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

const inter: NextFont = Montserrat({weight: '700', subsets: ['latin', 'cyrillic']})

const HeaderContainer = styled.header`
  height: 170px;
  background: #9BCBBA;
`;

const TopHeaderContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
  height: 40px;
`;

const MiddleHeaderContainer = styled.div<{fixed: boolean}>`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
  height: 90px;
  position: ${(props): string => (props.fixed ? 'fixed' : '')};
  margin-top: ${(props): string => (props.fixed ? '-40px' : '0')};
  width: 100vw;
  background: #9BCBBA;
`;

const BottomHeaderContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
  height: 40px;
  margin-top: 90px;
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
`

const Search = styled.div`
  height: 57px;
  width: calc(100vw - 791px);
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
  width:  70px;
  background: #EDEDED;
  border-radius: 100%;
  cursor: pointer;
`

export default function Header() {
    const [fixed, setFixed] = useState<boolean>(false)

    useEffect((): void => {
        document.addEventListener('scroll', (): void => {
            if(window.scrollY < 40) setFixed(false)
            else setFixed(true)
        })
    })

    return (
        <div>
            <HeaderContainer>
                <TopHeaderContainer></TopHeaderContainer>
                <MiddleHeaderContainer fixed={fixed}>
                    <Logo className={inter.className}><SvoyLogo/></Logo>
                    <Catalog/>
                    <Search>
                        <Magnifier/>
                        <InputSearch placeholder='Найти'/>
                    </Search>
                    <Icon><Cart/></Icon>
                    <Icon><Chat/></Icon>
                    <Icon><Notifications/></Icon>
                    <Avatar/>
                </MiddleHeaderContainer>
                <BottomHeaderContainer></BottomHeaderContainer>
            </HeaderContainer>
        </div>
    )
}