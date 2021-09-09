import { makeStyles, Theme } from '@material-ui/core/styles'
import { DesktopI } from '../../interfaces/styles'

export const homePageStyles = makeStyles<Theme, DesktopI>(({ palette }) => ({
	scrollableContainer: {
		overflow: 'hidden',
		overflowY: 'auto',
		padding: ({ desktop }) => (desktop ? 0 : '.5rem 3%'),

		'&:focus': {
			outline: 'none',
		},
		'&::-webkit-scrollbar': {
			width: 5,
		},
		'&::-webkit-scrollbar-track': {
			background: '#f1f1f1',
		},
		'&::-webkit-scrollbar-thumb': {
			background: palette.primary.main,
		},
	},

	articlesListWrapper: {
		margin: '2rem 0',
		height: 'inherit',
		padding: ({ desktop }) => (desktop ? '.5rem 10%' : '0 .3rem'),
	},

	heading: {
		fontSize: ({ desktop }) => (desktop ? '2.5rem' : '1.5rem'),
		margin: '3rem 0',
	},
}))
