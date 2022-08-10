let data = [
    {
        name: "Paul",
        age: "27"
    },
    {
        name: "Mary",
        age: "27"
    },
    {
        name: "Surprise",
        age: "23"
    },
    {
        name: "Peter",
        age: "27"
    },
    {
        name: "Mercy",
        age: "21"
    },
    {
        name: "James",
        age: "30"
    }
    
];

const info = document.querySelector("#info")

let details = data.map(function(item) {
    return  "<div>" + item.name + ' ' + "is " + item.age + "years old" + "</div>"    
});

info.innerHTML = details.join("\n");