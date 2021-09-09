import { makeStyles, Theme } from '@material-ui/core'
import { DesktopI } from '../../interfaces/styles'

export const primaryButtonStyles = makeStyles<Theme, DesktopI>(({ palette }) => ({
	btn: {
		color: palette.primary.light,
		border: `2px solid ${palette.primary.light}`,
		width: '70vw',
		margin: '1.5rem',
		borderRadius: '2rem',
		fontWeight: 700,
		padding: ({ desktop }) => (desktop ? '.8rem 0' : '.3rem 0'),
	},
}))
