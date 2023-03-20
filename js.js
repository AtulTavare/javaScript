//  1// check no is is even or odd

// function che(a) {
//   if (a % 2 === 0) {
//     console.log(`This no is even`);
//   } else {
//     console.log(`This is odd no`);
//   }
// }

// che(48);
//___________________________________________________________________________

// 2// check if a number is prime or not?

// function isprime(n) {
//   for (let i = 2; i < n; i++) {
//     if (!(n % i)) {
//       return `this is not a prime no`;
//     }
//   }
//   return `this is a prime no`;
// }

// console.log(isprime(7));
//____________________________________________________________________________

// 3// whether x is positive x

// function pos(n) {
//   if (n > 1) {
//     return `this is postitive no`;
//   } else if (n < 1) {
//     return `this is negetive no`;
//   } else {
//     return `enter valid no`;
//   }
// }

// console.log(pos(-1));
//_____________________________________________________________________________

// 4//whether x is multiple of y

// function mul(x, y) {
//   if (x % y == 0) {
//     return `x is multiple of y`;
//   }
//   return `x is not multiple of y`;
// }

// console.log(mul(22, 10));
//______________________________________________________________________________

// 5//whether x is between -2 and 13

// let x = 0;

// if (x > -2 && x < 13) {
//   console.log(`${x} is between -2 and 13`);
// } else {
//   console.log(`${x} is not between -2 and 13`);
// }
//_______________________________________________________________________________

// 6// whether the diffrence beteween x and y is less than 5

// let x = 100;
// let y = 960;
// let z =Math.abs(x-y);
// console.log(z)
// if (z < 5) {
//   console.log(`diffrence is less than 5`);
// } else {
//   console.log(`diffrence isn't less than 5`);
// }
//_______________________________________________________________________________

// 7// whether x is not between 5 and 27

// function bet(x) {
//   if (x > 5 && x < 27) {
//       return `${x} is between 5 and 27`;
//     }
//     return ` the ${x} is not between 5 and 27`;
// }

// console.log(bet(10));
//_________________________________________________________________________________

// 8// whether x has more than 4 digit

// let x =400;

// if(x>999){
//     console.log(`x has 4 digit`)
// }else{
// console.log(`x is not 4 digit`)
// }
//__________________________________________________________________________________

// 9// whether x has exactly 6 digit

// function x(x){
//     const l=String(x)
//     if(l.length==6){
//         return true;
//     }
//     return false;
// }
// console.log(x(455666));
// console.log(x(4556));
// console.log(x(455636566));

// let x=123656;

// if(x>99999&&x<999999){
//     console.log(`x has 6 digit`);
// }else{
//     console.log(`x is not 6 digit`);
// }
//___________________________________________________________________________

// 10//find the factorial of no?

// let x = 5;
// let fact = 1;
// if (x == 0) {
//   console.log(`factorial of ${x} is 1`);
// } else if (x < 0) {
//   console.log(` negetive no has no factorial`);
// } else {
//   for (let i = 1; i <= x; i++) {
//     fact = fact * i;
//   }
//   console.log(`foctorial of ${x} is ${fact}`);
// }
//_________________________________________________________________________

// 11// find whether the factorail of no is prime or not?

// function factPrime(n) {
//   let fact = 1;
//   if (n == 0 || n == 1 || n < 0) {
//     return `enter valid no`;
//   } else {
//     for (let i = 1; i <= n; i++) {
//       fact = fact * i;
//     }
//   }
//   for (let i = 1; i < fact; i++) {
//     if (fact % i == 0) {
//       return `${fact} this is not prime no`;
//     } else {
//       return `${fact} this is prime no`;
//     }
//   }
// }

// console.log(factPrime(2));
//____________________________________________________________________________

// 12// Find the greatest of 2 number?

// function gret(a,b){
//   if(a>b){
//     return `${a} is greater than ${b}`
//   }else{
//     return `${b} is greater than ${a}`
//   }
// }

