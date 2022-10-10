console.log("probando");

/** ---- Esta es data */

//La acción de mi boton 

const  getFriends  = () => {
    const data = JSON.parse(localStorage.getItem("data-friends"));
    data ? console.log("si hay") : getData(); 

}

function getData() {
    fetch("https://reqres.in/api/users?delay=3")
    .then(showInfo => showInfo.json())
    .then(showInfo => {
        console.log(showInfo);
        let result = showInfo.data
        console.log(result);

        for (let data in result){
            console.log(result[data].id);
            addRow(1, result[data]);
        }

    }); 
}
    //manipulación del DOM 

    function addRow(colCount, data){
    let table = document.getElementById('tableData');
    //let rowCount = table.row.length;
    let row = table.insertRow (data.id);
    for(let i=0; i<colCount; i++){
        
        let newCell5 = row.insertCell(i);
        let newText5 = document.createTextNode(data.email);
        newCell5.appendChild(newText5); 
        let newCell3 = row.insertCell(i);
        let newText3 = document.createTextNode(data.last_name);
        newCell3.appendChild(newText3); 
        let newCell2 = row.insertCell(i);
        let newText2 = document.createTextNode(data.first_name);
        newCell2.appendChild(newText2);
        let newCell = row.insertCell(i);
        let newText = document.createTextNode(data.id);
        newCell.appendChild(newText); 
        let newCell4 = row.insertCell(i);
        let newText4 = document.createElement("img");
        newText4.src = data.avatar;
        newCell4.appendChild(newText4); 
    }
}



/** ---- Esta es data */
const btnfriends = document.getElementById ("btn")
btnfriends.addEventListener("click", getFriends)