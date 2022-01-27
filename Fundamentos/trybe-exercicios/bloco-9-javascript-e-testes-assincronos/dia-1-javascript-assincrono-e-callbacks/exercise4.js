const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

// crie a função sendMarsTemperature abaixo
function sendMarsTemperature(param, callback) {
  const retornoGetMars = callback();
  return setTimeout(() => console.log(`Mars temperature is: ${retornoGetMars} degree Celsius`), param());
}

sendMarsTemperature(messageDelay, getMarsTemperature); // imprime "Mars temperature is: 20 degree Celsius", por exemplo