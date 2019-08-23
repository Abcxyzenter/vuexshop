export interface thisState {
    dataLoaded: boolean,
    productList: productList[],
    inCard: inCard[]
}
export interface productList {
    id: number,
    price: number,
    image: string,
    name: string
}
export interface inCardAll {
    inCard: inCard[],
    sumPrice: number
}
export interface inCard {
    count: number,
    id: number,
    productData?:productList
}

