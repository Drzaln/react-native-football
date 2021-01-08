import React from 'react'
import Animated, { interpolate } from 'react-native-reanimated'

const Indicator = ({ measures, data, navPosition, mode , style }) => {
	let height = 2
	let widthIndicator = 6
	let xRange = 3
	let bottom = 13
	let background = '#FAFAFA'

	if (mode === 'block') {
		;(height = 25), (widthIndicator = -20)
		bottom = 15
		xRange = -9
		background = '#FFC93C'
	}

	const inputRange = data.map((_, i) => i)
	const indicatorWidth = interpolate(navPosition, {
		inputRange,
		outputRange: measures.map((measure) => measure.width - widthIndicator)
	})
	const translateX = interpolate(navPosition, {
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
