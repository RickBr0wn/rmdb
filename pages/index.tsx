import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import { useFetchMovies } from '../api/fetch-hooks'
import { Header, Hero, Grid, Card, Spinner } from '../components'

const Home: NextPage = () => {
	const [query, setQuery] = useState<string>('')

	const { data, fetchNextPage, isLoading, isFetching, error } =
		useFetchMovies(query)

	console.log(data)

	return (
		<div>
			<Head>
				<title>Create Next App</title>
				<meta name='description' content='Generated by create next app' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main className='relative h-screen overflow-y-scroll'>
				<Header />
				<Hero />
				<Grid />
				<Card />
				<Spinner />
			</main>
		</div>
	)
}

export default Home

// Path: pages/index.tsx
