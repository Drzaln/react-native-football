import React from 'react'
import { Text } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Player from '../Player/Player'
const TeamRole = ({ role, style, fontStyle, data }) => {
	return (
		<ScrollView
			horizontal
			overScrollMode="never"
			showsHorizontalScrollIndicator={false}
			showsVerticalScrollIndicator={false}
			contentContainerStyle={[ { alignItems: 'center', paddingRight: 20 }, style ]}>
			<Text
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
						transform: [ { rotate: '-90deg' } ]
					},
					fontStyle
				]}>
				{role}
			</Text>
			{data && data.length > 0 ? data.map((item, i) => <Player key={i} data={item} index={i} />) : null}
		</ScrollView>
	)
}

export default TeamRole
