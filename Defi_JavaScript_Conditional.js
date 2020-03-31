/*Create a function that takes two numbers,and returns true if the sum of both numbers is less than 100.
     Otherwise return false.
sumOfNumbers(10,20)➞ true
//10+20=40<100 */
function Sum(n1,n2){

    if(n1+n2<100)
    return true
    else 
    return false 
    
    }
    console.log(Sum(10,70))
    /*Create a function that takes two numbers and returns true when num1 is equal to num2; otherwise return false
isEqual(1,7)➞false
isEqual(100,100)➞true */
function isEqual(num1,num2) { 
    if(num1===num2)
    return true
    else 
    return false 
    
    }
    console.log(isEqual(10,70))
/*Create a function that takes in three arguments (a, b, c) and returns true if a * b > c; otherwise return false.
ifOneIsSum(1,2,3)➞ true
ifOneIsSum(0,2,5)➞ false */
function ifOneIsSum(num1,num2,num3) { 
    if(num1*num2>num3)
  return true
    else 
    return false 
    
    }
    console.log(ifOneIsSum(10,70,20))
    /*Create a function  that takes a string as argument and returns true if a string is empty and false otherwise.
isEmpty(“ ”)➞ true
isEmpty(“Chaima”)➞ false */
function isEmpty(str) {
    if(str.length)
  return true
    else 
    return false 
    
    }
    console.log(isEmpty("Feryel"))
    /*Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false.
isEqualZero (2)➞ false
isEqualZero (0)➞ true
isEqualZero (-52)➞ true*/
 function isEqualZero(num) { 
     if(num<=0)
    return true
      else 
      return false 
      
      }
      console.log(isEqualZero(2))
      /*Create a function that takes an integer and returns true if it's divisible by 100, otherwise return false.
      isDevisible (500)➞ true
      isDevisible (2)➞ false*/
    function isDevisible(num) { 
        if(num%2===0)
    return true
      else 
      return false 
      
      }
      console.log(isDevisible(2))
/*Create a function that takes two strings as arguments and returns true if the total number of characters in the first string is equal to the total number of characters in the second string.Otherwise return false.
isEqualStr (“ Simplon”,”tunis ”)➞ false
isEqualStr (“CA”,”FS”)➞ true*/

function isEqualStr(str1, str2) { 
    if(str1.length===str2.length)
    return true
      else 
      return false 
      
      }
      console.log(isEqualStr("fifi","mechri"))

/*Create a function that takes two numbers, a and b, return true if a can be divided evenly by b ,
 return false otherwise.
oneDevideByTwo(9,3)➞true
oneDevideByTwo(10,2)➞true
oneDevideByTwo(13,2)➞false*/

function isDevideBy(num1,  num2) { 
    if(num1%num2===0)
    return true
      else 
      return false 
      
      }
      console.log(isDevideBy(40,13))
      /*Create a function that takes in a mood and return a sentence in the following format: "Today, I am feeling {mood}". However, if no argument is passed, return "Today, I am feeling neuter".
moodToday("happy") ➞ "Today, I am feeling happy"
moodToday( ) ➞ "Today, I am feeling neuter"*/
 function moodToday(mood)  {
     if(mood!= undefined ){
     
return  `Today, I am feeling ${mood}`
}
else
return "Today, I am feeling neuter"


}
console.log(moodToday("happy"))
/*Create a function that takes a number as an argument and returns "even" for even numbers and "odd" for odd numbers.
isEvenOrOdd(3) ➞ "odd"
isEvenOrOdd(146) ➞ "even"
isEvenOrOdd(19) ➞ "odd"*/
 function isEvenOrOdd(num) { 
     if(num%2===0)
    return true
      else 
      return false 
      
      }
      console.log(isEvenOrOdd(40))

      /*Write a function that validates whether two strings are identical. Make it case insensitive.
match(“HELLO WORLD”) and (”hello world”) → true
match("mask", "mAskinG") ➞ false*/
 function match(str1,str2) { 
     if(str1.toLowerCase===str2.toLowerCase)
    return true 
    else 
    return false 
    } 
    console.log(match("fifi","FIFI"))
    /*Create a function that takes a string as argument and returns "upper" if all the letters in a word are uppercase, 
    "lower" if lowercase and "mixed" for any mix of the two.
getCase("javascript..") ➞ "lower"
getCase("SHOUT!") ➞ "upper"*/
   function getCase(str) { 
       if(str==str.toUpperCase())
 return "upper"
  
 else (str==str.toLowerCase())
 return "lower"
     }
     console.log(getCase("fifi"))
/*Create a function that takes  a string as argument (of a person’s first and last name) 
and returns a string with the first and last name swapped.
swapName("Ada Lovelace") ➞ "Lovelace Ada"
swapName(“Alan Turing”)➞  “Turing Alan”*/
 function swappName(Name, LastName) { 
     return LastName+ " "+ Name 
     }
     console.log(swappName("Feryel","Mechri"))
   /*Create a function that takes a string and returns a string with its letters in alphabetical order.
AlphabetSoup("javascript") ➞ "aacijprstv"
AlphabetSoup(“simplon”) ➞”ilmnops”*/
function AlphabetSoup(str) { 
    return str.split('').sort().join('')
}  
console.log(AlphabetSoup("Feryel"))
/*Create a function that returns true if an input string contains only uppercase or only lowercase letters.
onlyCase("good") ➞ true
onlyCase("GOOD") ➞ true
onlyCase("SimpLoN") ➞ false*/

function onlyCase(str) { 
    if( str.toUpperCase() == str || str==str.toLowerCase() )
    return   true
    else 
    return false 
 }

console.log(onlyCase("Feryel"))
/*Create a function that takes a number as argument and returns the incrementing (+1) for each odd number and 
decrementing (-1) for each even number.
incrementOrDecrement(5) ➞4
incrementOrDecrement(2) ➞3*/

function incrementOrDecrement(num1) { 
    if(num1%2===0)
    return num1+1 
      else 
      return num1-1
      
      }
      console.log(incrementOrDecrement(7))
      /*Create a function that takes two arguments and returns the smaller number.Numbers will 
      be represented as strings, and your output should also be a string.

toString("21", "100") ➞ "21"
toString("200", "80") ➞ "80"*/
function  toString(num1,num2) { 
    if(num1<num2 )
    return String(num1)
      else 
      return String(num2)
      
      }
      console.log(toString(7,8))
