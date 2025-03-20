
let mailList = [
    'patate@gmail.com',
    'lambrusco@yahoo.it',
    'opicina@register.it',
    'vinello@gmail.com',  
];

let mail= prompt('inserisci la tua email');
let mailFound = false;

for (let i = 0; i > mailList.length; i++) {
    if (mailList[i] == mail) //controllo se la mail è presente forse avrei potuto usaree cheek?
        mailFound = true
        
    if (mailFound == true) { // ho usato le
        console.log('la tua mail è già presente nella lista') //possso usare alert?
    }
    else {
        console.log('la tua mail è stata registrata con successo') //alert?
        let newMail = mailList.push(mail); //aggiungo la mia mail alla lista
        console.log(mailList);
    }
}



