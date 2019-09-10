import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Plant, Greenhouse, plant1hp } from './project';




$(document).ready(function(){
  $("#easy-start").click(function(){
    let cactus = new Plant("cactus", 20, "easy");
    const mhp = cactus.maxResilience;
    console.log(mhp);

        cactus.setPlantVerdency();
        setInterval(() => {
           if(plant1hp <= (.8 * mhp)){
             console.log(.8 * mhp);
             $("#p1-100").fadeOut();
           }
        }, 1000);

   })

});
