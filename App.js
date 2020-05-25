import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';
import useCachedResources from './hooks/useCachedResources';
import StartScreen from './screens/StartScreen';
import Form1 from './screens/Form1'
import Form2 from './screens/Form2';
import Form3 from './screens/Form3';
import Form4 from './screens/Form4';
import Form5 from './screens/Form5';
import Final from './screens/FinalScreen';
import { Form } from 'formik';


const Stack = createStackNavigator();

export default function App({}) {
  const isLoadingComplete = useCachedResources();
  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" headerShown= "false"  >
        <Stack.Screen name="Start"  component={StartScreen} options={{ headerShown: false}}/>
        <Stack.Screen name="Form1" component={Form1}  options={{ headerShown: false} } />
        <Stack.Screen name="Form2" component={Form2}  options={{ headerShown: false} } />
        <Stack.Screen name="Form3" component={Form3}  options={{ headerShown: false} } />
        <Stack.Screen name="Form4" component={Form4}  options={{ headerShown: false} } />
        <Stack.Screen name="Form5" component={Form5}  options={{ headerShown: false} } />
        <Stack.Screen name="Final" component={Final}  options={{ headerShown: false} } />
      </Stack.Navigator>
    </NavigationContainer>
    );
  }
}



