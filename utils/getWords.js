export const getWords = async () => {
	const response = await fetch(`http://app.linkedin-reach.io/words`);
	if (!response.ok) {
		throw new Error('Could not fetch words');
	}
	return await response.text();
};
