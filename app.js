
let input = document.querySelector('#input');
let sheet = document.querySelector('.listContainer')


input.addEventListener('keyup',function(e){
    if(e.keyCode == 13){
        //console.log('enter ' + input.value );
        
        let newElement = document.createElement('h1');
        let text = document.createTextNode("- "+input.value);
        newElement.appendChild(text);
        sheet.appendChild(newElement);

        input.value="";
    }
    
});