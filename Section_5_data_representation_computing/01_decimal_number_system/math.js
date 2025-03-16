const num = [7,3,2]

function arr_to_num(arr){
      let sum = 0
      for (let i = 0; i < arr.length; i++) {
        sum = sum + (arr[i] * (10**i))
      }
      return sum
}

const result = arr_to_num(num)


