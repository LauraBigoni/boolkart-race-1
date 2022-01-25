console.log("JS ok");

// generatore di numeri random
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const cars = [
  {
    name: "Luigi",
    trackColor: "red",
    id: "car-1",
    currentPosition: 0,
    speed: 0,
  },
  {
    name: "Matteo",
    trackColor: "pink",
    id: "car-2",
    currentPosition: 0,
    speed: 0,
  },
];

const setupScene = () => {
  const scene = document.getElementById('scene');
  scene.innerHTML = "";

  cars.forEach( (car) => {
    car.currentPosition = 0; 
    car.speed = getRandomNumber(1,10); 

    // costruire la pista  newTrack
    const newTrack = renderCar(car);

    scene.append(newTrack);

  });
};

const renderCar = (car) => {

    const track = document.createElement("div");
    track.style.background = car.trackColor;
    track.classList.add('track');

    const carBody = document.createElement("img");
    carBody.id =car.id;
    carBody.setAttribute("src", `./img/${car.id}.png`)
    carBody.classList.add('car');
    track.append(carBody);

    const trackName = document.createElement("p");
    trackName.innerText = car.name;
    trackName.classList.add('name');
    track.append(trackName);

    return track;

};

const gameOver = (() => {


  return false;
});


setupScene();

document.getElementById('start').addEventListener('click', () => {

  const playGame = setInterval( () => {
    if (gameOver()) {
      clearInterval(playGame);
//      showResults();
    } else {

      cars.forEach( (car) => {
        const carBody = document.getElementById(car.id);
        car.currentPosition += car.speed;

        if (car.currentPosition >= 800) {
          carBody.style.left = "805px";
        } else {
          carBody.style.left = car.currentPosition + "px";
        }        

      });

    }

  }, 200); 



});