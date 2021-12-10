const changeColor = () => {
  let i = 1
  setInterval(() => {
    const reachMe = document.getElementById('contacts')
    reachMe.style.color = hsl(178 + i, 100 %, 50 %);
    i++
  }, 250)
}

export default changeColor
