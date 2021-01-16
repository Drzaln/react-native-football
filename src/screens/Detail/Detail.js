import React, { useState } from 'react'
import { View, Text, Image, useWindowDimensions } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import LinearGradient from 'react-native-linear-gradient'
import CircleAnimated from '../../components/CircleAnimated/CircleAnimated'
import TopNavigation from '../../components/TopNavigation/TopNavigation'

const Detail = () => {
	const [ selectedNav, setSelectedNav ] = useState(0)
	const nav = [ 'defence', 'distribution', 'attack', 'discipline' ]
	return (
		<ScrollView
			contentContainerStyle={{ paddingVertical: 16, backgroundColor: '#030610' }}
			overScrollMode='never'
			showsHorizontalScrollIndicator={false}
			showsVerticalScrollIndicator={false}>
			<View style={{ flexDirection: 'row', paddingHorizontal: 16 }}>
				<View style={{ flex: 1, justifyContent: 'space-between' }}>
					<PlayerInfo />
					<NumberStat />
					<NumberStat number={64} text='SHOTS ON TARGET' />
					<NumberStat direction='column' number={2.239} text='MINUTES PLAYED' />
				</View>
				<BigImage />
			</View>
			<TopNavigation
				nav={nav}
				selectedNav={selectedNav}
				mode='blokline'
				style={{ marginVertical: 16, marginLeft: 16 }}
				onPress={(key) => setSelectedNav(key)}
			/>
			<View style={{ marginHorizontal: 16, flexDirection: 'row', justifyContent: 'space-between' }}>
				<PlayerStat percent={75} number={26} title='Clearance' barTitle='Tackles' />
				<PlayerStat percent={48.1} number={2} title='Blocks' barTitle='Duel' />
				<PlayerStat percent={44.1} number={4} title='Interceptions' barTitle='Aerial Duels' />
			</View>
		</ScrollView>
	)
}

export default Detail

const PlayerStat = ({ percent, number, title, barTitle }) => {
	return (
		<View style={{ justifyContent: 'center', alignItems: 'center' }}>
			<Text
				style={{
					fontSize: 18,
					lineHeight: 24,
					color: '#FFC93C'
				}}>
				{number}
			</Text>
			<Text
				style={{
					fontFamily: 'Oswald-Regular',
					fontSize: 12,
					lineHeight: 17,
					color: '#3E4346'
				}}>
				{title}
			</Text>
			<Text
				style={{
					fontSize: 12,
					lineHeight: 17,
					color: '#FAFAFA',
					marginBottom: 8,
					marginTop: 16
				}}>
				{barTitle}
			</Text>
			<CircleAnimated percent={percent} duration={1700} />
		</View>
	)
}

const PlayerInfo = () => {
	return (
		<View>
			<Text
				style={{
					fontFamily: 'JuventusFans-Bold',
					fontSize: 96,
					color: '#25282A',
					position: 'absolute',
					top: -45
				}}>
				7
			</Text>
			<Text
				style={{
					fontFamily: 'Open Sans',
					fontSize: 24,
					lineHeight: 33,
					fontWeight: 'bold',
					color: '#FAFAFA'
				}}>
				Cristiano RONALDO
			</Text>
			<Text
				style={{
					fontFamily: 'Open Sans',
					fontSize: 18,
					lineHeight: 24,
					fontWeight: '600',
					color: '#FFC93C'
				}}>
				Forward
			</Text>
		</View>
	)
}

const BigImage = () => {
	const { width } = useWindowDimensions()
	const imageHeight = width - 150
	return (
		<View style={{ flex: 1.2, overflow: 'hidden' }}>
			<View style={{ height: imageHeight, width: '100%' }}>
				<Image
					style={{ height: '165%', width: '100%' }}
					source={require('../../assets/team/RONALDO_970x700.png')}
					resizeMethod='auto'
					resizeMode='cover'
				/>
				<LinearGradient
					colors={[ 'transparent', '#030610' ]}
					style={{
						height: 30,
						width: '100%',
						position: 'absolute',
						bottom: 0
					}}
				/>
			</View>
		</View>
	)
}

const NumberStat = ({ number = 19, text = 'GOALS', direction = 'row' }) => {
	return (
		<View style={{ flexDirection: direction, alignItems: direction === 'row' ? 'center' : undefined }}>
			<Text
				style={{
					fontFamily: 'Open Sans',
					fontSize: 24,
					lineHeight: 33,
					fontWeight: 'bold',
					color: '#FAFAFA'
				}}>
				{number}
			</Text>
			<Text
				style={{
					fontFamily: 'Oswald-SemiBold',
					fontSize: 12,
					lineHeight: 17,
					color: '#3E4346',
					marginLeft: direction === 'row' ? 4 : undefined
				}}>
				{text}
			</Text>
		</View>
	)
}
