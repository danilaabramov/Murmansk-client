"use client"

import styled from "styled-components";
import Cart from "@/icons/Cart";
import Chat from "@/icons/Chat";
import Notifications from "@/icons/Notifications";
import Magnifier from "@/icons/Magnifier";
import {NextFont} from "next/dist/compiled/@next/font";
import {Montserrat} from "next/font/google";

const inter: NextFont = Montserrat({weight: '500', subsets: ['latin', 'cyrillic']})

const HeaderContainer = styled.header`
  height: 100px;
  background: #D9D9D9;
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.div`
  width: 170px;
  cursor: pointer;
`

const Catalog = styled.div`
  height: 57px;
  width: 130px;
  background: #EDEDED;
  border-radius: 18px;
  cursor: pointer;
`

const Search = styled.div`
  height: 57px;
  width: calc(100vw - 751px);
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

export default function Header() {
    return (
        <div>
            <HeaderContainer>
                <Logo/>
                <Catalog/>
                <Search style={inter.style}>
                    <Magnifier/>
                    <InputSearch placeholder='Найти'/>
                </Search>
                <Icon><Cart/></Icon>
                <Icon><Chat/></Icon>
                <Icon><Notifications/></Icon>
                <Avatar/>
            </HeaderContainer>
        </div>
    )
}