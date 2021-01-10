import { useFocusEffect } from '@react-navigation/native'
import React, { useState } from 'react'
import { View, Text } from 'react-native'
import Animated, { concat, interpolate } from 'react-native-reanimated'
import { useTransition } from 'react-native-redash/lib/module/v1'

const StatBar = ({
	barPercentageLeft = 50,
	barPercentageRight = 24,
	title = 'Possession',
	usePercent = true,
	style
}) => {
	const [ barState, setBarState ] = useState(0)
	const config = {
		duration: 900,
		delay: 1000
	}
	const transition = useTransition(barState, config)

	const leftWidth = concat(
		interpolate(transition, { inputRange: [ 0, 1 ], outputRange: [ 0, barPercentageLeft ] }),
		'%'
	)
	const rightWidth = concat(
		interpolate(transition, { inputRange: [ 0, 1 ], outputRange: [ 0, barPercentageRight ] }),
		'%'
	)

	useFocusEffect(
		React.useCallback(() => {
			setBarState(1)
			return () => {
				setBarState(0)
			}
		}, [])
	)

	return (
		<View style={[ { marginBottom: 16 }, style ]}>
			<View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end' }}>
				<Text
					style={{
						fontFamily: 'Oswald-Medium',
						color: '#FAFAFA',
						fontSize: 12,
						textAlign: 'left',
						marginBottom: 8
					}}>
					{barPercentageLeft}
					{usePercent && '%'}
				</Text>
				<Text
					style={{
						fontFamily: 'Oswald-Regular',
						color: '#FAFAFA',
						fontSize: 16,
						marginBottom: 8
					}}>
					{title}
				</Text>
				<Text
					style={{
						fontFamily: 'Oswald-Medium',
						color: '#FAFAFA',
						fontSize: 12,
						textAlign: 'right',
						marginBottom: 8
					}}>
					{barPercentageRight}
					{usePercent && '%'}
				</Text>
			</View>
			<View style={{ flexDirection: 'row' }}>
				<View style={{ height: 10, backgroundColor: '#3E4346', flex: 1, alignItems: 'flex-end' }}>
					<Animated.View style={{ height: 10, backgroundColor: '#FFC93C', width: leftWidth }} />
				</View>
				<View style={{ height: 10, backgroundColor: '#3E4346', flex: 1 }}>
					<Animated.View style={{ height: 10, backgroundColor: '#FFC93C', width: rightWidth }} />
				</View>
			</View>
		</View>
	)
}

export default StatBar
