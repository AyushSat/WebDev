function process(){
    const inputs = document.querySelectorAll(".inputfield");
    console.log(inputs);
    let valid = true;
    for(let i =0;i<inputs.length;i++){
        if(!inputs[i].checkValidity()){
            valid = false;
            if(i == 0){
                alert("Please fill in city you are flying from.");
            }else if(i==1){
                alert("Please fill in the city you are flying to");
            }else if(i==2){
                alert("Please fill in the destination arrival date.");
            }else if(i==3){
                alert("Please fill in the home arrival date.");
            }else if(i==4){
                alert("Please fill in the destination arrival time.");
            }else if(i==5){
                alert("Please fill in the home arrival date.");
            }else if(i==6){
                alert("Please fill in the number of adults flying.");
            }else if(i==7){
                alert("Please fill in the number of children flying.");
            }else if(i==8){
                alert("Please fill in your desired travel class.");
            }else if(i==9){
                alert("Please fill in your name.");
            }else if(i==10){
                alert("Please fill in your email address.");
            }else if(i==11){
                alert("Please provide your telephone number.");
            }
            return;

        }
    }
    console.log(valid);
    if(valid){
        alert("You're all set! Please check your email for possible flight options and payment methods. Thank you for flying with us!");
        return;
    }

    
}