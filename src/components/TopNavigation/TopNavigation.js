import React, { createRef, useEffect, useRef, useState, useCallback } from 'react'
import { View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Animated from 'react-native-reanimated'
import Indicator from './Indicator'
import RenderNav from './RenderNav'

const TopNavigation = ({ selectedNav, onPress, nav, style, animatedStyle, mode = 'underline' || 'block' }) => {
	const [ measures, setMeasures ] = useState([])
	const [ refresh, setRefresh ] = useState(new Date())
	const containerRef = useRef()

	const data = nav.map((item, i) => ({
		key: i,
		title: item,
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

	const changeNav = useCallback((key) => {
		onPress(key)
	}, [])

	return (
		<Animated.View style={animatedStyle}>
			<ScrollView
				ref={containerRef}
				horizontal
				overScrollMode='never'
				showsHorizontalScrollIndicator={false}
				showsVerticalScrollIndicator={false}
				style={style}
				contentContainerStyle={{ backgroundColor: '#030610', paddingVertical: 16 }}>
				{data.map((item) => {
					return (
						<RenderNav
							key={item.key}
							item={item}
							mode={mode}
							selectedNav={selectedNav}
							onPress={() => changeNav(item.key)}
						/>
					)
				})}
				{measures && measures.length > 0 ? (
					<Indicator measures={measures} data={data} selectedNav={selectedNav} mode={mode} />
				) : null}
				{mode === 'blokline' ? (
					<View
						style={{
							width: '100%',
							height: 2,
							backgroundColor: '#FFC93C',
							position: 'absolute',
							bottom: 15
						}}
					/>
				) : null}
			</ScrollView>
		</Animated.View>
	)
}

export default TopNavigation
