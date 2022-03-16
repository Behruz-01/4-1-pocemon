// var date = new Date();1
// var year = date.getFullYear();
// var month = date.getMonth() + 1;
// var day =  date.getDay();
// var day = date.getDate();
// var hour = date.getHours();
// var minuts = date.getMinutes();
// var secund = date.getSeconds();
// var millisecund = date.getMilliseconds();

// console.log(millisecund);


function formatDate() {
    var date = new Date();
    var day = String(date.getDay()).padStart(2,0);
    var month = String(date.getMonth() + 1).padStart(2,0);
    var year = date.getFullYear();
    
    return `${day}.${month}.${year}`
} 


console.log(formatDate());


