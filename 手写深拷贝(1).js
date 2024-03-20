let obj1 = {
    name: "吕布",
    age: 18,
    wepaon: {
        name: "方天画戟"
    }
}

let obj2 = JSON.parse(JSON.stringify(obj1))

console.log(obj1 == obj2);