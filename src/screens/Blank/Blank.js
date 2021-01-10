import React from 'react'
import { Text } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

const Blank = () => {
	return (
		<ScrollView
			contentContainerStyle={{
				paddingVertical: 16,
				backgroundColor: '#030610',
				justifyContent: 'center',
                alignItems: 'center',
                flex: 1
			}}
			overScrollMode='never'
			showsHorizontalScrollIndicator={false}
			showsVerticalScrollIndicator={false}>
			<Text style={{ fontFamily: 'JuventusFans-Bold', color: '#3E4346', fontSize: 64 }}>J</Text>
		</ScrollView>
	)
}

export default Blank
