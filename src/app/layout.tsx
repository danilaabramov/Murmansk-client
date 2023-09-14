import '@/styles/globals.css'
import '@/styles/reset.css'
import type {Metadata} from 'next'
import {Montserrat} from 'next/font/google'
import React, {ReactNode} from 'react'
import {NextFont} from "next/dist/compiled/@next/font";
import Head from "next/head";
import Header from "@/app/Header";

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
            <title>Murmansk</title>
        </Head>
        <body className={inter.className}>
        <Header/>
        {children}
        </body>
        </html>
    )
}
