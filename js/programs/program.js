let program = [
    {
        "id": 1,
        "list": "Undergraduate",
    },
    {
        "id": 2,
        "list": "Post Graduate",
    },
    {
        "id": 3,
        "list": "Conversion",
    }
];

for (var i = 0; i < program.length; i++) {  
    let obj = program[i];
    console.log(obj.list)
    document.getElementById("h2").innerHTML = obj.list
}


// God Abeg
// console.log(program.length);
// var program_obj = JSON.stringify(program);
// for (let x; x <= program.length, x+1;) {
//     console.log(x)
//         // console.log(program[x])
//         // document.getElementById("h2").innerHTML = program[x]
//         // x++;
//         // console.log(x)
//     }


// const program_obj = program.map(programList, ({programs}) => programs)
// console.log(key, value);
// var program_obj = JSON.stringify(program);
// var parsed_obj = JSON.parse(program_obj);
// console.log(parsed_obj);
// document.onwebkitanimationend


// document.getElementById("h2").innerHTML = [parsed_obj.list_1]
// document.getElementById("h2").innerHTML = [parsed_obj.list_2]
// document.getElementById("h2").innerHTML = [parsed_obj.list_3]



// var program_obj = JSON.parse(program)
// console.log(program_obj);
// console.log(program_obj)
// for (let x in program) {
//     console.log(x)
//     // document.getElementById("h2").innerHTML = program[x];
// }
// document.getElementById("h2").innerHTML = program_obj;