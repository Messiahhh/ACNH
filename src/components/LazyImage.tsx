import React, { useRef, useEffect } from 'react'

interface LazyImageType {
    loadingSource: string,
    source: string,
    observer: any,
    className?: string,
    style?: React.CSSProperties,
    onClick?: () => void,
}

function LazyImage({
    loadingSource,
    source,
    className,
    style,
    observer,
    onClick,
}: LazyImageType) {
    const myRef = useRef<HTMLImageElement | null>(null)
    useEffect(() => {
        observer.observe(myRef.current)
        return () => {
            observer.unobserve(myRef.current)
        }
    }, [])
    return (
        <img className={className} style={style} src={loadingSource} data-src={source} ref={myRef} onClick={onClick}/>
    )
}

export default LazyImage