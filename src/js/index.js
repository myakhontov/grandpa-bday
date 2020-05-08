const website = ()=> {

    const start = ()=> {
        const present = document.querySelector('.present')
        const birthdayMessage = document.querySelector('.birthday')

        present.addEventListener('click', ()=>{
            birthdayMessage.classList.add('birthday-pop')
        })
    }


    //call all inner functions
    start()
} 
//start web func
website()