import { store } from "../store";

export const PRODUCT_ARRAY = [
    {
        seller : 'flipkart',
        products : [
            {
            name : 'shoe',
            image : 'shoe_img',
            rating : 3,
            price : 200,
            }, 
            {
                name : 'pant',
                image : 'pant_img',
                rating : 2,
                price : 400,
            }, 
        ]
    },
    {
        seller : 'amazon',
        products : [
            {
                name : 'pant',
                image : 'pant_img',
                rating : 1,
                price : 300
            }, 
        ]
    }
]


export const addAproductAction = (productObject) => {
    let productsArray = store.getState().productState.productListArray;
    let addIndex = -1;
    for (let index = 0; index < productsArray.length; index++) {
        const sellerName = productsArray[index].seller;
        if (sellerName === productObject.seller) {
            addIndex = index;
        }
    }
    if (addIndex === -1) {
        productsArray.push(productObject)
    } else {
        console.log(productObject);
        productsArray[addIndex].products.push(productObject.products[0]);
    }

    console.log(productsArray);
    
    return {type : 'updateList', productListArray : [...productsArray]}
}