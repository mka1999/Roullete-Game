let go = document.querySelector("button"); 
let gains = 100;
let pertes = 0;
let hasard;
function nbrHasard (){
    return Math.floor(Math.random() * 36);
}

function VrfParite(x, choix){
    if(x % 2 == 0 && choix == "pair")
        return 1;
    else if (x % 2 == 1 && choix == "impair")
        return 1
    else
        return 0;
}
function VrfAffichage(){
    let parite = VrfParite(hasard, document.querySelector("select").value);
    let mise = parseInt(document.querySelector("input[name=mise]").value);
    let mises = parseInt(document.querySelector("input[name=mises]").value);
    let message = ["Le nombre a devinner est : "+hasard+".😜😜 \nDommage, vous avez perdu😥😔😔 ", 
    "Bravo vous avez trouver la parité 🤩🤩🎉🎉    .\n votre mises est multiplier par deux.🤑🤑", 
    "Jackpot !!! Vous avez trouvé le nombre exact :"+hasard+".🎉🎉🎉!!!\n votre mise est multipliée par 36!💪💪"];

    if(hasard == 0){
        gains -= mises;
        pertes +=mises;
        alert(message[0]);
    }
    else if(mises == hasard){
        gains += mise * 36;
        alert(message[2]);
    }
    else if(parite == 1){
        gains += mises * 2;
        alert(message[1]);
    }
    else if(parite == 0){
        gains -= mises;
        pertes += mises;
        alert(message[0]);
}
    document.getElementById("gains").innerHTML = ("Vos gains sont de : "+gains+"$.");
    document.getElementById("pertes").innerHTML = ("Vos avez perdu : "+pertes+"$.");
}
go.onclick = function(){
    if(document.querySelector("input[name=mise]").value == ""||document.querySelector("input[name=mises]").value== ""){
        alert ("Veuillez choisir un nombre.");
        return 0;
    }
    if(document.querySelector("input[name=mise]").value > 36 || document.querySelector("input[name=mise]").value < 1){
        alert ("Veuillez choisir un nombre compris entre 1 et 36.");
        return 0;
    }
    
    let rptCounter = 0;
    let myvar = setInterval(nbrAnimation, 100);
        
    function nbrAnimation(){        
        if(rptCounter > 10){
            hasard = 0;
        clearInterval(myvar);
        }
            
        hasard = nbrHasard();

        document.getElementById("animation").innerHTML ='Le nombre à deviner était : '+hasard;
        rptCounter++;
    }
   
   
    setTimeout(VrfAffichage, 100*20);
    
}
