import Link from 'next/link'
import { FC } from 'react'

type Props = {
	title: string
}

const Breadcrumb: FC<Props> = ({ title }): JSX.Element => {
	return (
		<div className='bg-zinc-800'>
			<div className='flex items-center max-w-7xl m-auto p-4 text-white text-lg'>
				<Link href='/'>
					<span className='cursor-pointer hover:opacity-80 duration-300'>
						Home
					</span>
				</Link>
				<span className='block mx-2'>/</span>
				<span className='font-bold truncate'>{title}</span>
			</div>
		</div>
	)
}

export default Breadcrumb
