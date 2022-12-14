import { FC } from 'react'
import { ReactNode } from 'react'

type Props = {
	title: string
	className?: string
	children: ReactNode
}

const Grid: FC<Props> = ({ className, children, title }): JSX.Element => {
	return (
		<div className={className}>
			<h2 className='text-xl font-bold pb-4'>{title}</h2>
			<div className='grid grid-cols-auto-fill gap-8'>{children}</div>
		</div>
	)
}

export default Grid

// Path: components/grid.tsx
