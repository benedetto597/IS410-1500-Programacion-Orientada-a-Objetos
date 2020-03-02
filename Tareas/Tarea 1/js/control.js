var localStorage = window.localStorage;
var Content;

if (localStorage.getItem("Content")==null){
    Content= [
    {
        user:"Juan Perez",
        post:"",
        date:""
    },
    {
        user:"Lorena Gomez",
        post:"",
        date:""
    },
    {
        user:"Ashley Rios",
        post:"",
        date:""
    },
    {
        user:"María Godoy",
        post:"",
        date:""
    },
    {
        user:"Pedro Suazo",
        post:"",
        date:""
    }

    ]

    localStorage.setItem("Content",JSON.stringify(Content));
}else{
    Content = JSON.parse(localStorage.getItem('Content'));
    for(let i=0; i<Content.length; i++){
        if (Content[i].post != ''){
            createPost(i);
        }
    }
}

function myOnLoad() {
    ShowUsers();
}

function ShowUsers(){
    for(let i=0; i<Content.length; i++){ 
        document.getElementById('Users').innerHTML += `<option value='${Content[i].user}'>${Content[i].user}</option>`; 
        };
}

function ConfirmPost(){
    if (ValidatePost()== false || ValidateDate() == false){
        return false;
    }else{
        let posUser = searchUser();
        createPost(posUser);
        return true;
    }

}

function createPost(posUser){
        document.getElementById('mainRow').innerHTML += 
        `<div class="col-xl-3 col-lg-3 col-md-5 col-sm-12 col-xs-12 p-4 mx-1" id="main">
            <div class="card p-3">
                    <div class="card-header" style=" padding-left:0; padding-right:0;">
                        <img id="userlogo"src="img/user.jpg" class="img-thumbnail rounded-circle float-left">
                        <div style="padding-top:10px;">
                        <b class="card-title text-left" style="font-size:15px" >${Content[posUser].user}</b><h6 style="font-size:10px; color: #6a6d72; display: inline;">(${Content[posUser].date})</h6>
                        </div>
                    </div>
            <form id="userPost" class="card-body">
                <div class="form-group">
                    <p style="font:">${Content[posUser].post}</p>
                </div>
            </form>
            </div>
        </div>`
}

function searchUser(){
    for(let i=0; i<Content.length; i++){
        if (Content[i].user == document.getElementById('Users').value){
            return i;
        }
    }
}

function ValidatePost(){
    if(document.querySelector('textarea').value == ''){
        document.getElementById('error-post').innerHTML = `<h6>Escriba un Post</h6>`;
        return false;
    }
    let postContent = document.querySelector('textarea').value;
    let posUser = searchUser();
    Content[posUser].post += postContent;
    localStorage.setItem("Content",JSON.stringify(Content));
    return true; 
}

function ValidateDate(){
    if(document.getElementById('date').value == ''){
        document.getElementById('error-date').innerHTML = `<h6>Seleccione una date</h6>`;
        return false;
    }
    let postDate = document.getElementById('date').value;
    let posUser = searchUser();
    Content[posUser].date += getDate(postDate);
    localStorage.setItem("Content",JSON.stringify(Content));
    return true; 
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
    return finalDate;
}