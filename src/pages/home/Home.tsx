import { FunctionComponent, useEffect, useState } from 'react'
import request from '../../services/request'
import { Box, Button, CircularProgress, Grid, useMediaQuery } from '@material-ui/core'
import { Banner } from '../../components/banner/Banner'
import { homePageStyles } from './Home.style'
import { ArticleListItem } from '../../components/articleListitem/ArticleListitem'
import { ArticlesI } from '../../interfaces/components'
import { PrimaryButton } from '../../components/primaryButton'
import { getRandomNumber } from '../../helper'
import { newsData } from '../../helper/newsData'

const searchStrings = ['Health', 'Business', 'Technology', 'Bitcoin', 'Finance', 'Marketing', 'Food', 'Breaking', 'Sport', 'Energy']

export const Home: FunctionComponent = () => {
	const desktop = useMediaQuery('(min-width: 600px)')
	const { scrollableContainer, articlesListWrapper, heading } = homePageStyles({ desktop })

	const [articles, setArticles] = useState<ArticlesI[]>([])
	const [loading, setLoading] = useState(true)
	const [pageSize, setPageSize] = useState<number | null>(5)

	const index = getRandomNumber()
	const q = searchStrings[index === 10 ? index - 1 : index]

	const viewAll = () => setPageSize(null)

	const reloadPage = () => {
		setLoading(true)
		window.location.reload()
	}

	useEffect(() => {
		const fetchArticles = async () => {
			const params = pageSize ? { q, pageSize } : { q }

			const data = await request.get(params)

			setArticles(data?.articles ? data?.articles : newsData)
			console.log(data?.articles)
			setLoading(false)
		}

		fetchArticles()
	}, [pageSize])
	return (
		<>
			{loading ? (
				<Grid style={{ height: '100vh' }} container justifyContent='center' alignItems='center'>
					<CircularProgress />
				</Grid>
			) : (
				<Grid className={scrollableContainer}>
					{articles?.length > 0 ? (
						<>
							<Banner article={articles[0]} />
							<div className={articlesListWrapper}>
								<Grid className={heading}>Trending News</Grid>
								{articles?.map((article: ArticlesI, index) => {
									const randomNumber = getRandomNumber()

									article.likes = randomNumber * 10 + (randomNumber * 10 + 13) + randomNumber + 2

									return <ArticleListItem key={index} article={article} />
								})}
							</div>

							<Grid container justifyContent='center' alignItems='center'>
								<PrimaryButton onClick={viewAll} btnText='View All' />
							</Grid>
						</>
					) : (
						<Grid container justifyContent='center' alignItems='center'>
							<Box fontSize={20}>No news available</Box>
							<Grid style={{ height: '100vh' }} container justifyContent='center' alignItems='center'>
								<PrimaryButton onClick={reloadPage} btnText='Refresh' />
							</Grid>
						</Grid>
					)}
				</Grid>
			)}
		</>
	)
}
