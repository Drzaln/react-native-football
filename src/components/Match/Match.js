import React from 'react'
import { View, Text, useWindowDimensions } from 'react-native'
import Animated from 'react-native-reanimated'
import Inter from '../../assets/logo/Inter'
import Juventus from '../../assets/logo/Juventus'

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

export default Match
