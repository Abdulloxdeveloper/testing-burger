const product = {
    plainBurger: {
        name: 'GAMBURGER',
        price: 10000,
        amount: 0,
        kcall: 200,
        get Summ() {
            return this.price * this.amount
        },
        get Kcall() {
            return this.kcall * this.amount
        }
    },
    freshBurger: {
        name: 'GAMBURGER FRESH',
        price: 20500,
        amount: 0,
        kcall: 300,
        get Summ() {
            return this.price * this.amount
        },
        get Kcall() {
            return this.kcall * this.amount
        }
    },
    freshCombo: {
        name: 'FRESH COMBO',
        price: 31900,
        amount: 0,
        kcall: 350,
        get Summ() {
            return this.price * this.amount
        },
        get Kcall() {
            return this.kcall * this.amount
        }
    },
}

const plusOrMinus = document.querySelectorAll('.main__product-btn')
for (let i = 0; i < plusOrMinus.length; i++) {
    plusOrMinus[i].addEventListener('click', function () {
        plusMinus(this)
    })
}

function plusMinus(element) {
    let mainProduct = element.closest('.main__product')
    let id = mainProduct.getAttribute('id')
    let productNum = mainProduct.querySelector('.main__product-num')
    let productPrice = mainProduct.querySelector('.main__product-price span')
    let productkcall = mainProduct.querySelector('.main__product-kcall span')
    let pOm = element.getAttribute('data-symbol')

    if (pOm === '+' && product[id].amount < 10) {
        product[id].amount++
        product[id].Summ
        product[id].Kcall
    } else if (pOm === '-' && product[id].amount > 0) {
        product[id].amount--
        product[id].Summ
        product[id].Kcall
    }

    productNum.innerHTML = product[id].amount
    productPrice.innerHTML = product[id].Summ
    productkcall.innerHTML = product[id].Kcall

}

const loading = document.querySelector('.header__timer-extra')
let speed = 50
let i = 0
let interval;

function count() {
    switch (i) {
        case 101:
            return clearTimeout(interval)
        case 95:
            speed = 250;
            break;
        case 85:
            speed = 200;
            break;
        case 70:
            speed = 150;
            break;
        case 60:
            speed = 100;
            break;
        case 50:
            speed = 70;
            break;
    }
    loading.innerHTML = i
    i++
    interval = setTimeout(() => count(), speed);
}
count()

const mainProduct = document.querySelectorAll('.main__product-info')
const view = document.querySelector('.view')
const closeBtn = document.querySelector('.view__close')
mainProduct.forEach(el => {
    el.addEventListener('dblclick', function (e) {
        view.classList.add('active')
        let img = this.querySelector('img').getAttribute('src')
        view.querySelector('img').src = img
    })
})

closeBtn.addEventListener('click', function (e) {
    view.classList.remove('active')
})

const addCart = document.querySelector('.addCart')
const receipt = document.querySelector('.receipt')
const receiptWindow = document.querySelector('.receipt__window')
const receiptBtn = document.querySelector('.receipt__window-btn')
const receiptOut = document.querySelector('.receipt__window-out')

let arrProduct = []
let productName = ''
let productSumm = productKcall = 0

addCart.addEventListener('click', function (e) {

    for (const item in product) {
        const products = product[item]
        if (products.amount > 0) {
            arrProduct.push(products)
        }
    }
    arrProduct.forEach(el => {
        productName += `\n${el.name}\n`
        productSumm+=el.Summ
        productKcall+=el.Kcall
    })

    receiptOut.innerHTML = `Purchased: \n${productName}\nCalories: ${productKcall}\nTotal summ: ${productSumm}`

    receipt.style.display = 'flex'
    receiptWindow.style.top = 0
    setTimeout(() => {
        receipt.style.opacity = 1
    }, 500);
})

receiptBtn.addEventListener('click', function (e) {
    location.reload()
})