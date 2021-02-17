// For demo purposes this bring data demo of users

export const getUsers = async () => {
	try {
		const url = 'https://randomuser.me/api/?results=5'
		const response = await fetch(url)
		const data = await response.json()
		return  data
	} catch (error) {
		console.error(error);
	}
}
