var localStorage = window.localStorage;
var channels;

if (localStorage.getItem("channels")==null){
    channels= [
    {
        channel: "Fuera JOH",
        description:"Canal de videos de marchas",
        videos:[]
    },
    {
        channel: "Anime Cool",
        description:"Canal de videos de Animes Cool",
        videos:[]
    },
    {
        channel: "Epica",
        description:"Canal de videos de Epica",
        videos:[]
    },
    {
        channel: "Queen",
        description:"Canal de videos de Queen",
        videos:[]
    },
    {
        channel: "UnSun",
        description:"Canal de videos de UnSun",
        videos:[]
    }

    ]

    localStorage.setItem("channels",JSON.stringify(channels));
}else{
    channels = JSON.parse(localStorage.getItem('channels'));
    for(let i=0; i<channels.length; i++){
        if (channels[i].videos != []){
            for(let j=0; j<channels[i].videos.length; j++)
                if(channels[i].videos[j] != [])
                    createPost(i,j);
        }
    }
}

var video = {
    title:"",
    url:"",
    channel: "",
    views:"",
    duration:"",
    upload:""
}

function myOnLoad() {
    ShowChannels();
}

function ShowChannels(){
    for(let i=0; i<channels.length; i++){ 
        document.getElementById('Channels').innerHTML += `<option value='${channels[i].channel}'>${channels[i].channel}</option>`; 
        };
}

function ConfirmPost(){
    if (ValidateTitle()== false || ValidateURL() == false || ValidateChannel() == false || ValidateView() == false || ValidateLonger() == false || ValidateUpload() == false){
        document.getElementById('error-title').innerHTML = `<h6>Escriba un Titulo</h6>`;
        document.getElementById('error-url').innerHTML = `<h6>Escriba una URL</h6>`;
        document.getElementById('error-channel').innerHTML = `<h6>Seleccione un Canal</h6>`;
        document.getElementById('error-view').innerHTML = `<h6>Escriba una cantidad de vistas</h6>`;
        document.getElementById('error-duration').innerHTML = `<h6>Escriba Duración</h6>`;
        document.getElementById('error-upload').innerHTML = `<h6>Escriba hace cuanto se subió</h6>`;
        return false;
    }else{
        let posChannel = searchChannel();
        channels[posChannel].videos.push(video);
        localStorage.setItem("channels",JSON.stringify(channels));
        let posVideo = searchVideo(posChannel);
        createPost(posChannel,posVideo);
        return true;
    }
}

function ValidateTitle(){
    if(document.getElementById('Title').value == ''){
        return false;
    }
    let postTitle = document.getElementById('Title').value;
    video.title = postTitle;
    return true; 
}

function ValidateURL(){
    if(document.getElementById('URL').value == ''){
        return false;
    }
    let postURL = document.getElementById('URL').value;
    video.url = postURL;
    return true; 
}

function ValidateChannel(){
    if(document.getElementById('Channels').value == ''){
        return false;
    }
    let postChannel = document.getElementById('Channels').value;
    video.channel = postChannel;
    return true; 
}

function ValidateView(){
    if(document.getElementById('Views').value == ''){
        return false;
    }
    let postViews = document.getElementById('Views').value;
    postViews += 'k views';
    video.views = postViews;
    return true; 
}

function ValidateLonger(){
    if(document.getElementById('Duration').value == ''){
        return false;
    }
    let postLonger = document.getElementById('Duration').value;
    video.duration = postLonger;
    return true; 
}

function ValidateUpload(){
    if(document.getElementById('Uploaded').value == ''){
        return false;
    }
    let postUploaded = document.getElementById('Uploaded').value;
    postUploaded += ' hours ago';
    video.upload = postUploaded;
    return true; 
}

function searchChannel(){
    for(let i=0; i<channels.length; i++){
        if (channels[i].channel == document.getElementById('Channels').value){
            return i;
        }
    }
}

function searchVideo(channel){
    for(let i=0; i<channels[channel].videos.length; i++){
        if (channels[channel].videos[i].title == document.getElementById('Title').value){
            return i;
        }
    }
}

function createPost(channel,video) {
    document.getElementById('mainRow').innerHTML += `<div class="col-xl-2 col-lg-2 col-md-4 col-sm-12 col-xs-12">
    <div class="card w-100" style="width: 18rem;" id="img">
        <img class="card-img-top" src="${channels[channel].videos[video].url}" alt="Card image cap">
        <h5 id="titleimg">${channels[channel].videos[video].title}<b id="timeimg">${channels[channel].videos[video].duration}</b></h5>
        <div class="card-body">
            <b>${channels[channel].videos[video].title}</b>
            <p class="card-text"><small class="text-muted">${channels[channel].channel}<br>${channels[channel].videos[video].views} | ${channels[channel].videos[video].upload}</small></p>
        </div>
    </div>
</div>`
}