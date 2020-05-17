import React, { useRef, useEffect } from 'react'

function LazyImage({
    loadingSource,
    source,
    className,
    style,
    observer,
}: any) {
    const myRef = useRef(null)
    useEffect(() => {
        observer.observe(myRef.current)
        return () => {
            observer.unobserve(myRef.current)
        }
    }, [])
    return (
        <img className={className} style={style} src={loadingSource} data-src={source} ref={myRef} />
    )
}

export default LazyImage