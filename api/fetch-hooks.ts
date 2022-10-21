import { fetchMovies } from './fetch-functions'
import { useInfiniteQuery, UseInfiniteQueryResult } from 'react-query'

export const useFetchMovies = (
	search: string
): UseInfiniteQueryResult<Movies, unknown> => {
	return useInfiniteQuery(
		['movies', search],
		({ pageParam = 1 }) => fetchMovies(search, pageParam),
		{
			getNextPageParam: (lastPage: Movies) => {
				if (lastPage.page < lastPage.total_pages) {
					return lastPage.page + 1
				}
				return undefined
			},
			refetchOnWindowFocus: false
		}
	)
}

// Path: api/fetch-functions.ts
