
let mailList = [
    'patate@gmail.com',
    'lambrusco@yahoo.it',
    'opicina@register.it',
    'vinello@gmail.com',  
];

let mail= prompt('inserisci la tua email');
let mailFound = false;

for (let i = 0; i > mailList.length; i++) {
    if (mailList[i] == mail) 
        mailFound = true
}

if (mailFound == true) { 
    console.log('la tua mail è già presente nella lista') //possso usare alert?
}
else {
    console.log('la tua mail è stata registrata con successo') //alert?
    mailList.push(mail); //aggiungo la mia mail alla lista
    console.log(mailList);
}


