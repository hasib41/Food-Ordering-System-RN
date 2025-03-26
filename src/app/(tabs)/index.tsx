import { StyleSheet, View, Text, Image } from 'react-native';
import ProductItemList from '@/src/components/productItemList';
import products from '@/assets/data/products';

export default function MenuScreen() {
  return (
    <View > 
        <ProductItemList product={products[0]}/>
        <ProductItemList product={products[1]}/>
    </View>
  );
}

const styles = StyleSheet.create({});
