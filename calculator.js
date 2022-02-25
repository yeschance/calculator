var display = document.querySelector('.display');
var displayContent = '';
var buttons = document.querySelectorAll('button');

var operatorCheck = true;
var operatorReplace = false;
var dotCheck = true;
var equalsCheck = true;


buttons.forEach(function(button){
    button.addEventListener('click', function(e){
        switch(button.value){
            case 'operator' :   
                if(operatorCheck === false && operatorReplace === false ){                                   
                    displayContent += e.target.innerText;  
                    display.value = displayContent;           
                    operatorCheck = true;
                    operatorReplace = true;
                    equalsCheck = false;
                    break;
                } else if ( operatorReplace === true){
                displayContent = displayContent.slice(0 , -1);
                displayContent += e.target.innerText; 
                display.value = displayContent;  
                equalsCheck = false;       
                break;
                }
            case 'reset' :                                        
                    displayContent = '';                  
                    display.value = displayContent;  
                    operatorCheck = true;
                    break;
            case 'del' :
                    displayContent = display.value.substring(0, display.value.length - 1);
                    display.value = displayContent;
                    break;
            case 'equals' :     
                if(operatorCheck === false && equalsCheck === false) {
                    displayContent = (new Function('return '+displayContent.replace('÷','/').replace('×','*')))();
                    display.value = displayContent;
                    operatorCheck = false;
                    equalsCheck = true;
                    dotCheck = true;
                    break;        
                }else{
                    break;
                }
            case 'squared' :
                if(operatorCheck === false && equalsCheck === false) {
                    displayContent = Math.pow(display.value, 2);
                    display.value = displayContent;
                    operatorCheck = false;
                    equalsCheck = true;
                    dotCheck = true;
                    break;
                }else{
                    break;
                }
            case 'root' :
            if(operatorCheck === false && equalsCheck === false) {
                    displayContent = Math.sqrt(display.value);
                    display.value = displayContent;
                    operatorCheck = false;
                    equalsCheck = true;
                    dotCheck = true;
                    break;
                }else{
                    break;
                }
            // case 'abs' :
            //     if(operatorCheck === false && equalsCheck === false) {
            //         displayContent = Math.abs(display.value);
            //         display.value = displayContent;
            //         operatorCheck = false;
            //         equalsCheck = true;
            //         dotCheck === true
            //         break;
            //     }else{
            //         break;
            //     }
            case 'dot' :     
                if(dotCheck === true) {
                    displayContent += e.target.innerText; 
                    display.value = displayContent;  
                    dotCheck = false;       
                    operatorCheck = true;
                break;       
                }else{
                    break;
                }                                   
            default : 
                    if(equalsCheck === true ){
                        displayContent = '';
                        displayContent += e.target.innerText;  
                        display.value = displayContent; 
                        operatorCheck = false;  
                        operatorReplace = false; 
                        equalsCheck = false;    
                        dotCheck = true;   
                        break;  
                    }else {
                        displayContent += e.target.innerText;  
                        display.value = displayContent; 
                        operatorCheck = false;  
                        operatorReplace = false; 
                        equalsCheck = false;  
                        dotCheck = true;     
                        break;  
                    }                     
        }
    })
})