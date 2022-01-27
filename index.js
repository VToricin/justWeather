let mainDiv = document.getElementById('mainDiv');
let cityValue = document.getElementById('cityValue');
let city = document.getElementById('city');
let header = document.getElementById('header');
let headerDiv = document.querySelector('.headerDiv');
let body = document.querySelector('body');
let ifActivated = false;
let skin = `./imgs/Cutekid`;
let cordinates = 'lat=57.629871&lon=39.873676';
let errCity = document.querySelector('.errCity');



let cityListAndCords = {
   'Ярославль': {
      cord: 'lat=57.629871&lon=39.873676'
   },
   'Москва': {
      cord: 'lat=55.761665&lon=37.606667'
   },
   'Маунтин Вью': {
      cord: 'lat=37.386051&lon=-122.083847'
   },
   'Лимасол': {
      cord: 'lat=34.674999&lon=33.033329'
   },
   'Паттайя': {
      cord: 'lat=12.93333&lon=100.883331'
   }
}

let curData = {};
let plus5data = {};
let plus10data = {};

cityValue.addEventListener('click', () => {
   let cityListDiv = document.createElement('div');
   cityListDiv.classList.add('cityListDiv');
});


let dataCons = (cords) => {

   fetch(`https://api.openweathermap.org/data/2.5/onecall?${cords}&exclude=minutely,daily&appid=17a2a05179606595e90bf4a02fd2ce0a`)
  .then(function(rspns){return rspns.json()})
  .then(function(data){
     console.log(data); 

     
     let curDataInformation = new dataGetter(data.current, skin);
     curData = curDataInformation.returnActualData();
     let cardCur = new Card (curData, 'Сейчас');  
     mainDiv.appendChild(cardCur.returnMethod());
     
     let forward5HInformation = new dataGetter(data.hourly[4], skin);
     plus5data = forward5HInformation.returnActualData();
     let cardPlus5data = new Card(plus5data, 'Через 5 часов');
     mainDiv.appendChild(cardPlus5data.returnMethod()); 


     let forward10HInformation = new dataGetter(data.hourly[9], skin);
     plus10data = forward10HInformation.returnActualData();
     let cardPlus10data = new Card(plus10data, 'Через 10 часов');
     mainDiv.appendChild(cardPlus10data.returnMethod());
         
    
  }
  )

}
// дефолтно загружается страница с координатами Ярославля в качестве агрумента
dataCons(cordinates);


//меню выбора города(координат) 
let cityListDiv = document.createElement('div');
cityListDiv.classList.add('cityListDiv');
for (let ci=0; ci < Object.keys(cityListAndCords).length; ci++) {
   let cityP = document.createElement('p');
   cityP.innerHTML=`${Object.keys(cityListAndCords)[ci]}`;
   cityP.classList.add('cityP');
   cityListDiv.appendChild(cityP);
   cityP.addEventListener('click', (e) => {
      
           e.stopPropagation();
           city.innerHTML = `${Object.keys(cityListAndCords)[ci]}`;
           mainDiv.innerHTML = '';
           cordinates = cityListAndCords[Object.keys(cityListAndCords)[ci]].cord;
           cityListDiv.classList.remove('activated');
           dataCons(cordinates);
         
       
   })
}
cityValue.appendChild(cityListDiv);




cityValue.addEventListener('click', function(e){
   e.stopPropagation();
   cityListDiv.classList.toggle('activated');
   ifActivated = true;
   errCity.classList.toggle('active');
   }

);
   
evLisMethod();







