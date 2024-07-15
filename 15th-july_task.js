// if else condition statement

let number=15

if(number<0)
  console.log(`${number} is a negative number`)
else if(number>0)
  console.log(`${number} is a positive number`)
else{
  console.log(`${number} is a zero`)
}
//output for this will be 15 is a positive number


//switch case to find the name of the day, 0-sunday till 6-saturday
let input=5

  switch(input){
    case 0:
      console.log(`${input} -Sunday`)
      break;
    case 1:
      console.log(`${input} -Monday`)
      break;
    case 2:
      console.log(`${input} -Tueday`)
      break;
    case 3:
      console.log(`${input} -Wednesday`)
      break;
    case 4:
      console.log(`${input} -Thursday`)
      break;
    case 5:
      console.log(`${input} -Friday`)
      break;
    case 6:
      console.log(`${input} -Saturday`)
      break;
  }

//output of the switch case program is 5-Friday

//ternary operator- condition? experssion1:expression2
//if condition true prints expression1 else prints expression2

let age=20

let consideredAs= (age>18) ? 'adult' : 'minor'
console.log(consideredAs)

//output of this will program is adult





//for loop 
for(a=1;a<=10;a++)
   console.log(a)

//resevrse for loop

for(a=10;a>0;a--)
  console.log(a)