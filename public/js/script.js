let balance = 0;
let currency = "руб"




// СРАВНЕНИЕ ЦЕН ТОВАРОВ

function frostedWater() {
  if (balance >= 50) {
    balance = balance - 50
    alert('Куплено')
    main()
  } else {
    alert('У вас не достаточно денег. \n Пожалуйста пополните свой баланс и попробуйте снова')
    main()
  }

}

function stillWater() {
  if (balance >= 45) {
    balance = balance - 45
    alert('Куплено')
    main()
  } else {
    alert('У вас не достаточно денег. \n Пожалуйста пополните свой баланс и попробуйте снова')
    main()
  }
}

function metro() {
  if (balance >= 70) {
    balance = balance - 70
    alert('Куплено')
    main()
  } else {
    alert('У вас не достаточно денег. \n Пожалуйста пополните свой баланс и попробуйте снова')
    main()
  }
}

function energetics() {
  if (balance >= 65) {
    balance = balance - 65
    alert('Куплено')
    main()
  } else {
    alert('У вас не достаточно денег. \n Пожалуйста пополните свой баланс и попробуйте снова')
    main()
  }


}

function twiks() {
  if (balance >= 30) {
    balance = balance - 30
    alert('Куплено')
    main()
  } else {
    alert('У вас не достаточно денег. \n Пожалуйста пополните свой баланс и попробуйте снова')
    main()
  }
}

function smallSnickers() {
  if (balance >= 24) {
    balance = balance - 24
    alert('Куплено')
    main()
  } else {
    alert('У вас не достаточно денег. \n Пожалуйста пополните свой баланс и попробуйте снова')
    main()
  }
}

function bigSnickers() {
  if (balance >= 30) {
    balance = balance - 30
    alert('Куплено')
    main()
  } else {
    alert('У вас не достаточно денег. \n Пожалуйста пополните свой баланс и попробуйте снова')
    main()
  }
}

function gum() {
  if (balance >= 12) {
    balance = balance - 12
    alert('Куплено')
    main()
  } else {
    alert('У вас не достаточно денег. \n Пожалуйста пополните свой баланс и попробуйте снова')
    main()
  }
}

function mmdance() {
  if (balance >= 25) {
    balance = balance - 25
    alert('Куплено')
    main()
  } else {
    alert('У вас не достаточно денег. \n Пожалуйста пополните свой баланс и попробуйте снова')
    main()
  }
}

function marmalade() {
  if (balance >= 32) {
    balance = balance - 32
    alert('Куплено')
    main()
  } else {
    alert('У вас не достаточно денег. \n Пожалуйста пополните свой баланс и попробуйте снова')
    main()
  }
}

function errProd() {

}


// ПРОВЕРКА ПАРОЛЯ АДМИНА  178234

function admin() {
  const addProd = +prompt('1. Добавить товары \n 2. Добавить монеты \n 3. Показать принятые банкнты \n 4. Вернуться в главное меню')

  if (addProd == 1 || addProd == 2 || addProd == 3) {
    alert('Этот раздел пока не закончен')
    admin()
  } else if (addProd == 4) {
    main()
  }
}


// КАТЕГОРИИ МЕНЮ

function main() {
  const menu = +prompt(` 1. Вставить банкноту \n 2. Выбрать товар  \n 3. Показать доступные товары  \n 4. Получить сдачу \n Текущий баланс: ${balance} ${currency}`, "1")
  switch (menu) {
    case 0:
      main()
      break;
    case 1:
      chooseCash()
      break;
    case 2:
      chooseProd()
      break;
    case 3:
      availableProd()
      break;
    case 4:
      exchange()
      break;
    case 178234:
      admin()
  }

}

main()


// ПОПОЛНЕНИЕ БАЛАНСА

function chooseCash() {

  let newCash = +prompt(`Введите купюру номиналом  50${currency},  100${currency},  200${currency},  500${currency}.`)

  if (Number.isNaN(newCash)) {
    alert('Ошибка: Введена строка')
    chooseCash()
  } else if (!newCash) {
    alert('Ошибка: Вы не ввели купюру')
    main()
  } else if (newCash === 50 || newCash === 100 || newCash === 200 || newCash === 500) {
    balance += newCash
    alert("Баланс пополнен")
    main()
  }  else {
    alert(`Ошибка: ТА принимает купюру номиналом: \n  50${currency},  100${currency},  200${currency},  500${currency}`)
    chooseCash()
  }

}



// ВЫБОР ТОВАРА

function chooseProd() {
  let productAction = +prompt(` 1. Frosted water \n   Цена - 50 ${currency} \n\n 2. Still water \n   Цена - 45 ${currency} \n\n 3. Metro \n   Цена - 70 ${currency} \n\n 4. Energetics \n   Цена - 65 ${currency} \n\n 5. Twiks \n   Цена - 30 ${currency} \n\n 6. Small Snickers \n   Цена - 24 ${currency} \n\n 7. Big Snickers \n   Цена - 30 ${currency} \n\n 8. Gum \n   Цена - 12 ${currency} \n\n 9. M&Ms \n   Цена - 25 ${currency} \n\n 10. Marmalade \n   Цена - 32 ${currency} \n Текущий баланс:  ${balance} ${currency}`, 1)

  if (Number.isNaN(productAction)) {
    alert('Ошибка: АТ не принимает строковое значение')
    chooseProd()
  } else if (!productAction) {
    alert('Ошибка: Вы не выброли товар')
    main()
  }

  switch (productAction) {
    case 1:
      frostedWater()
      break
    case 2:
      stillWater()
      break
    case 3:
      metro()
      break
    case 4:
      energetics()
      break
    case 5:
      twiks()
      break
    case 6:
      smallSnickers()
      break
    case 7:
      bigSnickers()
      break
    case 8:
      gum()
      break
    case 9:
      mmdance()
      break
    case 10:
      marmalade()
      break
    case 0:
      main()
    
  }
}


// ДОСТУПНЫЕ ТОВАРЫ

function availableProd() {

  if (balance >= 50 ) {
    alert(` 1. Frosted water \n   Цена - 50 ${currency} \n\n 2. Metro \n   Цена - 70 ${currency} \n\n 3. Energetics \n   Цена - 65 ${currency} `)
    main()
  } else if (balance <= 50) {
    alert(` 1. Still water \n   Цена - 45 ${currency} \n\n 2. Twiks \n   Цена - 30 ${currency} \n\n 3. Small Snickers \n   Цена - 24 ${currency} \n\n 4. Big Snickers \n   Цена - 30 ${currency} \n\n 5. Gum \n   Цена - 12 ${currency} \n\n 6. M&Ms \n   Цена - 25 ${currency} \n\n 7. Marmalade \n   Цена - 32 ${currency} `)
    main()
  } 
}

function exchange() {

}