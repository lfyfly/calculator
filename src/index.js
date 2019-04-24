{

  const expressionTextareaEl = document.querySelector('.calulator .expression-textarea')
  const inputButtonEls = document.querySelectorAll('.calulator .input-button')
  const calculateButtonEl = document.querySelector('.calulator .calculate-button')
  const clearButtonEl = document.querySelector('.calulator .clear-button')
  const deleteButtonEl = document.querySelector('.calulator .delete-button')
  const calcu = new Calculator({
    onChange: function () {
      expressionTextareaEl.value = calcu.expression
    }
  })
  calcu.bindKeyEvent(expressionTextareaEl)
  inputButtonEls.forEach(el => {
    el.addEventListener('click', function (e) {
      calcu.input(e.target.textContent)
    })
  })
  calculateButtonEl.addEventListener('click', function () {
    calcu.calculate()
  })
  clearButtonEl.addEventListener('click', function () {
    calcu.clear()
  })
  deleteButtonEl.addEventListener('click', function () {
    calcu.delete()
  })
}