// console.log(gret(12,24))
//________________________________________________________________________________

// 13//Find the greatest and smallest of 3 number?

// function gretSmall(a,b,c){
//   let great=a;
//   let small=a;

//   if(b < small){
//     small=b;
//   }
//   if(c < small){
//     small=c;
//   }
//   if(b> great){
//     great=b;
//   }
//   if(c> great){
//     great=c;
//   }
//  return `${great} is the greatest
// ${small} is the smallest`
// }

// console.log(gretSmall(20,10,15))
//_________________________________________________________________________________

// 14//Write a Java program that takes two positive integers, then displays whether the first is a
// multiple of the second or not.

// function mul(x,y){
//   if(x > 1 && y > 1){
//     if(x % y == 0){
//       return ` this ${x} is multiple of ${y}`
//     }else{
//       return ` this ${x} is not multiple of ${y}`
//     }

//   }else{
//     return `Enter positive no.`
//   }
// }

// console.log(mul(14,0))
//_____________________________________________________________________________________

// 15//Find whether the number is Armstrong number or not? (149 1^3 + 4^3 + 9^3 should be
// 149). An Armstrong number of 3 digits is a number for which sum of cube of its digits is
// equal to number e.g., 371 is an Armstrong number because of 3*3*3 + 7*7*7 + 1*1*1 =
// 371).

// function aram(num) {
//   let temp = num;
//   let sum = 0;
//   while (temp > 0) {
//     let digit = temp % 10;
//     console.log(digit);
//     sum += digit ** 3;
//     console.log(sum);
//     temp = parseInt(temp / 10);
//     console.log(temp);
//   }
//   if (sum == num) {
//     return `${num} this no is aramstrong number`;
//   }
//   return `${num} this no is not  aramstrong number`;
// }

// console.log(aram(153));
//_________________________________________________________________________________________

// 16//Find fibonacci series upto n digit ? if n=5 O/p: 0 1 1 2 3

// function febo(n) {
//   let a = 0;
//   let b = 1;
//   console.log(a);
//   console.log(b);
//   for (let i = 0; i <= n; i++) {
//     let temp = a + b;
//     a = b;
//     b = temp
//     console.log(temp);
// }
// }

// febo(8)
//___________________________________________________________________________________

// 17// Swap 2 numbers value?

// function swap(a,b){
//     temp=a;
//     a=b;
//     b=temp;
//     console.log(a,b)
// }
// swap(12,18)
//________________________________________________________________________________
// 18// Add 2 numbers without using + operator

//_______________________________________________________________________________
// 21//Find the sum of digit 123 = 1+2+3=6

// function sum(num) {
//   let temp = num;
//   let sum = 0;
//   while (temp > 0) {
//     let digit=temp%10;
//     sum+=digit;
//     temp=parseInt(temp/10);
//   }
//   console.log(sum);
// }

// sum(1258)
//______________________________________________________________________________
// 22// Find whether the number is palindrome or not Example, 141

// function palin(num) {
//   let temp = num;
//   let rev = 0;

//   while (temp > 0) {
//     rev = rev * 10 + (temp % 10);
//     console.log(rev);
//     temp = parseInt(temp / 10);
//     console.log(temp);
//   }
//   if (num === rev) {
//     return `${num} this no is the palindrome no.`;
//   } else {
//     return `${num} this no is not  the palindrome no.`;
//   }
// }
// console.log(palin(121))
//_______________________________________________________________________________
// 23//

//________________________________________________________________________________
// 24//Print the table of a number? eg 3 means 3*1=3 3*2=6…. upto 10

// function table(t){
//     for(i=1;i<=10;i++){
//         let n=t*i;
//         console.log(`${t} * ${i} = ${n}`);
//     }
// }

// console.log(table(6))
//_______________________________________________________________________________
// 25//

//_______________________________________________________________________________
//26//

