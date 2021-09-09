import { makeStyles, Theme } from '@material-ui/core'
import { DesktopI } from '../../interfaces/styles'

export const bannerStyles = makeStyles<Theme, DesktopI>(({ palette }) => ({
	bannerImageWrapper: {
		borderRadius: '1rem',
		position: 'relative',
		height: ({ desktop }) => (desktop ? '80vh' : '40vh'),
	},

	bannerImage: {
		borderRadius: ({ desktop }) => (desktop ? 0 : '1rem'),
		width: '100%',
		height: ({ desktop }) => (desktop ? '80vh' : '40vh'),
	},

	overlay: {
		borderRadius: ({ desktop }) => (desktop ? 0 : '1rem'),
		width: '100%',
		height: '100%',
		backgroundColor: 'transparent',
		background:
			'linear-gradient(180deg, rgba(29, 28, 78,0) 50%, rgba(29, 28, 78,.8) 70%, rgba(29, 28, 78,1) 90%, rgba(29, 28, 78,1) 100%)',
		position: 'absolute',
		zIndex: 0,
		overflow: 'hidden',
	},

	bannerWriteup: {
		width: '100%',
		height: ({ desktop }) => (desktop ? '30%' : '35%'),
		padding: '0 5%',
		color: 'white',
		position: 'absolute',
		fontWeight: 600,
		fontSize: ({ desktop }) => (desktop ? '1.5rem' : '.8rem'),
		bottom: 0,
		zIndex: 1,
	},

	titleText: {
		fontSize: ({ desktop }) => (desktop ? '2rem' : '1rem'),
	},

	newsTitle: {
		marginBottom: ({ desktop }) => (desktop ? '1rem' : '.2rem'),
	},

	colorPrimary: {
		color: 'white',
		backgroundColor: palette.primary.main,
		margin: '.5rem 0',
	},
}))
