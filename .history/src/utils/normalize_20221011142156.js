export const normalizeData = (data) => {
	data.reduce((acc, all) => ({...acc, [all.id]: all}), []) 
}