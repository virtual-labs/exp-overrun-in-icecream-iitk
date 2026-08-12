let mcyldiv = document.querySelector("#mcyldiv")
let msol = document.querySelector("#msol")
let mcyldiv1 = document.querySelector("#mcyldiv1")
let msol1 = document.querySelector("#msol1")
let diswaterdiv = document.querySelector("#diswaterdiv")
let diswatersol = document.querySelector("#diswatersol")
let funnel = document.querySelector("#funnel")
let fsol = document.querySelector("#fsol")


let trial = "first"



function funnel1(){
    if(f==16){
        f=17
        funnel.style.top="10%"
        funnel.style.rotate="0deg"
        setTimeout(function(){
            funnel.style.left="59%"
            setTimeout(function(){
                funnel.style.top="36%"
                setTimeout(function(){
                    f=18
                    ins.innerText="Click on beaker to pour melted ice-cream into the measuring cylinder."
                },1000)
            },1000)
        },1000)
    }
    else if(f==30){
        f=31
        funnel.style.top="10%"
        setTimeout(function(){
            funnel.style.left="40%"
            setTimeout(function(){
                funnel.style.top=""
                funnel.style.rotate=""
                setTimeout(function(){
                    startbutton.innerText="Calculation"
                    startbutton.style.visibility="visible"
                    ins.innerText="Note down the volume shown in 250ml measuring cylinder! 'The volume is 75ml' ,then click on Calculation button ."
                    f=32
                },1000)
            },1000)
        },1000)
    }
}


function diswater1(){
    if(f==20){
        f=21
        diswaterdiv.style.top="30%"
        fsol.style.transitionDuration="0.2"
        msol1.style.transitionDuration=""
        setTimeout(function(){
            diswaterdiv.style.left="13.5%"
            diswaterdiv.style.rotate="20deg"
            fsol.style.left=""
            fsol.style.top=""
            setTimeout(function(){
                diswatersol.style.height="72%"
                if(trial=="second"){
                    diswatersol.style.height="70%"
                }
                fsol.style.height="29%"
                setTimeout(function(){
                    fsol.style.transitionDuration="1S"
                    fsol.style.height="7.4%"
                    msol1.style.height="93.3%"
                    setTimeout(function(){
                        fsol.style.transitionDuration="0.2S"
                        fsol.style.top="67.4%"
                        fsol.style.height="0%"
                        diswaterdiv.style.left="7%"
                        diswaterdiv.style.rotate=""
                        setTimeout(function(){
                            diswaterdiv.style.top=""
                            setTimeout(function(){
                                f=22
                                ins.innerText="Click on 10ml measuring cylinder to pour it into flask."
                                if(trial=="second"){
                                    f=26
                                }
                                // mcyl11()
                            },1000)
                        },1000)
                    },1000)
                },200)
            },1000)
        },1000)
    }
}


function mcyl11(){
    if(f==22){
        f=23
        mcyldiv1.style.top="10%"
        setTimeout(function(){
            mcyldiv1.style.left="75%"
            fsol.style.left="80.3%"
            fsol.style.top="12%"
            setTimeout(function(){
                mcyldiv1.style.rotate="20deg"
                fsol.style.transitionDuration="0.2s"
                setTimeout(function(){
                    fsol.style.height="79%"
                    msol1.style.transitionDuration="2s"
                    beakersol.src="images/beaker - 250ml-sol-1.png"
                    setTimeout(function(){
                        beakersol.style.bottom="0.5%"
                        beakersol.style.transitionDuration="1s"
                        beakersol.style.height="12%"
                        beakersol.style.width="81.5%"
                    },200)
                    msol1.style.height="0%"
                    setTimeout(function(){
                        mcyldiv1.style.rotate=""
                        fsol.style.height="0%"
                        fsol.style.top="93%"
                        
                        setTimeout(function(){
                            mcyldiv1.style.left="25%"
                            setTimeout(function(){
                                mcyldiv1.style.top=""
                                // fsol.style.transitionDuration="0s"
                                setTimeout(function(){
                                    ins.innerText="Click on beaker to pour the mixture into measuring cylinder by funnel."
                                    f=24
                                },1000)
                            },1000)
                        },1000)
                    },2000)
                },1000)
            },1000)
        },1000)
    }
    else if(f==26){
        f=27
        mcyldiv1.style.top="10%"
        fsol.style.left="80.3%"
        fsol.style.top="12%"
        setTimeout(function(){
            mcyldiv1.style.left="75%"
            setTimeout(function(){
                mcyldiv1.style.rotate="20deg"
                fsol.style.transitionDuration="0.2s"
                setTimeout(function(){
                    fsol.style.height="79%"
                    msol1.style.transitionDuration="2s"
                    beakersol.src="images/beaker - 250ml-sol-1.png"
                    setTimeout(function(){
                        beakersol.style.bottom="0.5%"
                        beakersol.style.transitionDuration="1s"
                        beakersol.style.height="12%"
                        beakersol.style.width="81.5%"
                    },200)
                    msol1.style.height="0%"
                    setTimeout(function(){
                        mcyldiv1.style.rotate=""
                        fsol.style.height="0%"
                        fsol.style.top="93%"
                        
                        setTimeout(function(){
                            mcyldiv1.style.left="25%"
                            setTimeout(function(){
                                mcyldiv1.style.top=""
                                setTimeout(function(){
                                    ins.innerText="Again click on beaker to pour the mixture into measuring cylinder by funnel."
                                    f=28
                                },1000)
                            },1000)
                        },1000)
                    },2000)
                },1000)
            },1000)
        },1000)
    }
}




