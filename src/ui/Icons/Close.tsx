const Close = (props: any) => {
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
                strokeOpacity="0.624"
                strokeWidth="1.67"
                d="M15 5L5 15M5 5l10 10"
            ></path>
        </svg>
    )
}

export default Close