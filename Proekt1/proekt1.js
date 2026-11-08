function destinacii(grad,drzava,slika,opis,kategorija,budzet)
{
    this.grad=grad;
    this.drzava=drzava;
    this.slika=slika;
    this.opis=opis;
    this.kategorija=kategorija;
    this.budzet=budzet;
}
var sidnej_slika=document.getElementsByClassName("sidnej")[0];
var new_york_slika=document.getElementsByClassName("newyork")[0];
var pariz_slika = document.getElementsByClassName("pariz")[0];
var rim_slika = document.getElementsByClassName("rim")[0];
var tokio_slika = document.getElementsByClassName("tokio")[0];
var dubai_slika = document.getElementsByClassName("dubai")[0];
var marina_bay_slika = document.getElementsByClassName("marinabay")[0];

var opis_sidnej="Познат по својата опера, прекрасните плажи и мостот Harbour Bridge.";
var kat_sidnej="Град";
var budzet_sidnej = "2500 €";

var opis_ny="Познат по облакодерите, Тајмс Сквер и Статуата на слободата.";
var kat_ny="Голем град";
var budzet_ny="1800 €";

var opis_pariz="Градот на љубовта, познат по Ајфеловата кула и музејот Лувр.";
var kat_pariz="Романтичен град";
var budzet_pariz="900 €";

var opis_rim="Познат по својата античка историја, Колосеумот и прекрасната архитектура.";
var kat_rim="Историски град";
var budzet_rim="750 €";

var opis_tokio="Модерен град во кој се спојуваат традицијата и најновата технологија.";
var kat_tokio="Модерен град";
var budzet_tokio="2200 €";

var opis_dubai="Познат по луксузните хотели, високите облакодери и големите трговски центри.";
var kat_dubai="Луксузна дестинација";
var budzet_dubai="1500 €";

var opis_marinabay="Позната туристичка област во Сингапур, со модерни градби и прекрасен поглед";
var kat_marinabay="Туристичка дестинација";
var budzet_marinabay="2000 €";

var dest=
[
    new destinacii("Сиднеј","Австралија",sidnej_slika,opis_sidnej,kat_sidnej,budzet_sidnej),
    new destinacii("Њу Јорк","САД",new_york_slika,opis_ny,kat_ny,budzet_ny),
    new destinacii("Париз","Франција",pariz_slika,opis_pariz,kat_pariz,budzet_pariz),
    new destinacii("Рим","Италија",rim_slika,opis_rim,kat_rim,budzet_rim),
    new destinacii("Токио","Јапонија",tokio_slika,opis_tokio,kat_tokio,budzet_tokio),
    new destinacii("Дубаи","Обединети Арапски Емирати",dubai_slika,opis_dubai,kat_dubai,budzet_dubai),
    new destinacii("Marina Bay","Сингапур",marina_bay_slika,opis_marinabay,kat_marinabay,budzet_marinabay)
]
var lista=document.getElementById("lista_destinacii");
for(var i=0;i<dest.length;i++)
{
    var karticka=document.createElement("div");
    karticka.className="karticka";
    karticka.setAttribute("data-kategorija",dest[i].kategorija);
    karticka.setAttribute("data-grad",dest[i].grad);
    karticka.setAttribute("data-budzet",parseInt(dest[i].budzet));
    karticka.appendChild(dest[i].slika);

    var tekst=document.createElement("h4");
    tekst.innerHTML=dest[i].grad+", "+dest[i].drzava;
    karticka.appendChild(tekst);

    var opis=document.createElement("p");
    opis.innerHTML=dest[i].opis;
    karticka.appendChild(opis);

    var kategorija=document.createElement("p");
    kategorija.innerHTML="Категорија: "+dest[i].kategorija;
    karticka.appendChild(kategorija);

    var budzet=document.createElement("p");
    budzet.innerHTML="Буџет: "+dest[i].budzet;
    karticka.appendChild(budzet);

    var kopce=document.createElement("button");
    kopce.innerHTML="X";
    kopce.className="btn btn-warning btn-sm ";
    kopce.onclick=function()
    {
        brisi(this.parentNode);
    }

karticka.appendChild(kopce);

    lista.appendChild(karticka);
}
function dodavanje_destinacija(grad,drzava,slika,opis,kategorija,budzet)
{
    this.grad=grad;
    this.drzava=drzava;
    this.slika=slika;
    this.opis=opis;
    this.kategorija=kategorija;
    this.budzet=budzet;
}
    function dodadi()
{
    var grad=prompt("Име на град:");
    var drzava=prompt("Држава:");
    var slika=prompt("Име на слика:"); // пр. slika.jpeg и треба да е спуштена таа слика
    var opis=prompt("Опис:");
    var kategorija=prompt("Категорија:");
    var budzet=prompt("Буџет:");

    if(grad!=null && grad!="")
    {
        var slikaa=document.createElement("img");
        slikaa.src=slika;
        slikaa.alt=grad;
        slikaa.style.width="250px";
        slikaa.style.height="250px";

        var destinacija=new dodavanje_destinacija( grad,drzava,slikaa,opis, kategorija,budzet);

        dest.push(destinacija);
        var lista=document.getElementById("lista_destinacii");

        var karticka=document.createElement("div");
        karticka.className="karticka";
        karticka.setAttribute("data-kategorija",destinacija.kategorija);
        karticka.setAttribute("data-budzet",parseInt(destinacija.budzet));
        karticka.setAttribute("data-grad",destinacija.grad);
        karticka.appendChild(destinacija.slika);

        var tekst=document.createElement("h4");
        tekst.innerHTML=destinacija.grad+", "+destinacija.drzava;
        karticka.appendChild(tekst);

        var opiss=document.createElement("p");
        opiss.innerHTML=destinacija.opis;
        karticka.appendChild(opiss);

        var kategorijaa=document.createElement("p");
        kategorijaa.innerHTML="Категорија: "+destinacija.kategorija;
        karticka.appendChild(kategorijaa);

        var budzett=document.createElement("p");
        budzett.innerHTML="Буџет: "+destinacija.budzet;
        karticka.appendChild(budzett);

        var kopce=document.createElement("button");
        kopce.innerHTML="X";
        kopce.className="btn btn-warning btn-sm";
        kopce.onclick=function()
        {
            brisi(this.parentNode);
        }
        karticka.appendChild(kopce);

        lista.appendChild(karticka);
    }
}

