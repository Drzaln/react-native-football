import React, { useState } from 'react'
import { SafeAreaView, View, StatusBar } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { enableScreens } from 'react-native-screens'
import TeamRole from './src/components/TeamRole/TeamRole'
import TopNavigation from './src/components/TopNavigation/TopNavigation'
import Header from './src/components/Header/Header'
import { forwards, midfielders, defenders, goalkeepers } from './src/constants/Player'
enableScreens()

const App = () => {
	const [ selectedNav, setSelectedNav ] = useState(0)
	const nav = [ 'home', 'news', 'live', 'statistic', 'table', 'tickets' ]
	return (
		<View style={{ backgroundColor: '#030610', flex: 1 }}>
			<StatusBar barStyle="light-content" backgroundColor="#030610" />
			<SafeAreaView>
				<ScrollView
					contentContainerStyle={{ paddingBottom: 8 }}
					overScrollMode="never"
					showsHorizontalScrollIndicator={false}
					showsVerticalScrollIndicator={false}
					stickyHeaderIndices={[ 1 ]}>
					<Header />
					<TopNavigation nav={nav} selectedNav={selectedNav} onPress={(key) => setSelectedNav(key)} />
					<TeamRole role="forward" data={forwards} />
					<TeamRole
						role="midfielders"
						data={midfielders}
						fontStyle={{ left: -68 }}
						style={{ marginTop: 46 }}
					/>
					<TeamRole role="defenders" data={defenders} fontStyle={{ left: -55 }} style={{ marginTop: 46 }} />
					<TeamRole
						role="goalkeepers"
						data={goalkeepers}
						fontStyle={{ left: -74 }}
						style={{ marginTop: 46 }}
					/>
				</ScrollView>
			</SafeAreaView>
		</View>
	)
}

export default App
