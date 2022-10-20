export const basicFetch = async <T,>(endpoint: string): Promise<T> => {
	const req = await fetch(endpoint)

	if (!req.ok) {
		throw new Error(`Error ${req.status} - ${req.statusText}`)
	}

	const json = await req.json()
	return json
}

// Path: api/fetch-functions.tsx
