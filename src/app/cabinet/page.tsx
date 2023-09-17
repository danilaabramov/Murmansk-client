"use client"

import styled from "styled-components";
import Head from "next/head";
import Image from "next/image";
import {NextFont} from "next/dist/compiled/@next/font";
import {Montserrat} from "next/font/google";
import Edit from "@/icons/Edit";
import MiniCard from "@/app/cabinet/MiniCard"

const inter: NextFont = Montserrat({weight: '600', subsets: ['latin', 'cyrillic']})

const CabinetContainer = styled.div`
    padding: 29px 90px;
`

const CardsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px
`

const MainCard = styled.div`
    width: 100vw;
    height: 300px;
    background: #fff;
    border-radius: 18px;
    padding: 15px;
    box-shadow: 13.41523px 8.90378px 44.5189px 0 rgba(199, 199, 199, 0.60);
`

const Card = styled.div`
    width: calc((100% - 20px) / 2);
    height: 300px;
    background: #fff;
    border-radius: 18px;
    padding: 15px;
    box-shadow: 13.41523px 8.90378px 44.5189px 0 rgba(199, 199, 199, 0.60);
`

const MainCardContent = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

`

const Avatar = styled.div`
    height: 100px;
    width: 100px;
    background: #EDEDED;
    border-radius: 100%;
    cursor: pointer;
    margin-top: 10px;
` 

const CardContent = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`

const Username = styled.h1`
    margin-top: 30px;
    font-size: 24px
`

const Email = styled.p`
    margin-top: 3px;
    text-decoration: underline;
    font-size: 14px;
    color: #959595;
`

const MainText = styled.button`
    margin-top: 35px;
    font-size: 13px;

    &:hover {
        color: #9bcbba;
        text-decoration: underline;
    }
`

const H2 = styled.h2`
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    margin-top: 30px;
    margin-left: 30px;
`

const Text = styled.div`
    margin-left: 30px;
    margin-top: 30px;
    font-size: 14px
`

export default function cabinet() {
    return (
        <CabinetContainer>
            <CardsContainer>
                <MainCard>
                    <MainCardContent>
                        <Avatar>
                            <Image 
                            src="/favicon.ico" 
                            alt='' 
                            width={100}
                            height={100}
                            style={{borderRadius: '100%'}}
                            />
                        </Avatar>

                        <Username className={inter.className}>Неопознанный енот</Username>
                        
                        <Email>enot@yandex.ru</Email>

                        <MainText><Edit/>Изменить данные</MainText>

                    </MainCardContent>
                </MainCard>
    
                <Card>
                    <CardContent>
                        <H2 className={inter.className}>Избранное</H2>
                        <Text>
                        </Text>
                    </CardContent>
                </Card>

                <Card> 
                    <CardContent>
                        <H2 className={inter.className}>Мои отзывы</H2>
                    </CardContent>  
                </Card>

                <Card>
                    <CardContent>
                        <H2 className={inter.className}>Покупки</H2>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent>
                        <H2 className={inter.className}>Карта жителя</H2>
                    </CardContent>
                </Card>
            </CardsContainer>
        </CabinetContainer>
    )
}