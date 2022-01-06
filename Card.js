class Card  {
    constructor(prop,name){
    this.temp = prop.temp;
    this.cloudsURL = prop.cloudsURL;
    this.howToWear = prop.howToWear;
    this.cloudsDescription = prop.cloudsDescription;
    this.additional = prop.additional;
    this.mainPictureURL = prop.mainPictureURL;
    this.cardName = name;
    
  }
  

  returnMethod(){
    //создание основной дивки для карточки
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('cardDiv');
    const pCardName = document.createElement('p');
    pCardName.classList.add('descriptionClass');
    cardDiv.appendChild(pCardName);
    pCardName.id = 'pCardClass';
    pCardName.innerHTML = `${this.cardName}`

    //создание дивки для картинки с осадками
    const cloudsDiv = document.createElement('div');
    cloudsDiv.classList.add('inCardDiv');
    const clouds = document.createElement('img');
    clouds.src = this.cloudsURL;
    cloudsDiv.appendChild(clouds);
    const cloudsDescription = document.createElement('p');
    cloudsDiv.appendChild(cloudsDescription);
    
    cloudsDescription.innerHTML = `${this.cloudsDescription}`;
    
    //создание дивки для основной картинки 
    const funnyPictureDiv = document.createElement('div');
    funnyPictureDiv.classList.add('inCardDiv');
    const funnyPicture = document.createElement('img');
    funnyPicture.src = this.mainPictureURL;
    funnyPictureDiv.appendChild(funnyPicture);
    funnyPicture.id='funnyPicture';


    //создание дивки для температуры
    let tempDiv = document.createElement('div');
    tempDiv.classList.add('inCardDiv');
    let pTempDiv = document.createElement('p');
    tempDiv.appendChild(pTempDiv);
    pTempDiv.classList.add('descriptionClass');
    pTempDiv.innerHTML = `${this.temp}`;
    
    //создание дивки для доп информации. 
    let additionalInfDiv = document.createElement('div');
    additionalInfDiv.classList.add('inCardDiv');
    additionalInfDiv.innerHTML = `${this.additional}`;

    

    // добавление всех дивок в основную карточки
    cloudsDiv.appendChild(clouds);
    cardDiv.appendChild(cloudsDiv);
    cardDiv.appendChild(funnyPictureDiv);
    cardDiv.appendChild(tempDiv);
    cardDiv.appendChild(additionalInfDiv);
    

    
    

    
    return cardDiv;
  }
}