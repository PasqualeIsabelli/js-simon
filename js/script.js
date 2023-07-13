"use strict"

// VARIABILE: clock prende l'elento "clock" dall'HTML
const clock = document.getElementById("clock");
// VARIABILE: Creo la variabile now contenente la funzione Date
let now = new Date();
// Aggiungo all'HTML l'ora attuale
clock.innerHTML = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
// Creo la funzione Interval che si ripete per ogni secondo

setInterval(function () {
  now = new Date();
  clock.innerHTML = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
}, 1000);


// VARIABILE: Creo la variabile contenente la data e l'ora della fine del countdown
let countDownDate = new Date("July 14, 2023 09:30:00").getTime();

// FUNZIONE: Aggiorno il countdown ogni secondo e salvo tutto in una variabile
let count = setInterval(function () {
  // VARIABILE: Creo la variabile contenente la data e l'ora attuale
  let now = new Date().getTime();
  // VARIABILE: Creo una variabile contenente la differenza tra la data attuale e la fine del countdown
  let diff = countDownDate - now;


  // VARIABILI: Calcolo giorni, ore, minuti e secondi in millisecondi
  let days = Math.floor(diff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((diff % (1000 * 60)) / 1000);

  // Riporto l'output nell'HTML
  document.getElementById("countdown").innerHTML = days + ":" + hours + ":" + minutes + ":" + seconds;

  // CICLO: Quando il countdown termina compare il testo
  if (diff < 0) {
    clearInterval(count);
    document.getElementById("countdown").innerHTML = "Buona Lezione!";
  }
}, 1000);


