import * as React from "react"
const SvgComponent = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none">
        <g fill="#000" clipPath="url(#a)">
            <path d="m2 22 4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v18ZM4 4h16v12H5.171L4 17.172V4Z" />
            <path d="M12 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM16 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM8 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
        </g>
        <defs>
            <clipPath id="a">
                <path fill="#fff" d="M0 0h24v24H0z" />
            </clipPath>
        </defs>
    </svg>
)
export default SvgComponent
