const btn = document.querySelectorAll('.btn')


btn.forEach(btn => {
    btn.addEventListener('click', function () {
        console.log('btn chala')
        const questionDiv = btn.closest('#questionDiv')
        const answerDiv = questionDiv.querySelector('.answer')
        if (answerDiv.style.display === 'none') {
            answerDiv.style.display = 'flex'
            btn.innerHTML = '<i class="fa-solid fa-minus"></i>'
            console.log(btn)
        } else {
            answerDiv.style.display === 'none'
            btn.innerHTML = '<i class="fa-regular fa-square-plus"></i>'


        }
    })
})