import React, { useState } from 'react'
import { View, Text, Image } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions'
import TopNavigation from '../../components/TopNavigation/TopNavigation'

const News = () => {
	const [ selectedNav, setSelectedNav ] = useState(0)
	const nav = [ 'team', 'club', 'youth' ]
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
	return (
		<View>
			<ImageList data={data} />
			<View style={{ marginTop: 16 }}>
				<TopNavigation
					nav={nav}
					selectedNav={selectedNav}
					mode="block"
					style={{ marginLeft: 8 }}
					onPress={(key) => setSelectedNav(key)}
				/>
			</View>
		</View>
	)
}

export default React.memo(News)

const ImageList = ({ data }) => {
	const { width } = useWindowDimensions()
	const imageSize = Math.round(width - 81)

	const renderItem = ({ item }) => <ImageItem item={item} imageSize={imageSize} />

	return (
		<FlatList
			data={data}
			renderItem={renderItem}
			keyExtractor={(item, index) => item.news + index}
			horizontal
			overScrollMode="never"
			contentContainerStyle={{ paddingRight: 16 }}
			snapToInterval={imageSize + 18}
			decelerationRate="fast"
			snapToAlignment="start"
		/>
	)
}

const ImageItem = ({ item, imageSize }) => {
	return (
		<View style={{ flexWrap: 'wrap', marginLeft: 16, width: 330 }}>
			<View style={{ backgroundColor: 'grey', height: imageSize - 121, width: imageSize }}>
				<Image style={{ width: '100%', height: '100%' }} source={item.image} resizeMode="cover" />
			</View>
			<View>
				<Text style={{ color: '#FAFAFA', fontSize: 22, fontFamily: 'Oswald-Medium' }}>{item.news}</Text>
			</View>
		</View>
	)
}
