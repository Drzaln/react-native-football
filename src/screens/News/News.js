import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import ImageList from '../../components/ImageList/ImageList'
import NewsList from '../../components/NewsList/NewsList'
import TopNavigation from '../../components/TopNavigation/TopNavigation'
import { useTransition } from 'react-native-redash/lib/module/v1'
import Animated, { interpolate } from 'react-native-reanimated'
import { ScrollView } from 'react-native-gesture-handler'

const News = () => {
	const [ selectedNav, setSelectedNav ] = useState(0)
	const [ show, setShow ] = useState(0)
	const transitionNews = useTransition(show)
	const nav = [ 'team', 'club', 'youth' ]

	useEffect(() => {
		setShow(1)
		return () => {
			setShow(0)
		}
	}, [])

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

	const data = [
		{
			image: require('../../assets/news/chiellini.jpg'),
			news: 'Chiellini praises Juve composure despite dropped points'
		},
		{
			image: require('../../assets/news/ALEX.png'),
			news: 'Juventus defender Alex Sandro contracts COVID-19'
		},
		{
			image: require('../../assets/news/atalanta-juventus_allegri.jpg'),
			news: 'Allegri: "We did well to stay in the game with ten men"'
		}
	]
	const newsData = [
		{
			image: require('../../assets/news/chiellini.jpg'),
			headline: `Douglas Costa: "We make the difference in the key moments"`,
			desc: 'The Portuguese defender underwent a medial selective menisectomy on his right knee'
		},
		{
			image: require('../../assets/news/ALEX.png'),
			headline: `Allegri named best manager in Italy for the fourth time!`,
			desc: `The Juventus coach has been awarded his fourth Panchina d'Oro`
		},
		{
			image: require('../../assets/news/atalanta-juventus_allegri.jpg'),
			headline: `Allegri: “Ronaldo deserves the Ballon d'Or”`,
			desc: `Comments from the coach, Pjanic and Bentancur as they speak to the media at adidas 'Here To Create' event in Milan`
		},
		{
			image: require('../../assets/news/matuidi.jpg'),
			headline: `France and Brazil win Bianconeri derbies`,
			desc: `Matuidi's France defeat Can's Germany in the Nations League, whilst Alex Sandro's Brazil overcome Dybala's Argentina`
		},
		{
			image: require('../../assets/news/batch.jpg'),
			headline: `Ronaldo nominated for UEFA Men's Player of the Year`,
			desc: 'The Juventus number seven has been selected on a three-man UEFA shortlist for the prize'
		}
	]
	return (
		<ScrollView
			contentContainerStyle={{ paddingVertical: 16, backgroundColor: '#030610' }}
			overScrollMode="never"
			showsHorizontalScrollIndicator={false}
			showsVerticalScrollIndicator={false}>
			<ImageList data={data} animatedStyle={{ transform: [ { translateX: translateXImage } ] }} />
			<TopNavigation
				nav={nav}
				selectedNav={selectedNav}
				mode="block"
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
