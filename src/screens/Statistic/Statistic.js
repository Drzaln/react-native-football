import { useFocusEffect } from '@react-navigation/native'
import React, { useState } from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import Animated, { interpolate } from 'react-native-reanimated'
import { useTransition } from 'react-native-redash/lib/module/v1'
import TopNavigation from '../../components/TopNavigation/TopNavigation'
import Match from '../../components/Match/Match'
import StatBar from '../../components/StatBar/StatBar'
import { statisticData } from '../../constants/Statistic'

const Statistic = () => {
	const [ selectedNav, setSelectedNav ] = useState(0)
	const [ show, setShow ] = useState(0)
	const transitionMatch = useTransition(show, {
		duration: 200
	})
	const nav = [ 'general', 'distribution', 'attack', 'defence', 'discipline' ]

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
		outputRange: [ 1000, 0 ]
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
			<Animated.View style={{ paddingHorizontal: 16, transform: [ { translateY } ] }}>
				{statisticData.map((item, i) => (
					<StatBar
						key={i}
						barPercentageLeft={item.barPercentageLeft}
						barPercentageRight={item.barPercentageRight}
						title={item.title}
						usePercent={item.usePercent}
					/>
				))}
			</Animated.View>
		</ScrollView>
	)
}

export default Statistic
