export type itemType = {
    id: string,
    name: string,
    image: string,
    price: number
}

export type shopNameType = 'GS' | 'CU' | 'SEVEN' | 'ELSE'

export type signInType = 'facebook' | 'kakao'

export type orderStateType = "접수중" | "상품 구매중" | "배송중" | "배송 완료" | "주문 취소"