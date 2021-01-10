import React from 'react'
import Animated, { interpolate } from 'react-native-reanimated'
import { useTransition } from 'react-native-redash/lib/module/v1'

const Indicator = ({ measures, data, selectedNav, mode, style }) => {
	const transitionNav = useTransition(selectedNav)
	let height = 2
	let widthIndicator = 6
	let xRange = 3
	let bottom = 13
	let background = '#FAFAFA'

	if (mode === 'block' || mode === 'blokline') {
		;(height = 25), (widthIndicator = -20)
		bottom = 15
		xRange = -9
		background = '#FFC93C'
	}

	const inputRange = data.map((_, i) => i)
	const indicatorWidth = interpolate(transitionNav, {
		inputRange,
		outputRange: measures.map((measure) => measure.width - widthIndicator)
	})
	const translateX = interpolate(transitionNav, {
		inputRange,
		outputRange: measures.map((measure) => measure.x + xRange)
	})
	return (
		<Animated.View
			style={[
				{
					height: height,
					position: 'absolute',
					zIndex: -1,
					bottom: bottom,
					width: indicatorWidth,
					backgroundColor: background,
					transform: [ { translateX } ]
				},
				style
			]}
		/>
	)
}

export default Indicator
