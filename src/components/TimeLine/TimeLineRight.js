import React from 'react'
import { View, Text } from 'react-native'

const TimeLineRight = ({ time, desc }) => {
	return (
		<View style={{ flexDirection: 'row', justifyContent: 'center' }}>
			<View style={{ flex: 1, borderRightColor: '#3E4346', borderRightWidth: 1 }} />
			<View style={{ flex: 1, borderLeftColor: '#3E4346', borderLeftWidth: 1 }}>
				<View style={{ paddingHorizontal: 12 }}>
					<Text
						style={{
							fontFamily: 'Oswald-Medium',
							fontSize: 12,
							color: '#FAFAFA',
							letterSpacing: 0,
							marginBottom: 4
						}}>
						{time}
					</Text>
					<Text
						numberOfLines={2}
						style={{
							fontSize: 12,
							color: '#FAFAFA',
							letterSpacing: 0,
							lineHeight: 18
						}}>
						{desc}
					</Text>
				</View>
			</View>
			<View
				style={{
					height: 12,
					width: 12,
					borderRadius: 100,
					backgroundColor: '#FFC93C',
					position: 'absolute'
				}}
			/>
		</View>
	)
}

export default TimeLineRight
