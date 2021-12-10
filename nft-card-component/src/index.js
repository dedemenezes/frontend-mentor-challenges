const changeColor = (targets, value) => {
  targets.forEach((element) => {
    element.style.color = `hsl(${178 + value}, 100%, 50%)`
  })
  return 178 + value
}

const stopChangingColor = (targets, value) => {
  targets.forEach((target) => {
    target.style.color = `hsl(${value}, 100%, 50%)`
  })
}

const initColorChange = () => {
  const targets = document.querySelectorAll('.contacts')
  const startDiv = document.getElementById('start-color')
  let i = 1
  let lastValue = 0
  let changeColorInterval = {}

  startDiv.addEventListener('mouseenter', (event) => {
    changeColorInterval = setInterval(() => {
      lastValue = changeColor(targets, i);
      i++
    }, 18)
  })
  startDiv.addEventListener('mouseleave', (event) => {
    console.log(lastValue)
    clearInterval(changeColorInterval);
    stopChangingColor(targets, lastValue)
  });
}

initColorChange()
