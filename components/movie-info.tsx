import { FC } from 'react'
import Image from 'next/image'
import Thumb from './thumb'
import { Pill } from '../components'
import { calcTime, convertMoney } from '../helpers'

type Props = {
	thumbUrl: string
	backgroundImgUrl: string
	title: string
	year: string
	summary: string
	rating: number
	directors: Crew[]
	time: number
	budget: number
	revenue: number
}

const MovieInfo: FC<Props> = ({
	thumbUrl,
	backgroundImgUrl,
	title,
	year,
	summary,
	rating,
	directors,
	time,
	budget,
	revenue
}): JSX.Element => (
	<div className='relative w-full h-auto p-4'>
		<div className='relative h-full min-h-128 flex flex-col md:flex-row max-w-7xl p-4 m-auto z-10 rounded-xl bg-zinc-800 bg-opacity-90'>
			<div className='relative w-full h-96 md:h-auto md:w-1/3'>
				<Thumb imgUrl={thumbUrl} />
				<div className='absolute top-4 left-4 rounded-full bg-white w-10 h-10 flex justify-center items-center text-black text-sm font-bold'>
					{rating}
				</div>
			</div>
			<div className='text-white px-0 py-4 text-center md:py-0 md:text-left md:px-8 w-full md:w-2/3'>
				<h2 className='text-2xl md:4xl font-bold pb-4'>
					{title} ({year})
				</h2>
				<h3 className='text-lg md:text-xl font-bold'>Summary</h3>
				<p className='mb-8 text-sm md:text-lg'>{summary}</p>
				<div>
					<div>
						<h3 className='text-lg md:text-xl font-bold'>
							Director{directors.length > 1 ? 's' : ''}
						</h3>
						<div>
							{directors.map((director, index) => (
								<p key={index} className='text-sm md:text-lg'>
									{director.name}
								</p>
							))}
						</div>
					</div>
					<div className='mt-8'>
						<h3 className='text-lg md:text-xl font-bold'>Stats</h3>
						<Pill className='ml-0' text={`Runtime: ${calcTime(time)}`} />
						<Pill className='ml-0' text={`Budget: ${convertMoney(budget)}`} />
						<Pill className='ml-0' text={`Revenue: ${convertMoney(revenue)}`} />
					</div>
				</div>
			</div>
		</div>
		<Image
			priority
			placeholder='blur'
			blurDataURL='/placeholder.jpg '
			src={backgroundImgUrl}
			layout='fill'
			objectFit='cover'
			objectPosition='center'
			className='absolute top-0 left-0 w-full h-full z-0'
			alt=''
		/>
	</div>
)

export default MovieInfo
