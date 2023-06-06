export const fetcher = (input: RequestInfo | URL, init?: RequestInit) => {
	return fetch(input, init)
}
