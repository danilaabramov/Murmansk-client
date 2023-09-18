"use client"

import React from "react";
import products from "@/models/products";
import Product from "@/types/product";
import styled from "styled-components";
import Card from "@/app/cabinet/MiniCard";

const CardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`

export default function Cards() {
    return (
        <CardsContainer>
            {
                products.filter((item: Product, index: number) => index < 3).map((item: Product, index: number) => (
                    <Card product={item} key={index}/>
                ))
            }
        </CardsContainer>
    )
}