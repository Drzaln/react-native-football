import { useFocusEffect } from '@react-navigation/native'
import React, { useState } from 'react'
import { View, Text } from 'react-native'
import AnimateableText from 'react-native-animateable-text'
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

	const leftWidth = interpolate(transition, { inputRange: [ 0, 1 ], outputRange: [ 0, barPercentageLeft ] })
	const rightWidth = interpolate(transition, { inputRange: [ 0, 1 ], outputRange: [ 0, barPercentageRight ] })

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
			<View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-end' }}>
				<AnimateableText
					text={concat(leftWidth, usePercent ? '%' : '')}
					style={{
						fontFamily: 'Oswald-Medium',
						color: '#FAFAFA',
						fontSize: 12,
						textAlign: 'left',
						marginBottom: 8,
						flex: 1
					}}
				/>
				<Text
					style={{
						fontFamily: 'Oswald-Regular',
						color: '#FAFAFA',
						fontSize: 16,
						marginBottom: 8,
						position: 'absolute',
						top: -5
					}}>
					{title}
				</Text>
				<AnimateableText
					text={concat(rightWidth, usePercent ? '%' : '')}
					style={{
						fontFamily: 'Oswald-Medium',
						color: '#FAFAFA',
						fontSize: 12,
						textAlign: 'right',
						marginBottom: 8,
						flex: 1
					}}
				/>
			</View>
			<View style={{ flexDirection: 'row' }}>
				<View
					style={{
						height: 10,
						backgroundColor: '#3E4346',
						flex: 1,
						alignItems: 'flex-end'
					}}>
					<Animated.View
						style={{
							height: 10,
							backgroundColor: '#FFC93C',
							width: concat(leftWidth, '%')
						}}
					/>
				</View>
				<View style={{ height: 10, backgroundColor: '#3E4346', flex: 1 }}>
					<Animated.View
						style={{
							height: 10,
							backgroundColor: '#FFC93C',
							width: concat(rightWidth, '%')
						}}
					/>
				</View>
			</View>
		</View>
	)
}

export default StatBar
