let myWork = [];

for (let i = 1; i < 11; i++ ) {
    let _name = "Lesson " + i;
    let _status =  i % 2 > 0 ? true : false;

    myWork.push({name: _name,status: _status});
}

console.log(myWork);