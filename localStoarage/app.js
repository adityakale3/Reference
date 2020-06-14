if(typeof localStorage === 'undefined' || localStorage === null){
    console.log('Not found LocalStorage');
    const LocalStorage = require('node-localstorage').LocalStorage;
    localStorage = new LocalStorage('./scratch');
}else{
    console.log('Found LocalStorage');
}




app.get('/', (req,res) => {
    localStorage.setItem('key', 'value');
    console.log(localStorage.getItem('key'));
});