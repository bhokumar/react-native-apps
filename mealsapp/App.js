import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createDrawerNavigator} from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailsScreen from './screens/MealDetailsScreen';
import FavoritesScreen from './screens/FavoritesScreen';
//import FavoriteContextProvider from './store/context/favorite-context';
import store from './store/redux/store';
import { Provider } from 'react-redux';
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#351401',
        },
        headerTintColor: '#fff',
        sceneContainerStyle: {
          backgroundColor: '#3f2f25'
        },
        drawerContentStyle: {
          backgroundColor: '#3f2f25',
          color: '#fff',
        },
        drawerInactiveTintColor: '#fff',
        drawerActiveTintColor: '#3f2f25',
        drawerActiveBackgroundColor: '#f3f3f3',
      }}
    >
      <Drawer.Screen name="MealsCategories" component={CategoriesScreen}
        options={{
          title: 'All Categories',
          drawerIcon: ({ color, size }) => {
            return <Ionicons name="list" size={size} color={color} />
        }}}
      />
      <Drawer.Screen 
        name="FavoriteScreen" 
        component={FavoritesScreen}
        options={{
          title: 'Favorite Categories',
          drawerIcon: ({ color, size }) => {
            return <Ionicons name="star" size={size} color={color} />
        }}}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    //<FavoriteContextProvider>
    <Provider store={store}>
      <>
        <StatusBar style="light" />
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: {
                backgroundColor: '#351401',
              },
              headerTintColor: '#fff',
              contentStyle: {
                backgroundColor: '#3f2f25'
              }
            }}
          >
            <Stack.Screen 
              name="DrawerScreen" 
              component={DrawerNavigator} 
              options={{ 
                headerShown: false,
              }}
            />
            <Stack.Screen 
              name="MealsOverview" 
              component={MealsOverviewScreen} 
              // options={({ route, navigation}) => {
              //   const { categoryTitle } = route.params;
              //   return {
              //     title: categoryTitle,
              //   };
              // }}
            />
            <Stack.Screen
              name="MealDetails"
              component={MealDetailsScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </>
    </Provider>
    //</FavoriteContextProvider>
  );
}
