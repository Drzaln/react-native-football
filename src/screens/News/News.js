import React, { useState } from 'react'
import ImageList from '../../components/ImageList/ImageList'
import NewsList from '../../components/NewsList/NewsList'
import TopNavigation from '../../components/TopNavigation/TopNavigation'
import { useTransition } from 'react-native-redash/lib/module/v1'
import Animated, { interpolate } from 'react-native-reanimated'
import { ScrollView } from 'react-native-gesture-handler'
import { useFocusEffect } from '@react-navigation/native'
import { data, newsData } from '../../constants/News'

const News = () => {
	const [ selectedNav, setSelectedNav ] = useState(0)
	const [ show, setShow ] = useState(0)
	const config = {
		duration: 200
	}
	const transitionNews = useTransition(show, config)
	const nav = [ 'team', 'club', 'youth' ]

	useFocusEffect(
		React.useCallback(() => {
			setShow(1)
			return () => {
				setShow(0)
			}
		}, [])
	)

	const translateX = interpolate(transitionNews, {
		inputRange: [ 0, 1 ],
		outputRange: [ -500, 0 ]
	})

	const translateY = interpolate(transitionNews, {
		inputRange: [ 0, 1 ],
		outputRange: [ 500, 0 ]
	})

	const translateXImage = interpolate(transitionNews, {
		inputRange: [ 0, 1 ],
		outputRange: [ 500, 0 ]
	})

	return (
		<ScrollView
			contentContainerStyle={{ paddingVertical: 16, backgroundColor: '#030610' }}
			overScrollMode='never'
			showsHorizontalScrollIndicator={false}
			showsVerticalScrollIndicator={false}>
			<ImageList data={data} animatedStyle={{ transform: [ { translateX: translateXImage } ] }} />
			<TopNavigation
				nav={nav}
				selectedNav={selectedNav}
				mode='block'
				style={{ marginLeft: 8, marginVertical: 16 }}
				animatedStyle={{ transform: [ { translateX } ] }}
				onPress={(key) => setSelectedNav(key)}
			/>
			<Animated.View style={{ marginHorizontal: 16, transform: [ { translateY } ] }}>
				<NewsList newsData={newsData} />
			</Animated.View>
		</ScrollView>
	)
}

export default React.memo(News)
