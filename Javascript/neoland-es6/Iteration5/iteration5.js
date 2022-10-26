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
    const input = document.querySelector("#toFilterStreamers");
       input.addEventListener("input", (event) => getStream(event.target.value.toLowerCase()));
   }

   eventBuscar()
const getStream = (word) => {
const busca = streamers.filter(streamer => streamer.name.toLowerCase().includes(`${word}`))
console.log(busca);
}

/*const input = document.querySelector("input");
function buscarNombre() {
streamers.filter((streamer) => {
    if (input.value == "") {
        console.clear()
    } else if (streamer.name.toLowerCase().includes(input.value.toLocaleLowerCase())) {
        console.log(streamer.name);
    } 
  });
}
input.addEventListener("input", buscarNombre);*/