import React from 'react'
import { View, Text, ImageBackground, Pressable } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

const Player = ({ data, index, onPress }) => {
	return (
		<Pressable onPress={onPress}>
			<View style={{ width: 125, height: 200, marginLeft: index === 0 ? 70 : 16 }}>
				<ImageBackground
					style={{
						width: '100%',
						height: '100%',
						position: 'absolute',
						zIndex: 1,
						justifyContent: 'flex-end'
					}}
					source={{ uri: data.image }}
					resizeMode='cover'>
					<LinearGradient
						colors={[ 'transparent', '#030610', '#030610', '#030610' ]}
						style={{
							paddingBottom: 8,
							paddingTop: 16,
							justifyContent: 'center',
							alignItems: 'center'
						}}>
						<Text
							adjustsFontSizeToFit
							allowFontScaling
							style={{ color: '#FAFAFA', fontSize: 12, fontWeight: 'bold' }}>
							{data.name}
						</Text>
					</LinearGradient>
				</ImageBackground>
				<Text
					style={{
						position: 'absolute',
						top: -20,
						left: 5,
						fontFamily: 'JuventusFans-Bold',
						color: '#25282A',
						fontSize: 70,
						textTransform: 'uppercase'
					}}>
					{data.number}
				</Text>
			</View>
		</Pressable>
	)
}

export default Player
