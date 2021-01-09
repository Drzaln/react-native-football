import React, { createRef, useCallback, useEffect, useRef, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { enableScreens } from 'react-native-screens'
import Home from './src/screens/Home/Home'
import Header from './src/components/Header/Header'
import News from './src/screens/News/News'
import { Text, TouchableOpacity, View } from 'react-native'
import Indicator from './src/components/TopNavigation/Indicator'
import { ScrollView } from 'react-native-gesture-handler'
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

function MyTabBar({ state, navigation }) {
	const [ measures, setMeasures ] = useState([])
	const [ refresh, setRefresh ] = useState(new Date())
	const isSelected = useRef()
	const containerRef = useRef()
	const data = state.routes.map((item, i) => ({
		key: i,
		title: item.name,
		route: item,
		ref: createRef()
	}))
	useEffect(
		() => {
			setRefresh(new Date())
		},
		[ isSelected.current ]
	)

	useEffect(
		() => {
			let m = []
			if (data && data.length > 0) {
				data.forEach((item) => {
					item.ref.current.measureLayout(containerRef.current, (x, y, width, height) => {
						m.push({ x, y, width, height })
						if (m.length === data.length) {
							setMeasures(m)
						}
					})
				})
			}
		},
		[ refresh ]
	)
	return (
		<View>
			<ScrollView
				ref={containerRef}
				horizontal
				overScrollMode="never"
				showsHorizontalScrollIndicator={false}
				showsVerticalScrollIndicator={false}
				contentContainerStyle={{ backgroundColor: '#030610', paddingVertical: 16 }}>
				{data.map((route, index) => {
					const isFocused = state.index === index
					if (state.index === index) {
						isSelected.current = index
					}

					const onPress = useCallback(() => {
						const event = navigation.emit({
							type: 'tabPress',
							target: route.route.key
						})

						if (!isFocused && !event.defaultPrevented) {
							navigation.navigate(route.route.name)
						}
					})

					return (
						<TouchableOpacity key={index} onPress={onPress}>
							<View ref={route.ref} style={{ marginHorizontal: 16 }}>
								<Text
									style={{
										fontFamily: 'Oswald-Regular',
										color: isFocused ? '#FAFAFA' : '#3E4346',
										fontSize: 16,
										textTransform: 'uppercase'
									}}>
									{route.title}
								</Text>
							</View>
						</TouchableOpacity>
					)
				})}
				{measures && measures.length > 0 ? (
					<Indicator measures={measures} data={data} selectedNav={isSelected.current} mode="underline" />
				) : null}
			</ScrollView>
		</View>
	)
}

const HomeTab = () => {
	return (
		<Tab.Navigator
			swipeEnabled={false}
			tabBarOptions={{ scrollEnabled: true }}
			tabBar={(props) => <MyTabBar {...props} />}>
			<Tab.Screen name="Home" component={Home} />
			<Tab.Screen name="News" component={News} />
			<Tab.Screen name="live" component={News} />
			<Tab.Screen name="statistic" component={News} />
			<Tab.Screen name="table" component={News} />
			<Tab.Screen name="tickets" component={News} />
		</Tab.Navigator>
	)
}
