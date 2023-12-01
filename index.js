const aside = document.querySelector('aside')
const controls = document.querySelector('.game-controls')

document
.getElementById('expand-aside')
.addEventListener('click', () => {
    aside.classList.add('expand')
    document.querySelectorAll('details').forEach(detail => detail.open = true)
})

document
.getElementById('collapse-aside')
.addEventListener('click', () => aside.classList.remove('expand'))

document
.getElementById('expand-wiki')
.addEventListener('click', () => document.querySelectorAll('details').forEach(detail => detail.open = true))

document
.getElementById('collapse-wiki')
.addEventListener('click', () => document.querySelectorAll('details').forEach(detail => detail.open = false))

const expand = () => {
}

const collapse = () => {

}

document
.getElementById('toggle-controls')
.addEventListener('click', () => {

})