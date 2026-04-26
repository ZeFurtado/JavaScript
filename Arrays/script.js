const rockstars =  ["Ozzy Osbourne", "Axl Rose", "Slash", "Jim Morrison", "Flea", "Lemmy Killmister"];

const rockstars2 = ["Steven Adler", "Jimmy Page", "Jimi Hendrix", "Klaus Meine", "Dio"];



rockstars.forEach(element => {
    console.log(element);    
});

const rocks = rockstars.join('-')

console.log(`Rockstars ${rocks}`)

const todosRockstars = rockstars.concat(rockstars2);

console.log(todosRockstars.toString());


var osmar = "Altair";

function imprimeOsmar()
{
    return "Aldair";
    osmar = "Jair";
}

console.log(`${imprimeOsmar()} + ${osmar}`);


