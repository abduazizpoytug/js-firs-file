let btn = document.querySelector('.btn')
var refresh = document.querySelector('.default')
const all = document.querySelector('.df')

btn.addEventListener('click', function () {
    document.body.style.backgroundColor = 'black'
    btn.style.display = 'none'    
    refresh.style.paddingLeft = '70px'
    refresh.style.paddingRight = '70px'
    refresh.style.paddingTop = '20px'
    refresh.style.paddingBottom = '20px'
    refresh.style.justifyContent = 'center'
    refresh.style.borderRadius = '20px'
    refresh.style.display = ''
})
refresh.addEventListener('click', function () {
    document.body.style.backgroundColor = 'white'
    btn.style.display = '' 
    refresh.style.padding = ''
    refresh.style.border = '1px solid black '
    btn.style.border = '1px solid black '
    refresh.style.borderRadius = '2px'
    btn.style.borderRadius = '0px'
    refresh.style.display = 'none'
})
