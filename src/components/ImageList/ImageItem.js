import React from 'react'
import { View, Text, Image, Pressable } from 'react-native'

const ImageItem = ({ item, imageSize }) => {
	return (
		<Pressable style={{ flexWrap: 'wrap', marginLeft: 16, width: imageSize }}>
			<View style={{ backgroundColor: 'grey', height: imageSize - 121, width: imageSize }}>
				<Image style={{ width: '100%', height: '100%' }} source={{ uri: item.image }} resizeMode='cover' />
			</View>
			<View>
				<Text style={{ color: '#FAFAFA', fontSize: 22, fontFamily: 'Oswald-Medium' }}>{item.news}</Text>
			</View>
		</Pressable>
	)
}

export default ImageItem
