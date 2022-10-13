const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const adult = ages.filter((age) => age > 18);
console.log(adult);

const par = ages.filter((age) => age % 2 == 0);
console.log(par);

const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, 
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const lol = streamers.filter((streamer) => 
streamer.gameMorePlayed === "League of Legends");
console.log(lol);

const nameU = streamers.filter((streamer) =>
streamer.name.includes("u"));
console.log(nameU);

const editStreamers = streamers.filter((streamer) => 
streamer.gameMorePlayed.includes("Legends"))
console.log(editStreamers);
for (const streamer of editStreamers) {
	if(streamer.age > 35){
		streamer.gameMorePlayed = streamer.gameMorePlayed.toUpperCase()
	};
};
console.log(editStreamers)

/*const input = document.querySelector("input");
input.addEventListener("input", (ev) =>*/