//________________________________________________________________________________
// 27// Find the sum of 1+2+3+….N

// function sum(n){
//     let sum=0;
//     for(let i=1;i<=n;i++){
//         sum+=i
//     }
//     console.log(sum)
// }

// sum(9)
//______________________________________________________________________________
// 28// Find the sum of 1^2 + 2^2 + 3^2 +….. N^2

// function sq(n) {
//   let sum = 0;
//   for (i = 1; i <= n; i++) {
//     sum += i ** 2;
//   }
//   return sum;
// }
// sq(5);
//_________________________________________________________________________________
//29//Find the sum of 1+2^2+3^3 +4^4+…..N^N

// function result(s){
//     let sum=0;
//     for(i=1;i<=s;i++){
//         sum+=i**i
//     }
//     return sum;
// }

// console.log(result(3))
//_________________________________________________________________________________
//30//Write a program that takes a floating point number and then displays the right-most of the
// integral part of the number.

// function float(num) {
//   let integer = parseInt(num);
//   let rightMost = integer % 10;

//   console.log(rightMost);
// }

// float(1239.568574);
//_______________________________________________________________________________
//31// Given 3 int values, a b c, return their sum. However, if one of the values is the same as 
// another of the values, it does not count towards the sum.
// 1, 2, 3 → 6
// 3, 2, 3 → 2
// 3, 3, 3 → 0


// function check(a,b,c){
//     let sum = a+b+c;
//     if(a==b){sum=sum-a-b};

//     if(b==c){sum=sum-b-c};

//     if(a==c){sum= sum-a-c};

//     if((a==b)&&(b==c)){sum=0};

//     return sum;
// }

// console.log(check(3,3,3))
//________________________________________________________________________________________
//32//Given 3 int values, a b c, return their sum. However, if one of the values is 13 then it does 
// not count towards the sum and values to its right do not count. So for example, if b is 13, 
// then both b and c do not count.
// 1, 2, 3 → 6
// 1, 2, 13 → 3
// 1, 13, 3 → 1

// function sum(a,b,c){
//    let sum=a+b+c;

//     if(b==13){sum=sum-b-c};

//     if(c==13){sum=sum-c};

//     return sum
// }

// console.log(sum(1,2,3));
// console.log(sum(1,13,3));
// console.log(sum(1,2,13));
//________________________________________________________________________________________________

//33//Given three ints, a b c, return true if one of b or c is "close" (differing from a by at most 1), 
// while the other is "far", differing from both other values by 2 or more. 
// 1, 2, 10 → true
// 1, 2, 3 → false
// 4, 1, 3 → true                              // i dont understand this question

//_________________________________________________________________________________________________

//34//Given 2 int values greater than 0, return whichever value is nearest to 21 without going 
// over. Return 0 if they both go over.
// 19, 21 → 21
// 21, 19 → 21
// 19, 22 → 19


// function greatSmall(a, b) {
//     if (a > 21 && b > 21) {
//         return 0;
//     } else if (a > 21) {
//         return b;
//     } else if (b > 21) {
//         return a;
//     } else {
//         return Math.max(a, b);
//     }
// }

// console.log(greatSmall(3, 10))
//___________________________________________________________________________________________
//35//Given three ints, a b c, one of them is small, one is medium and one is large. Return true if 
// the three values are evenly spaced, so the difference between small and medium is the 
// same as the difference between medium and large.
// 2, 4, 6 → true
// 4, 6, 2 → true
// 4, 6, 3 → false



// function evenlySpaced(a, b, c) {
//     let arr = [a, b, c];
//     console.log(arr.sort(function(a, b) {   // i dont understand this line 
//         return a - b;
//     }))
//     console.log(arr)
//     let diff1 = arr[1] - arr[0];
//     let diff2 = arr[2] - arr[1];
//     if (diff1 === diff2) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(evenlySpaced(4, 6, 2))
//_______________________________________________________________________________________________

