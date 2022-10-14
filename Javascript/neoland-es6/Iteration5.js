const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

//5.1
const adult = ages.filter((age) => age > 18);
console.log(adult);

//5.2
const par = ages.filter((age) => age % 2 == 0);
console.log(par);

const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, 
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

//5.3
const lol = streamers.filter((streamer) => 
streamer.gameMorePlayed === "League of Legends");
console.log(lol);

//5.4
const nameU = streamers.filter((streamer) =>
streamer.name.includes("u"));
console.log(nameU);

//5.5
const editStreamers = streamers.filter((streamer) => 
streamer.gameMorePlayed.includes("Legends"));
console.log(editStreamers);
for (const streamer of editStreamers) {
	if(streamer.age > 35){
		streamer.gameMorePlayed = streamer.gameMorePlayed.toUpperCase()
	};
};
console.log(editStreamers)


//5.6
/*const filteredStreamer = (list, word) => {
	const filstreamer = list.filter((item) => 
	item.name.toLowerCase().includes(word.toLowerCase()));
	return filstreamer;
}
const filterEvent = () => {
	const input = document.querySelector("input");
	input.addEventListener("input", (ev) => 
	filteredStreamer(streamers, (ev.target.value)))
}

console.log(filterEvent)*/

const eventBuscar =  () => {
    const iniciar = document.querySelector("#toFilterStreamers");
       iniciar.addEventListener("input", (event) => getStream(event.target.value.toLowerCase()));
   }

   eventBuscar()
const getStream = (dato) => {
const busca = streamers.filter(streame => streame.name.toLowerCase().includes(${dato}))
eventBuscar()
console.log(busca);
}

//5.7

const getStreamersFilt = (list, word) => {
	const filtered = list.filter((item) => 
	item.name.toLowerCase().includes(word.toLowerCase()));
	return filtered;
}

const eventButton = () => {
	const btn = document.querySelector("button");
	const input = document.querySelector("input").value;
	btn.addEventListener("click", getStreamersFilt(streamers, input));
}

