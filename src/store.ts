import Vue from 'vue'
import Vuex from 'vuex'
import {inCard, inCardAll, productList, thisState} from '@/types';
Vue.use(Vuex);

function getLocalData(): inCard[]{
    let products: inCard[] = [];
    if(localStorage.getItem('products')){
        try {
            let inCardProducts: any = localStorage.getItem('products');
            products = JSON.parse(inCardProducts);
        } catch(e) {
            localStorage.removeItem('products');
            products = [];
        }
    }
    return products;
}
export default new Vuex.Store<thisState>({
    state: {
        dataLoaded:false,
        productList:[],
        inCard:[]
    },
    getters: {
        SHOPPING_CART_LIST: (state: thisState) => {
            let inCardArray: inCardAll = {
                inCard:[],
                sumPrice:0
            };
            let cartArray: inCard[] = [];
            if(state.productList && state.inCard.length>0){
                for (let j=0; j<state.inCard.length; j++){
                    let tmp: inCard = {
                        id: 0,
                        count: 0,
                    };
                    if(state.productList.find(product => product.id === state.inCard[j].id)){
                        tmp.productData = state.productList.find(product => product.id === state.inCard[j].id);
                        tmp.count = state.inCard[j].count;
                        tmp.id    = state.inCard[j].id;
                        cartArray.push(tmp);
                        if(tmp.productData !== undefined){
                           inCardArray.sumPrice += tmp.count * tmp.productData.price;
                        }
                    }
                }
            }
            inCardArray.inCard = cartArray;
            return inCardArray
        },
        SHOPPING_CART_COUNTER: (state: thisState) => {
            let count:number = 0;
            for (let i=0; i<state.inCard.length; i++){
                count += state.inCard[i].count;
            }
            return count;
        },
    },
    mutations: {
        SET_SHOP: (state: thisState, freshData: productList[]) => {
            state.productList = freshData;
            state.dataLoaded = true;
        },
        SET_CARD_LIST: (state: thisState, products: inCard[]) => {
            state.inCard = products;
        },
        BUY_ITEM: (state: thisState, itemIndex: number) => {
            let reversed: inCard[] = getLocalData().length>0 ? getLocalData().reverse() : [];
            let tmp: inCard = {
                id: 0,
                count: 0,
            };
            tmp.count = 1;
            tmp.id = state.productList[itemIndex].id;
            for (let i = 0; i < reversed.length; i++) {
                if (reversed[i].id === tmp.id) {
                    tmp.count = reversed[i].count+1;
                    reversed.splice(i, 1);
                }
            }
            if(tmp.id !== 0){
                reversed.push(tmp);
            }
            state.inCard = reversed.reverse();
            localStorage.setItem('products',  JSON.stringify(state.inCard));
        },
        INCREMENT_ITEM: (state: thisState, itemIndex: number) => {
            state.inCard[itemIndex].count++;
            localStorage.setItem('products',  JSON.stringify(state.inCard));
        },
        DECREMENT_ITEM: (state: thisState, itemIndex: number) => {
            state.inCard[itemIndex].count--;
            if(state.inCard[itemIndex].count <= 0){
                state.inCard.splice(itemIndex, 1);
            }
            localStorage.setItem('products',  JSON.stringify(state.inCard));
        },
        REMOVE_ITEM: (state: thisState, itemIndex: number) => {
            state.inCard.splice(itemIndex, 1);
            localStorage.setItem('products',  JSON.stringify(state.inCard));
        },
        CLEAR_CART: (state: thisState) => {
            state.inCard = [];
            localStorage.removeItem('products');
        }
    },
    actions: {
        SET_SHOP: (context, freshData: productList[]) => {
            context.commit('SET_SHOP', freshData)
        },
        SET_CARD_LIST: (context) => {
            context.commit('SET_CARD_LIST', getLocalData());
        },
        BUY_ITEM: (context, itemIndex: number) => {
            context.commit('BUY_ITEM', itemIndex)
        },
        INCREMENT_ITEM: (context, itemIndex: number) => {
            context.commit('INCREMENT_ITEM', itemIndex)
        },
        DECREMENT_ITEM: (context, itemIndex: number) => {
            context.commit('DECREMENT_ITEM', itemIndex)
        },
        REMOVE_ITEM: (context, itemIndex: number) => {
            context.commit('REMOVE_ITEM', itemIndex)
        },
        CLEAR_CART: (context) => {
            context.commit('CLEAR_CART')
        },
    }
})
