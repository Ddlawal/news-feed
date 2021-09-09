/* eslint-disable prettier/prettier */
import { createTheme } from '@material-ui/core/styles'

declare module '@material-ui/core/styles/createPalette' {
	export interface Palette {
		heading: Palette['primary']
		body: Palette['primary']
		boxShadow: Palette['primary']
	}
	export interface PaletteOptions {
		heading: PaletteOptions['primary']
		body: PaletteOptions['primary']
		boxShadow: PaletteOptions['primary']
	}
}

const theme = createTheme({
	palette: {
		primary: {
			light: '#936FFB',
			main: '#716493',
			dark: '#1D1C4E',
		},
		secondary: {
			light: '#02022f',
			main: '#02022f',
			dark: '#02022f',
		},
		heading: {
			main: '#4F4F4F',
			dark: '#292929',
			light: '#A6A6A6',
		},
		body: {
			main: '#3c3c3c',
			light: '#3c3c3c',
			dark: '#3c3c3c',
		},
		boxShadow: {
			main: '4px 4px 30px $60267a',
			dark: '4px 4px 30px #60267a',
		},
	},
})

export default theme
