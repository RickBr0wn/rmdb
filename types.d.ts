interface Movies {
	page: number
	results: Movie[]
	total_pages: number
	total_results: number
}

interface Movie {
	id: number
	title: string
	overview: string
	poster_path: string
	backdrop_path: string
	release_date: string
	vote_average: number
	vote_count: number
	popularity: number
	original_language: string
	original_title: string
	genre_ids: number[]
	adult: boolean
	video: boolean
	revenue: number
	runtime: number
	budget: number
}

interface Cast {
	id: number
	name: string
	character: string
	profile_path: string
	credit_id: string
}

interface Crew {
	id: number
	name: string
	job: string
	profile_path: string
	credit_id: string
}

interface Credits {
	id: number
	cast: Cast[]
	crew: Crew[]
}

// Path: index.ts
