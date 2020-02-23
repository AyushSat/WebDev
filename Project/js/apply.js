let currNum = 1;

const first = document.getElementById("first");
const second = document.getElementById("second");
const third = document.getElementById("third");
console.log(first + "asf" + second + "asdf" + third);


function act(num){
    if(num ==1){
        b1click();
    }else if(num ==2){
        b2click();
    }else if(num ==3){
        b3click();
    }

    if(currNum == 1){
        if(second.getAttribute("class")===("active")){
            second.removeAttribute("class");
        }
        if(third.getAttribute("class")===("active")){
            third.removeAttribute("class");
        }
    
        first.setAttribute("class", "active");
        setText(1);
    
     }else if(currNum ==2){
        if(first.getAttribute("class")===("active")){
            first.removeAttribute("class");
        }
        if(third.getAttribute("class")===("active")){
            third.removeAttribute("class");
        }
    
        second.setAttribute("class", "active");
        setText(2);
     }else if(currNum ==3){
        if(first.getAttribute("class")===("active")){
            first.removeAttribute("class");
        }
        if(second.getAttribute("class")===("active")){
            second.removeAttribute("class");
        }
        third.setAttribute("class", "active");
        setText(3);
     }




}

const jobdesc = document.getElementById("jobdesc");
const benefits = document.getElementById("benefits");
const reqs = document.getElementById("req");


function setText(num){
    if(num ==1){
        jobdesc.innerHTML = "1Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium excepturi non, sunt nulla et quisquam repellat sint saepe perspiciatis aut aspernatur hic ea quibusdam at ad, dolorem laborum rerum porro!";
        benefits.innerHTML = "1Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium excepturi non, sunt nulla et quisquam repellat sint saepe perspiciatis aut aspernatur hic ea quibusdam at ad, dolorem laborum rerum porro!";
        reqs.innerHTML = "1Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium excepturi non, sunt nulla et quisquam repellat sint saepe perspiciatis aut aspernatur hic ea quibusdam at ad, dolorem laborum rerum porro!";

    }else if(num==2){
        jobdesc.innerHTML = "2Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium excepturi non, sunt nulla et quisquam repellat sint saepe perspiciatis aut aspernatur hic ea quibusdam at ad, dolorem laborum rerum porro!";
        benefits.innerHTML = "2Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium excepturi non, sunt nulla et quisquam repellat sint saepe perspiciatis aut aspernatur hic ea quibusdam at ad, dolorem laborum rerum porro!";
        reqs.innerHTML = "2Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium excepturi non, sunt nulla et quisquam repellat sint saepe perspiciatis aut aspernatur hic ea quibusdam at ad, dolorem laborum rerum porro!";

    }else if(num==3){
        jobdesc.innerHTML = "3Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium excepturi non, sunt nulla et quisquam repellat sint saepe perspiciatis aut aspernatur hic ea quibusdam at ad, dolorem laborum rerum porro!";
        benefits.innerHTML = "3Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium excepturi non, sunt nulla et quisquam repellat sint saepe perspiciatis aut aspernatur hic ea quibusdam at ad, dolorem laborum rerum porro!";
        reqs.innerHTML = "3Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium excepturi non, sunt nulla et quisquam repellat sint saepe perspiciatis aut aspernatur hic ea quibusdam at ad, dolorem laborum rerum porro!";

    }
}


function b1click(){
    currNum = 1;
    
}

function b2click(){
    currNum = 2;
}

function b3click(){
    currNum = 3;
}


