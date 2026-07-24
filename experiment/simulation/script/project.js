
let startbutton = document.querySelector("#start")
let ins = document.querySelector("#text")
let stp1 = document.querySelector("#stp1")
let stp2 = document.querySelector("#stp2")
let stp3 = document.querySelector("#stp3")
let lastbg = document.querySelector("#lastbg")
let inference = document.querySelector("#inference")



let statuses = 0
let f=0



function start(){
    if(statuses==0){
        statuses=1
        startbutton.style.visibility="hidden"
        ins.innerText="Click on cap of FROZEN ICE-CREAM's box."
        f=1
    }
    else if(f==5){
        f=6
        startbutton.style.visibility="hidden"
        spatula.style.left="-50%"
        cap.style.left="-50%"
        bottle.style.left="-50%"
        setTimeout(function(){
            wbath.style.left="5%"
            wbathback.style.left="5%"
            setTimeout(function(){
                ins.innerText="Turn on the water-Bath by clicking on ON/OFF button."
                f=7
            },500)
        },1000)
    }
    else if(f==8){
        if(parseInt(temptext1.innerText)==49){
            f=9
            ins.innerText="Please wait water bath is pre-heating !!!"
            startbutton.style.visibility="hidden"
            gaintemp()
        }
        else{
            ins.innerText="Temperature is not 49 degree celcius. Please set correct temperature then press Next button."
        }

    }
    else if(f==14){
        f=15
        startbutton.style.visibility="hidden"
        wbath.style.left="-50%"
        wbathback.style.left="-50%"
        setTimeout(function(){
            mcyldiv.style.left="60%"
            funnel.style.left="40%"
            mcyldiv1.style.left="25%"
            diswaterdiv.style.left="7%"
            setTimeout(function(){
                f=16
                ins.innerText="Click on funnel to place it on 250ml measuring cylinder."
            },1000)
        },1000)
    }
    else if(f==32){
        f=33
        startbutton.style.visibility="hidden"
        last.style.top="0%"
        setTimeout(function(){
            ins.innerText="By using formula calculate the Overrun and verify your answer."
        },1000)
    }
        


}



start()

