import { useFocusEffect } from '@react-navigation/native'
import React, { useState } from 'react'
import { View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Animated, { interpolate } from 'react-native-reanimated'
import { useTransition } from 'react-native-redash/lib/module/v1'
import TopNavigation from '../../components/TopNavigation/TopNavigation'
import Match from '../../components/Match/Match'
import StatBar from '../../components/StatBar/StatBar'
import TimeLineRight from '../../components/TimeLine/TimeLineRight'
import TimeLineLeft from '../../components/TimeLine/TimeLineLeft'

const Live = () => {
	const [ selectedNav, setSelectedNav ] = useState(0)
	const [ show, setShow ] = useState(0)
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

	const translateX = interpolate(transitionMatch, {
		inputRange: [ 0, 1 ],
		outputRange: [ -1000, 0 ]
	})
	const translateY = interpolate(transitionMatch, {
		inputRange: [ 0, 1 ],
		outputRange: [ 1000, 0 ]
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
				onPress={(key) => setSelectedNav(key)}
			/>
			<Animated.View style={{ marginHorizontal: 16, transform: [ { translateY } ] }}>
				<StatBar barPercentageLeft={49.8} barPercentageRight={50.2} />
				<View style={{ marginTop: 16 }}>
					<TimeLineRight
						time={`66'`}
						desc='A great cross by Cancelo from the left finds Mandzukic at the back post and the Croatian gets up to give Juve the lead!'
					/>
					<TimeLineLeft
						time={`65'`}
						desc='Bentancur lets fly with an effort outside the box but its off target'
					/>
					<TimeLineRight
						time={`59'`}
						desc={`CLOSE! Ronaldo's strike from distance flies just over the crossbar`}
					/>
				</View>
			</Animated.View>
		</ScrollView>
	)
}

export default Live
