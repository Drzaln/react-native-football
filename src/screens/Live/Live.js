import { useFocusEffect } from '@react-navigation/native'
import React, { useState } from 'react'
import { View, Text, useWindowDimensions } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Animated, { concat, interpolate } from 'react-native-reanimated'
import { useTransition } from 'react-native-redash/lib/module/v1'
import Juventus from '../../assets/logo/Juventus'
import Inter from '../../assets/logo/Inter'
import TopNavigation from '../../components/TopNavigation/TopNavigation'

const Live = () => {
	const [ selectedNav, setSelectedNav ] = useState(0)
	const [ show, setShow ] = useState(0)
	const transitionNav = useTransition(show, {
		duration: 100
	})
	const transitionMatch = useTransition(show, {
		duration: 200
	})
	const nav = [ 'live ticker', 'lineup', 'tactical lineup', 'live table' ]

	useFocusEffect(
		React.useCallback(() => {
			setShow(1)
			return () => {
				setShow(0)
			}
		}, [])
	)

	const opacity = interpolate(transitionNav, {
		inputRange: [ 0, 1 ],
		outputRange: [ 0, 1 ]
	})
	const translateX = interpolate(transitionMatch, {
		inputRange: [ 0, 1 ],
		outputRange: [ -1000, 0 ]
	})
	return (
		<ScrollView
			contentContainerStyle={{ paddingVertical: 16, backgroundColor: '#030610' }}
			overScrollMode='never'
			showsHorizontalScrollIndicator={false}
			showsVerticalScrollIndicator={false}>
			<Match style={{ transform: [ { translateX } ] }} />
			<TopNavigation
				nav={nav}
				selectedNav={selectedNav}
				mode='blokline'
				style={{ marginVertical: 16 }}
				animatedStyle={{ opacity }}
				onPress={(key) => setSelectedNav(key)}
			/>
			<View style={{ paddingHorizontal: 16 }}>
				<StatBar />
			</View>
		</ScrollView>
	)
}

export default Live

const Match = ({ style }) => {
	const { width } = useWindowDimensions()
	const imageSize = Math.round(width - 301)
	const imageContainer = imageSize - 40
	return (
		<Animated.View style={[ { justifyContent: 'center', alignItems: 'center', paddingHorizontal: 32 }, style ]}>
			<Text
				style={{
					fontFamily: 'Oswald-Medium',
					color: '#FAFAFA',
					fontSize: 18,
					marginBottom: 2
				}}>
				SERIE A
			</Text>
			<Text
				style={{
					color: '#3E4346',
					fontSize: 12,
					marginBottom: 8
				}}>
				Matchday 15, Friday 07 Dec. 2018, Allianz Stadium
			</Text>
			<View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-start', marginTop: 16 }}>
				<View
					style={{
						height: imageSize,
						flex: 1,
						justifyContent: 'space-between',
						alignItems: 'center'
					}}>
					<View style={{ height: imageContainer, width: imageContainer }}>
						<Juventus />
					</View>
					<Text
						style={{
							fontFamily: 'Oswald-Medium',
							color: '#3E4346',
							fontSize: 18,
							marginBottom: 2
						}}>
						JUVENTUS
					</Text>
				</View>
				<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
					<Text
						style={{
							fontFamily: 'Oswald-Medium',
							color: '#FAFAFA',
							fontSize: 32,
							marginBottom: 2
						}}>
						1 : 0
					</Text>
					<Text
						style={{
							fontFamily: 'Oswald-Bold',
							color: '#3E4346',
							fontSize: 14,
							marginBottom: 2
						}}>
						66'
					</Text>
				</View>
				<View
					style={{
						height: imageSize,
						flex: 1,
						justifyContent: 'space-between',
						alignItems: 'center'
					}}>
					<View style={{ height: imageContainer, width: imageContainer }}>
						<Inter />
					</View>
					<Text
						style={{
							fontFamily: 'Oswald-Medium',
							color: '#3E4346',
							fontSize: 18,
							marginBottom: 2
						}}>
						INTER
					</Text>
				</View>
			</View>
		</Animated.View>
	)
}

const StatBar = ({ barPercentageLeft = 50, barPercentageRight = 24 }) => {
	const [ barState, setBarState ] = useState(0)
	const config = {
		duration: 700,
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
		<React.Fragment>
			<View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end' }}>
				<Text
					style={{
						fontFamily: 'Oswald-Medium',
						color: '#FAFAFA',
						fontSize: 12,
						textAlign: 'left',
						marginBottom: 8
					}}>
					{barPercentageLeft}%
				</Text>
				<Text
					style={{
						fontFamily: 'Oswald-Regular',
						color: '#FAFAFA',
						fontSize: 16,
						marginBottom: 8
					}}>
					Possession
				</Text>
				<Text
					style={{
						fontFamily: 'Oswald-Medium',
						color: '#FAFAFA',
						fontSize: 12,
						textAlign: 'right',
						marginBottom: 8
					}}>
					{barPercentageRight}%
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
		</React.Fragment>
	)
}
