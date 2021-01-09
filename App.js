import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { enableScreens } from 'react-native-screens'
import Home from './src/screens/Home/Home'
import Header from './src/components/Header/Header'
import News from './src/screens/News/News'
import MyTabBar from './src/components/MyTabBar/MyTabBar'
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
			headerMode='screen'>
			<Stack.Screen name='Home' component={HomeTab} />
		</Stack.Navigator>
	)
}

const Tab = createMaterialTopTabNavigator()

const HomeTab = () => {
	return (
		<Tab.Navigator
			timingConfig={{ duration: 1 }}
			swipeEnabled={false}
			initialRouteName='home'
			backBehavior='initialRoute'
			removeClippedSubviews={true}
			tabBarOptions={{ scrollEnabled: true }}
			tabBar={(props) => <MyTabBar {...props} />}>
			<Tab.Screen name='home' component={Home} />
			<Tab.Screen name='news' component={News} />
			<Tab.Screen name='live' component={News} />
			<Tab.Screen name='statistic' component={News} />
			<Tab.Screen name='table' component={News} />
			<Tab.Screen name='tickets' component={News} />
		</Tab.Navigator>
	)
}
