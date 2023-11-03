//https://dummyjson.com/

// const request = fetch('https://dummyjson.com/users/')
// console.log(request);

// request.then(response=>response.json())
//     .then(data=>console.log(data))
//     .catch(error=>console.log(error.message));

// let i=0;

// for(i=0;i<)

const request = fetch('https://dummyjson.com/users')
 
request.then(response => response.json()).then(data=>{
 
    console.log(data)
 

       
        let i = 0;
 
        while (i < data.users.length) {
 
            const listImage= document.createElement('img');
 
            const listItem= document.createElement('h3');
 
            const userList=document.getElementById('specialist-box');
 
            listItem.textContent = data.users[i].firstName
 
            userList.appendChild(listItem)
 
            i++;
        }

   
 
}).catch(error => console.log(error));