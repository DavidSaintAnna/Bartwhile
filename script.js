const phraseSelect = document.querySelector(".phrase-select");
const repeatSelect = document.querySelector(".repeat-select");
const btn = document.querySelector(".btn");
const deleteButton = document.querySelector(".dlt-btn");
const result = document.querySelector(".result");
const maxQuantity = 11;

function executePhrase() {
  const phraseValue = phraseSelect.value;
  const phraseTimes = repeatSelect.value;
  const option = phraseSelect.querySelector(`[value = "${phraseValue}"]`);
  const phraseText = option.innerText;

  const quantityOnPage = result.childElementCount;
  const availableQuantity = maxQuantity - quantityOnPage;
  const canAdd = phraseTimes > availableQuantity;
  const quantityToRepeat = canAdd ? availableQuantity : phraseTimes;

  for (let counter = 0; counter < quantityToRepeat; counter++) {
    const phraseElement = document.createElement("li");
    phraseElement.innerText = phraseText;
    result.appendChild(phraseElement);
  }
}
function deletePhrase() {
  let count = document.querySelector(".counter");
  result.children[0].remove();
  let number = parseInt(count.textContent) || 0;
  count.innerText = number + 1;
}

btn.addEventListener("click", executePhrase);

deleteButton.addEventListener("click", deletePhrase);
