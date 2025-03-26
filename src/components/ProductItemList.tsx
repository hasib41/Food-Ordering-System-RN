import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Colors from '../constants/Colors'
import products from '@/assets/data/products';


const ProductItemList = ({product}) => {
  return (
    <View style={styles.container}> 
        <Image style={styles.Image} source={{uri: product.image}} />
        <Text style={styles.title}>{product.name}</Text>
        <Text style={styles.prize}>${product.price}</Text>
    </View>
  )
}

export default ProductItemList

const styles = StyleSheet.create({
  container: {
    backgroundColor : 'white',
    borderRadius: 20,
    padding: 10
  },
  Image: {
    width: 'auto',
    aspectRatio: 1
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
  },
  prize: {
    color: Colors.light.tint ,
    fontWeight: 'bold'
  }
});