let on = document.querySelector("#on")
let tare = document.querySelector("#tare")
let reading = document.querySelector("#reading")
let spatula = document.querySelector("#spatula")
let machine = document.querySelector("#machine")
let beaker = document.querySelector("#beaker")
let cap = document.querySelector("#icecap")
let bottle = document.querySelector("#icebottle")


let samp1 = document.querySelector("#samp1")
let samp2 = document.querySelector("#samp2")
let samp3 = document.querySelector("#samp3")
let samp4 = document.querySelector("#samp4")
let samp5 = document.querySelector("#samp5")
let samp6 = document.querySelector("#samp6")
let samp7 = document.querySelector("#samp7")
let samp8 = document.querySelector("#samp8")

let sampleselector = samp1
let sampleft="78.8%"
let samptop="84%"







// function on1(){
//     if(f==1){
//         f=2
//         reading.style.opacity="100%"
//         ins.innerText="Click on beaker to place it on wheighing scale."
//     }

// }


// function tare1(){
//     if(f==4){
//         f=5
//         reading.innerText="00.00"
//         ins.innerText="Click on cap of FROZEN ICE-CREAM's box."
//     }
// }

// function beaker1(){
//     if(f==2){
//         f=3
//         beaker.style.top="25%"
//         setTimeout(function(){
//             beaker.style.left="5%"
//             setTimeout(function(){
//                 beaker.style.top="45%"
//                 setTimeout(function(){
//                     reading.innerText="52.00"
//                     setTimeout(function(){
//                         ins.innerText="Press TARE button."
//                         f=4
//                     },500)

//                 },1000)
//             },1000)
//         },1000)
//     }
// }


function cap1(){
    if(f==1){
        f=2
        cap.style.top="50%"
        setTimeout(function(){
            cap.style.left="55%"
            setTimeout(function(){
                cap.style.top="88%"
                setTimeout(function(){
                    ins.innerText="Click on Spatula to empty the ice-cream box into beaker. "
                    f=3
                },1000)
            },1000)
        },1000)
    }
}

function spatula1(){
    if(f==3){
        f=4
        spatula.style.top="30%"
        spatula.style.rotate="0deg"
        setTimeout(function(){
            spatula.style.left="42%"
            setTimeout(function(){
                spatula.style.top="52%"
                spatula.style.rotate="-20deg"
                spatula.style.left="38%"
                setTimeout(function(){
                    spatula.style.top="30%"
                    spatula.style.rotate="0deg"
                    spatula.style.left="42%"
                    sampleselector.style.top="43%"
                    sampleselector.style.rotate="-30deg"
                    sampleselector.style.left="42%"
                    setTimeout(function(){
                        spatula.style.left="80%"
                        sampleselector.style.left="80%"
                        setTimeout(function(){
                            spatula.style.rotate="-20deg"
                            spatula.style.left="79%"
                            spatula.style.top="29%"
                            sampleselector.style.top=samptop
                            sampleselector.style.rotate="0deg"
                            sampleselector.style.left=sampleft
                            sampleselector.style.scale="1.8"

                            setTimeout(function(){
                                if(sampleselector!=samp8){
                                    f=3       //  settings to be changed to f=3 to perform operation to empty ice-cream box
                                    spatula1()
                                       sampleverify()
                                }
                                else{
                                    spatula.style.left=""
                                    setTimeout(function(){
                                        spatula.style.top=""
                                        spatula.style.rotate=""
                                        ins.innerText="Ice-Cream box is empty now ! Press NEXT button"
                                        f=5
                                        startbutton.innerText="NEXT"
                                        setTimeout(function(){
                                            startbutton.style.visibility="visible"
                                        },2000)
                                    },1000)
                                }
                            },1000)

                        },1000)
                    },1000)
                },1500)
            },1000)
        },1000)
    }
}


function sampleverify(){
    if(sampleselector==samp1){
        sampleselector=samp2
        sampleft="77%"
        samptop="83%"

    }
    else if(sampleselector==samp2){
        sampleselector=samp3
        sampleft="79%"
        samptop="87%"

    }
    else if(sampleselector==samp3){
        sampleselector=samp4
        sampleft="81%"
        samptop="84%"

    }
    else if(sampleselector==samp4){
        sampleselector=samp5
        sampleft="83%"
        samptop="84%"

    }
    else if(sampleselector==samp5){
        sampleselector=samp6
        sampleft="81%"
        samptop="86.7%"

    }
    else if(sampleselector==samp6){
        sampleselector=samp7
        sampleft="83.5%"
        samptop="86%"

    }
    else if(sampleselector==samp7){
        sampleselector=samp8
        sampleft="77%"
        samptop="86%"

    }
}