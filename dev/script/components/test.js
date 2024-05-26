const url = "";
async function fetchData() {
    var response = await fetch(url);
    var person = new Person(response.name, response.age);
    // var nameAge { name, age } = person;
    test(person);
}

function test(person) {
    document.getElementById("test").innerHTML = person.name;
}
