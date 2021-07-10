console.log('Start');

function loginuser(email, password, callback) {
    setTimeout(() => {
        console.log('Now we get the data');
        callback (email);
    }, 5000);
}

const user = loginuser('hello@world.com','12345', (userr) => {
    console.log(userr);
});


console.log('End');
