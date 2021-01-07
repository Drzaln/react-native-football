import React from 'react'
import TeamRole from '../../components/TeamRole/TeamRole'
import { forwards, midfielders, defenders, goalkeepers } from '../../constants/Player'

const Home = () => {
	return (
		<React.Fragment>
			<TeamRole role="forward" data={forwards} />
			<TeamRole role="midfielders" data={midfielders} fontStyle={{ left: -68 }} style={{ marginTop: 46 }} />
			<TeamRole role="defenders" data={defenders} fontStyle={{ left: -55 }} style={{ marginTop: 46 }} />
			<TeamRole role="goalkeepers" data={goalkeepers} fontStyle={{ left: -74 }} style={{ marginTop: 46 }} />
		</React.Fragment>
	)
}

export default React.memo(Home)
