// Находим все элементы с вариантами ответа
const answerItems = document.querySelectorAll(".answers__item");

const array = [];

const block = document.getElementById("1");
const block2 = document.getElementById("2");
const block3 = document.getElementById("3");
const block4 = document.getElementById("4");
const block5 = document.getElementById("5");

// Добавляем обработчик события при клике на вариант ответа
answerItems.forEach(function (item) {
  const nextButton = document.getElementById("nextButton");
  array.pop();
  let value = "";

  nextButton.classList.add("disabled");
  nextButton.disabled = true;

  item.addEventListener("click", function () {
    value = item.textContent;

    nextButton.disabled = false;
    nextButton.classList.remove("disabled");
    nextButton.addEventListener("click", function (e) {
      e.preventDefault();

      array.push(value);

      block.style.display = "none";
      block2.style.display = "block";
    });
  });
});

// Находим все элементы с вариантами ответа для второго вопроса
const answerItems2 = document.querySelectorAll("#answers-2 .answers__item");

// Добавляем обработчик события при клике на вариант ответа для второго вопроса
answerItems2.forEach(function (item) {
  const nextButton = document.getElementById("nextButton2");
  const prevButton = document.getElementById("prevButton2");
  let value = "";

  nextButton.classList.add("disabled");
  nextButton.disabled = true;

  item.addEventListener("click", function () {
    // Активируем кнопку
    value = item.textContent;

    nextButton.disabled = false;
    nextButton.classList.remove("disabled");

    nextButton.addEventListener("click", function (e) {
      e.preventDefault();

      array.push(value);

      block2.style.display = "none";
      block3.style.display = "block";
    });
  });

  prevButton.addEventListener("click", function (e) {
    e.preventDefault();
    const nextButton = document.getElementById("nextButton");

    if (array.length >= 1) {
      array.pop();
      console.table(array);
    }

    block2.style.display = "none";
    block.style.display = "block";

    nextButton.classList.add("disabled");
    nextButton.disabled = true;
  });
});

const answerItems3 = document.querySelectorAll("#answers-3 .answers__item");

// Добавляем обработчик события при клике на вариант ответа для второго вопроса
answerItems3.forEach(function (item) {
  const nextButton = document.getElementById("nextButton3");
  const prevButton = document.getElementById("prevButton3");
  let value = "";

  nextButton.classList.add("disabled");
  nextButton.disabled = true;
  item.addEventListener("click", function () {
    // Активируем кнопку
    value = item.textContent;

    nextButton.disabled = false;
    nextButton.classList.remove("disabled");

    nextButton.addEventListener("click", function (e) {
      e.preventDefault();

      array.push(value);

      block3.style.display = "none";
      block4.style.display = "block";
    });

    prevButton.addEventListener("click", function (e) {
      e.preventDefault();
      const nextButton = document.getElementById("nextButton2");

      if (array.length >= 2) {
        array.pop();
        console.table(array);
      }

      block3.style.display = "none";
      block2.style.display = "block";

      nextButton.classList.add("disabled");
      nextButton.disabled = true;
    });
  });
});

const answerItems4 = document.querySelectorAll("#answers-4 .answers__item");

// Добавляем обработчик события при клике на вариант ответа для второго вопроса
answerItems4.forEach(function (item) {
  const nextButton = document.getElementById("nextButton4");
  const prevButton = document.getElementById("prevButton4");
  let value = "";

  nextButton.disabled = true;
  nextButton.classList.add("disabled");

  item.addEventListener("click", function () {
    // Активируем кнопку
    value = item.textContent;

    nextButton.disabled = false;
    nextButton.classList.remove("disabled");

    nextButton.addEventListener("click", function (e) {
      e.preventDefault();

      array.push(value);

      block4.style.display = "none";
      block5.style.display = "block";
    });
  });

  prevButton.addEventListener("click", function (e) {
    e.preventDefault();

    const nextButton = document.getElementById("nextButton3");

    block4.style.display = "none";
    block3.style.display = "block";

    nextButton.classList.add("disabled");
    nextButton.disabled = true;
  });
});

console.log(array);
