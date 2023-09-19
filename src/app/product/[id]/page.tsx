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

const PositionPage = styled.div`
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
    @media (max-width: 1023px) {
        padding: 10px 10px 10px 10px;
        height: 100px;
    }
`;

const StoreImageContainer = styled.div`
    height: 225px;
    width: 225px;
    border-radius: 18px;
    background: #000;
    float: right;
    @media (max-width: 1023px) {
        width: 80px;
        height: 80px;
    }
`;

const StoreName = styled.div`
    font-size: 30px;
    color: #94a3b8;
    line-height: 140%; /* 42px */
    word-break: break-word;
    margin: 25px 0px 0px 50px;
    @media (max-width: 1023px) {
        margin: 10px 0px 0px 10px;
        font-size: 20px;
    }
`;

const StoreDesc = styled.div`
    font-size: 20px;
    line-height: 140%; /* 42px */
    word-break: break-word;
    margin: 25px 0px 0px 50px;
    @media (max-width: 1080px) {
        display: none;
    }
`;

const StoreAddress = styled.div`
    fontsize: "15px";
    line-height: 140%; /* 42px */
    word-break: break-word;
    margin: 25px 0px 0px 50px;
    @media (max-width: 1023px) {
        margin: 10px 0px 0px 10px;
        font-size: 10px;
    }
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
    @media (max-width: 1023px) {
        margin: 5px 0px 0px 5px;
        font-size: 10px;
    }
`;

const ReDesc = styled.div`
    font-size: 20px;
    line-height: 140%; /* 42px */
    word-break: break-word;
    @media (max-width: 1023px) {
        font-size: 8px;
    }
`;

const BuyContainer = styled.div`
    width: 500px;
    height: 94.6px;
    float: right;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 1023px) {
        width: 125px;
        height: 23.65px;
    }
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
    @media (max-width: 1023px) {
        width: 87.5px;
        height: 23.65px;
    }
`;

const ButtonText = styled.div`
    font-size: 30px;
    @media (max-width: 1023px) {
        font-size: 10px;
    }
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

const ProductName = styled.h1`
    font-size: 40px;
    max-width: 1504px;
    width: calc(100% - 64px);

    @media (max-width: 1199px) {
        width: calc(100% - 32px);
    }

    @media (max-width: 1023px) {
        font-size: 20px;
    }

    @media (max-width: 767px) {
        font-size: 20px;
    }
`;
const ProductContent = styled.div`
    margin: 0px 0px 2vw 0px;
`;
const ProductPosition = styled.div`
    height: 26.6vw;
    margin: 0px 0px 3vw 0px;
    @media (max-width: 1023px) {
        margin: 0px 0px 0vw 0px;
    }
`;
const ProductPrice = styled.h1`
    font-size: 40px;

    @media (max-width: 1023px) {
        font-size: 20px;
    }
`;
const ReviewTitle = styled.h1`
    font-size: 40px;
  margin-top: 180px;
    @media (max-width: 1023px) {
        font-size: 20px;
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
                        Крупнейший гипермаркет в г. Мурманск. Большой выбор
                        товаров для дома, одежды и обуви. Высокое качество,
                        выгодная цена. Скидка 10% на весь ассортимент для новых
                        покупателей.
                    </StoreDesc>
                    <StoreAddress>​Проспект Кирова, д.49</StoreAddress>
                </StoreContainer>
                <ProductPosition>
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
                        <ProductContent>
                            <ProductName
                                className={inter.className}
                                style={{ padding: "2vw 0px 0px 0px" }}
                            >
                                {
                                    JSON.parse(
                                        searchParams.get("product") as string
                                    ).title
                                }
                            </ProductName>

                            <Desc style={{ margin: "2vw 0px 0px 0px" }}>
                                {
                                    JSON.parse(
                                        searchParams.get("product") as string
                                    ).desc
                                }
                            </Desc>
                            <ReDesc style={{ margin: "2vw 0px 0px 0px" }}>
                                {
                                    JSON.parse(
                                        searchParams.get("product") as string
                                    ).reDesc
                                }
                            </ReDesc>
                        </ProductContent>
                    </div>
                    <BuyContainer>
                        <ProductPrice
                            className={inter.className}
                            style={{ float: "left" }}
                        >
                            {
                                JSON.parse(
                                    searchParams.get("product") as string
                                ).price
                            }
                            ₽
                        </ProductPrice>
                        <BuyButton>
                            <ButtonText className={inter.className}>
                                В корзину
                            </ButtonText>
                        </BuyButton>
                    </BuyContainer>
                </ProductPosition>
                <div style={{ margin: "0px 0px 0px 4vw" }}>
                    <ReviewTitle className={inter.className}>
                        Отзывы
                    </ReviewTitle>
                </div>
                <ReviewsContainer style={{ margin: "2vw 0px 0px 0px" }}>
                    <Card>
                        <CardContent>
                            <Desc>Вероника</Desc>
                            <ReDesc>
                                Отличное приобретение! Одна из лучших покупок,
                                которые я совершала за последнее время. Всё
                                пришло как на фото.
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
                                Брала в качестве подарка, качество на высоте.
                                Особенно порадовали быстрая доставка и надёжная
                                упаковка. Действительно хорошая вещь. Буду
                                заказывать ещё.
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
