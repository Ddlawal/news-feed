import axios from 'axios'

const baseURL = 'https://newsapi.org/v2/top-headlines'
const apiKey = process.env.REACT_APP_API_KEY

const instance = axios.create({
	baseURL,
	timeout: 60000,
	headers: {
		Authorization: apiKey,
	},
})

interface GetParamsI {
	q: string
	pageSize?: number
}

class Request {
	async get(params: GetParamsI) {
		try {
			const response = await instance.get('/', { params })

			return response.data
		} catch (error: any) {
			console.log(error?.response?.data)
		}
	}
}

export default new Request()
