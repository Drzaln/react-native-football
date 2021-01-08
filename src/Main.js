import React, { useState } from 'react'
import { SafeAreaView, View, StatusBar } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { enableScreens } from 'react-native-screens'
import TopNavigation from './components/TopNavigation/TopNavigation'
import Header from './components/Header/Header'
import Home from './screens/Home/Home'
import News from './screens/News/News'
enableScreens()

const Main = () => {
	const [ selectedNav, setSelectedNav ] = useState(0)
	const nav = [ 'home', 'news', 'live', 'statistic', 'table', 'tickets' ]
	let content

	switch (selectedNav) {
		case 0:
			content = <Home />
			break
		case 1:
			content = <News />
			break
		default:
			content = <Home />
			break
	}

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
					{content}
				</ScrollView>
			</SafeAreaView>
		</View>
	)
}

export default Main
