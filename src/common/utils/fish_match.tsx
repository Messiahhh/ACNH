/**
 * @param {number} month
 * @param {string} interval
 * @returns {boolean}
 */
function monthMatchInterval(month: number, interval: string): boolean {
    const [month_start, month_end] = interval.split('-').map(i => Number(i))
    if (month_start > month_end) {
        if (month >= month_start || month <= month_end) return true
    }
    else {
        if (month >= month_start && month <= month_end) return true
    }
    return false
}

export function matchMonth(month: number, interval: string): boolean{
    if (month === 0 || interval === '') return true
    if (interval.includes('&')) {
        const [interval_a, interval_b] = interval.split('&').map(s => s.trim())
        return monthMatchInterval(month, interval_a) || monthMatchInterval(month, interval_b)
    } else {
        return monthMatchInterval(month, interval)
    }
}

export function matchPlace(p1: string, p2: string): boolean {
    if (p1 === '') return true
    if (p2.includes('&')) {
        const [place_a, place_b] = p2.split('&').map(s => s.trim())
        return p1 === place_a || p1 === place_b
    }
    return p1 === p2
}

export function matchSize(s1: string, s2: string): boolean {
    if (s1 === '') return true
    if (s1 === 'fin' && s2.includes('fin')) return true
    if (s1.includes('6') && s2.includes('fin (6)')) return true 
    if (s1.includes('Medium') && s2.includes('fin (4)')) return true
    return s1 === s2 
}