export const maxCartNum = 20

export const deliveryCharge = 3000

export const minPrice = 10000

export type soldOutOptionType = '제품이 없을 경우 담기 방법 설정' | '배송 전 전화' | '유사한 상품으로 대체' | '품절상품 금액만큼 환불'

export const soldOutOption: soldOutOptionType[] = [
    '제품이 없을 경우 담기 방법 설정',
    '배송 전 전화',
    '유사한 상품으로 대체',
    '품절상품 금액만큼 환불'
]

export const shopSearchRadius = 1000; //단위 m