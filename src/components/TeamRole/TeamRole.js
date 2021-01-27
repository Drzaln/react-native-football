import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import Animated, { interpolate } from 'react-native-reanimated'
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions'
import Player from '../Player/Player'

const TeamRole = ({ role, style, fontStyle, data, transition, onPress }) => {
	const width = useWindowDimensions().width
	const translateY = interpolate(transition, {
		inputRange: [ 0, 1 ],
		outputRange: [ -50, 0 ]
	})
	const translateX = interpolate(transition, {
		inputRange: [ 0, 1 ],
		outputRange: [ width, 0 ]
	})
	return (
		<ScrollView
			horizontal
			overScrollMode='never'
			showsHorizontalScrollIndicator={false}
			showsVerticalScrollIndicator={false}
			contentContainerStyle={[ { alignItems: 'center', paddingRight: 20 }, style ]}>
			<Animated.Text
				adjustsFontSizeToFit
				allowFontScaling
				style={[
					{
						position: 'absolute',
						left: -45,
						fontFamily: 'Oswald-SemiBold',
						color: '#25282A',
						fontSize: 36,
						textTransform: 'uppercase',
						transform: [ { rotate: '-90deg' }, { translateY } ]
					},
					fontStyle
				]}>
				{role}
			</Animated.Text>
			<Animated.View style={{ flexDirection: 'row', transform: [ { translateX } ] }}>
				{data && data.length > 0 ? (
					data.map((item, i) => <Player key={i} data={item} index={i} onPress={onPress} />)
				) : null}
			</Animated.View>
		</ScrollView>
	)
}

export default TeamRole
