import { Stack } from "expo-router";

export default function MenuScreen(){
  return (
    <Stack>
      <Stack.Screen name="index" options={{headerShown: true, title: 'Menu'}}/>
    </Stack>
  )
}