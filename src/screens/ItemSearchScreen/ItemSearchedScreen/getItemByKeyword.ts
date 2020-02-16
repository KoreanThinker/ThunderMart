import { shopNameType, itemType } from './../../../components/types';
const secret = require('../../../../secret.json')

export default async function (shop: shopNameType, keyword: string): Promise<itemType[]> {
    try {
        const getLogin = await fetch(`${secret.endPoint}/items/list?shop=${shop}&keyword=${keyword}`, {
            method: 'GET'
        })
        const res = await getLogin.json()
        if (res.res_code === 0) {
            return res.item_list as itemType[]
        } else {
            throw new Error('get item by category error')
        }
    } catch (error) {
        throw error
    }

}