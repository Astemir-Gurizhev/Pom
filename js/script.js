let time = 1500; // время в секундах, которое нужно отсчитать
let interval; // переменная для хранения setInterval()

function startTimer() {
  interval = setInterval(() => {
    // получаем элементы DOM для отображения таймера
    const minutes = document.getElementById("minutes");
    const seconds = document.getElementById("seconds");

    // проверяем, закончилось ли время
    if (time <= 0) {
      clearInterval(interval);
      // выполняем действия после того, как время закончилось
      alert("Время вышло!");
    } else {
      // вычисляем минуты и секунды
      let minutesCount = Math.floor(time / 60);
      let secondsCount = time % 60;

      // добавляем ведущий ноль, если нужно
      minutes.innerHTML = minutesCount < 10 ? "0" + minutesCount : minutesCount;
      seconds.innerHTML = secondsCount < 10 ? "0" + secondsCount : secondsCount;

      // уменьшаем время на одну секунду
      time--;
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(interval);
}