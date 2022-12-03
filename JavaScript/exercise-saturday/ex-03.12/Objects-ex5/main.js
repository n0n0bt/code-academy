alert("Hello");

// 5.Write a JavaScript program to add an properrty to array of JavaScript objects

const book = [ 
    { 
    name: "Motivation",
    authorName: "Naumche",
    readingStatus: true
    },
    { 
    name: "Motivation1",
    authorName: "Joshevski",
    readingStatus: false
    },
    { 
    name: "Motivation3",
    authorName: "Prlickov",
    readingStatus: true
    }
];

let newbook = {
    name: "Motivation4",
    authorName: "Prlickov1",
    readingStatus: false
};

book.push(newbook);
console.log(book);









