let wbath = document.querySelector("#wbath")
let wbathback = document.querySelector("#wbathback")
let onoffbtn = document.querySelector("#onoffbtn")
let plusbtn = document.querySelector("#plusbtn")
let minusbtn = document.querySelector("#minusbtn")
let temptext = document.querySelector("#temptext")
let temptext1 = document.querySelector("#temptext1")
let tempscreen = document.querySelector("#tempscreen")

let beakerdiv = document.querySelector("#beakerdiv")
let beakersol = document.querySelector("#beakersol")


let bath = "off"


function onoffnew1(){
    console.log(f)
    if(f==7 && bath=="off"){
        f=8
        tempscreen.style.opacity="100%"
        onoffbtn.style.backgroundImage = "radial-gradient(rgb(255, 215, 15),rgb(255, 122, 6))"
        ins.innerText="Set temperature at 49 degree celcius by pressing '+' , '-' buttons then press NEXT button."
    }
    else if(f==8 && bath=="off"){
        f=7
        tempscreen.style.opacity="0%"
        onoffbtn.style.backgroundImage = "radial-gradient(rgb(226, 226, 226),rgb(135, 124, 124))"
        ins.innerText="Turn on the water-Bath by clicking on ON/OFF button."
    }
}


function plusnew1(){
    if(f==8){
        bath="on"
        startbutton.style.visibility="visible"
        if(parseInt(temptext1.innerText)<=100 && (parseInt(temptext1.innerText))>=0){
            if((parseInt(temptext1.innerText))<9){
                temptext1.innerText="0"+ (parseInt(temptext1.innerText)+1)
            }
            else{
                temptext1.innerText= parseInt(temptext1.innerText)+1
            } 
        }
    }
}


function minusnew1(){
    if(f==8){
        bath="on"
        if(parseInt(temptext1.innerText)<=100 && (parseInt(temptext1.innerText))>0){
            if((parseInt(temptext1.innerText))<10){
                temptext1.innerText="0"+ (parseInt(temptext1.innerText)-1)
            }
            else{
                temptext1.innerText= parseInt(temptext1.innerText)-1
            } 
        }
    }
}



function gaintemp(){
    if((parseInt(temptext.innerText))!=(parseInt(temptext1.innerText))){
        if((parseInt(temptext.innerText))<9){
                temptext.innerText="0"+ (parseInt(temptext.innerText)+1)
        }
        else{
            temptext.innerText=(parseInt(temptext.innerText)+1)
        }
        setTimeout(function(){
            gaintemp()
        },300)
    }
    else{
        ins.innerText="Water Bath is heated as required. Click on beaker to place it in water bath to melt ice-cream. "
        setTimeout(function(){
            f=10
        },500)
    }
}




