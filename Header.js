//меню выбора города(координат) 
function cityListBuilder (){
    
    cityListDiv.classList.add('cityListDiv');
    for (let i=0; i < Object.keys(cityListAndCords).length; i++) {
       let cityP = document.createElement('p');
       cityP.innerHTML=`${Object.keys(cityListAndCords)[i]}`;
       cityP.classList.add('cityP');
       cityListDiv.appendChild(cityP);
       cityP.addEventListener('click', (e) => {
          
               e.stopPropagation();
               city.innerHTML = `${Object.keys(cityListAndCords)[i]}`;
               mainDiv.innerHTML = '';
               cordinates = cityListAndCords[Object.keys(cityListAndCords)[i]].cord;
               cityListDiv.classList.remove('activated');
               arrCity.classList.toggle('active');
               ifCityListDivActivated = false;
               dataCons(cordinates);
             
           
       })
    }
    cityValue.appendChild(cityListDiv);
}