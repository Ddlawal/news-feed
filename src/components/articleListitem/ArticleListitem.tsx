import {
	Box,
	Chip,
	Grid,
	IconButton,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Popover,
	useMediaQuery,
	useTheme,
} from '@material-ui/core'
import { FunctionComponent, MouseEvent, useState } from 'react'
import { ArticleListItemI } from '../../interfaces/components'
import { articleListItemStyles } from './ArticleListitem.style'
import { FavoriteBorder as FavoriteBorderIcon, MoreHoriz as MoreHorizIcon, Share as ShareIcon } from '@material-ui/icons'
import { FavouriteIcon } from '../favouriteIcon'

const defaultTags = ['PTSK', 'FLTW']

export const ArticleListItem: FunctionComponent<ArticleListItemI> = ({ article }) => {
	const desktop = useMediaQuery('(min-width: 600px)')
	const { articleListItemContainer, link, colorPrimary, underline, imageWrapper, image, newsTitle, publishedAtText, trend } =
		articleListItemStyles({ desktop })
	const { palette } = useTheme()

	const [tags, setTags] = useState(defaultTags)
	const [liked, setLiked] = useState(false)
	const [likes, setLikes] = useState(article.likes)

	const like = () => {
		setLiked(true)
		setLikes((previousValue: number) => previousValue + 1)
	}

	const unlike = () => {
		setLiked(false)
		setLikes((previousValue: number) => previousValue - 1)
	}

	const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)

	const openPopover = (event: MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget)
	}

	const closePopover = () => {
		setAnchorEl(null)
	}

	const open = Boolean(anchorEl)
	const id = open ? 'simple-popover' : undefined

	const showMoretags = () => setTags(previousValue => [...previousValue, 'THIM', 'WPFD'])

	return (
		<div className={articleListItemContainer}>
			<Grid container spacing={1}>
				<Grid container item alignItems='center' xs={7} spacing={1}>
					<Box fontSize={desktop ? 24 : 20} fontWeight={700}>
						{article?.source?.name}
					</Box>
					<Box fontSize={desktop ? 24 : 20} fontWeight={700}>
						<span className={publishedAtText}>2h</span>
					</Box>
					<Box fontSize={desktop ? 24 : 20} fontWeight={700}>
						<img className={trend} src='trending.png' alt='' />
					</Box>
				</Grid>
				<Grid container alignItems='center' justifyContent='flex-end' xs={5} spacing={1}>
					<Grid item>
						<FavouriteIcon color={palette.primary.main} liked={liked} like={like} unlike={unlike} />
					</Grid>
					<Grid item>{likes}</Grid>
					<Grid item>
						<IconButton onClick={openPopover}>
							<MoreHorizIcon />
						</IconButton>
					</Grid>
				</Grid>
			</Grid>
			<Grid container spacing={2}>
				<Grid item xs={8}>
					<Box className={newsTitle}>
						<a href={article?.url} className={link}>
							{article?.title.slice(0, desktop ? 150 : 60)} <span className={publishedAtText}>... read more</span>
						</a>
					</Box>
					<Grid container justifyContent='flex-start' spacing={2}>
						<Grid item>
							<Chip
								size={desktop ? 'medium' : 'small'}
								classes={{
									colorPrimary,
								}}
								color='primary'
								label='Finance'
							/>
						</Grid>
						<Grid item>
							<Chip
								size={desktop ? 'medium' : 'small'}
								classes={{
									colorPrimary,
								}}
								color='primary'
								label='Technolgy'
							/>
						</Grid>
					</Grid>
				</Grid>
				<Grid item xs={4}>
					<Box className={imageWrapper}>
						<img className={`${imageWrapper} ${image}`} src={article?.urlToImage} alt='' />
					</Box>
				</Grid>
			</Grid>

			<Grid container justifyContent='flex-start' spacing={2}>
				{tags.map((tag, i) => (
					<Grid key={i} item>
						<Box fontWeight={700} fontSize={18} color={palette.primary.main}>
							{tag},
						</Box>
					</Grid>
				))}
				{tags.length < 3 && (
					<Grid item>
						<Box fontWeight={700} fontSize={18} color={palette.primary.main} justifyContent='flex-start' onClick={showMoretags}>
							<span className={underline}>2 more</span>
						</Box>
					</Grid>
				)}
			</Grid>
			<Popover
				id={id}
				open={open}
				anchorEl={anchorEl}
				onClose={closePopover}
				anchorOrigin={{
					vertical: 'top',
					horizontal: 'left',
				}}
				transformOrigin={{
					vertical: 'bottom',
					horizontal: 'left',
				}}
			>
				<List dense>
					<ListItem button>
						<ListItemIcon>
							<ShareIcon fontSize='small' />
						</ListItemIcon>
						<ListItemText primary='Share' />
					</ListItem>
				</List>
			</Popover>
		</div>
	)
}
