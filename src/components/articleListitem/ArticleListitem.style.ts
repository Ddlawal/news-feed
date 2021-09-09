import { makeStyles, Theme } from '@material-ui/core'
import { DesktopI } from '../../interfaces/styles'

export const articleListItemStyles = makeStyles<Theme, DesktopI>(({ palette }) => ({
	articleListItemContainer: {
		borderRadius: '.5rem',
		marginBottom: '3rem',
	},

	link: {
		color: '#3c3c3c',
		textDecoration: 'none',
		cursor: 'pointer',
		marginBottom: '.5rem',
	},

	colorPrimary: {
		color: palette.primary.main,
		backgroundColor: 'white',
		margin: '.5rem 0',
	},

	underline: {
		borderBottom: `1px solid ${palette.primary.main}`,
		cursor: 'pointer',
	},

	newsTitle: {
		fontWeight: 700,
		fontSize: ({ desktop }) => (desktop ? '1.5rem' : '1rem'),
		lineHeight: ({ desktop }) => (desktop ? 1.6 : 1.3),
	},

	imageWrapper: {
		height: '100%',
		width: '100%',
	},

	image: {
		borderRadius: '.7rem',
	},

	trend: {
		margin: '.3rem 0 0 .3rem',
		height: ({ desktop }) => (desktop ? '1.3rem' : '1rem'),
		width: ({ desktop }) => (desktop ? '1.1rem' : '.7rem'),
	},

	publishedAtText: {
		marginLeft: '.4rem',
		color: palette.primary.main,
		fontSize: ({ desktop }) => (desktop ? '1.3rem' : '1rem'),
	},
}))
