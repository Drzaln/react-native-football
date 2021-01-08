import React from 'react'
import { View, Text, Image, Pressable } from 'react-native'

const NewsItem = ({ item }) => {
	return (
		<Pressable style={{ marginBottom: 24 }}>
			<View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: 8 }}>
				<View style={{ flex: 1, height: 70, backgroundColor: 'grey', marginRight: 12 }}>
					<Image style={{ width: '100%', height: '100%' }} source={item.image} resizeMode="cover" />
				</View>
				<View style={{ flex: 3, justifyContent: 'space-between' }}>
					<Text style={{ color: '#FAFAFA', fontSize: 16, fontFamily: 'Oswald-Regular' }}>
						{item.headline}
					</Text>
					<Text style={{ color: '#3E4346', fontSize: 12, fontFamily: 'Oswald-Regular' }}>
						MONDAY, 2 Nov 2018
					</Text>
				</View>
			</View>
			<Text style={{ color: '#7B7B7B', fontSize: 12 }}>{item.desc}</Text>
		</Pressable>
	)
}

export default NewsItem
