const day = 28
const month = 12
const year = 1991
let data = new Date()

let verify = leap => {

  if (leap % 4 == 0){
    if (leap % 100 != 0){
        return true
    }
  }

  if (leap % 100 != 0){
    return true
  }

  if (leap % 400 == 0){
    return true
  }
  return false 

}

let countTheDaysOfYears = count => {
    let day = 0
    for (let i = count; i < data.getFullYear(); i++) {
        if(verify(year)){
            day = day + 366
        }
        else{
            day = day + 365
        }   
    }
    return(day)
}

let quantityDaysInThisMont = (mes, ano) => {
    var data = new Date(ano, mes, 0);
    return data.getDate();
}

let countTheDayOfMonts = count => {
    let day = 0
    for (let i = 1; i < data.getMonth(); i++) {

       day = day + quantityDaysInThisMont(i, data.getFullYear())

    }
    for (let i = 1; i <= count; i++) {

        day = day - quantityDaysInThisMont(i, year)
 
    }
    
    return day
} 

let countLastDays = (day) => {
    return data.getDate() + day 
    
}

console.log(countTheDaysOfYears(year)+ countTheDayOfMonts(month) + countLastDays(day) - data.getMonth() )