function brisi(element) 
{
    document.getElementById("lista_destinacii").removeChild(element);
}

function kopce_funkcija(event)
{
    event.preventDefault(); 
    alert("Поднесена анкета!");
    document.getElementById("anketa").reset();
}
var kopce=document.getElementById("anketa");
kopce.addEventListener("submit",kopce_funkcija,false);

function najaviSe(event)
{
    event.preventDefault();
    var korisnik=document.getElementById("korisnik").value;
    if(korisnik!="")
    {
        document.getElementById("najava").style.display="none";
        document.getElementById("stranica").style.display="block";
        document.getElementById("dobredojde").innerHTML="Добредојде, "+korisnik+"!";
    }
}
var najava=document.getElementById("najava");
najava.addEventListener("submit",najaviSe,false);

function filtriraj()
{
    var kategorija=document.getElementById("filter").value.toLowerCase();
    var budzet=document.getElementById("filterBudzet").value;

    var karticki=document.getElementsByClassName("karticka");

    for(var i=0;i<karticki.length;i++)
    {
        var kat=karticki[i].getAttribute("data-kategorija").toLowerCase();
        var cena=Number(karticki[i].getAttribute("data-budzet"));

        if((kat.includes(kategorija)) && (budzet==0 || cena<=Number(budzet)))
        {
            karticki[i].style.display="block";
        }
        else
        {
            karticki[i].style.display="none";
        }
    }
}
document.getElementById("filter").addEventListener("input", filtriraj);
document.getElementById("filterBudzet").addEventListener("change", filtriraj);

