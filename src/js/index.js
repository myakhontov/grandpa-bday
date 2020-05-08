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


    //call all inner functions
    start()
} 
//start web func
website()