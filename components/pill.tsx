import { FC } from 'react'

type Props = {
	text: string
	className?: string
}

const Pill: FC<Props> = ({ className, text }): JSX.Element => (
	<div
		className={`bg-cyan-800 text-white text-sm font-bold px-2 py-1 m-2 rounded-full inline-block ${className}`}
	>
		{text}
	</div>
)

export default Pill

// Path: components/pill.tsx
