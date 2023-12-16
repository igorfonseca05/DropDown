
const button = document.querySelector('.icon')
const containerItem = document.querySelector('.back')

const internalHightLiContainer = () => {
    const lis = [...document.querySelector('.back').children]
    const internalSizeLi = lis[0].offsetHeight
    const totalAmountLis = lis.length
    const heightLiContainer = totalAmountLis * internalSizeLi

    return heightLiContainer
}

const createAnimation = (inicialSize, finalSize) => {

    const keyFrame = [
        { height: `${inicialSize}px` },
        { height: `${finalSize}px` },
    ]

    const configAnimation = {
        duration: 200,
        fill: 'forwards'
    }

    containerItem.animate(keyFrame, configAnimation)
}

const addRotateToButtom = () => {
    button.classList.add('rotateIcon')
}
const removeRotateToButtom = () => {
    button.classList.remove('rotateIcon')
}

const addEventsOnDropDown = () => {

    if (button.classList.contains('rotateIcon')) {
        removeRotateToButtom()
        createAnimation(0, internalHightLiContainer())

    } else {

        createAnimation(internalHightLiContainer(), 0)
        addRotateToButtom()
    }
}

const closeDropAndRotateIcon = () => {
    createAnimation(internalHightLiContainer(), 0)
    addRotateToButtom()
}

const showNameSelectedItem = (e) => {
    const container = document.querySelector(".textContainer")
    const internalTextLi = e.target.textContent
    container.textContent = internalTextLi

    closeDropAndRotateIcon()   
}

button.addEventListener('click', addEventsOnDropDown)
containerItem.addEventListener('click', (e) => showNameSelectedItem(e))

