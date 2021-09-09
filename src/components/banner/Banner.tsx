import { FunctionComponent } from 'react'
import { bannerStyles } from './Banner.style'
import { Box, Chip, Grid, useMediaQuery } from '@material-ui/core'
import { MoreHoriz as MoreHorizIcon } from '@material-ui/icons'
import { FavouriteIcon } from '../favouriteIcon'
import { BannerI } from '../../interfaces/components'

export const Banner: FunctionComponent<BannerI> = ({ article }) => {
	const desktop = useMediaQuery('(min-width: 600px)')
	const { bannerImageWrapper, bannerImage, newsTitle, overlay, colorPrimary, bannerWriteup, titleText } = bannerStyles({ desktop })
	const title = article?.title.slice(0, desktop ? 80 : 40)
	return (
		<div className={bannerImageWrapper}>
			<div className={overlay}></div>
			<div className={bannerWriteup}>
				<Grid className={titleText} container justifyContent='space-between' alignItems='center'>
					<Grid item xs={11}>
						{article?.source?.name}
					</Grid>
					<Grid container xs={1} alignItems='center' justifyContent='flex-end'>
						<MoreHorizIcon fontSize={desktop ? 'large' : 'small'} />
					</Grid>
				</Grid>
				<Grid className={newsTitle}>{title}...</Grid>
				<Grid container alignItems='center' justifyContent='space-between'>
					<Grid container xs={9} justifyContent='flex-start' spacing={2}>
						<Grid item>
							<Chip size={desktop ? 'medium' : 'small'} classes={{ colorPrimary }} color='primary' label='Finance' />
						</Grid>
						<Grid item>
							<Chip size={desktop ? 'medium' : 'small'} classes={{ colorPrimary }} color='primary' label='Technolgy' />
						</Grid>
					</Grid>
					<Grid container xs={3} alignItems='center' justifyContent='flex-end'>
						<FavouriteIcon color='white' size={desktop ? 'large' : 'medium'} />
						<Box fontSize={desktop ? 22 : 16} fontWeight={700} style={{ marginLeft: '.3rem' }}>
							253
						</Box>
					</Grid>
				</Grid>
			</div>
			<img src={article?.urlToImage} alt='' className={bannerImage} />
		</div>
	)
}
