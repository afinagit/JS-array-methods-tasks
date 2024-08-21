

let h1=document.querySelector("h1")
let list=document.querySelector("ul")
let kod=""
let kod1=""


// ForEach
let arr = [15, 49, "string", 3, 6, 62, "array", 12, 9, -4, "number", 58, 103]
    
// Task1
arr.forEach(item=> kod+=` ${item}`)



// Task2

let sum=0
    arr.forEach((item) => {
        if(typeof item==="number")
        
        sum+=item
        kod=sum
    }
    )


// Task3

 arr.forEach((item) => {
        if(typeof item==="string")
       kod+=" " + item.toUpperCase()
    }

)


// Task4


arr.forEach((item) => {
        if(typeof item==="number" &&item>0)
       kod+=" "+item
    }

)  


// Task5

arr.forEach((item, index) => {
      
       kod+=`  ${arr[arr.length-1-index]}`
    }

) 

// Task6

arr.forEach((item) => {
        if(typeof item === 'number' && item%2==0)
       kod+=" "+item
    }

) 

// Task7


arr.forEach((item) => {
        if(typeof item==="string")
       kod+=`String-length: ${item.length} <br>`
    }

)

// Task8

 arr.forEach((item) => {
        if(typeof item==="number")
       kod+=(item*2) +" "
    }

)

// Map
let arr=[4,48,13,53,-29,103]
// Task1
arr.map(item=>{
    kod+=(item*2) + " "
 }) 



// Task2
 arr.map(item=>{
    kod+=(item+100) + " "
 })


let arr=["apple", "banana", "orange", "fexreddin", "niyameddin"]
// Task3

arr.map(item=>{
    kod+=item[0] + " "
 }) 

// Task4
 kod= arr.map(item => `[${item.toUpperCase()}, ${item.length}]`).join('</br>');

// Task5
let arr=[
    ["flag","dance",48],
    [23,45,6,78,54,23,1,9,10,"azerbaijani"],
    [true, "boolean", "turkish"],
    ["adele","fero","imi","ibo",100],
    ["java","summer","spring"]
] 

arr.map((item, index) =>
    {
        kod+=` ${item.length}`
        if (index < arr.length - 1) {
        kod += ", "; 
    }
    }
)

//Filter
let arr=[15,19,23,12,4,2,49,25,1,-20,103,-59,13]
// Task1
arr.filter(item => {

    if(item>0){
        kod+=item + " "
    }
 })

// Task2

 arr.filter(item => {

if(item<0){
    kod+=item + " "
}
})


// Task3

arr.filter(item => {

if(item>20){
    kod+=item+ " "
}
})

// Task4
arr.filter(item => {

if(item>20){
    kod+=(item * 100) + " "
}
})

let arr=["java","summer","spring","adelel","fero","imi","ibo"]

// Task5
arr.filter(item => {
    if(item.length==6){
        kod+=item + " "
    }4
 })


 let arr=[
    {name:"Feramiz",age:20,isMarried:false,id:1},
    {name:"Mahmud",age:24,isMarried:true,id:2},
    {name:"Adil", age:32, isMarried:true,id:3},
    {name:"Imran", age:29, isMarried:false,id:4},
    {name:"Ibrahim",age:19, isMarried:false,id:5}
] 

// Task6

arr.filter(item => {
    if(item.isMarried===false){
        kod+= `Name: ${item.name} , Age: ${item.age } ,  isMarried: ${item.isMarried}, id: ${item.id} </br>` 
    }
})

// Task7
arr.filter(item => {
    if(item.isMarried===false){
        kod1+= `<li>Name: ${item.name} , Age: ${item.age } ,  isMarried: ${item.isMarried}, id: ${item.id}</li>` 
    }
})


// Task8
arr.filter(item => {
    if(item.isMarried===false){
        item.isMarried=true
        kod+= `<li>Name: ${item.name} , Age: ${item.age } ,  isMarried: ${item.isMarried}, id: ${item.id}</li>` 
    }
})


h1.innerHTML=kod 
list.innerHTML=kod1










