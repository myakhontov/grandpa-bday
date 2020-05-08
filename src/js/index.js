const website = ()=> {

    const start = ()=> {
        const present = document.querySelector('.present')
        const birthdayMessage = document.querySelector('.birthday')
        const presentCap = document.querySelector('.present-cap')

        present.addEventListener('click', ()=>{
            birthdayMessage.classList.add('birthday-pop')
            presentCap.classList.add('present-open')
        })
    }


    //call all inner functions
    start()
} 
//start web func
website()