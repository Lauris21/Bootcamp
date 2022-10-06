const users = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];
const nameUsers = users.map(user => user.name);
console.log(nameUsers);

const change = () => {
	const changeNameUsers = users.map((user) => {
	if (user.name.charAt(0) == "A") {
		user.name = "Anacleto";
	}
	return user.name
});
	return changeNameUsers;
};
console.log(change(users));

const cities = [
	{isVisited:true, name: 'Tokyo'}, 
	{isVisited:false, name: 'Madagascar'},
	{isVisited:true, name: 'Amsterdam'}, 
	{isVisited:false, name: 'Seul'}
];

const visitedCity = cities.map((city) => {
	if (city.isVisited) {
		return `${city.name} visitado`
	} else {
		return city.name;
	}
})
console.log(visitedCity);
