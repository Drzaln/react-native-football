import React from 'react'
import NewsItem from './NewsItem'

const NewsList = ({ newsData }) => {
	return (
		<React.Fragment>
			{newsData && newsData.length > 0 ? newsData.map((item, i) => <NewsItem key={i} item={item} />) : null}
		</React.Fragment>
	)
}

export default NewsList
