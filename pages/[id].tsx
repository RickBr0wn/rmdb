import { GetStaticPaths, GetStaticProps, NextPage } from 'next/types'
import { basicFetch } from '../api/fetch-functions'
import { Breadcrumb, Card, Grid, Header, MovieInfo } from '../components'
import {
	BACKDROP_SIZE,
	creditsUrl,
	IMAGE_BASE_URL,
	movieUrl,
	POSTER_SIZE
} from '../config'

type Props = {
	movie: Movie
	directors: Crew[]
	cast: Cast[]
}

const Movie: NextPage<Props> = ({ cast, directors, movie }): JSX.Element => {
	return (
		<main>
			<Header />
			<Breadcrumb title={movie.original_title} />
			<MovieInfo
				thumbUrl={
					movie.poster_path
						? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
						: '/no_image.jpg'
				}
				backgroundImgUrl={
					movie.backdrop_path
						? IMAGE_BASE_URL + BACKDROP_SIZE + movie.backdrop_path
						: '/no_image.jpg'
				}
				title={movie.original_title}
				year={movie.release_date.split('-')[0]}
				summary={movie.overview}
				rating={movie.vote_average}
				directors={directors}
				time={movie.runtime}
				budget={movie.budget}
				revenue={movie.revenue}
			/>
			<Grid className='p-4 max-w-7xl m-auto' title='Actors'>
				{cast.map(actor => (
					<Card
						key={actor.id}
						imgUrl={
							actor.profile_path
								? IMAGE_BASE_URL + POSTER_SIZE + actor.profile_path
								: '/no_image.jpg'
						}
						title={actor.name}
						subtitle={actor.character}
					/>
				))}
			</Grid>
		</main>
	)
}

export default Movie

export const getStaticProps: GetStaticProps = async context => {
	const id = context.params?.id as string

	const movieEndpoint: string = movieUrl(id)
	const creditsEndpoint: string = creditsUrl(id)

	const movie = await basicFetch<Movie>(movieEndpoint)
	const credits = await basicFetch<Credits>(creditsEndpoint)

	const directors = credits.crew.filter(
		crewMember => crewMember.job === 'Director'
	)

	return {
		props: {
			movie,
			directors,
			cast: credits.cast
		},
		revalidate: 60 * 60 * 24 // re-create the page every 24 hours
	}
}

export const getStaticPaths: GetStaticPaths = async () => {
	return {
		paths: [],
		fallback: 'blocking'
	}
}

// Path: pages/[id].tsx
