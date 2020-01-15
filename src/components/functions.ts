export function formatMoney(num: number): string {
    let result = ''
    let str = num.toString().split("").reverse();
    for (let i = 0; i < str.length; i++) {
        if (i !== 0 && i % 3 === 0) result += ','
        result += str[i]
    }

    return result.split("").reverse().join("");
}