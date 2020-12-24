import getData from "./lib/service"

const data=getData(1);

data.then((response) =>{console.log(response);} )