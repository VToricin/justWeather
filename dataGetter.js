class dataGetter {
  constructor(props){
     this.temp = Math.round(props.temp-273);
     this.cloudURL = props.weather[0].icon;
     this.feels_like = Math.round(props.feels_like-273);
     
     
     }

  returnActualData(){
    let cloudsData = 0;
    let cloudsDescription = '';
    let mainPictureURL = '';

    if(this.feels_like<-10&&this.feels_like>-20){
      mainPictureURL = './imgs/tempMinus10Minus20/1.png'
      console.log(this.feels_like)
    }else{
      mainPictureURL = './imgs/tempZeroMinus10/1.png'
      console.log(this.feels_like)
    } 

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
    }
    let actualData = {
      temp: `${this.temp}&deg; `,
      cloudsURL : cloudsData,
      cloudsDescription: cloudsDescription,
      howToWear: './imgs/sunny.png',
      additional : 2,
      mainPictureURL: mainPictureURL
     }
    return actualData;
  }    
}