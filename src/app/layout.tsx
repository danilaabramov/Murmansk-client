import '@/styles/globals.css'
import '@/styles/reset.css'
import React, {ReactNode} from 'react'
import type {Metadata} from 'next'
import {Montserrat} from 'next/font/google'
import {NextFont} from "next/dist/compiled/@next/font";
import Head from "next/head";
import Header from "@/app/Header";
import StyledComponentsRegistry from '@/lib/registry'

const inter: NextFont = Montserrat({weight: '400', subsets: ['latin', 'cyrillic']})

export const metadata: Metadata = {
    title: 'Murmansk | Главная страница',
    description: 'Городской маркетплейс нового поколения',
}

export default function RootLayout({children}: { children: ReactNode }) {
    return (
        <html lang="ru">
        <Head>
            <meta charSet="UTF-8"/>
            <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <link rel="icon" type='image/svg' sizes='32x32' href="/favicon.ico"/>
        </Head>
        <body className={inter.className}>
        <StyledComponentsRegistry>
            <Header/>
            {children}
        </StyledComponentsRegistry>
        </body>
        </html>
    )
}
