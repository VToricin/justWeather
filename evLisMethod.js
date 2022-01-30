let evLisMethod = () => {
    body.addEventListener('click', function (el) {
      
        if(!el.target.classList.contains('cityP')&&ifCityListDivActivated===true) {
          cityListDiv.classList.remove('activated');
          ifCityListDivActivated = false;
          arrCity.classList.toggle('active');
        }
    })
}