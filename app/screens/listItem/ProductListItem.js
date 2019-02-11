import React from 'react';
import {View, Image, Text} from 'react-native';
import { Rating } from 'react-native-elements';


export default class ProductListItem extends React.PureComponent {
    render() {
       const {
        name,
        image,
        rating, 
        price
       } = this.props;
        return (
            <View style={{marginVertical : 10,}} key={price + new Date().getMilliseconds()}>
                    <View style={{flexDirection : 'row'}}>
                        <Image source={image} style={{height : 50, width : 50}}/>
                        <View>

                        <Text style={{fontSize : 20, paddingHorizontal:  20, color : 'blue'}}>{name}</Text>
                        <View style={{flexDirection : 'row'}} >
                        <Text style={{fontSize : 16,justifyContent : 'center', marginHorizontal: 20}}>{`$${price}`}</Text>
                        <Rating
                            imageSize={20}
                            readonly
                            startingValue={rating}
                            style={{}}
                        />
                        </View>
                        </View>
                    </View>                           
                    </View>
        )
    }
}