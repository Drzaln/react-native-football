import React from 'react'
import { Animated as RnAnimated } from 'react-native'

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
				bottom: 13,
				width: indicatorWidth,
				backgroundColor: '#FAFAFA',
				transform: [ { translateX } ]
			}}
		/>
	)
}

export default Indicator
