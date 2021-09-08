import { FunctionComponent, useEffect, useState } from 'react'
import request from '../../services/request'
import { CircularProgress, Grid, List, ListItem, ListItemText } from '@material-ui/core'
import { FavoriteBorder as FavoriteBorderIcon } from '@material-ui/icons'

interface ArticlesAttr {
	source: {
		id: string
	}
	author: string
}

export const Home: FunctionComponent = () => {
	const [articles, setArticles] = useState<ArticlesAttr[]>([])
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const fetchArticles = async () => {
			const data = await request.get({ q: 'tesla', pageSize: 10 })

			setArticles(data.articles)
			setLoading(false)
		}

		fetchArticles()
	}, [])
	return (
		<Grid>
			{loading ? (
				<CircularProgress />
			) : (
				<List dense>
					{articles?.map((article: ArticlesAttr, i) => (
						<ListItem key={i}>
							<FavoriteBorderIcon /> <ListItemText primary={article.author} />
						</ListItem>
					))}
				</List>
			)}
		</Grid>
	)
}
