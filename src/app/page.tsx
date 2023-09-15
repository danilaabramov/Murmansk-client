"use client"

import Cards from "@/app/Cards";
import styled from "styled-components";


const HomeContainer = styled.div`
  background: #F1F1F1
`
export default function Home() {
  return (
      <HomeContainer>
        <Cards/>
      </HomeContainer>
  )
}
