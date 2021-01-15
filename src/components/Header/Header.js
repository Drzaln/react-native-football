import React from 'react'
import { View, Text, Pressable } from 'react-native'
import Left from '../../assets/icons/Left'

const Header = ({ previous, navigation }) => {
	return (
		<View
			style={{
				justifyContent: 'center',
				alignItems: 'center',
				flexDirection: 'row',
				backgroundColor: '#030610',
				paddingVertical: 8
			}}>
			{previous ? (
				<Pressable
					onPress={navigation.goBack}
					hitSlop={{ top: 16, bottom: 16, left: 16, right: 16 }}
					style={{ height: 20, width: 20, position: 'absolute', left: 16, top: 20 }}>
					<Left />
				</Pressable>
			) : (
				undefined
			)}
			<Text style={{ fontFamily: 'JuventusFans-Bold', color: '#FAFAFA', fontSize: 30 }}>JUVENTUS</Text>
			<Text style={{ fontFamily: 'Oswald-ExtraLight', color: '#FAFAFA', fontSize: 25 }}> TEAM</Text>
		</View>
	)
}

export default Header
