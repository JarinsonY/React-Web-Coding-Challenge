const ArrowLeft = (props) => {
    return (
        <svg
            width={props.width}
            height={props.height}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
            >
            <path
                d="M15 6l-6 6 6 6"
                stroke="currentColor"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export default ArrowLeft;
