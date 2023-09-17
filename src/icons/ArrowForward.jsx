import * as React from "react"
const SvgComponent = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width={25} height={25} fill="none">
        <g clipPath="url(#a)">
            <path
                fill="#000"
                fillOpacity={0.5}
                d="M17.403 20.097 9.807 12.5l7.596-7.597L15.93 3.43 6.86 12.5l9.07 9.07 1.473-1.473Z"
            />
        </g>
        <defs>
            <clipPath id="a">
                <path fill="#fff" d="M25 25H0V0h25z" />
            </clipPath>
        </defs>
    </svg>
)
export default SvgComponent
