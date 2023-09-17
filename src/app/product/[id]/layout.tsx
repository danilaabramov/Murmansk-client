import React, {ReactNode} from 'react'
import type {Metadata} from 'next'

export const metadata: Metadata = {
    title: 'Свой | Страница товара',
    description: 'Городской маркетплейс нового поколения',
}

export default function RootLayout({children}: { children: ReactNode }) {
    return (
        <>
            {children}
        </>
    )
}
