import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React, { useState } from 'react'
import { Stack, useLocalSearchParams } from 'expo-router'
import products from '@assets/data/products'
import Colors from '@/constants/Colors'
import Button from '@/components/Button'

const sizes = ['X','M', 'L', 'XL']

const ProductDetailsScreen = () => {
  const { id } = useLocalSearchParams();
  const product = products.find((p) => p.id.toString() === id)

  const [selectSize, setSelectSize] = useState('X')

  const addToCart = () => {
     console.warn("Added Successfully, Size :", selectSize)
  }

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: product?.name }} />
      <Image style={styles.image} source={{ uri: product?.image }} />
      <Text>Select Pizza</Text>
      <View
        style={styles.pizzaSize}>
        {sizes.map((size, index) => (
          <Pressable
            key={index}
            style={[styles.size, { backgroundColor: selectSize === size ? 'gainsboro' : 'white' }]}
            onPress={() => { setSelectSize(size) }}>
            <Text style={[styles.sizeText, { color: selectSize === size ? 'black' : 'gray' }]} key={index}>{size}</Text>
          </Pressable>
        ))}
      </View>
      <Text style={styles.price}>${product?.price}</Text>
      <Button onPress={addToCart} text='Add to Cart'/>
    </View>
  )
}

export default ProductDetailsScreen

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    padding: 10,
    backgroundColor: 'white',
    flex: 1
  },
  image: {
    width: "auto",
    aspectRatio: 1
  },
  price: {
    color: Colors.light.tint,
    fontWeight: 'bold',
    fontSize: 18
  },
  pizzaSize: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10
  },
  size: {
    backgroundColor: 'gainsboro',
    width: 50,
    aspectRatio: 1,
    borderRadius: '50%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  sizeText: {
    fontSize: 18,
    fontWeight: '500'
  }
})