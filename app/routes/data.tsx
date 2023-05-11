import { json } from '@remix-run/node'

export const loader = async () => {
	const data = await fetch('http://example.com/posts')
	const result = await data.json()
	return json(result)
}
