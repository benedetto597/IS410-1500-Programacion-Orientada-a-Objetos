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
    ValidatePost();
    ValidateDate();

}

function ValidatePost(){
    if(document.querySelector('textarea').value == ''){
        document.getElementById('error-post').innerHTML = `<h6>Escriba un Post</h6>`;
        return false;
    }
    return true;
}

function ValidateDate(){
    if(document.getElementById('date').value == ''){
        document.getElementById('error-date').innerHTML = `<h6>Seleccione una Fecha</h6>`;
        reutrn false;
    }
    return true;
}
