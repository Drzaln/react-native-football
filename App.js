import React, { createRef, useCallback, useEffect, useRef, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { enableScreens } from 'react-native-screens'
import Home from './src/screens/Home/Home'
import Header from './src/components/Header/Header'
import News from './src/screens/News/News'
import { TouchableOpacity, View } from 'react-native'
import Animated from 'react-native-reanimated'
import TopNavigation from './src/components/TopNavigation/TopNavigation'
import { ScrollView } from 'react-native-gesture-handler'
import RenderNav from './src/components/TopNavigation/RenderNav'
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

function MyTabBar({ state, descriptors, navigation, position }) {
	const [ measures, setMeasures ] = useState([])
	const [ refresh, setRefresh ] = useState(new Date())
	const containerRef = useRef()
	const data = state.routes.map((item, i) => ({
		key: i,
		title: item.name,
		route: item,
		ref: createRef()
	}))
	useEffect(() => {
		setRefresh(new Date())
	}, [])

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
		<ScrollView
			ref={containerRef}
			horizontal
			overScrollMode="never"
			showsHorizontalScrollIndicator={false}
			showsVerticalScrollIndicator={false}
			// style={style}
			contentContainerStyle={{ backgroundColor: '#030610', paddingVertical: 16 }}>
			{data.map((route, index) => {
				const { options } = descriptors[route.route.key]
				const label =
					options.tabBarLabel !== undefined
						? options.tabBarLabel
						: options.title !== undefined ? options.title : route.name

				const isFocused = state.index === index

				const onPress = () => {
					const event = navigation.emit({
						type: 'tabPress',
						target: route.route.key
					})

					if (!isFocused && !event.defaultPrevented) {
						navigation.navigate(route.route.name)
					}
				}

				const onLongPress = () => {
					navigation.emit({
						type: 'tabLongPress',
						target: route.key
					})
				}
				// modify inputRange for custom behavior
				const inputRange = state.routes.map((_, i) => i)
				const opacity = Animated.interpolate(position, {
					inputRange,
					outputRange: inputRange.map((i) => (i === index ? 1 : 0))
				})

				const changeNav = useCallback((key) => {
					onPress(key)
				}, [])

				// return (
				// 	<TouchableOpacity
				// 		accessibilityRole="button"
				// 		accessibilityState={isFocused ? { selected: true } : {}}
				// 		accessibilityLabel={options.tabBarAccessibilityLabel}
				// 		testID={options.tabBarTestID}
				// 		onPress={onPress}
				// 		onLongPress={onLongPress}
				// 		style={{ flex: 1 }}>
				// 		<Animated.Text style={{ opacity }}>{label}</Animated.Text>
				// 	</TouchableOpacity>
				// )
				return (
					<RenderNav
						key={index}
						item={route}
						mode='underline'
						selectedNav={0}
						onPress={() => changeNav()}
					/>
				)
			})}
			{/* {measures && measures.length > 0 ? (
					<Indicator measures={measures} data={data} navPosition={transitionNav} mode={mode} />
				) : null} */}
		</ScrollView>
	)
}

const HomeTab = () => {
	return (
		<Tab.Navigator swipeEnabled={false} tabBar={(props) => <MyTabBar {...props} />}>
			<Tab.Screen name="Home" component={Home} />
			<Tab.Screen name="News" component={News} />
			<Tab.Screen name="live" component={News} />
			<Tab.Screen name="statistic" component={News} />
			<Tab.Screen name="table" component={News} />
			<Tab.Screen name="tickets" component={News} />
		</Tab.Navigator>
	)
}
