export async function basicFetch<T>(endpoint: string): Promise<T> {
	const req = await fetch(endpoint)

	if (!req.ok) {
		throw new Error(`Error ${req.status} - ${req.statusText}`)
	}

	const json = await req.json()
	return json
}

export async function fetchMovies(
	search: string = '',
	page: number = 1
): Promise<Movies> {
	const endpoint = `/api/movies?search=${search}&page=${page}`
	const data = await basicFetch<Movies>(endpoint)
	return data
}

// Path: api/fetch-functions.tsx
