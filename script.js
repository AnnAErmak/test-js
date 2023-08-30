const  block = document.getElementById('actionBlock')

block.addEventListener('click', (e) =>{

    if (e.target.tagName === 'INPUT'){
        e.preventDefault()

        if(e.target.classList.contains('btn-open')){
            e.target.classList.remove('btn-open')
            e.target.value = '+'
        }else{
            toggleClass ()
            e.target.classList.add('btn-open')
            e.target.value = e.target.dataset.btnText
        }

    }else{
        toggleClass ()
    }
})

function toggleClass (){
    const openInput = document.querySelector('.btn-open')
    if(openInput !==null){
        openInput.classList.toggle('btn-open')
        openInput.value= "+"
    }
}