import { changePageContent  } from "../model/model.js";
import { showTourContent } from "../model/model.js";


function tourListeners(){
    $(".trip-button").on("click", function(e){
        let tourID = e.currentTarget.id;
        showTourContent(tourID);
    });
}

function initListeners(){
    $("nav #links a ").on("click", function (e){
        let btnID = e.currentTarget.id;
        changePageContent(btnID);
        tourListeners();
    });
}


$(document).ready(function(){
    initListeners();  
    changePageContent("home");
    tourListeners();
});