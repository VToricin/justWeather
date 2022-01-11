let mainDiv = document.getElementById('mainDiv');

let curData = {
  
};
let plus5data = {
  
};
let plus10data = {
  
};



let dataCons =()=>{

   fetch('https://api.openweathermap.org/data/2.5/onecall?lat=57.37&lon=39.51&exclude=minutely,daily&appid=17a2a05179606595e90bf4a02fd2ce0a')
  .then(function(rspns){return rspns.json()})
  .then(function(data){
     console.log(data); 

     // Класс dataGetter излишен, проще тут функцию использовать или запихать в конструктор cardConstructor эту обработку,
     // ведь тяжело его назвать каким-то объетом
     // Карточка - это понятный объект, а dataGetter - не очень 
     let curDataInformation = new dataGetter(data.current);
     curData = curDataInformation.returnActualData();

     
     let cardCur = new Card (curData, 'Сейчас');
     mainDiv.appendChild(cardCur.returnMethod());
     
     let forward5HInformation = new dataGetter(data.hourly[4]);
     plus5data = forward5HInformation.returnActualData();
     let cardPlus5data = new Card(plus5data, 'Через 5 часов');
     mainDiv.appendChild(cardPlus5data.returnMethod()); 


     let forward10HInformation = new dataGetter(data.hourly[9]);
     plus10data = forward10HInformation.returnActualData();
     let cardPlus10data = new Card(plus10data, 'Через 10 часов');
     mainDiv.appendChild(cardPlus10data.returnMethod());
         
    
  }
  )

}
dataCons();







