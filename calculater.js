const button = document.getElementsByClassName('number') ; 
const inputArea = document.getElementById('input-area') ; 

let str = "" ; 


for(let i = 0 ; i<button.length ; i++) {
    button[i].addEventListener('click' , (event) =>{
        // if there is alreay wrong input in input area then when ever someone click on button then remove wrong input 
            if(inputArea.value== "wrong input"){
                inputArea.value='' ;
            }
            // 
            str ='' ;

            try {
            switch(event.target.innerHTML){
                case 'C' :
                            break ; 
                case '=' :
                    str = eval(inputArea.value) ; 
                    break ; 
                case '⬅️':
                    str=inputArea.value.slice(0,inputArea.value.length - 1 ) ; 
                    break ;          
                default:
                    let oldValue = inputArea.value; 
                    str = `${oldValue}${event.target.innerHTML}` ;
                    break ;  
                }
                if(str.length >12) {
                    alert("we are sorry sir , right now we support only 12 numbers to calculate") ; 
                    str = "" ; 
                }
                inputArea.value=str ; 

                 }
            
                 catch(e){
                     inputArea.value = "wrong input" ;
                     console.log(e) ;

                 }
            } 
    )
}

