import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import Colors from '../constants/Colors'
import { Product } from '@assets/types'
import { Link } from 'expo-router'

type ProductItemListProps ={
  product : Product
}


const ProductItemList = ({product}: ProductItemListProps) => {
  return (
    <Link href={`/menu/${product.id}`} asChild>
      <Pressable style={styles.container}> 
          <Image style={styles.Image} source={{uri: product.image}} resizeMode='contain' />
          <Text style={styles.title}>{product.name}</Text>
          <Text style={styles.prize}>${product.price}</Text>
      </Pressable>
    </Link>
  )
}

export default ProductItemList

const styles = StyleSheet.create({
  container: {
    backgroundColor : 'white',
    borderRadius: 20,
    padding: 10,
    flex: 1,
    maxWidth: '50%'
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