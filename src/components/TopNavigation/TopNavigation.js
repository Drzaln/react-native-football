import React, { createRef, useEffect, useRef, useState, useCallback } from 'react'
import { Animated as RnAnimated } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Indicator from './Indicator'
import RenderNav from './RenderNav'

const TopNavigation = ({ selectedNav, onPress, nav }) => {
	const containerRef = useRef()
	const navPosition = useRef(new RnAnimated.Value(0)).current
	const [ measures, setMeasures ] = useState([])

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
		<ScrollView
			ref={containerRef}
			horizontal
			overScrollMode="never"
			showsHorizontalScrollIndicator={false}
			showsVerticalScrollIndicator={false}
			contentContainerStyle={{ backgroundColor: '#030610', paddingVertical: 16 }}>
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

export default TopNavigation
