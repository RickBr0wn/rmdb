import { NextPage } from 'next'
import Image from 'next/image'
import { ChangeEvent, Dispatch, SetStateAction, useRef, useState } from 'react'

interface Props {
	setQuery: Dispatch<SetStateAction<string>>
}

const SearchInput: NextPage<Props> = ({ setQuery }): JSX.Element => {
	const [text, setText] = useState<string>('')
	const timer = useRef<NodeJS.Timeout>()
	const TIME = 300 // 300ms

	const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value

		clearTimeout(timer.current)

		setText(value)

		timer.current = setTimeout(() => {
			setQuery(value)
			console.log('value: ', value)
		}, TIME)
	}

	return (
		<div>
			<input
				className='h-10 pr-14 md:w-96 rounded-full p-4 text-md focus:outline-none bg-zinc-700 text-white focus:border focus:border-solid focus:border-cyan-200'
				type='text'
				placeholder='Search Movie'
				value={text}
				onChange={handleInput}
			/>
			<div className='absolute right-4 top-1'>
				<Image
					width='30'
					height='32'
					src={'/tmdb-logo.svg'}
					alt='tmdb-logo.svg'
				/>
			</div>
		</div>
	)
}

export default SearchInput

// Path: components/search-input.tsx
