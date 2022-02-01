let mainDiv = document.getElementById('mainDiv'); // основная область боди
let cityValue = document.getElementById('cityValue'); // div-кнопка для выбора города
let city = document.getElementById('city'); // параграф со значением выбора города 
let header = document.getElementById('header'); // шапка
let headerDiv = document.querySelector('.headerDiv'); // основная область шапки
let body = document.querySelector('body'); 
let ifCityListDivActivated = false;
let skin = `./imgs/Cutekid`;
let cordinates = 'lat=57.629871&lon=39.873676';
let arrCity = document.querySelector('.arrCity');
let cityListDiv = document.createElement('div');
let modeDiv = document.getElementById('mode');
let modeState = true;
let modeName = document.getElementById('modeName');
let loadedData = {};


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

cityListBuilder();

cityValue.addEventListener('click', () => {
   
   cityListDiv.classList.add('cityListDiv');
});

// запрос данных на сайт openweather.org 
let dataCons = (cords) => {
   mainDiv.innerHTML = '';
   
   let pageBuild = (data) => {
      let dataToBuildOnPage10h = [[data.current, 'Сайчас'], [data.hourly[4], 'Через 5 часов'], [data.hourly[9], 'Через 10 часов']];
      let dataToBuildOnPage3d = [[data.daily[0], 'Сегодня'],[data.daily[1], 'Завтра'],[data.daily[2], 'Послезавтра']];
       
      if(modeState === true) {
         for (let i=0; i<dataToBuildOnPage10h.length; i++) {
            let dataInformation = new dataGetter(dataToBuildOnPage10h[i][0], skin);
            let dataToBuild = dataInformation.returnActualData();
            let cardToBuild = new Card (dataToBuild, dataToBuildOnPage10h[i][1]);  
            mainDiv.appendChild(cardToBuild.returnMethod());
         }
      } else {
         for (let i=0; i<dataToBuildOnPage3d.length; i++) {
          let dataInformation = new dataGetter3d(dataToBuildOnPage3d[i][0], skin);
          let dataToBuild = dataInformation.returnActualData();
          let cardToBuild = new Card (dataToBuild, dataToBuildOnPage3d[i][1]);  
          mainDiv.appendChild(cardToBuild.returnMethod());
       }
      }
   }



   if (!Object.keys(loadedData).includes(cords)) {
   console.log('true');   
   fetch(`https://api.openweathermap.org/data/2.5/onecall?${cords}&exclude=minutely&appid=17a2a05179606595e90bf4a02fd2ce0a`)
  .then(function(rspns){return rspns.json()})
    .then(function(data){
     console.log(data); 
     loadedData[cords] = data;
     pageBuild(data);

     


    })
   }else{
      console.log('false');
      let data = loadedData[cords];
      pageBuild(data);
     
   }
}
// дефолтно загружается страница с координатами Ярославля в качестве агрумента
dataCons(cordinates);


//функция открытия списка выбора города в шапке
cityValue.addEventListener('click', function(e){
   e.stopPropagation();
   cityListDiv.classList.toggle('activated');
   if(!ifCityListDivActivated){
   ifCityListDivActivated = true;
   }
   arrCity.classList.toggle('active');
   }

);

// функция для закрытия окна с выбором городов при клике на любом пустом месте
evLisMethod();

modeDiv.addEventListener('click', function(){
   if (modeState === true) { 
   modeState = false;
   modeName.innerHTML = '3 д.';
   dataCons(cordinates);
   } else {
      modeState = true;
      modeName.innerHTML = '10 ч.';
      dataCons(cordinates);
   }
   
})





