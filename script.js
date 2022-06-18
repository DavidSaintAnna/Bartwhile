const $repeat = document.querySelector('[data-action="repeat"]');
const $delete = document.querySelector('[data-action="delete"]');
const $resultContainer = document.querySelector(".result-container");

const MAX_REPEAT_TIMES = 11;

const repeatPhrase = () => {
  const phrasesAlreadyOnPage = $resultContainer.children.length;
  const selectedText = document.querySelector('input[type="radio"]:checked')
    ?.parentElement.innerText;

  if (!selectedText) return alert("Please select a phrase to repeat");

  const selectedQuantity = +document.querySelector("select").value;

  const availableQuantity = MAX_REPEAT_TIMES - phrasesAlreadyOnPage;
  const isOverMax = selectedQuantity > availableQuantity;
  const quantityToRepeat = isOverMax ? availableQuantity : selectedQuantity;

  if (quantityToRepeat === 0)
    return alert("You have reached the maximum number of phrases");

  for (let i = 0; i < quantityToRepeat; i++) {
    const $phrase = document.createElement("li");
    $phrase.innerText = selectedText;
    setTimeout(() => {
      $resultContainer.appendChild($phrase);
    }, i * 200);
  }
};

$repeat.addEventListener("click", repeatPhrase);

const deletePhrase = () => ($resultContainer.innerHTML = "");
$delete.addEventListener("click", deletePhrase);
