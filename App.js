import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { enableScreens } from 'react-native-screens'
import Home from './src/screens/Home/Home'
import Header from './src/components/Header/Header'
import News from './src/screens/News/News'
import { View } from 'react-native'
enableScreens()

const App = () => {
	return (
		<NavigationContainer>
			<MyStack />
		</NavigationContainer>
	)
}

export default App

const Stack = createStackNavigator()
const MyStack = () => {
	return (
		<Stack.Navigator
			screenOptions={{
				header: () => {
					return <Header />
				}
			}}
			headerMode="screen">
			<Stack.Screen name="Home" component={HomeTab} />
		</Stack.Navigator>
	)
}

const Tab = createMaterialTopTabNavigator()
const HomeTab = () => {
	return (
		<Tab.Navigator
			swipeEnabled={false}
			tabBarOptions={{
				scrollEnabled: true,
				style: { backgroundColor: '#030610', height: 40 },
				tabStyle: { width: 100 },
				indicatorStyle: { backgroundColor: '#fafafa' },
				labelStyle: { fontFamily: 'Oswald-Medium', fontSize: 16 },
				activeTintColor: '#fafafa',
				inactiveTintColor: '#3E4346'
			}}>
			<Tab.Screen name="Home" component={Home} />
			<Tab.Screen name="News" component={News} />
			<Tab.Screen name="live" component={News} />
			<Tab.Screen name="statistic" component={News} />
			<Tab.Screen name="table" component={News} />
			<Tab.Screen name="tickets" component={News} />
		</Tab.Navigator>
	)
}
