import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Plant, Greenhouse, plant1hp, plant2hp, plant3hp } from './project';




$(document).ready(function(){
  let cactus = new Plant("cactus", 20, "easy");
  let fern = new Plant("fern", 15, "med");
  let orchid = new Plant("orchid", 15, "hard");
  let timer = 0;
  let request = new XMLHttpRequest();
  const url = `https://api.giphy.com/v1/gifs/search?q=withered&api_key=${process.env.API_KEY}`;

  request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        console.log(response);
        getElements(response);
      }
    }
    // console.log(response)

    request.open("GET", url, true);
    request.send();
    const getElements = function(response) {
      console.log(response.data[0].url);
      $(".endGame").html(`<img src='${response.data[1].images.downsized.url}'>` )
    }


  $(".plantButton").click(function(){
    const cmhp = cactus.maxResilience;
    const fmhp = fern.maxResilience;
    const omhp = fern.maxResilience;
    cactus.setPlantVerdency();
    fern.setPlantVerdency();
    orchid.setPlantVerdency();

    let myVar = setInterval(plantKiller, 1000)
    function plantKiller(){
      timer++;
      if(plant1hp <= 0){
        $("#p1-100").fadeOut();
        $("#p1-80").fadeOut();
        $("#p1-60").fadeOut();
        $("#p1-40").fadeOut();
        $("#p1-20").fadeOut();
        $("#plant-profile1").fadeOut(5000);
        $(".p1-health-bar-display").fadeOut(5000);
        $("#plant1-feed").fadeOut()
        clearInterval(myVar)
      } else if(plant1hp <= (.2 * cmhp)){
        $("#p1-100").fadeOut();
        $("#p1-80").fadeOut();
        $("#p1-60").fadeOut();
        $("#p1-40").fadeOut();
        $(".p1-hp").addClass("red")
        $(".p1-hp").removeClass("yellow")
      } else if(plant1hp <= (.4 * cmhp)){
        $("#p1-100").fadeOut();
        $("#p1-80").fadeOut();
        $("#p1-60").fadeOut();
      } else if(plant1hp <= (.6 * cmhp)){
        $("#p1-100").fadeOut();
        $("#p1-80").fadeOut();
        $(".p1-hp").addClass("yellow")
      } else if(plant1hp <= (.8 * cmhp)){
        $("#p1-100").fadeOut();
      }

      if(plant2hp <= 0){
        $("#p2-100").fadeOut();
        $("#p2-80").fadeOut();
        $("#p2-60").fadeOut();
        $("#p2-40").fadeOut();
        $("#p2-20").fadeOut();
        $("#plant-profile2").fadeOut(5000);
        $(".p2-health-bar-display").fadeOut(5000);
        $("#plant2-feed").fadeOut()
        clearInterval(myVar)
      } else if(plant2hp <= (.2 * fmhp)){
        $("#p2-100").fadeOut();
        $("#p2-80").fadeOut();
        $("#p2-60").fadeOut();
        $("#p2-40").fadeOut();
        $(".p2-hp").addClass("red")
        $(".p2-hp").removeClass("yellow")
      } else if(plant2hp <= (.4 * fmhp)){
        $("#p2-100").fadeOut();
        $("#p2-80").fadeOut();
        $("#p2-60").fadeOut();
      } else if(plant2hp <= (.6 * fmhp)){
        $("#p2-100").fadeOut();
        $("#p2-80").fadeOut();
        $(".p2-hp").addClass("yellow")
      } else if(plant2hp <= (.8 * fmhp)){
        $("#p2-100").fadeOut();
      }

      if(plant3hp <= 0){
        $("#p3-100").fadeOut();
        $("#p3-80").fadeOut();
        $("#p3-60").fadeOut();
        $("#p3-40").fadeOut();
        $("#p3-20").fadeOut();
        $("#plant-profile3").fadeOut(5000);
        $(".p3-health-bar-display").fadeOut(5000);
        $("#plant3-feed").fadeOut()
        clearInterval(myVar)
      } else if(plant3hp <= (.2 * omhp)){
        $("#p3-100").fadeOut();
        $("#p3-80").fadeOut();
        $("#p3-60").fadeOut();
        $("#p3-40").fadeOut();
        $(".p3-hp").addClass("red")
        $(".p3-hp").removeClass("yellow")
      } else if(plant3hp <= (.4 * omhp)){
        $("#p3-100").fadeOut();
        $("#p3-80").fadeOut();
        $("#p3-60").fadeOut();
      } else if(plant3hp <= (.6 * omhp)){
        $("#p3-100").fadeOut();
        $("#p3-80").fadeOut();
        $(".p3-hp").addClass("yellow")
      } else if(plant3hp <= (.8 * omhp)){
        $("#p3-100").fadeOut();
      }
    }
  });
  $("#plant1-feed").click(function(){
    cactus.feedPlant();
    $(".p1-hp").fadeIn();
    $(".p1-hp").removeClass("yellow")
    $(".p1-hp").removeClass("red")
  });
  $("#plant2-feed").click(function(){
    fern.feedPlant();
    $(".p2-hp").fadeIn();
    $(".p2-hp").removeClass("yellow")
    $(".p2-hp").removeClass("red")
  });
  $("#plant3-feed").click(function(){
    orchid.feedPlant();
    $(".p3-hp").fadeIn();
    $(".p3-hp").removeClass("yellow")
    $(".p3-hp").removeClass("red")
  });
});
