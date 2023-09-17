"use client"

import React from "react";
import products from "@/models/products";
import Product from "@/types/product";
import styled from "styled-components";
import Card from "@/app/Card";

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin: 29px 32px;
  max-width: 1504px;
  padding-bottom: 52px;

  @media (max-width: 1199px) {
    gap: 10px;
  }

  @media (max-width: 1199px) {
    margin: 29px 16px;
  }
`

export default function Cards() {
    return (
        <CardsContainer>
            {
                products.map((item: Product, index: number) => (
                    <Card product={item} key={index}/>
                ))
            }
        </CardsContainer>
    )
}