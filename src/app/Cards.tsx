"use client"

import React from "react";
import products from "@/models/products";
import Product from "@/types/product";
import Image from "next/image";
import styled from "styled-components";
import Card from "@/app/Card";

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`

export default function Cards() {
    return (
        <CardsContainer>
            {
                products.map((item: Product) => (
                    <Card product={item}/>
                ))
            }
        </CardsContainer>
    )
}