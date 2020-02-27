function myOnLoad() {
    ShowUsers();
}

function ShowUsers(){
    var array = ["Juan Perez", "Lorena Gomez", "Pedro Godoy", "Ashley Mendoza", "María Benedetto"];
    array.sort();
    for(var i in array){ 
        document.getElementById("Users").innerHTML += "<option value='"+array[i]+"'>"+array[i]+"</option>"; 
        }
}

function ConfirmPost(){
    ValidateSlot();

}

function ValidateSlot(){
    if(document.querySelector('textarea').value == ''){
        document.getElementById('error-post').innerHTML = `<h6>Escriba un Post</h6>`;

    }
    if(document.getElementById('date').value == ''){
        document.getElementById('error-date').innerHTML = `<h6>Seleccione una Fecha</h6>`;
    }
}