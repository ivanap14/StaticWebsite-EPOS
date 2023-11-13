
//burger meni
$("#dugme-meni").click(function (){
    $(".burgermeni").toggle(5);
});




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