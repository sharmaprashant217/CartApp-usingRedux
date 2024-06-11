import React from 'react';
import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useSelector, useDispatch} from 'react-redux';
import {
  addProductsToMyCart,
  deleteMyCartItem,
  removeMyCartItem,
} from '../redux/MyCartSlice';
import {useNavigation} from '@react-navigation/native';
import {decreaseQty, increaseQty} from '../redux/MyProductSlice';

const MyProducts = () => {
  const myProducts = useSelector(state => state.product);
  const myCartItems = useSelector(state => state.cart);
  console.log('added products in cart', myCartItems);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const getTotal = () => {
    let total = 0;
    myCartItems.map(item => {
      total = total + item.qty * item.price;
    });
    return total;
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          width: '100%',
          height: 60,
          flexDirection: 'row',
          alignItems: 'center',
          paddingLeft: 20,
          backgroundColor: '#fff',
          shadowColor: 'black',
          shadowOffset: {height: 1, width: 1},
          shadowOpacity: 0.6,
          shadowRadius: 5,
        }}>
        <Text style={{fontSize: 20, fontWeight: '700'}}>
          Redux Toolkit Demo
        </Text>
      </View>
      <FlatList
        data={myProducts}
        renderItem={({item, index}) => {
          return (
            <View
              style={{
                width: '94%',
                height: 120,
                backgroundColor: '#fff',
                alignSelf: 'center',
                marginTop: 10,
                borderRadius: 10,
                shadowColor: 'black',
                shadowOffset: {height: 1, width: 1},
                shadowOpacity: 0.6,
                shadowRadius: 5,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                style={{
                  height: 100,
                  width: 135,
                  borderRadius: 10,
                }}
                source={{uri: item.image}}
              />
              <View>
                <Text style={{fontSize: 16, color: '#000', fontWeight: '600'}}>
                  {item.name}
                </Text>
                <Text style={{fontWeight: '600', color: 'grey'}}>
                  {item.brand}
                </Text>
                <Text style={{color: 'green', fontWeight: '600', fontSize: 16}}>
                  {'₹ ' + item.price}
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 5,
                  }}>
                  {item.qty == 0 ? (
                    <TouchableOpacity
                      style={{
                        backgroundColor: 'green',
                        borderRadius: 10,
                        height: 25,
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingLeft: 10,
                        paddingRight: 10,
                      }}
                      onPress={() => [
                        dispatch(addProductsToMyCart(item)),
                        dispatch(increaseQty(item.id)),
                      ]}>
                      <Text style={{color: '#fff'}}>Add to Cart</Text>
                    </TouchableOpacity>
                  ) : null}
                  {item.qty == 0 ? null : (
                    <TouchableOpacity
                      style={{
                        backgroundColor: 'green',
                        borderRadius: 10,
                        height: 25,
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingLeft: 10,
                        paddingRight: 10,
                        marginLeft: 10,
                      }}
                      onPress={() => {
                        if (item.qty > 1) {
                          [
                            dispatch(removeMyCartItem(item)),
                            dispatch(decreaseQty(item.id)),
                          ];
                        } else {
                          [
                            dispatch(deleteMyCartItem(item.id)),
                            dispatch(decreaseQty(item.id)),
                          ];
                        }
                      }}>
                      <Text style={{color: '#fff'}}>-</Text>
                    </TouchableOpacity>
                  )}
                  {item.qty == 0 ? null : (
                    <Text
                      style={{marginLeft: 10, fontSize: 16, fontWeight: '600'}}>
                      {item.qty}
                    </Text>
                  )}
                  {item.qty == 0 ? null : (
                    <TouchableOpacity
                      style={{
                        backgroundColor: 'green',
                        borderRadius: 10,
                        height: 25,
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingLeft: 10,
                        paddingRight: 10,
                        marginLeft: 10,
                      }}
                      onPress={() => {
                        [
                          dispatch(addProductsToMyCart(item)),
                          dispatch(increaseQty(item.id)),
                        ];
                      }}>
                      <Text style={{color: '#fff'}}>+</Text>
                    </TouchableOpacity>
                  )}
                </View>
              </View>
            </View>
          );
        }}
      />
      {myCartItems.length > 0 ? (
        <View
          style={{
            width: '100%',
            height: 60,
            backgroundColor: '#fff',
            position: 'absolute',
            bottom: 20,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={{
              width: '50%',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
            }}>
            <Text style={{fontSize: 16, fontWeight: '700', color: '#000'}}>
              {'added items ' + '(' + myCartItems.length + ')'}
            </Text>
            <Text>{'Total : ₹ ' + getTotal()}</Text>
          </View>
          <View
            style={{
              width: '50%',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
            }}>
            <TouchableOpacity
              style={{
                width: '70%',
                height: 35,
                backgroundColor: 'green',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 6,
              }}
              onPress={() => navigation.navigate('MyCart')}>
              <Text style={{color: '#fff'}}>View Cart</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : null}
    </SafeAreaView>
  );
};

export default MyProducts;
