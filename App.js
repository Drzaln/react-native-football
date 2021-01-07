import React, { createRef, useEffect, useRef, useState, useCallback } from 'react'
import { SafeAreaView, View, Text, StatusBar, TouchableOpacity, Animated as RnAnimated } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { enableScreens } from 'react-native-screens'
enableScreens()

const App = () => {
	const [ selectedNav, setSelectedNav ] = useState(0)
	return (
		<React.Fragment>
			<StatusBar barStyle="light-content" backgroundColor="#000" />
			<SafeAreaView style={{ backgroundColor: '#030610', flex: 1 }}>
				<Header />
				<TopNavigation selectedNav={selectedNav} onPress={(key) => setSelectedNav(key)} />
				<View style={{ flexDirection: 'row' }}>
					<Text
						style={{
							fontFamily: 'Oswald-Regular',
							color: '#FAFAFA',
							fontSize: 36,
							textTransform: 'uppercase',
							transform: [ { rotate: '-90deg' } ]
						}}>
						forward
					</Text>
				</View>
			</SafeAreaView>
		</React.Fragment>
	)
}

const TopNavigation = ({ selectedNav, onPress }) => {
	const containerRef = useRef()
	const navPosition = useRef(new RnAnimated.Value(0)).current
	const [ measures, setMeasures ] = useState([])
	const nav = [ 'home', 'news', 'live', 'statistic', 'table', 'tickets' ]

	const data = nav.map((item, i) => ({
		key: i,
		title: item,
		ref: createRef()
	}))

	useEffect(() => {
		let m = []
		if (data.length > 0) {
			data.forEach((item) => {
				item.ref.current.measureLayout(containerRef.current, (x, y, width, height) => {
					m.push({ x, y, width, height })
					if (m.length === data.length) {
						setMeasures(m)
					}
				})
			})
		}
	}, [])

	const changeNav = useCallback((key) => {
		RnAnimated.timing(navPosition, {
			toValue: key,
			duration: 350,
			useNativeDriver: false
		}).start()
		onPress(key)
	}, [])

	return (
		<ScrollView ref={containerRef} horizontal style={{ paddingBottom: 8 }}>
			{data.map((item) => {
				return (
					<RenderNav
						key={item.key}
						item={item}
						selectedNav={selectedNav}
						onPress={() => changeNav(item.key)}
					/>
				)
			})}
			{measures.length > 0 && <Indicator measures={measures} data={data} navPosition={navPosition} />}
		</ScrollView>
	)
}

const Indicator = ({ measures, data, navPosition }) => {
	const inputRange = data.map((_, i) => i)
	const indicatorWidth = navPosition.interpolate({
		inputRange,
		outputRange: measures.map((measure) => measure.width - 6)
	})
	const translateX = navPosition.interpolate({
		inputRange,
		outputRange: measures.map((measure) => measure.x + 3)
	})
	return (
		<RnAnimated.View
			style={{
				height: 2,
				position: 'absolute',
				bottom: 0,
				width: indicatorWidth,
				backgroundColor: '#FAFAFA',
				transform: [ { translateX } ]
			}}
		/>
	)
}

const RenderNav = ({ item, onPress, selectedNav }) => {
	return (
		<TouchableOpacity onPress={onPress}>
			<View ref={item.ref} style={{ marginHorizontal: 16 }}>
				<Text
					style={{
						fontFamily: 'Oswald-Regular',
						color: item.key === selectedNav ? '#FAFAFA' : '#3E4346',
						fontSize: 16,
						textTransform: 'uppercase'
					}}>
					{item.title}
				</Text>
			</View>
		</TouchableOpacity>
	)
}

const Header = () => (
	<View
		style={{
			justifyContent: 'center',
			alignItems: 'center',
			flexDirection: 'row',
			paddingBottom: 16
		}}>
		<Text style={{ fontFamily: 'JuventusFans-Bold', color: '#FAFAFA', fontSize: 30 }}>JUVENTUS</Text>
		<Text style={{ fontFamily: 'Oswald-ExtraLight', color: '#FAFAFA', fontSize: 25 }}> TEAM</Text>
	</View>
)

export default App
