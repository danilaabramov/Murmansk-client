"use client";

import { useSearchParams } from "next/navigation";
import styled from "styled-components";
import { Montserrat } from "next/font/google";
import { NextFont } from "next/dist/compiled/@next/font";
import Image from "next/image";
import Product from "@/types/product";

const inter: NextFont = Montserrat({
    weight: "700",
    subsets: ["latin", "cyrillic"],
});

const PositionContainer = styled.div`
    background: #f1f1f1;
`;

const H1 = styled.h1`
    font-size: 40px;
`;

const StoreContainer = styled.div`
    width: 100%;
    height: 300px;
    background: #fff;
    border-radius: 18px;
    padding: 15px;
    box-shadow: 13.41523px 8.90378px 44.5189px 0 rgba(199, 199, 199, 0.6);
    margin: 0 0 3vw 0;
`;

const ImageContainer = styled.div`
    width: 26.6vw;
    height: 26.6vw;
    border-radius: 18px;
    background: #fff;
    box-shadow: 13.41523px 8.90378px 44.5189px 0 rgba(199, 199, 199, 0.6);
    float: left;
`;

const Desc = styled.div`
    font-size: 30px;
    color: #94a3b8;
    line-height: 140%; /* 42px */
    word-break: break-all;
`;

const ReDesc = styled.div`
    font-size: 20px;
    line-height: 140%; /* 42px */
    word-break: break-all;
`;

const BuyContainer = styled.div`
    width: 500px;
    height: 94.6px;
    float: right;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const BuyButton = styled.div`
    background: #9bcbba;
    width: 350px;
    height: 94.6px;
    float: right;
    border-radius: 18px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 13.41523px 8.90378px 44.5189px 0 rgba(199, 199, 199, 0.6);
`;

const ButtonText = styled.div`
    font-size: 30px;
`;

const ReviewsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Card = styled.div`
    width: 49%;
    height: 300px;
    background: #fff;
    border-radius: 18px;
    padding: 30px 30px 30px 30px;
    box-shadow: 13.41523px 8.90378px 44.5189px 0 rgba(199, 199, 199, 0.6);
`;

const CardContent = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`;

export default function Product() {
    const searchParams = useSearchParams();
    return (
        <PositionContainer>
            <div style={{ padding: "3vw 10vw 3vw 10vw" }}>
                <StoreContainer></StoreContainer>
                <div style={{ height: "26.6vw", margin: "0px 0px 3vw 0px" }}>
                    <div
                        style={{
                            padding: "0px 5vw 0px 0px",
                        }}
                    >
                        <ImageContainer
                            style={{
                                margin: "0px 5vw 0px 0px",
                            }}
                        ></ImageContainer>
                        <div style={{ margin: "0px 0px 2vw 0px" }}>
                            <H1
                                className={inter.className}
                                style={{ padding: "2vw 0px 0px 0px" }}
                            >
                                {
                                    JSON.parse(
                                        searchParams.get("product") as string
                                    ).title
                                }
                            </H1>

                            <Desc style={{ margin: "2vw 0px 0px 0px" }}>
                                ДескрипшнДескрипшнДескрипшнДескрипшнДескрипшнДескрипшнДескрипшнДескрипшнДес
                            </Desc>
                            <ReDesc style={{ margin: "2vw 0px 0px 0px" }}>
                                ДескрипшнДескрипшнДескрипшнДескрипшнДескрипшнДескрипшнДескрипшнДескрипшнДескрипшнДескрипшнДескрипшнДескрипшнДескрипшнДескрипшнДескрипшнДескрипшнДес
                            </ReDesc>
                        </div>
                    </div>
                    <BuyContainer>
                        <H1
                            className={inter.className}
                            style={{ float: "left" }}
                        >
                            {
                                JSON.parse(
                                    searchParams.get("product") as string
                                ).price
                            }
                            ₽
                        </H1>
                        <BuyButton>
                            <ButtonText className={inter.className}>
                                В корзину
                            </ButtonText>
                        </BuyButton>
                    </BuyContainer>
                </div>
                <div style={{ margin: "0px 0px 0px 4vw" }}>
                    <H1 className={inter.className}>Отзывы</H1>
                </div>
                <ReviewsContainer style={{ margin: "2vw 0px 0px 0px" }}>
                    <Card>
                        <CardContent>
                            <Desc className={inter.className}>Лида</Desc>
                            <ReDesc>
                                Отзыв отзыв отзыв отзыв отзыв отзыв отзыв отзыв
                                отзыв отзыв отзыв отзыв отзыв отзыв отзыв отзыв
                                отзыв отзыв отзыв отзыв отзыв отзыв
                            </ReDesc>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent>
                            <Desc className={inter.className}>Мои отзывы</Desc>
                            <ReDesc>Избранное</ReDesc>
                        </CardContent>
                    </Card>
                </ReviewsContainer>
            </div>
        </PositionContainer>
    );
}
