import ProductItemList from '@/components/ProductItemList';
import products from 'assets/data/products';
import { StyleSheet, View, FlatList } from 'react-native';


export default function MenuScreen() {
  return (
    <View >
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductItemList product={item} />}
        numColumns={2}
        contentContainerStyle={{ gap: 12, padding: 12 }}
        columnWrapperStyle={{ gap: 12 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
