import { StyleSheet, View, Text, Image } from 'react-native';
import Colors from '@/src/constants/Colors';
import products from '@/assets/data/products';
import { FlatList } from 'react-native';

const Product = products[0];

export default function TabOneScreen() {
  return (
    <View style={styles.container}> 
        <Image style={styles.Image} source={{uri: Product.image}} />
        <Text style={styles.title}>{Product.name}</Text>
        <Text style={styles.prize}>${Product.price}</Text>
    </View>
  );
}

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
