export function useObserver() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((item: any) => {
            if (item.intersectionRatio <= 0) return 
            else {
                const { target } = item
                const url = (target as any).dataset.src
                target.setAttribute('src', url)
                observer.unobserve(target)                
            }
        })
    })
    return observer
}