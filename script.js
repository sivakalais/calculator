let displayOutput = document.getElementById('input')

function display(num){
    displayOutput.value += num;
}
function calculate(){
    try{
       displayOutput.value= eval(displayOutput.value);
    }catch(err){
       alert('invalid')
    }
}
function Clear(){
    displayOutput.value = "";
}
function Delete(){
    displayOutput.value=displayOutput.value.slice(0,-1)
}

