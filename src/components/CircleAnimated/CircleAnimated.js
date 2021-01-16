import React, { useMemo } from 'react'
import { StyleSheet, View } from 'react-native'
import Svg, { Circle } from 'react-native-svg'
import Animated, { interpolate, multiply, concat, set, useCode } from 'react-native-reanimated'
import { clamp, timing, toRad, useValue } from 'react-native-redash/lib/module/v1'
import AnimateableText from 'react-native-animateable-text'
const AnimatedCircle = Animated.createAnimatedComponent(Circle)
const AnimatedSVG = Animated.createAnimatedComponent(Svg)

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center',
		transform: [ { rotate: '-90deg' } ]
	}
})

const CircleAnimated = ({
	percent = 75,
	duration = 1000,
	bgStrokeColor = '#3E4346',
	radius = 40,
	isRadius = false,
	strokeColor = '#FFC93C',
	strokeWidth = 6,
	maxProgress = 100,
	minProgress = 0
}) => {
	const progressAnimated = useValue(0)
	const progressSpin = useValue(0)
	const actualProgress = clamp(progressAnimated, minProgress, maxProgress)

	//effect
	useCode(() => [ set(progressAnimated, timing({ from: progressAnimated, to: percent, duration })) ], [ percent ])

	// variable
	const strokeDasharray = useMemo(() => `${radius * 2 * Math.PI} ${radius * 2 * Math.PI}`, [ radius ])
	const alpha = interpolate(actualProgress, {
		inputRange: [ minProgress, maxProgress ],
		outputRange: [ Math.PI * 2, 0 ]
	})
	const strokeDashoffset = multiply(alpha, radius)

	// style
	const svgStyle = [
		{
			transform: [
				{ rotate: interpolate(progressSpin, { inputRange: [ 0, 1 ], outputRange: [ toRad(0), Math.PI * 2 ] }) }
			]
		}
	]
	return (
		<View style={[ styles.container ]}>
			<AnimatedSVG width={radius * 2 + strokeWidth} height={radius * 2 + strokeWidth} style={svgStyle}>
				<AnimatedCircle
					r={radius}
					x={radius + strokeWidth / 2}
					y={radius + strokeWidth / 2}
					stroke={bgStrokeColor}
					strokeWidth={strokeWidth}
				/>
				<AnimatedCircle
					strokeLinecap={isRadius ? 'round' : undefined}
					strokeDashoffset={strokeDashoffset}
					strokeDasharray={strokeDasharray}
					r={radius}
					x={radius + strokeWidth / 2}
					y={radius + strokeWidth / 2}
					stroke={strokeColor}
					strokeWidth={strokeWidth}
				/>
			</AnimatedSVG>
			<AnimateableText
				text={concat(actualProgress, '%')}
				style={{
					fontFamily: 'Oswald-Medium',
					color: '#FFC93C',
					fontSize: 18,
					textAlign: 'center',
					position: 'absolute',
					transform: [ { rotate: '90deg' } ]
				}}
			/>
		</View>
	)
}

export default CircleAnimated
