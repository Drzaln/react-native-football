import React from 'react'
import { FlatList } from 'react-native-gesture-handler'
import Animated from 'react-native-reanimated'
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions'
import ImageItem from './ImageItem'

const ImageList = ({ data, animatedStyle }) => {
	const { width } = useWindowDimensions()
	const imageSize = Math.round(width - 81)

	const renderItem = ({ item }) => <ImageItem item={item} imageSize={imageSize} />

	return (
		<Animated.View style={animatedStyle}>
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
		</Animated.View>
	)
}

export default ImageList
