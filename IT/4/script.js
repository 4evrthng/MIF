function neTuscia() {
    if ($('input[name=tuscias]').val() == "") {
        alert ("nevalidus, iveskite ka nors i pirma lauka");
    } 
}

function arSkaicius() {
    if (isNaN($('input[name=skaicius]').val())) {
        alert ("nevalidus, iveskite skaiciu i antra lauka");
    } 
}
function arData() {
    var metai = $('input[name=metai]').val();
    var menuo = $('input[name=menuo]').val();
    var diena = $('input[name=diena]').val();
    
    
    if (metai==""||menuo==""||diena=="") {
        console.log("Iveskite visus duomenis");
    }
    else if (isNaN(metai)||isNaN(menuo)||isNaN(diena)) {
       alert ("blogai ivesti duomenis");
    } 
    else if (menuo<1||menuo>12) {
        alert ("neteisingai ivestas menuo");

    }
    else {
        var data = new Date(metai, menuo, diena);
        if (data.getDate() != diena) {
            alert ("Neteisingai ivesta diena");
        }
    }
    
}

function doRegThing(){
	pattern1 = /zodis?/;
	pattern2 = /^zodis*$/;
	pattern3 = /^zo+dis$/;
	pattern4 = /^zo\sdis$/;
	pattern5 = /^zo\wdis$/;
	pattern6 = /^zo\ddis$/;
	pattern7 = /^zod [a-z] is$/;

	document.getElementById("regPastraipa").innerHTML = "<br>? "+pattern1.test($('input[name=RegThing]').val())+"<br>*  "+pattern2.test($('input[name=RegThing]').val())+"<br>+ "+pattern3.test($('input[name=RegThing]').val())+"<br>\s  "+pattern4.test($('input[name=RegThing]').val())+"<br>\w  "+pattern5.test($('input[name=RegThing]').val())+"<br>\d  "+pattern6.test($('input[name=RegThing]').val())+"<br> [...] "+pattern7.test($('input[name=RegThing]').val());
}

function doRegThing2(){
	pattern1 = /(zo)+dis/;
	pattern2 = /(zo)d(is)/;
	pattern3 = /\s*\;\s*/;
	document.getElementById("regPastraipa2").innerHTML = "<br>RegExp.exec() "+pattern1.exec($('input[name=RegThing2]').val())+"<hr>"+($('input[name=RegThing2]').val()).replace(pattern2,"$2$1")+"<hr>"+($('input[name=RegThing2]').val()).split(pattern3);
}

function iveskPastraipa() {
	document.getElementById("pastraipaTekstui").innerHTML = $('input[name=pastraipa]').val();
}

function pastraiposSpalva() {
	document.getElementById("pastraipaTekstui").style.color = $('input[name=spalva]').val();
} 
function pridetiPastraipa(){
		$('body').append('<p> pastraipa prideta</p>');
	}
function istrintiPastraipa(){
		$('p').last().remove();
	}