//Ex.1
//Part 1; Name array
let nameBank = ['Sofia', 'David', 'Juan'];
console.log(nameBank);

//Part 2; add array, shift array
nameBank.push('Sara', 'Augustin');
let firstPerson = nameBank.shift();
console.log(nameBank);
console.log(firstPerson);

//Part 3; slice: add the person behind David and end of the line
nameBank.splice(nameBank.indexOf('David') + 1, 0, 'Renata');
nameBank.push('Elena');
console.log(nameBank);

//Ex.2
let text = '';
for (let i = 0; i < 5; i++) {
    text += "*"
    console.log(text)
};

//Ex.3
let xValue = 10;
while (xValue > 0) {
    xValue -= 0.5 
    console.log(xValue)
}

let i = 0
while ( i <= 100) {
    if ( i % 2 !=0) {
        console.log(i)
    }
    i++
}


function square(n){
    let i=0;
    while(i<=n){
        console.log(`[${i}]`);
        i++;
    }
    }
    square(5);

    
function findTotal(n){let total=0;
    for(let i=1;i<=n;i++){
    total = total+i;
    }
    console.log(total)}
    findTotal(5);
    findTotal(19);
