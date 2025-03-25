To learn Promises in js and Weather project
********** promices*******


// const promises = fetch(`http://api.weatherapi.com/v1/current.json?key=a6d0337e066b46eeb1c75136252503&q=London&aqi=yes`)
///************type 1 use **********************/
// promises.then((Response)=>{
//    const pro2= Response.json();
//   pro2.then((data)=>{
//     console.log(data);
//   })
// })
///************type 2 use **********************/

// promises.then((Response) => {  //called promises channing
//     return Response.json();
// }).then((data) => {
//     console.log(data)
// })

///************type 3 use **********************/
// promises.
// then(Response=>Response.json())
// .then(data=>console.log(data))


///************type 4 use **********************/
fetch(`http://api.weatherapi.com/v1/current.json?key=a6d0337e066b46eeb1c75136252503&q=London&aqi=yes`)
.then(Response=>Response.json())
.then(data=>console.log(data.current.temp_f)) //take any obj valued like data.
.catch((error)=>console.log(error));

// // console.log(promises);  //(pending) direct can't access  use this

// promises.then((Response)=>{ //this work when value come in promices
//     console.log(Response); //resolve
// }).catch((error)=>{
//     console.log(error); //reject
// })

//there are three stage pending resolve reject