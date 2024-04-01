let date= new Date()
// console.log(date.toString())
// console.log(date.toDateString())
// console.log(date.getDate())
// console.log(date.toISOString())
// console.log(date.toLocaleDateString())

console.log(date.getMonth())
console.log(date.getTime())
// console.log(date.getFullYear())
// console.log(date.getHours())
// console.log(typeof date)


let myCreatedDate= new Date (2023,0,23)
console.log(myCreatedDate.toDateString())


let myTimeStamp = Date.now()
// console.log(myTimeStamp)
// console.log( myCreatedDate.getTime())
 console.log(Math.floor(Date.now()/1000))


let newDate =new Date ()
// console.log(newDate)

newDate.toLocaleString("default",{
    weekday: "long"
})
console.log(newDate)
