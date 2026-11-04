function vozac(ime,tim,brzina,vestina,gumi) {
    this.ime=ime;
    this.tim=tim;
    this.brzina=brzina;
    this.vestina=vestina;
    this.gumi=gumi;
    this.pocetni_gumi=gumi;
    this.vkupno_vreme=0;
    this.vreme_krug=0;
    this.pit_krug=0;
    this.pit_napraven=false;
    this.izletel=false;
    this.dnf=false;
}
var vozaci=
[
    new vozac("Lewis Hamilton","Ferrari",90,70,"Medium"),
    new vozac("Charles Leclerc","Ferrari",70,95,"Hard"),
    new vozac("Max Verstappen","Red Bull Racing",70,94,"Medium"),
    new vozac("Alexander Albon","Williams",40,50,"Hard"),
    new vozac("Kimi Antonelli","Mercedes-AMG",70,85,"Medium"),
    new vozac("Fernando Alonso","Aston Martin",34,55,"Hard"),
    new vozac("Oscar Piastri","Mclaren",85,76,"Hard"),
    new vozac("Lando Norris","Mclaren",54,78,"Medium"),
    new vozac("Oliver Bearman","Haas",84,45,"Medium"),
    new vozac("Valtteri Bottas","Cadillac",53,76,"Hard")
];

var tabela=document.createElement("table");
tabela.border="4";
var naslov=document.createElement("caption");
naslov.innerHTML="Results";
tabela.appendChild(naslov);
var thead=document.createElement("thead");
var red=document.createElement("tr");
var kolonite=["Pos","Name","Team","Tires","Pit lap","Lap time","Total time","Gap","Spin"];
for(var i=0;i<kolonite.length;i++)
{
    var th=document.createElement("th");
    th.innerHTML=kolonite[i];
    red.appendChild(th);
}
thead.appendChild(red);
tabela.appendChild(thead);
var tbody=document.createElement("tbody");
tbody.id="raceResults";
tabela.appendChild(tbody);
document.getElementById("tabelastoevotek").appendChild(tabela);
tabela.style.display="none";

var telo=document.getElementById("listanavozaci");
for (var i=0;i<vozaci.length;i++) {
    var red=document.createElement("tr");
    var ime=document.createElement("td");
    ime.innerHTML=vozaci[i].ime;
    red.appendChild(ime);
    var tim=document.createElement("td");
    tim.innerHTML=vozaci[i].tim;
    red.appendChild(tim);
    var brzina=document.createElement("td");
    brzina.innerHTML=vozaci[i].brzina;
    red.appendChild(brzina);
    var vestina=document.createElement("td");
    vestina.innerHTML=vozaci[i].vestina;
    red.appendChild(vestina);
    var gumi=document.createElement("td");
    gumi.innerHTML=vozaci[i].gumi;
    red.appendChild(gumi);
    telo.appendChild(red);
}

var segakrug=0;
var zapocnata=false;
var pitKrugPrikaz=[];

