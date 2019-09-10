import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Plant, Greenhouse, plant1hp } from './project';




$(document).ready(function(){
  let timer = 0;
  $("#easy-start").click(function(){
    let cactus = new Plant("cactus", 20, "easy");
    const mhp = cactus.maxResilience;


    cactus.setPlantVerdency();
    let plantKiller = setInterval(() => {
      timer++;
      console.log(timer);
      if(plant1hp <= 0){
        $("#p1-100").fadeOut();
        $("#p1-80").fadeOut();
        $("#p1-60").fadeOut();
        $("#p1-40").fadeOut();
        $("#p1-20").fadeOut();
        $("#plant-profile1").fadeOut(5000);
        clearInterval(plantKiller);
      } else if(plant1hp <= (.2 * mhp)){
        $("#p1-100").fadeOut();
        $("#p1-80").fadeOut();
        $("#p1-60").fadeOut();
        $("#p1-40").fadeOut();
      } else if(plant1hp <= (.4 * mhp)){
        $("#p1-100").fadeOut();
        $("#p1-80").fadeOut();
        $("#p1-60").fadeOut();
      } else if(plant1hp <= (.6 * mhp)){
        $("#p1-100").fadeOut();
        $("#p1-80").fadeOut();
      } else if(plant1hp <= (.8 * mhp)){
        $("#p1-100").fadeOut();
      } $("#plant1-hp").text(plant1hp);
    }, 1000);
  });

});





//
// cactus.setPlantVerdency();
// let myVar = setInterval(plantKiller, 1000)
// function plantKiller(){
//   if(plant1hp <= 0){
//     $("#p1-100").fadeOut();
//     $("#p1-80").fadeOut();
//     $("#p1-60").fadeOut();
//     $("#p1-40").fadeOut();
//     $("#p1-20").fadeOut();
//     $("#plant-profile1").fadeOut(5000);
//
//   } else if(plant1hp <= (.2 * mhp)){
//     $("#p1-100").fadeOut();
//     $("#p1-80").fadeOut();
//     $("#p1-60").fadeOut();
//     $("#p1-40").fadeOut();
//   } else if(plant1hp <= (.4 * mhp)){
//     $("#p1-100").fadeOut();
//     $("#p1-80").fadeOut();
//     $("#p1-60").fadeOut();
//   } else if(plant1hp <= (.6 * mhp)){
//     $("#p1-100").fadeOut();
//     $("#p1-80").fadeOut();
//   } else if(plant1hp <= (.8 * mhp)){
//     $("#p1-100").fadeOut();
//   }
// }
