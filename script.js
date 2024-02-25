//operators
//arthematic operators:+,-,*,/,**,%
let number1=5;
let number2=7;
console.log(number1+number2);
console.log(number1-number2);
console.log(number1*number2);
console.log(number1/number2);
console.log(number1**number2);
console.log(number1%number2);

//assignment operators: =,+=,-=,*=,/=,**=,%=
number1=7;
console.log(number1);

number2+=3;
console.log(number2);

number1-=3;
console.log(number1);

number2*=5;
console.log(number2);

number1/=4;
console.log(number1);

number2**=3;
console.log(number2);

number1%=2;
console.log(number1);

//comparision operators: ==,===,!=,<,>,<=,>=
let number3=49;
let number4=35;
let number5="35";
console.log(number3==number4);

console.log(number5===number4);

console.log(number3!=number4);

console.log(number3<number4);

console.log(number3>number4);

console.log(number3<=number4);

console.log(number3>=number4);

//logical operators: &&,||,!
let bool1=true;
let bool2=false;

console.log(bool1&&bool2);
console.log(bool1&&bool1);
console.log(bool2&&bool2);
console.log(number3==number4 && number3!=number4);
            //false          && true=false

console.log(bool1||bool2);
console.log(bool1||bool1);
console.log(bool2||bool2);
console.log(number3==number4 || number3!=number4);
            //false          || true=true
            
console.log(!(number3==number4 || number3!=number4));

//increment decrement operators
let number10=7;

number10++;
console.log(number10);

++number10;
console.log(number10);

number10--;
console.log(number10);

--number10;
console.log(number10);

//functions
function add(number_a,number_b){
    return number_a + number_b;
}
add(35,33);

//if else elseif
let number_c=12;
if (number_c==10){
    console.log(" not equal");
}
else if(number_c==12){
    console.log("equal");
}
else{
    console.log("hi");
}

//loops
//for loop
for(i=0;i<5;i++){
    console.log("hello guys");
}

for(i=0;i<5;i++){
    console.log(i);
}

//while loop
let number=0;
while(number<10){
    console.log("hello friends");
    number++;
}

//strings
let fname="Abdul";
let lname="Kadeer";

console.log(fname+" "+lname);
//string methods
//1.string indexing
console.log(fname[0]);
//2.string length
console.log(fname.length);
//3.at keyword
console.log(lname.charAt(4));
//4.uppercase
console.log(fname.toUpperCase());
//5.lowercase
console.log(lname.toLowerCase());
//6.concatination
console.log(fname.concat(" ",lname));
//7.trim
let text1 = "      Hello World!      ";
let text2 = text1.trim();
console.log(text2);
//8.padend
let numb = 5;
let text = numb.toString();
let padded = text.padEnd(4,"0");
console.log(padded);

//9.repeat
let text3 = "Hello world!";
let result = text3.repeat(2);
console.log(result);

//10.replacing string content
let text4= "hello world";
let newText = text4.replace("world", "friends");
console.log(newText);


