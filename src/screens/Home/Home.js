import React, { useEffect, useState } from 'react'
import TeamRole from '../../components/TeamRole/TeamRole'
import { useTransition } from 'react-native-redash/lib/module/v1'
import { forwards, midfielders, defenders, goalkeepers } from '../../constants/Player'

const Home = () => {
	const [ show, setShow ] = useState(1)
	const transitionHome = useTransition(show)

	useEffect(() => {
		setShow(1)
		return () => {
			setShow(0)
		}
	}, [])

	return (
		<React.Fragment>
			<TeamRole role="forward" data={forwards} transition={transitionHome} />
			<TeamRole
				role="midfielders"
				data={midfielders}
				fontStyle={{ left: -68 }}
				style={{ marginTop: 46 }}
				transition={transitionHome}
			/>
			<TeamRole
				role="defenders"
				data={defenders}
				fontStyle={{ left: -55 }}
				style={{ marginTop: 46 }}
				transition={transitionHome}
			/>
			<TeamRole
				role="goalkeepers"
				data={goalkeepers}
				fontStyle={{ left: -74 }}
				style={{ marginTop: 46 }}
				transition={transitionHome}
			/>
		</React.Fragment>
	)
}

export default React.memo(Home)
