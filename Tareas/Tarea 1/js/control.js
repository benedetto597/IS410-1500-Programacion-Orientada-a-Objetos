var Contenido= [
    {
        usuario:"Juan Perez",
        post:"",
        fecha:""
    },
    {
        usuario:"Lorena Gomez",
        post:"",
        fecha:""
    },
    {
        usuario:"Ashley Rios",
        post:"",
        fecha:""
    },
    {
        usuario:"María Godoy",
        post:"",
        fecha:""
    },
    {
        usuario:"Pedro Suazo",
        post:"",
        fecha:""
    }

]

function myOnLoad() {
    ShowUsers();
}

function ShowUsers(){
    for(let i=0; i<Contenido.length; i++){ 
        document.getElementById('Users').innerHTML += `<option value='${Contenido[i].usuario}'>${Contenido[i].usuario}</option>`; 
        };
}

function ConfirmPost(){
    if (ValidatePost()== false || ValidateDate() == false){
        return false;
    }else{
        console.log(Contenido);
        document.getElementById('mainRow').innerHTML += 
        `<div class="col-xl-3 col-lg-3 col-md-5 col-sm-12 col-xs-12 p-4 mx-1" id="main">
            <div class="card p-3">
                    <div class="card-header" style=" padding-left:0; padding-right:0;">
                        <img id="userlogo"src="img/user.jpg" class="img-thumbnail rounded-circle float-left">
                        <div style="padding-top:10px;">
                        <b class="card-title text-left" style="font-size:15px" >${document.getElementById('Users').value}</b><h6 style="font-size:10px; color: #6a6d72; display: inline;">(${getDate(document.getElementById('date').value)})</h6>
                        </div>
                    </div>
            <form id="userPost" class="card-body">
                <div class="form-group">
                    <p style="font:">${document.querySelector('textarea').value}</p>
                </div>
            </form>
            </div>
        </div>`
    }

}

function getDate(dateFromUser){
    let finalDate = '';
    let month = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
    let arrayDate = dateFromUser.split('-');

    finalDate += arrayDate[2] + '/';
    for(let i=0; i<month.length; i++){
        if (i==arrayDate[1]){
            finalDate += month[i] + '/';
        }
    }
    finalDate += arrayDate[0]+ '';
    console.log(finalDate);
    return finalDate;
}

function ValidatePost(){
    if(document.querySelector('textarea').value == ''){
        document.getElementById('error-post').innerHTML = `<h6>Escriba un Post</h6>`;
        return false;
    }
    let postContent = document.querySelector('textarea').value;
    for(let i=0; i<Contenido.length; i++){
        if (Contenido[i].usuario == document.getElementById('Users').value){
            Contenido[i].post += postContent;
            return true;
        }
    }
}

function ValidateDate(){
    if(document.getElementById('date').value == ''){
        document.getElementById('error-date').innerHTML = `<h6>Seleccione una Fecha</h6>`;
        return false;
    }
    let postDate = document.getElementById('date').value;
    for(let i=0; i<Contenido.length; i++){
        if (Contenido[i].usuario == document.getElementById('Users').value){
            Contenido[i].fecha += postDate;
            return true;
        }
    }
}
