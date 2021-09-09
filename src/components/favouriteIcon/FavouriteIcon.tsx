import { FunctionComponent, useState } from 'react'
import { FavoriteBorder as FavoriteBorderIcon, Favorite as FavoriteIcon } from '@material-ui/icons'
import { favouriteIconStyles } from './FavouriteIcon.style'
import { FavouriteIconI } from '../../interfaces/components'

export const FavouriteIcon: FunctionComponent<FavouriteIconI> = ({ liked, like, unlike, color, size }) => {
	const { icon } = favouriteIconStyles({ color })

	return (
		<>
			{liked ? (
				<FavoriteIcon fontSize={size} onClick={unlike} className={icon} />
			) : (
				<FavoriteBorderIcon fontSize={size} onClick={like} className={icon} />
			)}
		</>
	)
}