function beaker1(){
    if(f==10){
        f=11
        beakerdiv.style.top="10%"
        samp1.style.top="31%"
        samp2.style.top="30%"
        samp3.style.top="34%"
        samp4.style.top="31%"
        samp5.style.top="31%"
        samp6.style.top="33.7%"
        samp7.style.top="33%"
        samp8.style.top="33%"

        setTimeout(function(){
            beakerdiv.style.left="18%"
            samp1.style.left="21.8%"
            samp2.style.left="20%"
            samp3.style.left="22%"
            samp4.style.left="24%"
            samp5.style.left="26%"
            samp6.style.left="24%"
            samp7.style.left="26.5%"
            samp8.style.left="20%"

            setTimeout(function(){
                beakerdiv.style.top="40%"
                samp1.style.top="61%"
                samp2.style.top="60%"
                samp3.style.top="64%"
                samp4.style.top="61%"
                samp5.style.top="61%"
                samp6.style.top="63.7%"
                samp7.style.top="63%"
                samp8.style.top="63%"

                setTimeout(function(){
                    ins.innerText="Wait! ice-cream is melting."
                    samp1.style.visibility="hidden"
                    samp2.style.visibility="hidden"
                    samp3.style.visibility="hidden"
                    samp4.style.visibility="hidden"
                    samp5.style.visibility="hidden"
                    samp6.style.visibility="hidden"
                    samp7.style.visibility="hidden"
                    samp8.style.visibility="hidden"
                    beakersol.style.visibility="visible"
                    beakersol.style.opacity="100%"
                    setTimeout(function(){
                        ins.innerText="Ice-cream is melted now! Click on beaker to put it back from water bath."
                        f=12

                    },5000)
                },1000)
            },1000)
        },1000)
    }
    else if(f==12){
        f=13
        beakerdiv.style.top="10%"
        setTimeout(function(){
            beakerdiv.style.left=""
            setTimeout(function(){
                beakerdiv.style.top=""
                setTimeout(function(){
                    startbutton.style.visibility="visible"
                    ins.innerText="Press NEXT button."
                    f=14
                },1000)
            },1000)
        },1000)
    }
    else if(f==18){
        f=19
        beakerdiv.style.top="30%"
        setTimeout(function(){
            beakerdiv.style.left="68%"
            setTimeout(function(){
                beakerdiv.style.rotate="-30deg"
                setTimeout(function(){
                    beakerdiv.style.transitionDuration="4s"
                    beakersol.style.transitionDuration="4s"
                    beakerdiv.style.rotate="-90deg"
                    beakerdiv.style.top="12%"
                    beakerdiv.style.left="67%"
                    beakersol.style.height="0%"
                    beakersol.style.bottom="5%"
                    msol.style.transitionDuration="4s"
                    msol.style.height="17%"
                    setTimeout(function(){
                        beakerdiv.style.transitionDuration="1s"
                        beakersol.style.transitionDuration="1s"
                        beakerdiv.style.rotate=""
                        beakerdiv.style.left="70%"
                        beakerdiv.style.top="30%"
                        setTimeout(function(){
                            beakerdiv.style.left=""
                            beakerdiv.style.top=""
                            setTimeout(function(){
                                f=20
                                ins.innerText="Click on distilled water bottle to measure 10ml of water and pour inside beaker."
                            },1000)
                        },1000)
                    },4500)
                },1000)

            },1000)
        },1000)
    }
    else if(f==24){
        f=25
        beakerdiv.style.top="30%"
        setTimeout(function(){
            beakerdiv.style.left="68%"
            setTimeout(function(){
                beakerdiv.style.rotate="-30deg"
                setTimeout(function(){
                    beakerdiv.style.transitionDuration="4s"
                    beakersol.style.transitionDuration="4s"
                    beakerdiv.style.rotate="-90deg"
                    beakerdiv.style.top="12%"
                    beakerdiv.style.left="67%"
                    beakersol.style.height="0%"
                    beakersol.style.bottom="5%"
                    msol.style.transitionDuration="4s"
                    msol.style.height="20%"
                    setTimeout(function(){
                        beakerdiv.style.transitionDuration="1s"
                        beakersol.style.transitionDuration="1s"
                        beakerdiv.style.rotate=""
                        beakerdiv.style.left="70%"
                        beakerdiv.style.top="30%"
                        setTimeout(function(){
                            beakerdiv.style.left=""
                            beakerdiv.style.top=""
                            trial="second"
                            setTimeout(function(){
                                f=20
                                ins.innerText="Again click on distilled water bottle to measure 10ml of water and pour inside beaker."
                            },1000)
                        },1000)
                    },4500)
                },1000)

            },1000)
        },1000)

    }
    else if(f==28){
        f=29
        beakerdiv.style.top="30%"
        setTimeout(function(){
            beakerdiv.style.left="68%"
            setTimeout(function(){
                beakerdiv.style.rotate="-30deg"
                setTimeout(function(){
                    beakerdiv.style.transitionDuration="4s"
                    beakersol.style.transitionDuration="4s"
                    beakerdiv.style.rotate="-90deg"
                    beakerdiv.style.top="12%"
                    beakerdiv.style.left="67%"
                    beakersol.style.height="0%"
                    beakersol.style.bottom="5%"
                    msol.style.transitionDuration="4s"
                    msol.style.height="24%"
                    setTimeout(function(){
                        beakerdiv.style.transitionDuration="1s"
                        beakersol.style.transitionDuration="1s"
                        beakerdiv.style.rotate=""
                        beakerdiv.style.left="70%"
                        beakerdiv.style.top="30%"
                        setTimeout(function(){
                            beakerdiv.style.left=""
                            beakerdiv.style.top=""
                            setTimeout(function(){
                                f=30
                                // ins.innerText="Note down the volume shown in 250ml measuring cylinder! 'The volume is 75ml' ."
                                ins.innerText="Click on funnel to remove it from measuring cylinder and put it back"
                            },1000)
                        },1000)
                    },4500)
                },1000)

            },1000)
        },1000)
    }
}