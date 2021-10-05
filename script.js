/* nav */

const toggle = document.getElementById('toggle')
const nav = document.getElementById('nav')

toggle.addEventListener('click', () => nav.classList.toggle('active'))

/* sticky nav */

const sticky = document.getElementById('sticky')
window.addEventListener('scroll', fixNav)

function fixNav() {
    if(window.scrollY > nav.offsetHeight + 450) {
        sticky.classList.add('active-nav')
    } else {
        sticky.classList.remove('active-nav')
    }
}

/* scroll */

const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)


function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4.5

    boxes.forEach((box) => {
        const boxTop = box.getBoundingClientRect().top
        
        if (boxTop < triggerBottom) {
            box.classList.add('show')
        }/* else {
            box.classList.remove('show')
        }*/
    })
}

/* moving text */

const textArea = document.getElementById('movingText')
const text = 'Growing!'

let idx = 1

writeText()

function writeText() {
    textArea.innerText = text.slice(0, idx)
    idx++

    if(idx > text.length) {
        idx = text.length
    }

    setTimeout(writeText, 300)
}

/* gallery-reasons */

const panels = document.querySelectorAll('.panels');

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}