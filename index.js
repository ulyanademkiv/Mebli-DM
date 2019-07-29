var message = confirm('Are you 18?');
console.log(message);
if(message){
    alert('Hello')
}else {
    var age = prompt('How old are you');
    console.log(age);
    if(age >= 18) {alert('Hello')
}else{alert('Declined')}
}
var info = confirm('message');
console.log(info);
