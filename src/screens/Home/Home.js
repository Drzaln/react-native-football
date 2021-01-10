import React, { useState } from 'react'
import TeamRole from '../../components/TeamRole/TeamRole'
import { useTransition } from 'react-native-redash/lib/module/v1'
import { forwards, midfielders, defenders, goalkeepers } from '../../constants/Player'
import { ScrollView } from 'react-native-gesture-handler'
import { useFocusEffect } from '@react-navigation/native'

const Home = () => {
	const [ show, setShow ] = useState(0)
	const config = {
		duration: 200
	}
	const transitionHome = useTransition(show, config)

	useFocusEffect(
		React.useCallback(() => {
			setShow(1)
			return () => {
				setShow(0)
			}
		}, [])
	)

	return (
		<ScrollView
			contentContainerStyle={{ paddingVertical: 16, backgroundColor: '#030610' }}
			overScrollMode='never'
			showsHorizontalScrollIndicator={false}
			showsVerticalScrollIndicator={false}>
			<TeamRole role='forward' data={forwards} transition={transitionHome} />
			<TeamRole
				role='midfielders'
				data={midfielders}
				fontStyle={{ left: -68 }}
				style={{ marginTop: 46 }}
				transition={transitionHome}
			/>
			<TeamRole
				role='defenders'
				data={defenders}
				fontStyle={{ left: -55 }}
				style={{ marginTop: 46 }}
				transition={transitionHome}
			/>
			<TeamRole
				role='goalkeepers'
				data={goalkeepers}
				fontStyle={{ left: -74 }}
				style={{ marginTop: 46 }}
				transition={transitionHome}
			/>
		</ScrollView>
	)
}

export default React.memo(Home)
