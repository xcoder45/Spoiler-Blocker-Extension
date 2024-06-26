const spoilers = ["YourFavoriteShow", "KeyPlotPoint", "AnotherCharacterName"];

function replaceSpoilers(node) {
  spoilers.forEach(spoiler => {
    const regex = new RegExp(spoiler, 'gi');
    node.innerHTML = node.innerHTML.replace(regex, '<img src="images\png-transparent-cat-animal-lovely-cat.png" alt="Cat Picture">');
  });
}

function walk(node) {
  let child, next;

  switch (node.nodeType) {
    case 1:  // Element
    case 9:  // Document
    case 11: // Document fragment
      child = node.firstChild;
      while (child) {
        next = child.nextSibling;
        walk(child);
        child = next;
      }
      break;

    case 3: // Text node
      replaceSpoilers(node);
      break;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  walk(document.body);
});
