"use client"

import { useSearchParams } from 'next/navigation'

export default function Product() {
    const searchParams = useSearchParams()

    return (
        <div>{JSON.parse(searchParams.get('product') as string).title}</div>
    )
}