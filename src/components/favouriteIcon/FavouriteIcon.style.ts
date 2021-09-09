import { makeStyles } from '@material-ui/core'

export const favouriteIconStyles = makeStyles({
	icon: {
		color: (props: { color: string }) => props.color,
		cursor: 'pointer',
	},
})
