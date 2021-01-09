import React, { createRef, useCallback, useEffect, useRef, useState } from 'react'
import { View, Text, StatusBar } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import Indicator from '../TopNavigation/Indicator'

const MyTabBar = ({ state, navigation }) => {
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
			<StatusBar barStyle="light-content" backgroundColor="#030610" />
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

export default MyTabBar
