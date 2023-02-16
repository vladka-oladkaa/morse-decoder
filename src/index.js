const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    '*':' '
};

function decode(expr) {
    str1 = ''
    rez=''
    arr=[]
    arr3=[]
    arr2=[]

    for(i=0; i<expr.length; i=i+10){
     str = expr.slice(i,i+10)
     arr3.push(str)
    }

    arr3.forEach(function (element) {
     str4=element.replace(/11/g, '-')
     str4=str4.replace(/10/g, '.')
     arr.push(str4)
    })

    arr.forEach(function (item){

     if(item.indexOf('-')>=0 && item.indexOf('.')>=0){
       if(item.indexOf('-')<item.indexOf('.')){
        str2 = item.slice(item.indexOf('-'))
        arr2.push(str2)} else { str2 = item.slice(item.indexOf('.'))
        arr2.push(str2)}
     }

     if (item.indexOf('-')>=0 && item.indexOf('.')<0){
        str2 = item.slice(item.indexOf('-'))
        arr2.push(str2)
     }

     if (item.indexOf('.')>=0 && item.indexOf('-')<0){
        str2 = item.slice(item.indexOf('.'))
        arr2.push(str2)
     }

     if(item.indexOf('-')<0 && item.indexOf('.')<0){
        str2 = item.slice(0,1)
        arr2.push(str2)
     }
    })

    arr2.forEach(function (elem){
     for (let key in MORSE_TABLE){
        if (elem===key){
           str1 = str1+MORSE_TABLE[key]
        }
     }
    })

   return(str1)
    // write your solution here
}

module.exports = {
    decode
}