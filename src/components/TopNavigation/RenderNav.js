import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

const RenderNav = ({ item, onPress, selectedNav, mode }) => {
	let color = '#FAFAFA'
	if (mode === 'block') {
		color = '#030610'
	}
	return (
		<TouchableOpacity onPress={onPress}>
			<View ref={item.ref} style={{ marginHorizontal: 16 }}>
				<Text
					style={{
						fontFamily: 'Oswald-Regular',
						color: item.key === selectedNav ? color : '#3E4346',
						fontSize: 16,
						textTransform: 'uppercase'
					}}>
					{item.title}
				</Text>
			</View>
		</TouchableOpacity>
	)
}

export default RenderNav
