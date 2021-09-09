import { Button, useMediaQuery } from '@material-ui/core'
import { FunctionComponent } from 'react'
import { PrimaryButtonI } from '../../interfaces/components'
import { primaryButtonStyles } from './PrimaryButton.style'

export const PrimaryButton: FunctionComponent<PrimaryButtonI> = ({ onClick, btnText }) => {
	const desktop = useMediaQuery('(min-width: 600px)')
	const { btn } = primaryButtonStyles({ desktop })

	return (
		<Button onClick={onClick} className={btn}>
			{btnText}
		</Button>
	)
}
