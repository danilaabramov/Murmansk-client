import * as React from "react"
const SvgComponent = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width={22} height={27} fill="none">
        <g
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.667}
            filter="url(#a)"
        >
            <path d="M11 17.5c2.917-3 5.833-5.686 5.833-9s-2.611-6-5.833-6-5.833 2.686-5.833 6 2.916 6 5.833 9Z" />
            <path d="M11 10a1.667 1.667 0 1 0 0-3.333A1.667 1.667 0 0 0 11 10Z" />
        </g>
        <defs>
            <filter
                id="a"
                width={28}
                height={28}
                x={-3}
                y={0}
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
            >
                <feFlood floodOpacity={0} result="BackgroundImageFix" />
                <feColorMatrix
                    in="SourceAlpha"
                    result="hardAlpha"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feOffset dy={4} />
                <feGaussianBlur stdDeviation={2} />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_42_2479" />
                <feBlend
                    in="SourceGraphic"
                    in2="effect1_dropShadow_42_2479"
                    result="shape"
                />
            </filter>
        </defs>
    </svg>
)
export default SvgComponent
