import { StatusBar } from 'expo-status-bar';
import { StyleSheet} from 'react-native';
import {  NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import ManageExpense from './screens/ManageExpense';
import RecentExpenses from './screens/RecentExpenses';
import AllExpenses from './screens/AllExpenses';

const Stack = createNativeStackNavigator()
const BottomTabs = createBottomTabNavigator()

function ExpensesOverView(){
  return <BottomTabs.Navigator>
    <BottomTabs.Screen name='RecentExpenses' component={RecentExpenses}/>
    <BottomTabs.Screen name='AllExpenses' component={AllExpenses}/>
  </BottomTabs.Navigator>
}

export default function App() {
  return (
    
      <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='ExpensesOverView' component={ExpensesOverView}/>
          <Stack.Screen name='ManageExpense' component={ManageExpense}/>
        </Stack.Navigator>
      </NavigationContainer>
      </>
    
  );
}

const styles = StyleSheet.create({
  
});
