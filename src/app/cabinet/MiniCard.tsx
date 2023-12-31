"use client"

import Image from "next/image";
import React from "react";
import Product from "@/types/product";
import {NextFont} from "next/dist/compiled/@next/font";
import {Montserrat} from "next/font/google";
import styled from "styled-components";
import Link from "next/link";

const inter700: NextFont = Montserrat({weight: '700', subsets: ['latin', 'cyrillic']})
const inter300: NextFont = Montserrat({weight: '300', subsets: ['latin', 'cyrillic']})

const CardContainer = styled.div`
  width: 140px;
  height: 188px;
  background: #fff;
  border-radius: 8px;
  padding: 15px;
  box-shadow: 13.41523px 8.90378px 44.5189px 0 rgba(199, 199, 199, 0.60);
`

const ImageContainer = styled.div`
  width: 115px;
  height: 115px;
  border-radius: 8px;
`

const PriceContainer = styled.div`
    height: 17.079px;
    font-size: 14px;
    display: flex;
    align-items: flex-end;
    margin-top: 15px
`

const Price = styled.div`
  line-height: 31px;
  width: 55px
`

const PrevPrice = styled.div`
  line-height: 22px;
  font-size: 6.971px;
  text-decoration: line-through;
  color: #979797;
`

const Title = styled.div`
  height: 20px;
  display: flex;
  align-items: center;
  font-size: 6px;
`

export default function Card({product} : {product: Product}) {
    return (
        <Link href={{pathname: `/product/${product.title}`, query: {product: JSON.stringify(product)}}}>
            <CardContainer>
                <ImageContainer>
                    <Image src={product.image} alt='' style={{width: '100%', height: '100%'}}></Image>
                </ImageContainer>
                <PriceContainer>
                    <Price className={inter700.className}>
                        {`${product.price} ₽`}
                    </Price>
                    <PrevPrice className={inter300.className}>
                        {`${product.prevPrice} ₽`}
                    </PrevPrice>
                </PriceContainer>
                <Title>{product.title}</Title>
            </CardContainer>
        </Link>
    )
}