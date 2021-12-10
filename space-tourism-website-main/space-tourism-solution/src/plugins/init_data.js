const initData = () => {
  const filePath = 'lib/data.json';
  const request = new XMLHttpRequest();
  request.open('GET', filePath);
  request.responseType = 'json';
  request.send();
  request.onload = () => {
    const superHeroes = request.response;
    console.log(superHeroes);
  };
};

export default initData;
