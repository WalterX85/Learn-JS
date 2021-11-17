



let interval = setInterval(() => {
  document.body.innerHTML += `
    <div class='box'>
      <h3>Nouvelle boite!</h3>
    </div>
    `;
}, 4000);

document.body.addEventListener("click", (e) => {
  if(confirm("Voulez vous vraiment vous supprimer ?")) {
    e.target.remove()
    clearInterval(interval);
  }
})


//Navigator
// console.log(navigator.userAgent);

//https://developer.mozilla.org/fr/docs/Web/API/Geolocation/getCurrentPosition

var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

function success(pos) {
  var crd = pos.coords;

  console.log("Votre position actuelle est :");
  console.log(`Latitude : ${crd.latitude}`);
  console.log(`Longitude : ${crd.longitude}`);
  console.log(`La précision est de ${crd.accuracy} mètres.`);
}

function error(err) {
  console.warn(`ERREUR (${err.code}): ${err.message}`);
}

navigator.geolocation.getCurrentPosition(success, error, options);

// History

//console.log(history);
//window.history.back();
//history.go(-2)