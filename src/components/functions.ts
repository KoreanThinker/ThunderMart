import { shopType } from "./types";

export function formatMoney(num: number): string {
    let result = ''
    let str = num.toString().split("").reverse();
    for (let i = 0; i < str.length; i++) {
        if (i !== 0 && i % 3 === 0) result += ','
        result += str[i]
    }

    return result.split("").reverse().join("");
}

export function shopName2shopType(name: string): shopType {
    if (name.includes('GS')) return 'GS'
    if (name.includes('CU')) return 'CU'
    if (name.includes('세븐일레븐')) return 'SEVEN'
    return 'ELSE'
}

export function shopType2Logo(type: shopType): string {
    switch (type) {
        case 'GS': return 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/GS25_bi_%282019%29.svg/1200px-GS25_bi_%282019%29.svg.png'
        case 'CU': return 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/CU_BI_%282017%29.svg/1200px-CU_BI_%282017%29.svg.png'
        case 'SEVEN': return 'https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FRgfiv%2FbtqwQkfumoF%2FMfSKFInBzIPjwXKm2azE81%2Fimg.jpg'
    }
    return 'https://data.ac-illust.com/data/thumbnails/cb/cbb85f5d9977e185b96c85fcbf770b27_t.jpeg'
}