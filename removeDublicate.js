// remove the dublicate from arrays given string
var x = "abcadeecfb";
    
var arr = x.split('');
    
x = arr.filter(function(value, index, self) { 
    return self.indexOf(value) === index;
}).join(',');
console.log(x);