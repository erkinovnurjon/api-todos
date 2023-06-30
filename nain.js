// const getTodos  = (url ,callback) => {
//     const request = new XMLHttpRequest();

//     request.addEventListener("readystatechange" , () => {
//         if(request.status === 200 && request.readyState === 4){
//             let DATA = JSON.parse(request.responseText)
//             callback(undefined,DATA);
//         }else if(request.readyState === 4){
//             callback("could not fetch" , undefined)
//         }
//     });
//     request.open( "GET", url);
//     request.send();
// }

// callback hell 
// getTodos("./data/todos.json" , (err,data) => {
//     if(!data){
//         console.log(err);
//     }else{
//         console.log(data);
//         getTodos("./data/users.json" , (err,data) => {
//             if(!data){
//                 console.log(err);
//             }else{
//                 console.log(data);
//             }
//         })
//     }
// })





function fetchingUrl() {
    fetch("https://jsonplaceholder.typicode.com/todos")
        .then((response) => response.json())
        .then((data) => data.map((item) => {
            if(item.id === 10 ){
                item.password = '12345678'
            }
            console.log(item);
            const container = document.querySelector('div');
            const heading = document.createElement('h1');
            heading.textContent = 'title:' + item.title 
            container.append(heading)
        }));
}

fetchingUrl();
