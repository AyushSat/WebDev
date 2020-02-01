function animatein(){

    const inputs = document.querySelectorAll("input");
    let valid = true;
    for(let i =0;i<inputs.length;i++){
        console.log(inputs[i].checkValidity());
        if(!inputs[i].checkValidity()){
            valid = false;
        }
    }
    console.log(valid);
    if(valid){
        console.log("testmonky");
        document.querySelector(".thanks").setAttribute("id", "thanksin");
    }
}