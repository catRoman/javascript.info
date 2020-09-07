let userName = prompt('Whats your name dude');

if (userName == 'Admin') {
    let password = prompt('what the secret code?');
    if (password == 'TheMaster') {
        alert('Welcome buddy');
    } else if (password == '' || null) {
        alert('cancel');
    } else {
        alert('Nope')
    }
} else if (userName == '' || null) {
    alert('canceled');
} else {
    alert('Who dis?');
}