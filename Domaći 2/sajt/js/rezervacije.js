
//burger meni
$("#dugme-meni").click(function (){
    $(".burgermeni").toggle(5);
});




//validacija forme za rezervaciju
function funkcijaRezervacija(){

    //Uzimamo unete vrednosti iz polja za unos teksta
    let imeiprezime = document.querySelector("#imeiprezime").value;    
    let telefon = document.querySelector("#telefon").value;
    let email = document.querySelector("#email").value;
    let brojosoba = document.querySelector("#brojosoba").value;
    let datum = document.querySelector("#datum").value;
    //definišemo dve promenjive tipa string kako bi prihvatili vrednosti o izboru restorana i sale i na kraju prikazali u pop-up prozoru,
    //ukoliko svi uneti podaci u formu budu validni
    let restoran=""; 
    let sala="";
    
    //Ispitujemo da li su uneti validni podaci u polja za unos. Kad program naiđe na podatak koji nije validan otvara se prozor upozorenja sa 
    //odgovarajućom porukom, tada se prekida dalje izvršavanje koda
    if(imeiprezime===""){
        alert("Niste uneli ime i prezime!");
        
    }
    else if (telefon ==="" || telefon.length < 9){
        alert("Niste ispravno uneli broj telefona!");
        
    }
    else if (email ==="" || !email.includes("@")){
        alert("Niste ispravno uneli email!");
        
    }
    else if(document.querySelector("#beograd").checked===false && document.querySelector("#nis").checked===false
    && document.querySelector("#novisad").checked===false && document.querySelector("#kragujevac").checked===false) {
        alert("Morate da odaberete restoran!");
        
    }
    else if(brojosoba==="" || (brojosoba<1 || brojosoba>12)){
        alert("Niste uneli ispravan broj osoba! Dozvoljen broj osoba je 1-12.");
        
    }
    else if(datum===""){
        alert("Niste uneli datum!");
    }
    //samo ukoliko nijedan od prethodnih uslova nije ispunjen izvršava se sledeći deo koda
    else{
        //ovaj deo koda pronalazi restoran  koji je korisnik izabrao i upisuje u promenljivu kako bi kasnije ispisao izabranu opciju
        if(document.querySelector("#beograd").checked){
            restoran=document.querySelector("#beograd").value;
        }
        else if(document.querySelector("#nis").checked){
            restoran=document.querySelector("#nis").value;
        }
        else if(document.querySelector("#novisad").checked){
            restoran=document.querySelector("#novisad").value;
        }
        else{
            restoran=document.querySelector("#kragujevac").value;
        }
        //ovaj deo koda pronalazi salu koju je korisnik izabrao i dodeljuje tu vrednost promenljivoj  kako bi kasnije ispisao izabranu opciju
        if(document.querySelector("#pusaci").selected){
            sala=document.querySelector("#pusaci").value;
        }
        else {
            sala=document.querySelector("#nepusaci").value;
        }
        //u promenljivoj ispisujemo sve unete podatke u formu
        let tekst="Vaši podaci:\n\n"+"Ime i prezime: "+imeiprezime+"\nTelefon: "+telefon+"\nEmail: "+email+"\nLokacija izabranog restorana: "+restoran+
        "\nBroj osoba: "+brojosoba+"\nSala: "+sala+"\nDatum rezervacije: "+datum+ "\n\nDa li želite da potvrdite svoju rezervaciju?";
        //uneti podaci se ispisuju u confirm prozoru
        if(confirm(tekst)===true){
            alert("Vaša rezervacija je uspešno evidentirana!");    //ukoliko kliknemo potvrdno dugme (ok) u cofirm prozoru, iskočiće alert prozor sa
        }                                                          //datom porukom
        else{
            alert("Vaša rezervacija nije evidentirana! Unesite ponovo podatke!");  //ako kliknemo cancel iskočiće alert prozor sa ovom porukom
        }
    }
    }


    function funkcijaObrisiSve(){
        //pristupamo poljima za unos podataka
        let imeiprezime = document.querySelector("#imeiprezime");
        let telefon = document.querySelector("#telefon");
        let email = document.querySelector("#email");
        let brojosoba = document.querySelector("#brojosoba");
        let datum = document.querySelector("#datum");
        //pristupamo ponuđenim opcijama 
        let beograd=document.querySelector("#beograd");
        let nis=document.querySelector("#nis");
        let novisad=document.querySelector("#novisad");
        let kragujevac=document.querySelector("#kragujevac");
        let nepusaci = document.querySelector("#nepusaci");
        let napomena=document.querySelector("#napomena");
    
    //proveravamo da li su polja prazna (ako nisu brišemo tekst dodelom praznog stringa)
    if(imeiprezime != null){
        imeiprezime.innerHTML = "";
    }
    if(telefon != null){
        telefon.innerHTML = "";
    }
    if(email != null){
        email.innerHTML = "";
    }
    //proveravamo da li je neka od opcija čekirana (ako jeste poništavamo)
    if(beograd != null){
        beograd.checked = false;
    }
    if(nis != null){
        nis.checked = false;
    }
    if(novisad != null){
        novisad.checked = false;
    }
     if(kragujevac != null){
        kragujevac.checked = false;
    }
    if(brojosoba != null){
        brojosoba.innerHTML = "";
    }
    //proveravamo da li je druga opcija za salu selektovana (ako jeste poništavamo je), 
    //prvu opciju smo još ranije podesili da bude podrazumevano čekirana pa nju nećemo poništiti
    if(nepusaci!=null){
        nepusaci.selected==false;
    }

    if(datum != null){
        datum.innerHTML = "";
    }
    if(napomena!=null){
        napomena.innerHTML="";
    }
    }








//ikonice za drustvene mreze
$("#facebook").click(function (){
    window.open("https://www.facebook.com/");
})
$("#instagram").click(function (){
    window.open("https://www.instagram.com/");
})
$("#twitter").click(function (){
    window.open("https://twitter.com/?lang=sr");
})



//validacija newsletter forme
function funkcijaPrijaviSe(){

    let email=document.querySelector("#newsletteremail").value;
    let upozorenje=document.querySelector("#newsletterUpozorenje");  

    if(email===""){  
        upozorenje.innerHTML="Unesite email";       
    } 
    else if(!email.includes('@')){                  
        upozorenje.innerHTML="Unesite validan email";
    }
    else {                                              
            upozorenje.innerHTML = "";                
            alert("Uspešmo ste se prijavili! \n\nPreko Vašeg email-a redovno ćemo Vas informisati o aktuelnoj ponudi, novostima, specijalnim popustima i događajima u restoranu Trpeza. Hvala Vam na interesovanju!");  
        }
}


