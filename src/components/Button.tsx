import React from 'react'

interface FancyButtonProps {
    type?: string,
    size?: string,
    shape?: string,
    className?: string,
    onClick?: React.MouseEventHandler<HTMLElement>,
    children?: React.ReactNode,
}

const InternalFancyButton: React.ForwardRefRenderFunction<unknown, FancyButtonProps> = (props, ref) => {
    const ButtonRef = (ref as any) || React.createRef<HTMLElement>()
    return (
        <button
            className={props.className}
            onClick={props.onClick}
            ref={ButtonRef}
        >
            {props.children}
        </button>
    )
}

const FancyButton = React.forwardRef(InternalFancyButton)


export default FancyButton