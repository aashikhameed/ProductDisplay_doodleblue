import { PRODUCT_ARRAY } from "../actions/ProductActions";


const initialState = {
    productListArray : [
        {
            seller : 'flipkart',
            products : [
                {
                    name : 'shoe',
                    image : require('../images/shoes_img.png'),
                    rating : 3,
                    price : 103,
                }, 
                {
                    name : 'pant',
                    image : require('../images/pant_img.png'),
                    rating : 2,
                    price : 200,
                }, 
            ]
        },
        {
            seller : 'amazon',
            products : [
                {
                    name : 'pant',
                    image : require('../images/shoes_img.png'),
                    rating : 1,
                    price : 500
                }, 
            ]
        },
        
    ]
}


export default function ProcuctReducer  (state = initialState, action) {
    switch (action.type) {
        case 'updateList': 
            return {
                ...state,
                productListArray : action.productListArray,
            }     
        default : 
            return state; 
    }
}