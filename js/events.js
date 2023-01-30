import {
    buttonPlay,
    buttonStop,
    buttonIncrement,
    buttonDecrement,
    buttonForest,
    buttonRain,
    buttonCoffeShop,
    buttonFirePlace,
} from "./elements.js"

export function Events({
    timer,
    sounds
}){

    buttonPlay.addEventListener('click', function(){
        timer.countDown()
        sounds.pressButton()
    })
    
    buttonStop.addEventListener('click' , function(){
        timer.reset()
        sounds.resetSounds()
        sounds.pressButton()
    })
    
    buttonIncrement.addEventListener('click', function(){
        timer.incrementMinutes()
        sounds.pressButton()
    })
    
    buttonDecrement.addEventListener('click', function(){
        timer.decrementMinutes()
        sounds.pressButton()
    })
    
    buttonForest.addEventListener('click', function(){
        sounds.soundForest.play()
        sounds.soundCoffeShop.pause()
        sounds.soundRain.pause()
        sounds.soundFirePlace.pause()

        sounds.pressButton()
    
        buttonForest.classList.add('select')
        buttonRain.classList.remove('select')
        buttonCoffeShop.classList.remove('select')
        buttonFirePlace.classList.remove('select')
    })
    
    buttonRain.addEventListener('click', function(){
        sounds.soundRain.play()
        sounds.soundForest.pause()
        sounds.soundCoffeShop.pause()
        sounds.soundFirePlace.pause()

        sounds.pressButton()
    
        buttonRain.classList.add('select')
        buttonForest.classList.remove('select')
        buttonCoffeShop.classList.remove('select')
        buttonFirePlace.classList.remove('select')
    })
    
    buttonCoffeShop.addEventListener('click', function(){
        sounds.soundCoffeShop.play()
        sounds.soundRain.pause()
        sounds.soundForest.pause()
        sounds.soundFirePlace.pause()

        sounds.pressButton()
    
        buttonCoffeShop.classList.add('select')
        buttonRain.classList.remove('select')
        buttonForest.classList.remove('select')
        buttonFirePlace.classList.remove('select')
    })
    
    buttonFirePlace.addEventListener('click', function(){
        sounds.soundFirePlace.play()
        sounds.soundCoffeShop.pause()
        sounds.soundRain.pause()
        sounds.soundForest.pause()

        sounds.pressButton()
    
        buttonFirePlace.classList.add('select')
        buttonCoffeShop.classList.remove('select')
        buttonRain.classList.remove('select')
        buttonForest.classList.remove('select')
    })

}

