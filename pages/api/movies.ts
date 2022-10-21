// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { SEARCH_BASE_URL, POPULAR_BASE_URL } from '../../config'

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<Movies>
) {
	const { page, search } = req.query

	const endpoint = search
		? `${SEARCH_BASE_URL}${search}&page=${page}`
		: `${POPULAR_BASE_URL}&page=${page}`

	const data = await fetch(endpoint)

	const json = await data.json()

	res.status(200).json(json)
}
