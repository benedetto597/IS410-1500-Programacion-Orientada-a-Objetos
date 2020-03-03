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
        if (channels[i].videos.length != 0){
            for(let j=0; j<channels[i].videos.length; j++){
                    createPost(i,channels[i].videos[j]);
            }
        }
    }
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
    var video = {
        title:"",
        url:"",
        channel: "",
        views:"",
        duration:"",
        upload:""
    }
    if(document.getElementById('Title').value == ''){
        document.getElementById('error-title').innerHTML = `<h6>Escriba un Titulo</h6>`;
        return false;
    }
    let postTitle = document.getElementById('Title').value;
    video.title = postTitle;

    if(document.getElementById('URL').value == ''){
        document.getElementById('error-url').innerHTML = `<h6>Escriba una URL</h6>`;
        return false;
    }
    let postURL = document.getElementById('URL').value;
    video.url = postURL;
    
    if(document.getElementById('Channels').value == ''){
        document.getElementById('error-channel').innerHTML = `<h6>Seleccione un Canal</h6>`;
        return false;
    }
    let postChannel = document.getElementById('Channels').value;
    video.channel = postChannel;

    if(document.getElementById('Views').value == ''){
        document.getElementById('error-view').innerHTML = `<h6>Escriba una cantidad de vistas</h6>`;
        return false;
    }
    let postViews = document.getElementById('Views').value;
    postViews += 'k views';
    video.views = postViews;
    
    if(document.getElementById('Duration').value == ''){
        document.getElementById('error-duration').innerHTML = `<h6>Escriba Duración</h6>`;
        return false;
    }
    let postLonger = document.getElementById('Duration').value;
    video.duration = postLonger;

    if(document.getElementById('Uploaded').value == ''){
        document.getElementById('error-upload').innerHTML = `<h6>Escriba hace cuanto se subió</h6>`;
        return false;
    }
    let postUploaded = document.getElementById('Uploaded').value;
    postUploaded += ' hours ago';
    video.upload = postUploaded;
    
    for(let i=0; i<channels.length; i++){
        if (channels[i].channel == video.channel){
            createPost(i,video);
            channels[i].videos.push(video);
        }
    }
    console.log(channels);
    localStorage.setItem("channels",JSON.stringify(channels));
}

function createPost(channel,newVideo) {
    document.getElementById('mainRow').innerHTML += `<div class="col-xl-2 col-lg-2 col-md-4 col-sm-12 col-xs-12">
    <div class="card w-100" style="width: 18rem;" id="img">
        <img class="card-img-top" src="${newVideo.url}" alt="Card image cap">
        <h5 id="titleimg">${newVideo.title}<b id="timeimg">${newVideo.duration}</b></h5>
        <div class="card-body">
            <b>${newVideo.title}</b>
            <p class="card-text"><small class="text-muted">${channels[channel].channel}<br>${newVideo.views} | ${newVideo.upload}</small></p>
        </div>
    </div>
</div>`
}