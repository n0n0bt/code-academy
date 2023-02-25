const theList = ['Laurence', 'Svekis', true, 35, null, undefined, {test: 'one', score: 55}, ['one', 'two']];


theList.shift();

theList.unshift("FIRST");

//theList.splice(2,5,"MIDDLE", "HelloWorld");

theList.pop();
theList.pop();
theList.pop();
theList.pop();
theList.pop();
theList.pop();

//theList.push("LAST");

theList.push ("MIDDLE");
theList.push ("hello World");
theList.push ("LAST");

console.log(theList);


