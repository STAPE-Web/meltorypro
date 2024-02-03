const Menu = (props: any) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="none"
            viewBox="0 0 20 20"
            {...props}
        >
            <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.67"
                d="M2.5 10h15m-15-5h15m-15 10h15"
            ></path>
        </svg>
    )
}

export default Menu