export async function basicFetch<T>(endpoint: string): Promise<T> {
	const response = await fetch(endpoint)

	if (!response.ok) {
		throw new Error(`Error ${response.status} - ${response.statusText}`)
	}

	const data = await response.json()

	return data
}

export async function fetchMovies(
	search: string = '',
	page: number = 1
): Promise<Movies> {
	return await basicFetch<Movies>(`/api/movies?search=${search}&page=${page}`)
}

// Path: api/fetch-functions.tsx
