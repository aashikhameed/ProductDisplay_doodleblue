import React from 'react';
import {View, Text, FlatList, ScrollView} from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';
import { bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import {FloatingAction} from 'react-native-floating-action';
import { addAproduct } from '../actions/ProductActions';
import ProductListItem from './listItem/ProductListItem';
import {Header} from 'react-native-elements';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { Actions } from 'react-native-router-flux';

const actions = [{
  icon: 
  <FontAwesome name={'plus'} color="white" size={20}  
  />
  ,
  name: 'new',
  position: 1,
  color: 'blue',
}];

class ProductListScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeSections: [],
            switchView : false,
        }
    }


    _renderSectionTitle = section => {
        return (
          <View style={{}}>
           
          </View>
        );
      };
    
      _renderHeader = section => {
        return (
          <View style={{backgroundColor : 'gray'}}>
            <Text style={{fontSize : 24, paddingHorizontal:  20, paddingVertical : 10}}>{section.seller}</Text>
          </View>
        );
      };
    
      _renderContent = section => {
        let total = 0;
        
        return (
          <View style={{}}>
            <View>
                {section.products.map((obj, index)=> {
                    total += obj.price;
                    return (
                    <ProductListItem
                      key={index}
                      name={obj.name}
                      rating={obj.rating}
                      image={obj.image}
                      price={obj.price}/>
                )
                })}
            </View>
            <Text style={{fontSize : 20, color : 'blue', paddingHorizontal:  20, marginVertical: 20}}>{`Total (${section.products.length} items) : $${total}`}</Text>
          </View>
        );
      };
    
      _updateSections = activeSections => {
        this.setState({ activeSections });
      };
    
      switchView() {
        this.setState({switchView : !this.state.switchView})
      }

      render() {
        
        return (
            <View style={{flex: 1, backgroundColor : 'white'}}>
            <Header
              leftComponent={{ text: 'Product list', style: { color: '#fff' } }}
              rightComponent={{ icon: 'link', color: '#fff', onPress : ()=> {
                this.switchView()
              } }}
            />
            {!this.state.switchView ? 
            <ScrollView>
            <Accordion
            expandMultiple
            sections={this.props.productListArray}
            activeSections={this.state.activeSections}
            renderSectionTitle={this._renderSectionTitle}
            renderHeader={this._renderHeader}
            renderContent={this._renderContent}
            onChange={this._updateSections}
        />
            </ScrollView>
            :
          <FlatList 
          data={this.props.productFlatListArray}
          renderItem={({item}) => (<ProductListItem name={item.name}
          rating={item.rating}
          image={item.image}
          price={item.price}/>) }
          />}
          <FloatingAction
            showBackground={true}
            actions={actions}
            overrideWithAction = {true}
            color='blue'
            onPressItem={
              (name) => {
                Actions.AddProductScreen()
                // this.props.navigateToScreen('ReferralAddToDoScreen',{});
              }
            }
          />
        </View>
          
        );
      }
}

const mapStateToProps = (state) => {
    console.log('dsfgsdgfsdfg', state);
    let productFlatListArray = [];
    for (let index = 0; index < state.productState.productListArray.length; index++) {
      for (let count = 0; count < state.productState.productListArray[index].products.length; count++) {
        const element = state.productState.productListArray[index].products[count];
        productFlatListArray.push(element);
      }
    }
    return {
        productListArray : state.productState.productListArray,
        productFlatListArray,
    }
}

const dispatchToProps = (dispatch) => {
    return bindActionCreators({
        addAproduct,
    }, dispatch)
}

export default connect(mapStateToProps, dispatchToProps)(ProductListScreen)