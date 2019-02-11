import React from 'react';
import {View} from 'react-native';
import { Scene, Router } from 'react-native-router-flux';
import ProductListScreen from './ProductListScreen';
import AddProduct from './AddProduct';

class RootComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{flex :1}}>
            <Router>
                <Scene key="root" hideNavBar>
                    <Scene key="ProductListScreen" component={ProductListScreen} initial/>
                    <Scene key="AddProductScreen" component={AddProduct}/>
                </Scene>
            </Router>
            </View>
        )
    }
}

export default RootComponent;