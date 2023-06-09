const answerItems = document.querySelectorAll(".answers__item");

const array = [];

const block = document.getElementById("1");
const block2 = document.getElementById("2");
const block3 = document.getElementById("3");
const block4 = document.getElementById("4");
const block5 = document.getElementById("5");

function replaceObject(newObject) {
  const number = newObject.number;
  const index = array.findIndex((obj) => obj.number === number);

  if (index !== -1) {
    array[index] = newObject;
  } else {
    array.push(newObject);
  }
}

answerItems.forEach(function (item) {
  const nextButton = document.getElementById("nextButton");

  array.pop();
  let value = "";

  nextButton.classList.add("disabled");
  nextButton.disabled = true;

  item.addEventListener("click", function () {
    const previousSelectedItem = document.querySelector(".answers__item.focus");

    if (previousSelectedItem) {
      previousSelectedItem.classList.remove("focus");
    }

    item.classList.add("focus");
    value = item.textContent;

    nextButton.disabled = false;
    nextButton.classList.remove("disabled");

    nextButton.addEventListener("click", function (e) {
      e.preventDefault();

      let newStr = value.trim();
      const obj = { number: 1, value: newStr };

      replaceObject(obj);

      block.style.display = "none";
      block2.style.display = "block";
    });
  });
});

const answerItems2 = document.querySelectorAll("#answers-2 .answers__item");

answerItems2.forEach(function (item) {
  const nextButton = document.getElementById("nextButton2");
  const prevButton = document.getElementById("prevButton2");

  let value = "";

  nextButton.classList.add("disabled");
  nextButton.disabled = true;

  item.addEventListener("click", function () {
    const previousSelectedItem = document.querySelector(".answers__item.focus");
    if (previousSelectedItem) {
      previousSelectedItem.classList.remove("focus");
    }

    item.classList.add("focus");

    value = item.textContent;

    nextButton.disabled = false;
    nextButton.classList.remove("disabled");

    nextButton.addEventListener("click", function (e) {
      e.preventDefault();

      let newStr = value.trim();
      const obj = { number: 2, value: newStr };

      replaceObject(obj);

      block2.style.display = "none";
      block3.style.display = "block";
    });
  });

  prevButton.addEventListener("click", function (e) {
    e.preventDefault();
    const nextButton = document.getElementById("nextButton");
    const previousSelectedItem = document.querySelector(".answers__item.focus");

    if (previousSelectedItem) {
      previousSelectedItem.classList.remove("focus");
    }

    if (array.length >= 1) {
      array.pop();
    }

    block2.style.display = "none";
    block.style.display = "block";

    nextButton.classList.add("disabled");
    nextButton.disabled = true;
  });
});

const answerItems3 = document.querySelectorAll("#answers-3 .answers__item");

answerItems3.forEach(function (item) {
  const nextButton = document.getElementById("nextButton3");
  const prevButton = document.getElementById("prevButton3");
  let value = "";

  nextButton.classList.add("disabled");
  nextButton.disabled = true;

  item.addEventListener("click", function () {
    const previousSelectedItem = document.querySelector(".answers__item.focus");
    if (previousSelectedItem) {
      previousSelectedItem.classList.remove("focus");
    }

    item.classList.add("focus");

    value = item.textContent;

    nextButton.disabled = false;
    nextButton.classList.remove("disabled");

    nextButton.addEventListener("click", function (e) {
      e.preventDefault();

      let newStr = value.trim();
      const obj = { number: 3, value: newStr };

      replaceObject(obj);

      block3.style.display = "none";
      block4.style.display = "block";
    });
  });
  prevButton.addEventListener("click", function (e) {
    e.preventDefault();

    const nextButton = document.getElementById("nextButton2");
    const previousSelectedItem = document.querySelector(".answers__item.focus");
    if (previousSelectedItem) {
      previousSelectedItem.classList.remove("focus");
    }

    if (array.length >= 2) {
      array.pop();
    }

    block3.style.display = "none";
    block2.style.display = "block";

    nextButton.classList.add("disabled");
    nextButton.disabled = true;
  });
});

const answerItems4 = document.querySelectorAll("#answers-4 .answers__item");

answerItems4.forEach(function (item) {
  const nextButton = document.getElementById("nextButton4");
  const prevButton = document.getElementById("prevButton4");
  let value = "";

  nextButton.disabled = true;
  nextButton.classList.add("disabled");

  item.addEventListener("click", function () {
    const previousSelectedItem = document.querySelector(".answers__item.focus");

    if (previousSelectedItem) {
      previousSelectedItem.classList.remove("focus");
    }

    item.classList.add("focus");

    value = item.textContent;

    nextButton.disabled = false;
    nextButton.classList.remove("disabled");

    nextButton.addEventListener("click", function (e) {
      e.preventDefault();

      let newStr = value.trim();
      const obj = { number: 4, value: newStr };

      replaceObject(obj);

      console.log(array);
      block4.style.display = "none";
      block5.style.display = "block";
    });
  });

  prevButton.addEventListener("click", function (e) {
    e.preventDefault();

    const nextButton = document.getElementById("nextButton3");
    const previousSelectedItem = document.querySelector(".answers__item.focus");
    if (previousSelectedItem) {
      previousSelectedItem.classList.remove("focus");
    }

    block4.style.display = "none";
    block3.style.display = "block";

    nextButton.classList.add("disabled");
    nextButton.disabled = true;
  });
});

function submitFormAndRedirect() {
  addEventListener("submit", function (e) {
    e.preventDefault();

    const formValues = {};

    const formElements = document.getElementById("myForm").elements;

    for (let i = 0; i < formElements.length; i++) {
      const element = formElements[i];

      if (element.name && element.value) {
        formValues[element.name] = element.value;
      }
    }

    const newFormValues = { ...formValues, polit: true, age: true, number: 5 };
    replaceObject(newFormValues);

    console.log(array);

    window.location.replace("../page/myPage.html");
  });
}
