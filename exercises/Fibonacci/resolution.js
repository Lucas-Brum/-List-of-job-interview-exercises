

let array = []

for (let i = 0; i < 6; i++) {
        if (i <= 1)
                array.push(1)
        else 
                array.push(array[i-1]+array[i-2])
    
}
console.log(array)