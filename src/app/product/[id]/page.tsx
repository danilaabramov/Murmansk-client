"use client";

import { useSearchParams } from "next/navigation";
import styled from "styled-components";
import { Montserrat } from "next/font/google";
import { NextFont } from "next/dist/compiled/@next/font";
import Image from "next/image";
import Product from "@/types/product";
import Link from "next/link";
import Edit from "@/icons/Edit";

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
    box-shadow: 13.41523px 8.90378px 44.5189px 0 rgba(199, 199, 199, 0.6);
    margin: 0px 0px 3vw 0px;
    padding: 35px 35px 35px 35px;
`;

const StoreImageContainer = styled.div`
    height: 225px;
    width: 225px;
    border-radius: 18px;
    background: #000;
    float: right;
`;

const StoreName = styled.div`
    font-size: 30px;
    color: #94a3b8;
    line-height: 140%; /* 42px */
    word-break: break-word;
    margin: 25px 0px 0px 50px;
`;

const StoreDesc = styled.div`
    font-size: 20px;
    line-height: 140%; /* 42px */
    word-break: break-word;
    margin: 25px 0px 0px 50px;
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
    word-break: break-word;
`;

const ReDesc = styled.div`
    font-size: 20px;
    line-height: 140%; /* 42px */
    word-break: break-word;
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
    padding: 50px 50px 50px 50px;
    box-shadow: 13.41523px 8.90378px 44.5189px 0 rgba(199, 199, 199, 0.6);
`;

const CardContent = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const DateField = styled.div`
    font-size: 15px;
    line-height: 140%; /* 42px */
    word-break: break-word;
`;

const Comments = styled.div`
    font-size: 15px;
    line-height: 140%; /* 42px */
    word-break: break-word;
    float: right;
    color: #9bcbba;
    &:hover {
        text-decoration: underline;
    }
`;

export default function Product() {
    const searchParams = useSearchParams();
    return (
        <PositionContainer>
            <div style={{ padding: "3vw 10vw 3vw 10vw" }}>
                <StoreContainer>
                    <StoreImageContainer></StoreImageContainer>
                    <StoreName>Модус</StoreName>
                    <StoreDesc>
                        Магазин модной одежды и обуви в Мурманске. У нас вы
                        сможете подобрать: Верхнюю одежду, платья, блузы, брюки,
                        костюмы, свитера, туники, футболки. А также большой
                        ассортимент комфортной обуви.
                    </StoreDesc>
                    <StoreDesc style={{ fontSize: "15px" }}>
                        ​Проспект Кирова, 49 (4 филиала)
                    </StoreDesc>
                </StoreContainer>
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
                        >
                            <Image
                                src={
                                    JSON.parse(
                                        searchParams.get("product") as string
                                    ).image
                                }
                                alt="product image"
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                }}
                            ></Image>
                        </ImageContainer>
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
                                Эффектные модные туфли - на устойчивом каблуке
                                для истинных леди
                            </Desc>
                            <ReDesc style={{ margin: "2vw 0px 0px 0px" }}>
                                Удобная колодка позволит Вам провести на ногах
                                целый день. Наличие платформы обеспечивает
                                комфорт и удобство, высота каблука неощутима.
                                Элегантные удобные женские туфли на высоком
                                подъёме. Представленная модель выполнена из
                                искусственной мягкой кожи.
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
                            <Desc>Вероника</Desc>
                            <ReDesc>
                                Легкие, удобные, каблук даже не ощущается, мне
                                понравились, ношу с удовольствием. Спасибо
                                производителю.
                            </ReDesc>
                            <div>
                                <DateField style={{ float: "left" }}>
                                    18 сент 2023
                                </DateField>
                                <Comments>
                                    <Edit />
                                    <Link
                                        href=""
                                        style={{
                                            margin: "0px 0px 0px 5px",
                                        }}
                                    >
                                        Комментировать
                                    </Link>
                                </Comments>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent>
                            <Desc>Виктория</Desc>
                            <ReDesc>
                                Брала дочке. Подошли на 41 длина 26,5. Носит с
                                удовольствием, легкие, но кожаные думаю были бы
                                практичнее, и вытирать проще и следы не
                                остаются.
                            </ReDesc>
                            <div>
                                <DateField style={{ float: "left" }}>
                                    18 сент 2023
                                </DateField>
                                <Comments>
                                    <Edit />
                                    <Link
                                        href=""
                                        style={{
                                            margin: "0px 0px 0px 5px",
                                        }}
                                    >
                                        Комментировать
                                    </Link>
                                </Comments>
                            </div>
                        </CardContent>
                    </Card>
                </ReviewsContainer>
            </div>
        </PositionContainer>
    );
}
