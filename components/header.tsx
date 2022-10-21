import { NextPage } from 'next'
import Link from 'next/link'
import Image from 'next/image'

const Header: NextPage = (): JSX.Element => {
	return (
		<div className='sticky flex top-0 z-50 w-full h-24 bg-zinc-900'>
			<div className='flex justift-between w-full h-full max-w-7xl m-auto px-4'>
				<Link href='/'>
					<div className='flex items-center cursor-pointer'>
						<div className='invisible md:visible'>
							<Image
								width='150'
								height='50'
								src='/rmdb-logo.svg'
								alt='rmdb-logo.svg'
							/>
						</div>
						<div className='absolute md:invisible pt-2'>
							<Image
								width='42'
								height='42'
								src='/rmdb-logo-small.svg'
								alt='rmdb-logo-small.svg'
							/>
						</div>
					</div>
				</Link>
			</div>
		</div>
	)
}

export default Header

// Path: components/header.tsx
