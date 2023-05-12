import { json } from '@remix-run/node'

export const loader = async () => {
	const data = await fetch(`${process.env.BACKEND_URL}/posts`)
	const result = await data.json()
	return json(result)
}
