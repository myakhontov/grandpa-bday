const website = ()=> {

    const start = ()=> {
        const present = document.querySelector('.present')
        const birthdayMessage = document.querySelector('.birthday')
        const presentCap = document.querySelector('.present-cap')
        const arrow = document.querySelector('.arrow')

        present.addEventListener('click', ()=>{
            birthdayMessage.classList.add('birthday-pop')
            presentCap.classList.add('present-open')
            arrow.classList.add('fadeIn')
        })
    }
    const slides = ()=>{
        const title = document.querySelector('.title')
        const leftSlides = document.querySelectorAll('.left')
        const leftArr = Array.from(leftSlides)
        const rightSlides = document.querySelectorAll('.right')
        const rightArr = Array.from(rightSlides)
        console.log(rightArr)


        title.addEventListener('click', ()=>{
            leftArr.forEach((slide)=> slide.classList.add('slide'))
            rightArr.forEach((slide)=> slide.classList.add('slide'))
        } )
    }


    //call all inner functions
    start()
    slides()
} 
//start web func
website()