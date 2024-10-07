/*export function cook (){
    let look = document.cookie;
    return look;
}*/
setTimeout(function (){
    let look = document.cookie;
    let parce = document.getElementById("parcelle");
    parce.innerHTML = look;
},2);


/*
for (let i = 0; i<10;i++){
    let element = 2;
    if (element["Parcelle"]==id){
        
    }
}
console.log(informations);
let notreTable = document.getElementById("table1");
let parce = document.getElementById("parcelle");


for (let j=0;j<2;j++){
    parce.innerHTML="Bonjour";
    let notreLigne = document.getElementById(`ligne${j}`);
    for(let i=4;i<informations[0].length;i++){
        notreLigne.innerHTML += `<td>${i}</td>`;
    }
}

*/