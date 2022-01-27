let evLisMethod = ()=> {
    body.addEventListener('click', function (el){
      
        if(!el.target.classList.contains('cityP')&&ifActivated===true){
          cityListDiv.classList.remove('activated');
          ifActivated = false;
        }
    })
}