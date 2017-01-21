var services = [
    {service: "МОДЕЛИРУЮЩИЙ<br>УХОД ЗА ТЕЛОМ", pic: "url(img/service-0.jpg)"},
    {service: "ОБЩИЙ УХОД ЗА ТЕЛОМ", pic: "url(img/service-1.jpg)"},
    {service: "РЕЛАКС УХОД<br>ЗА ТЕЛОМ", pic: "url(img/service-2.jpg)"},
    {service: "SPA ПРОЦЕДУРЫ<br>ДЛЯ ТЕЛА", pic: "url(img/service-3.jpg)"},
    {service: "ДЕЛИКАТНЫЙ<br>УХОД ЗА ЛИЦОМ", pic: "url(img/service-4.jpg)"},
    {service: "МАССАЖ ДЛЯ БЕРЕМЕННЫХ", pic: "url(img/service-5.jpg)"},
    {service: "ИНДИЙСКИЙ<br>МАССАЖ ГОЛОВЫ", pic: "url(img/service-6.jpg)"},
    {service: "ВИСЦЕРАЛЬНЫЙ МАССАЖ", pic: "url(img/service-7.jpg)"},
    {service: "КИТАЙСКИЙ<br>МАССАЖ ГОЛОВЫ", pic: "url(img/service-8.jpg)"}
];


var servicesVisible = [0, 1, 2, 3];
var tmpID = "";
var tmpPic = "";

$(document).ready(function(){
    $("#id-btn-left").click(function(){
        for (var i=0; i<4; i++) {
            tmpID = "#pic-s-" + i;
            if (servicesVisible[i] == "8") {
                servicesVisible[i] = 0;
            } else {
                servicesVisible[i] += 1;
            }
            $(tmpID).css("backgroundImage", services[servicesVisible[i]].pic);
            $(tmpID).html(services[servicesVisible[i]].service);
        }
    });

    $("#id-btn-right").click(function(){
        for (var i=0; i<4; i++) {
            tmpID = "#pic-s-" + i;
            if (servicesVisible[i] == "0") {
                servicesVisible[i] = 8;
            } else {
                servicesVisible[i] -= 1;
            }
            $(tmpID).css("backgroundImage", services[servicesVisible[i]].pic);
            $(tmpID).html(services[servicesVisible[i]].service);
        }
    });

});
