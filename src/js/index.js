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
        const leftSlides = document.querySelectorAll('.left-trait')
        const leftArr = Array.from(leftSlides)
        const rightSlides = document.querySelectorAll('.right-trait')
        const rightArr = Array.from(rightSlides)
        
        const scrFuncLeftOne = ()=>{
            const y = window.scrollY
            const distToTop = leftArr[0].getBoundingClientRect().top
            if (y >= distToTop){
                leftArr[0].classList.add('left-slide')
            }else{
                leftArr[0].classList.remove('left-slide')
            }
        }
        const scrFuncLeftTwo = ()=>{
            const y = window.scrollY
            const distToTop = leftArr[1].getBoundingClientRect().top
            if (y >= distToTop){
                leftArr[1].classList.add('left-slide')
            }else{
                leftArr[1].classList.remove('left-slide')
            }
        }
        const scrFuncRightOne = ()=>{
            const y = window.scrollY
            const distToTop = rightArr[0].getBoundingClientRect().top
            if (y >= distToTop){
                rightArr[0].classList.add('right-slide')
            }else{
                rightArr[0].classList.remove('right-slide')
            }
        }
        const scrFuncRightTwo = ()=>{
            const y = window.scrollY
            const distToTop = rightArr[1].getBoundingClientRect().top
            if (y >= distToTop){
                rightArr[1].classList.add('right-slide')
            }else{
                rightArr[1].classList.remove('right-slide')
            }
        }

        window.addEventListener('scroll', scrFuncLeftOne)
        window.addEventListener('scroll', scrFuncLeftTwo)
        window.addEventListener('scroll', scrFuncRightOne)
        window.addEventListener('scroll', scrFuncRightTwo)
    }
    

    //call all inner functions
    start()
    slides()
} 
//start web func
website()
//const x = document.querySelector('.slides')
//console.log(x.offsetTop)