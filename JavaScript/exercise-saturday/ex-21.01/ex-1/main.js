
let userBirth = new Date("10 August 1996");
let userYear = userBirth.getYear();
let userMonth = userBirth.getMonth();
let userDate = userBirth.getDate();

let now = new Date();
let currentYear = now.getYear();
let currentMonth = now.getMonth();
let curentDate = now.getDate();

let age = currentYear - userYear;


//deklairaranje na varijabli so cel nivna ponatamoshna upotreba
let monthAge;
let ageDate;



if (currentMonth >= userMonth) {
  monthAge = currentMonth - userMonth;
} else {
  age--;
  monthAge = 12 + currentMonth - userMonth;
}


//(Objasnuvanje dokolku momentalniot mesec e pogolem ili
//ednakov na mesecot na ragjanje premsetaj razlika pomegju niv
//ili namalija vrednosta na age i vrednosta na month age kje bide 12 plus razlikata od momentalniot
//mesec i mesecot na ragjanje koja bi bil vo sluchajot negativna vrednost)

if (curentDate >= userDate) {
  ageDate = curentDate - userDate;
} else {
  ageDate = 31 + curentDate - userDate;
}

//(Objasnuvanje dokolku momentalniot datum e pogolem ili
//ednakov na datumot na ragjanje premsetaj razlika pomegju niv
//ili ageDate kje bide 31 plus razlikata od momentalniot
//datum i datumot na ragjanje koja bi bil vo sluchajot negativna vrednost)
console.log(
  `You are ${age} years and ${monthAge} months and ${ageDate} days old`
);





