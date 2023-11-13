

//burger meni
$("#dugme-meni").click(function (){
    $(".burgermeni").toggle(5);
});


//ikonice za drustvene mreze
$("#facebook").click(function (){
    window.open("https://www.facebook.com/");      //anonimne f-je (mogu se pisati i bez naziva f1, f2, f3)
})
$("#instagram").click(function (){
    window.open("https://www.instagram.com/");
})
$("#twitter").click(function (){
    window.open("https://twitter.com/");
})



//validacija newsletter forme
function funkcijaPrijaviSe(){

    //Uzimamo vrednost unetu u polje za unos email-a i pristupamo paragrafu za ispis upozorenja
    let email=document.querySelector("#newsletteremail").value;
    let upozorenje=document.querySelector("#newsletterUpozorenje");  

    if(email===""){  
        upozorenje.innerHTML="Unesite email";       //ako nije uneto ništa u polje za email, u paragrafu se ispisuje odgovarajuće upozorenje
    } 
    else if(!email.includes('@')){                  //ako je unet email u pogrešnom formatu bez znaka @, u paragrafu se ispisuje sledeće upozorenje
        upozorenje.innerHTML="Unesite validan email";
    }

    //ako nijedan od prethodnih uslova nije ispunjen (korisnik uneo ispravan mejl) iskočiće pop-up prozor koji će obavestiti o uspešnoj prijavi        
    else {                                              
            upozorenje.innerHTML = "";    //briše se sadržaj iz paragrafa              
            alert("Uspešmo ste se prijavili! \n\nPreko Vašeg email-a redovno ćemo Vas informisati o aktuelnoj ponudi, novostima, specijalnim popustima i događajima u restoranu Trpeza. Hvala Vam na interesovanju!");  
        }
}