function crtaj() {
    var sortirani=vozaci.sort(function(a,b) {
        if (a.dnf && b.dnf) return 0;
        if (a.dnf) return 1;
        if (b.dnf) return -1;
        return a.vkupno_vreme-b.vkupno_vreme;
    });

    var lider=null;
    for (var i=0;i<sortirani.length;i++) {
        if (sortirani[i].dnf==false) {
            lider=sortirani[i];
            break;
        }
    }

    tbody.innerHTML="";
    for (var i=0;i<sortirani.length;i++) {
        var v=sortirani[i];
        var red=document.createElement("tr");
        var polinja=[];
        var pitTekst="-";
        if (v.pit_napraven) {
            pitTekst=v.pit_prikaz;
        }
        if (v.dnf) {
            polinja=["DNF",v.ime,v.tim,v.gumi,pitTekst,"-","DNF","DNF","-"];
        } else {
            var krugTekst="-";
            if (segakrug!=0) {
                krugTekst=Math.round(v.vreme_krug*100)/100;
            }
            var spinTekst="No";
            if (v.izletel)
                {
                spinTekst="Yes";
            }
            polinja=[
                i+1,
                v.ime,
                v.tim,
                v.gumi,
                pitTekst,
                krugTekst,
                Math.round(v.vkupno_vreme*100)/100,
                "+"+Math.round((v.vkupno_vreme-lider.vkupno_vreme)*100)/100,
                spinTekst
            ];
        }

        for(var j=0;j<polinja.length;j++) {
            var td=document.createElement("td");
            td.innerHTML=polinja[j];
            red.appendChild(td);
        }
        tbody.appendChild(red);
    }
}
document.getElementById("clickbutton1").onclick=function() {
    zapocnata=true;
    segakrug=0;
    for(var i=0;i<vozaci.length;i++) {
        vozaci[i].gumi=vozaci[i].pocetni_gumi;
        vozaci[i].vkupno_vreme=0;
        vozaci[i].vreme_krug=0;
        vozaci[i].pit_napraven=false;
        vozaci[i].izletel=false;
        vozaci[i].dnf=false;
        vozaci[i].pit_krug=Math.floor(Math.random()*7)+2;
    }
    tabela.style.display="table";
    crtaj();
    document.getElementById("currentLap").innerHTML=0;
    document.getElementById("raceStatus").innerHTML="Race Started";
    document.getElementById("lapStatus").innerHTML="The race has started! This is currently the starting grid";
};
document.getElementById("clickbutton2").onclick = function()
{
    if (zapocnata==false || segakrug>=10) {
        return;
    }
    segakrug++;
    document.getElementById("currentLap").innerHTML = segakrug;

    var status = " Lap "+ segakrug + ":<br>";
    var safetyCar=false;
    if(Math.random()<0.15) {
        safetyCar=true;
        status+="The safety car has gone out!<br>";
    }
    for (var i=0;i<vozaci.length;i++) {
        var v=vozaci[i];
        v.izletel=false;
        if (v.dnf) 
            {
            continue;
        }
        if (Math.random() < 0.02) 
            {
            v.dnf=true;
            status+=v.ime+" has DNF-ed!<br>";
            continue;
        }
        var vreme=100-v.brzina*0.1-v.vestina*0.05;
        if(v.gumi == "Medium") 
            {
            vreme=vreme-1;
        } else 
            {
            vreme=vreme+1;
        }
        vreme=vreme+Math.random()*2;
        if(v.pit_napraven == false && segakrug == v.pit_krug) {
            if(v.gumi == "Medium") {
                v.gumi="Hard";
            } else 
                {
                v.gumi="Medium";
            }
            v.pit_napraven=true;
            v.pit_prikaz=segakrug;
            vreme=vreme+20;
            status+=v.ime+" went to the pit stop and changed the tires to " + v.gumi + ".<br>";
        }
        if (Math.random() < (100 - v.vestina) / 500) {
            vreme=vreme+10;
            v.izletel=true;
            status+=v.ime+" has spun off the track!<br>";
        }
        if(safetyCar == true) {
            vreme=vreme+15;
        }
        v.vreme_krug=vreme;
        v.vkupno_vreme=v.vkupno_vreme+vreme;
    }
    crtaj();
    if(segakrug == 10) {
        document.getElementById("raceStatus").innerHTML="Race Finished";
        var pobednik=null;
        for (var i=0;i<vozaci.length;i++) 
            {
            if(vozaci[i].dnf == false) 
                {
                if(pobednik == null || vozaci[i].vkupno_vreme<pobednik.vkupno_vreme) {
                    pobednik=vozaci[i];
                }
            }
        }
        status+="<b id='pobednik'>"+ pobednik.ime + " HAS WON THE SINGAPORE GRAND PRIX!!!</b>";
    }
    document.getElementById("lapStatus").innerHTML=status;
};
document.getElementById("clickbutton3").onclick=function() {
    zapocnata=false;
    segakrug=0;
    for(var i=0;i<vozaci.length;i++) {
        vozaci[i].gumi=vozaci[i].pocetni_gumi;
        vozaci[i].vkupno_vreme=0;
        vozaci[i].vreme_krug=0;
        vozaci[i].pit_napraven=false;
        vozaci[i].izletel=false;
        vozaci[i].dnf=false;
    }
    tbody.innerHTML="";
    tabela.style.display="none";
    document.getElementById("currentLap").innerHTML=0;
    document.getElementById("raceStatus").innerHTML="Not Started";
    document.getElementById("lapStatus").innerHTML="";
};