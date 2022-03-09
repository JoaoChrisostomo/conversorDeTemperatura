function celsiusFahrenheit() {
  const celsiusFahrenheit = parseFloat(document.getElementById("valor"));
  const converterCelsiusParaFahrenheit = celsiusFahrenheit * 1.8 + 32;
  const elementoValorConvertidoCelsiusParaFahrenheit = document.getElementById(
    "valorConvertidoCelsiusParaFahrenheit"
  );
  const valorConvertidoCelsiusParaFahrenheit =
    "A temperatura em Fahrenheit é " + converterCelsiusParaFahrenheit;
  elementoValorConvertidoCelsiusParaFahrenheit.innerHTML = valorConvertidoCelsiusParaFahrenheit;
}

function celsiusKelvin() {
  const celsiusKelvin = parseFloat(document.getElementById("valor").value);
  const converterCelsiusParaKelvin = celsiusKelvin + 273.15;
  const elementoValorConvertidoCelsiusParaKelvin = document.getElementById(
    "valorConvertidoCelsiusParaKelvin"
  );
  const valorConvertidoCelsiusParaKelvin =
    "A temperatura em Kelvin é " + converterCelsiusParaKelvin;
  elementoValorConvertidoCelsiusParaKelvin.innerHTML = valorConvertidoCelsiusParaKelvin;
}

function fahrenheitKelvin() {
  const fahrenheitKelvin = parseFloat(document.getElementById("valor").value);
  const converterFahrenheitParaCelsius = (fahrenheitKelvin - 32) / 1.8;
  const converterFahrenheitParaKelvin = converterFahrenheitParaCelsius + 273.15;
  const converterFahrenheitParaKelvinFixado = converterFahrenheitParaKelvin.toFixed(
    1
  );
  const elementoValorConvertidoFahrenheitParaKelvin = document.getElementById(
    "valorConvertidoFahrenheitParaKelvin"
  );
  const valorConvertidoFahrenheitParaKelvin =
    "A temperatura em Kelvin é " + converterFahrenheitParaKelvinFixado;
  elementoValorConvertidoFahrenheitParaKelvin.innerHTML = valorConvertidoFahrenheitParaKelvin;
}

const btnTheme = document.getElementById("btn");
const body = document.querySelector("body");

btnTheme.addEventListener("click", () => {
  body.classList.toggle("dark-theme");
});