function presmetaj()
{
    var denovi=Number(document.getElementById("denoj").value);
    var smestuvanje=Number(document.getElementById("smesthaj").value);
    var drugi=Number(document.getElementById("drugi").value);
    var prevoz=Number(document.getElementById("prevoz").value);

    var vkupno=denovi*(smestuvanje+drugi)+prevoz;

    document.getElementById("rezultat").innerHTML =
        "Вкупни патни трошоци: "+vkupno+" €";
}
function funkciislika(slika, galerija)
{
    var slikaaa=document.createElement("div");
    slikaaa.className="slika-galerija";

    slikaaa.appendChild(slika);

    var like=51;
    var dislike=20;

    var likek=document.createElement("button");
    likek.innerHTML=" Like";

    var broj=document.createElement("span");
    broj.innerHTML=" "+like+" ";

    likek.onclick=function()
    {
        like++;
        broj.innerHTML=" "+like+" ";
    };

    var dislikeK=document.createElement("button");
    dislikeK.innerHTML="Dislike";

    var brojD=document.createElement("span");
    brojD.innerHTML=" "+dislike+" ";

    dislikeK.onclick=function()
    {
        dislike++;
        brojD.innerHTML=" "+dislike+" ";
    };

    slikaaa.appendChild(likek);
    slikaaa.appendChild(broj);
    slikaaa.appendChild(dislikeK);
    slikaaa.appendChild(brojD);

    var komentar=document.createElement("textarea");
    komentar.placeholder="Напиши коментар...";
    slikaaa.appendChild(komentar);

    var dodadiKomentar=document.createElement("button");
    dodadiKomentar.innerHTML="Додај коментар";

    var komentari=document.createElement("div");

    dodadiKomentar.onclick=function()
    {
        if(komentar.value.trim()!="")
        {
            var novKomentar=document.createElement("p");
            novKomentar.textContent=komentar.value;
            komentari.appendChild(novKomentar);
            komentar.value="";
        }
    };

    slikaaa.appendChild(dodadiKomentar);
    slikaaa.appendChild(komentari);

    galerija.appendChild(slikaaa);
}
function otvoriGrad(grad)
{
    var sliki=[];

    if(grad=="Сиднеј")
        sliki=["sidnej1.jpeg","sidnej2.jpeg","sidnej3.jpeg"];
    else if(grad=="Њу Јорк")
        sliki=["newyork1.jpeg","newyork2.jpeg","newyork3.jpeg"];
    else if(grad=="Париз")
        sliki=["pariz1.jpeg","pariz2.jpeg","pariz3.jpeg"];
    else if(grad=="Рим")
        sliki=["rim1.jpeg","rim2.jpeg","rim3.jpeg"];
    else if(grad=="Токио")
        sliki=["tokio1.jpeg","tokio2.jpeg","tokio3.jpg"];
    else if(grad=="Дубаи")
        sliki=["dubai1.jpeg","dubai2.jpeg","dubai3.avif"];
    else if(grad=="Marina Bay")
        sliki=["marinabay1.jpeg","marinabay2.jpeg","marinabay3.jpeg"];

    document.getElementById("imeGrad").innerHTML=grad;

    var prostor=document.getElementById("slikiGrad");
    prostor.innerHTML="";

    for(var i=0;i<sliki.length;i++)
    {
        var slika=document.createElement("img");
        slika.src=sliki[i];
        slika.alt=grad;

        funkciislika(slika,prostor);
    }

    document.getElementById("cityGallery").style.display="block";
}
document.getElementById("zatvoriGalerija").onclick=function()
{
    document.getElementById("cityGallery").style.display="none";
};

function prikaziGalerija()
{
    var galerija=document.getElementById("galerija");
    galerija.innerHTML="";

    var gradovi=[
        "Сиднеј",
        "Њу Јорк",
        "Париз",
        "Рим",
        "Токио",
        "Дубаи",
        "Marina Bay"
    ];
    var sliki=[
        "sidnej1.jpeg",
        "newyork1.jpeg",
        "pariz1.jpeg",
        "rim1.jpeg",
        "tokio1.jpeg",
        "dubai1.jpeg",
        "marinabay1.jpeg"
    ];

    for(var i=0;i<gradovi.length;i++)
    {
        var karticka=document.createElement("div");
        karticka.className="grad-galerija";

        var slika=document.createElement("img");
        slika.src=sliki[i];

        var naslov=document.createElement("h3");
        naslov.innerHTML=gradovi[i];

        karticka.appendChild(slika);
        karticka.appendChild(naslov);

        karticka.onclick=function()
        {
            otvoriGrad(this.getAttribute("data-grad"));
        };
        karticka.setAttribute("data-grad",gradovi[i]);
        galerija.appendChild(karticka);
    }
}
prikaziGalerija();