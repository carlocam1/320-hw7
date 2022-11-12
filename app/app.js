import {loadMoreItems, changeCampHolder, changePageContent } from "../model/model.js";

function test() {
  console.log("Inside test********")
}

function changeRoute(){
  changePageContent();
}

window.loadData = function(){
    changeRoute();
    initListeners(); 
}

function initListeners() {
    // mobile nav listeners
    barsLinksListener();

    // Full image and desciption listeners
    $(".camp-holder").click(function(e){
      let campIndex = e.currentTarget.id;
      // console.log(campIndex);
      changeCampHolder(campIndex);
      
      // close button listener
      addCloseListener();
    });


    $(".more-items").click(function(e){
      let moreItems = e.currentTarget.id;
      console.log("More items click in app.js");
      loadMoreItems(moreItems);
      // close button listener
      addCloseListener();
    });
}

window.barsLinksListener = function (){
    $(".bars").click(function(e){
      // console.log("clicked");
      $(".bars").toggleClass("active");
      $(".links").toggleClass("active");
  });

  $(".links a").click(function(e){
      $(".bars").toggleClass("active");
      $(".links").toggleClass("active");
      // $(".links").removeClass("active");
  });
}
// window.loadMoreItems = function (){
window.addCloseListener = function(){
  $(".close").click(function(){
    $("#app").html("");
    loadData();
    barsLinksListener();
  });
}

$(document).ready(function() {
    loadData();   
});