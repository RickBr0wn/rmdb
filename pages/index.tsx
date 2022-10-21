import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import { useFetchMovies } from '../api/fetch-hooks'
import { Header, Hero, Grid, Card, Spinner } from '../components'
import { BACKDROP_SIZE, IMAGE_BASE_URL } from '../config'

const Home: NextPage = () => {
	const [query, setQuery] = useState<string>('')

	const { data, fetchNextPage, isLoading, isFetching, error } =
		useFetchMovies(query)

	return (
		<div>
			<Head>
				<title>Create Next App</title>
				<meta name='description' content='Generated by create next app' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main className='relative h-screen overflow-y-scroll'>
				<Header setQuery={setQuery} />
				{!query && data && data.pages ? (
					<Hero
						imgUrl={
							data.pages[0].results[0].backdrop_path
								? IMAGE_BASE_URL +
								  BACKDROP_SIZE +
								  data.pages[0].results[0].backdrop_path
								: '/no_image.jpg'
						}
						title={data.pages[0].results[0].title}
						text={data.pages[0].results[0].overview}
					/>
				) : null}
				<Grid
					className='p-4 max-w-7xl m-auto'
					title={
						query
							? `Search Results: ${data?.pages[0].total_results}`
							: `Popular Movies`
					}
				>
					{data && data.pages
						? data.pages.map(page =>
								page.results.map(movie => (
									<div key={movie.id}>
										<Card
											imgUrl={
												movie.poster_path
													? IMAGE_BASE_URL + BACKDROP_SIZE + movie.poster_path
													: '/no_image.jpg'
											}
											title={movie.original_title}
										/>
									</div>
								))
						  )
						: null}
				</Grid>
				<Spinner />
			</main>
		</div>
	)
}

export default Home

// Path: pages/index.tsx
