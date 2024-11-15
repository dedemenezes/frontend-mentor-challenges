const dice = document.getElementById('dice')
const advice = document.getElementById('advice')
const adviceId = document.getElementById('advice-id')

const fetchAdvice = () => {
  console.log("CLICK!");

  fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then((data) => {
      if (data.slip) {
        advice.innerText = `"${data.slip.advice}"`
        adviceId.innerText = data.slip.id
      }
      // {"slip": { "id": 130, "advice": "If you have grandparents or parents - Talk to them more. Ask them about their life experiences."}}
    })
}

dice.addEventListener('click', fetchAdvice)
