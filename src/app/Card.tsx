import Image from "next/image";
import React from "react";
import Product from "@/types/product";
import {NextFont} from "next/dist/compiled/@next/font";
import {Montserrat} from "next/font/google";
import styled from "styled-components";

const inter700: NextFont = Montserrat({weight: '700', subsets: ['latin', 'cyrillic']})
const inter300: NextFont = Montserrat({weight: '300', subsets: ['latin', 'cyrillic']})

const CardContainer = styled.div`
  width: 300px;
  height: 430px;
  padding: 15px;
  background: #fff;
  border-radius: 18px
`

const ImageContainer = styled.div`
  width: 270px;
  height: 270px;
  border-radius: 18px
`

const PriceContainer = styled.div`
  height: 31px;
  font-size: 22px;
  display: flex;
  align-items: flex-end;
  margin-top: 25px
`

const Price = styled.div`
  line-height: 31px;
  width: 92px
`

const PrevPrice = styled.div`
  line-height: 22px;
  font-size: 11px;
  text-decoration: line-through;
  color: #979797;
`

const Title = styled.div`
  height: 75px;
  display: flex;
  align-items: center

`

export default function Card({product} : {product: Product}) {
    return (
        <CardContainer>
            <ImageContainer>
                <Image src={product.image} alt=''></Image>
            </ImageContainer>
            <PriceContainer>
                <Price className={inter700.className}>
                    {`${product.price} ₽`}
                </Price>
                <PrevPrice className={inter300.className}>
                    {`${product.prevPrice} ₽`}
                </PrevPrice>
            </PriceContainer>
            <Title>
                Ремонт деревенских тапочек в Мурмаске
            </Title>
        </CardContainer>
    )
}