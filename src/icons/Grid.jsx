import * as React from "react"
const SvgComponent = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none">
        <g fill="#000" clipPath="url(#a)">
            <path d="M11 2H2v9h9V2ZM9 9H4V4h5v5ZM22 2h-9v9h9V2Zm-2 7h-5V4h5v5ZM11 13H2v9h9v-9Zm-2 7H4v-5h5v5ZM22 13h-9v9h9v-9Zm-2 7h-5v-5h5v5Z" />
        </g>
        <defs>
            <clipPath id="a">
                <path fill="#fff" d="M0 0h24v24H0z" />
            </clipPath>
        </defs>
    </svg>
)
export default SvgComponent
