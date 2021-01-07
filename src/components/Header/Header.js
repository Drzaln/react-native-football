import React from 'react'
import { View, Text } from 'react-native'

const Header = () => (
	<View
		style={{
			justifyContent: 'center',
			alignItems: 'center',
			flexDirection: 'row',
			paddingTop: 16
		}}>
		<Text style={{ fontFamily: 'JuventusFans-Bold', color: '#FAFAFA', fontSize: 30 }}>JUVENTUS</Text>
		<Text style={{ fontFamily: 'Oswald-ExtraLight', color: '#FAFAFA', fontSize: 25 }}> TEAM</Text>
	</View>
)

export default Header
