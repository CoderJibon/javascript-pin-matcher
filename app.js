


function getPin(){
    const pin = Math.round(Math.random()*10000);
    const stringPin = pin + "";

    if(stringPin.length == 4){
        return pin;
    }else{
        return getPin();
    }

}


function generatePin(){
    const getDisplayPin = getPin();
    document.getElementById('pinDisplay').value = getDisplayPin;
    
}

document.getElementById('keyPad').addEventListener('click',function(e){
    
    const number = e.target.innerText;

    const calc = document.getElementById('display');

    if(isNaN(number)){
        if(number == 'C'){
            calc.value = '';
        }       
    }else{
        const previousCale = calc.value;
        const newCale = previousCale + number;
        calc.value = newCale;
    }
    e.stopPropagation(); 
});

document.getElementById('submit').addEventListener('click',function(){
    const displaypin =  document.getElementById('pinDisplay').value;
    const pinDisplay =  document.getElementById('display').value;

    const error =  document.getElementById('error');
    const success =  document.getElementById('success');
    if(displaypin == pinDisplay){
        success.style.display = "block";
        error.style.display = 'none';
    }else{
        success.style.display = "none";
        error.style.display = 'block';
    }

});

document.getElementById('delate').addEventListener('click',function(){
    let displayData = document.getElementById('display');
    let displayValue = displayData.value;
    let del = displayValue.slice(0,-1); 
    displayData.value = del;

    console.log(del);
   
});
