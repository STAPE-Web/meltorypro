const Globe = (props: any) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="none"
            viewBox="0 0 20 20"
            {...props}
        >
            <g clipPath="url(#clip0_4279_552)">
                <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.67"
                    d="M1.667 10h16.666M1.667 10A8.333 8.333 0 0010 18.333M1.667 10A8.333 8.333 0 0110 1.667M18.333 10A8.333 8.333 0 0110 18.333M18.333 10A8.333 8.333 0 0010 1.667m0 0A12.75 12.75 0 0113.333 10 12.75 12.75 0 0110 18.333m0-16.666A12.75 12.75 0 006.667 10 12.75 12.75 0 0010 18.333"
                ></path>
            </g>
            <defs>
                <clipPath id="clip0_4279_552">
                    <path fill="#fff" d="M0 0H20V20H0z"></path>
                </clipPath>
            </defs>
        </svg>
    )
}

export default Globe