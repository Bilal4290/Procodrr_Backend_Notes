=>   Convert [2,3,4,5] into number 5432 ?


const num = [2,3,4,5]

function arr_to_num(arr){
      let sum = 0
      for (let i = 0; i < arr.length; i++) {
        sum = sum + (arr[i] * (10**i))
      }
      return sum
}

const result = arr_to_num(num)



=>   x+y=10  =>  what are the values of x and y if 3 and 7 if i reverse the order 7 and 3 then difference should be of 36 ?

   
   
x + y = 10

(10y + x) - (10x + y) = 36

10y + x - 10x - y = 36

-9x + 9y = 36

-x + y = 4

x + y = 10
-x + y = 4
2y = 14

y = 7
y = 7 and x = 3
73 - 37 = 36