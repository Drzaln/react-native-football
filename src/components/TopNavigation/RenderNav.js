import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

const RenderNav = ({ item, onPress, selectedNav, mode }) => {
	let color = '#FAFAFA'
	let notSelectedColor = '#3E4346'
	if (mode === 'block') {
		color = '#030610'
	} else if(mode === 'blokline'){
		color = '#030610'
		notSelectedColor='#FAFAFA'
	}
	return (
		<TouchableOpacity onPress={onPress}>
			<View ref={item.ref} style={{ marginHorizontal: 16 }}>
				<Text
					style={{
						fontFamily: 'Oswald-Regular',
						color: item.key === selectedNav ? color : notSelectedColor,
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
