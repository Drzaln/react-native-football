import React, { createRef, useEffect, useRef, useState, useCallback } from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { useTransition } from 'react-native-redash/lib/module/v1'
import Indicator from './Indicator'
import RenderNav from './RenderNav'

const TopNavigation = ({ selectedNav, onPress, nav, style, mode = 'underline' || 'block' }) => {
	const containerRef = useRef()
	const transitionNav = useTransition(selectedNav)
	const [ measures, setMeasures ] = useState([])

	const data = nav.map((item, i) => ({
		key: i,
		title: item,
		ref: createRef()
	}))

	useEffect(() => {
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
	}, [])

	const changeNav = useCallback((key) => {
		onPress(key)
	}, [])

	return (
		<ScrollView
			ref={containerRef}
			horizontal
			overScrollMode="never"
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
			{measures &&
			measures.length > 0 && (
				<Indicator measures={measures} data={data} navPosition={transitionNav} mode={mode} />
			)}
		</ScrollView>
	)
}

export default TopNavigation
