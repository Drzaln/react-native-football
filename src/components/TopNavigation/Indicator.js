import React from 'react'
import Animated, { interpolate } from 'react-native-reanimated'

const Indicator = ({ measures, data, navPosition }) => {
	const inputRange = data.map((_, i) => i)
	const indicatorWidth = interpolate(navPosition,{
		inputRange,
		outputRange: measures.map((measure) => measure.width - 6)
	})
	const translateX = interpolate(navPosition,{
		inputRange,
		outputRange: measures.map((measure) => measure.x + 3)
	})
	return (
		<Animated.View
			style={{
				height: 2,
				position: 'absolute',
				bottom: 13,
				width: indicatorWidth,
				backgroundColor: '#FAFAFA',
				transform: [ { translateX } ]
			}}
		/>
	)
}

export default Indicator
