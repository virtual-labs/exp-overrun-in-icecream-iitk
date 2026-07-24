let last = document.querySelector("#last")
let formula = document.querySelector("#formula")
let ftext = document.querySelector("#ftext")
let resulter = document.querySelector("#resulter")
let resultbtn = document.querySelector("#resultbtn")
let checkbtn = document.querySelector("#checkbtn")
let overrun = document.querySelector("#qverrun")
let overruninput = document.querySelector("#overruninput")
let overrunresult = document.querySelector("#overrunresult")




let fstatus = "hidden"


function fhider(){
    if(fstatus=="hidden"){
        formula.style.height="25%"
        fstatus="visible"
        ftext.innerText="Click me to hide formula"
    }
    else if(fstatus=="visible"){
        formula.style.height="0%"
        ftext.innerText="Click me to show formula"
        fstatus="hidden"
    }
}


function checker(){
    if(overruninput.value==81.8){
        resulter.style.color="green"
        resulter.innerText="Right answer"
        resulter.style.visibility="visible"
        resultbtn.style.visibility="hidden"
        overrunresult.innerText="81.8"
    }
    else{
        resulter.style.color="red"
        resulter.innerText="Wrong answer"
        resulter.style.visibility="visible"
        resultbtn.style.visibility="visible"
        overrunresult.innerText=""
    }
}


function result(){
    overrunresult.innerText="81.8"
}

