function getData(){
    let name = document.getElementById("nama").value
    let email = document.getElementById("email").value
    let phone = document.getElementById("phone").value
    let subject = document.getElementById("subject").value
    let urmsg = document.getElementById("urmsg").value

    //validasi
    if(name == ""){
        return alert("Nama harus Diisi")
    }else if(email == ""){
        return alert("Email harus Diisi")
    }else if(phone == ""){
        return alert("Nomor telepon harus Diisi")
    }else if(subject == ""){
        return alert("Subject harus Dipilih")
    }else if(urmsg == ""){
        return alert("Pesan harus Diisi")
    }

    const kirim = "Fahmihafizprasetyo@gmail.com"
    let a = document.createElement("a")
    a.href = `mailto:${kirim}?subject=${subject}&body= Hallo nama saya ${name},Email Saya ${email}, (Pesan) ${urmsg}, Hubungi Saya untuk kelanjutannya ${phone}`
    a.click()
}
let ablogs = []

function getBlog(event){
    event.preventDefault()

    let judul =document.getElementById("nproject").value
    let desc = document.getElementById("description").value
    let mulai =document.getElementById("mulai").value
    let selesai = document.getElementById("selesai").value
    let image = document.getElementById("upload").files

    let aimage = URL.createObjectURL(image[0])



        var checkbox = document.getElementsByName("techo");
        var techo = "";
        for(var i = 0; i < checkbox.length; i++){
            if(checkbox[i].checked){
                techo = techo +`<img src="assets/` + checkbox[i].value +`"> `;
            }
        }
    let blog = {
        judul,
        mulai,
        selesai,
        desc,
        techo,
        aimage
    }
    ablogs.push(blog)
    console.log(ablogs)
    conBlog()
}

function conBlog(){
    for(let i=0; i < ablogs.length; i++){
        document.getElementById("area").innerHTML +=`<div class="card1">
        <img src="${ablogs[i].aimage}" alt="">
        <div class="title">${ablogs[i].judul}</div>
        <div class="drs">Durasi : ${beda(ablogs[i].mulai ,ablogs[i].selesai )}</div>
        <p>${ablogs[i].desc}</p>
        <div class="sembol">
            ${ablogs[i].techo}
        </div>
        <div class="crd-btn">
            <a href="#"><button class="btn-edit">Edit</button></a>
            <a href="#"><button class="btn-del">Delete</button></a>
        </div>
    </div>`
    }
}

function beda(mulai,selesai){
 

    const awal1 = new Date(mulai)
    const akhir1 = new Date(selesai)

    const mulaii = awal1.getTime();
    const selesaii = akhir1.getTime();

    const selisih1 = selesaii - mulaii
    const cdetik = Math.floor(selisih1/1000)
    const cmenit = Math.floor(cdetik/60)
    const cjam = Math.floor(cmenit/60)
    const chari = Math.floor(cjam/24)
    const cminggu = Math.floor(chari/7)
    const cbulan = Math.floor(cminggu/4)
    const ctahun = Math.floor(cbulan/12)

    if(chari > 0 & chari <= 1){
        return chari  + " day"
    }else
    if(chari > 1 & chari<7){
        return chari + " days"
    }else 
    if(cminggu > 0 & cminggu <= 1){
        return cminggu + " week"
    }else
    if(cminggu > 1 & cminggu < 4){
        return cminggu +  " weeks"
    }else
    if(cbulan > 0 & cbulan <= 1){
        return cbulan  + " month"
    }else
    if(cbulan > 1 & cbulan < 12){
        return cbulan + " months"
    }else
    if(ctahun > 0 & ctahun <= 1){
        return ctahun  + " year"
    }else
    if(ctahun > 1){
        return ctahun + " years"
    }

}
