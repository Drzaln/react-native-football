import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { enableScreens } from 'react-native-screens'
import Home from './src/screens/Home/Home'
import Header from './src/components/Header/Header'
import News from './src/screens/News/News'
import MyTabBar from './src/components/MyTabBar/MyTabBar'
import Live from './src/screens/Live/Live'
import Statistic from './src/screens/Statistic/Statistic'
import Blank from './src/screens/Blank/Blank'
import Detail from './src/screens/Detail/Detail'
import { timing } from 'react-native-reanimated'
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
				header: (props) => {
					return <Header {...props} />
				},
				gestureEnabled: false,
				transitionSpec: {
					open: { animation: timing, config: { duration: 10 } },
					close: { animation: timing, config: { duration: 10 } }
				},
				cardStyleInterpolator: ({ current: { progress } }) => {
					return {
						cardStyle: {
							opacity: progress,
						}
					}
				}
			}}
			headerMode='screen'>
			<Stack.Screen name='Home' component={HomeTab} />
			<Stack.Screen name='Detail' component={DetailTab} />
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
			sceneContainerStyle={{ backgroundColor: '#030610' }}
			tabBarOptions={{ scrollEnabled: true }}
			tabBar={(props) => <MyTabBar mode='scroll' {...props} />}>
			<Tab.Screen name='home' component={Home} />
			<Tab.Screen name='news' component={News} />
			<Tab.Screen name='live' component={Live} />
			<Tab.Screen name='statistic' component={Statistic} />
			<Tab.Screen name='table' component={Blank} />
			<Tab.Screen name='tickets' component={Blank} />
		</Tab.Navigator>
	)
}

const DetailTab = () => {
	return (
		<Tab.Navigator
			timingConfig={{ duration: 1 }}
			swipeEnabled={false}
			initialRouteName='home'
			backBehavior='initialRoute'
			removeClippedSubviews={true}
			sceneContainerStyle={{ backgroundColor: '#030610' }}
			tabBarOptions={{ scrollEnabled: true }}
			tabBar={(props) => <MyTabBar {...props} />}>
			<Tab.Screen name='serie a' component={Detail} />
			<Tab.Screen name='ucl' component={Blank} />
			<Tab.Screen name='coppa italia' component={Blank} />
			<Tab.Screen name='super cup' component={Blank} />
		</Tab.Navigator>
	)
}
