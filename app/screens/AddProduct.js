import React from 'react';
import {View , Picker, TextInput, Alert} from 'react-native';
import {connect} from 'react-redux';
import { Dropdown } from 'react-native-material-dropdown';
import { Button, AirbnbRating, Header } from 'react-native-elements';
import { bindActionCreators } from 'redux';
import { addAproductAction } from '../actions/ProductActions';
import { Actions } from 'react-native-router-flux';
// import RegExp from 'regex';
let data = [{
    value: 'amazon',
  }, {
    value: 'flipkart',
  }, {
    value: 'shopclues',
  }];

  let productData = [{
    value: 'shirt',
  }, {
    value: 'pant',
  }, {
    value: 'shoe',
  }];

  let selectedProduct = '', selectedSeller = '', productRating = 0;
class AddProductScreen extends React.Component  {
    constructor(props) {
        super(props);
        selectedProduct = '';
         selectedSeller = '';
          productRating = 0;
        this.state = {
            language : '',
            constructObject : {
                seller : '',
                products : []
            },
            priceState : '',
        }
    }

    saveProductDetails() {
        let constructObject = {};
        if (selectedSeller === '') {
            alert('select a seller')
            return;
        }
        
        if (selectedProduct === '' ) {
            alert('select a product')
            return;
        }

        const  isnum = /^\d+$/.test(this.state.priceState);;
        if (!isnum) {
            alert('should not contain special characters')
            return;
        }

        if (this.state.priceState.trim() === '') {
            alert('Enter price')
            return;
        }
        
        constructObject.seller = selectedSeller;
        let productDetails = {
            name : selectedProduct,
            image : selectedProduct==='pant' ? 
            require('../images/pant_img.png') : selectedProduct==='shirt' ?
            require('../images/facebook_img.png') : require('../images/shoes_img.png'),
            price : parseInt(this.state.priceState),
            rating : productRating,
        }
        constructObject.products = [];
        constructObject.products.push(productDetails);
        console.log(constructObject);
        
        this.props.addAproductAction(constructObject);
        Alert.alert('Save successful', 'press ok to go back', [
            {text: 'ok', onPress: () => Actions.pop()},{
            title : 'ok', 
            onPress: ()=> Actions.pop(),
        }])
    }

    ratingCompleted(rating) {
       productRating = rating;
    }
      

    render() {
        return (
            <View style={{flex: 1}}>
            <Header
              leftComponent={{ text: 'back', color: 'white', onPress : ()=> {
                Actions.pop()
              } }}
              centerComponent={{ text: 'Add Product', color: 'white',}}
              rightComponent={{ }}
            />
            <View style={{ paddingHorizontal : 20}}>
                <Dropdown
                    label='Choose seller'
                    data={data}
                    onChangeText={(value, index)=> {
                        selectedSeller = value;
                    }}
                />

                <Dropdown
                    label='Choose product'
                    data={productData}
                    onChangeText={(value, index)=> {
                        selectedProduct = value;
                    }}
                />
                <TextInput 
                    placeholder='Enter product price'
                    placeholderTextColor='gray'
                    maxLength={6}
                    style={{ marginVertical : 20, paddingHorizontal : 5, backgroundColor : 'white', minHeight : 50}}
                    value={this.state.priceState}
                    onChangeText={(priceState)=>this.setState({priceState})}
                    keyboardType='number-pad'
                />

                <AirbnbRating
                defaultRating={0}
                showRating = {false}
                onFinishRating={(rating)=> this.ratingCompleted(rating)}
                style={{ paddingBottom: 20 }}
                />

                <Button 
                style={{marginTop : 20}}
                    title='Save'
                    onPress={()=> {
                        this.saveProductDetails();
                    }}/>
            </View>
                
            </View>
        )
    }
}

const mapSateToProps = (state) => {
    return {

    }
}

const dispatchToProps = (dispatch) => {
    return bindActionCreators({
        addAproductAction,
    }, dispatch)
}

export default connect(mapSateToProps, dispatchToProps)(AddProductScreen)