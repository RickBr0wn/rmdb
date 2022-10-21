import { GetStaticPaths, GetStaticProps, NextPage } from 'next/types'
import { basicFetch } from '../api/fetch-functions'
import { Breadcrumb, Card, Grid, Header, MovieInfo } from '../components'
import { creditsUrl, movieUrl } from '../config'

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
			<MovieInfo />
			{/* <Grid>
				<Card />
			</Grid> */}
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
