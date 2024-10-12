import axios from 'axios'

const env = import.meta.env;
const host = env.VITE_IS_DEV ? 'http://lar-rec.loc/' : env.VITE_HOST;

const $host = axios.create({ baseURL: host })

const $authHost = axios.create({
	baseURL: host,
	headers: { 'X-Requested-With': 'XMLHttpRequest' },
	withCredentials: true
})

export {
	$host,
	$authHost
}