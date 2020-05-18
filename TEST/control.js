function lol(){
    let form = ($('#form-images'));
    let formData = new FormData(form[0]);
    axios.post('company-logo.php', formData)
        .then(res => {
             console.log(res.data);
        }).catch(error =>{
             console.log(error);
         });
}

        
/*
        let form = $('#form-1');
        let formData = new FormData(form[0]);
        
        let imgPath = Object.values(form);
        let logoPath = imgPath[1];
        //let bannerPath = imgPath[2];
        //let formLogo = new FormData(form);
        //let formBanner = new FormData(bannerPath);

        Obtener lo que tienen los input file
        var form = {};
        $('input').each(function () {
            let fileName = this.value.replace(/^.*\\/, "");
            form[this.name] = this.value;
        });

        let formData = {};
         formData[(Object.keys(form))[1]] = (Object.values(form))[1];
 
         */