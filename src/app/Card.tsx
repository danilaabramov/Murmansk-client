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
  width: calc((100% - 80px) / 5);
  background: #fff;
  border-radius: 18px;
  padding: 15px;
  box-shadow: 0 0 44.5189px 0 rgba(199, 199, 199, .4);

  @media (max-width: 1199px) {
    width: calc((100% - 40px) / 5);
  }
  
  @media (max-width: 1023px) {
    width: calc((100% - 10px) / 2);
    font-size: 14px;
    padding: 10px;
  }
`

const ImageContainer = styled.div`
  width: 100%;
  aspect-ratio: 1;
  border-radius: 18px;
  overflow: hidden;
`

const PriceContainer = styled.div`
  height: 31px;
  font-size: 22px;
  display: flex;
  align-items: flex-end;
  margin-top: 25px;
  gap: 5px;

  @media (max-width: 1023px) {
    font-size: 18px;
  }
`

const Price = styled.div`
  line-height: 31px;
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

export default function Card({product}: { product: Product }) {
    return (
        <CardContainer>
            <Link href={{pathname: `/product/${product.title}`, query: {product: JSON.stringify(product)}}}>
                <ImageContainer>
                    <Image src={product.image} alt='product image' style={{width: '100%', height: '100%', objectFit: 'cover'}}></Image>
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
            </Link>
        </CardContainer>
    )
}