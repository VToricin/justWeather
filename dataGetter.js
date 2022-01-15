class dataGetter {
  constructor(props,skin){
     this.temp = Math.round(props.temp-273);
     this.cloudURL = props.weather[0].icon;
     this.feels_like = Math.round(props.feels_like-273);
     this.humidity = props.humidity;
     this.wind_speed = props.wind_speed;
     
     this.skin = skin;
     
     }
//метод для отрисовки карточки
  returnActualData(){
    let cloudsData = 0;
    let cloudsDescription = '';
    let mainPictureURL = '';

    if(this.feels_like<-30){
      mainPictureURL = `${this.skin}/1.png`
      console.log(this.feels_like)
    }else if(this.feels_like>-31&&this.feels_like<-20){
      mainPictureURL = `${this.skin}/2.png`
      console.log(this.feels_like)
    }else if(this.feels_like>-21&&this.feels_like<-10){
      mainPictureURL = `${this.skin}/3.png`
      console.log(this.feels_like)
    } else if(this.feels_like>-11&&this.feels_like<0){
      mainPictureURL = `${this.skin}/4.png`
      console.log(this.feels_like)
    } else if(this.feels_like>-1&&this.feels_like<10){
      mainPictureURL = `${this.skin}/5.png`
      console.log(this.feels_like)
    } else if(this.feels_like>9&&this.feels_like<20){
      mainPictureURL = `${this.skin}/6.png`
      console.log(this.feels_like)
    } else if(this.feels_like>19&&this.feels_like<30){
        mainPictureURL = `${this.skin}/7.png`
        console.log(this.feels_like)
      } else{mainPictureURL = `${this.skin}/12.png`
      console.log(this.feels_like)}   


    switch(this.cloudURL){
        case '01d':
          cloudsData = './imgs/sunny.png'
          cloudsDescription = 'ясно'
         break
        case '01n':
          cloudsData = './imgs/sunny.png'
          cloudsDescription = 'ясно'
         break 
        case '02d':
          cloudsData = './imgs/sunny.png'
          cloudsDescription = 'малооблачно'
         break
        case '02n':
          cloudsData = './imgs/sunny.png'
          cloudsDescription = 'малооблачно'
         break 
        case '03d':
          cloudsData = './imgs/sunny.png'
          cloudsDescription = 'переменная облачность'
         break
        
        case '03n':
          cloudsData = './imgs/sunny.png'
          cloudsDescription = 'переменная облачность'
         break

        case '04d':
          cloudsData = './imgs/sunnycloudy.png'
          cloudsDescription = 'облачно'
         break 

        case '04n':
          cloudsData = './imgs/sunnycloudy.png'
          cloudsDescription = 'облачно'
         break  
        
        case '13d':
          cloudsData = './imgs/litsnow.png'
          cloudsDescription = 'снег'
         break   

         case '13n':
          cloudsData = './imgs/litsnow.png'
          cloudsDescription = 'снег'
         break   
 
    }
    let actualData = {
      temp: `${this.temp}&deg; `,
      cloudsURL : cloudsData,
      cloudsDescription: cloudsDescription,
      howToWear: './imgs/sunny.png',
      additional : 'дополнительно',
      mainPictureURL: mainPictureURL,
      humidity: this.humidity,
      feels_like: this.feels_like,
      wind_speed: this.wind_speed
     }
    return actualData;
  }    
}