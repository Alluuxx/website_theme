// content.js
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === 'applyTheme') {
    console.log('Applying theme:', request.theme);

    var theme = request.theme;
    var fontColor = request.fontColor || 'black'; // Oletusfonttiväri on musta
    var style = document.createElement('style');
    style.textContent = getThemeStyles(theme, fontColor);
    document.head.appendChild(style);

    console.log('Theme applied successfully.');
  }
});

function getThemeStyles(theme, fontColor) {

  var bodyBackgroundColor, bodyColor, headingColor, linkColor, navbarBackgroundColor, navbarColor;

  // Teemat
  switch (theme) {
    case 'black':
      bodyBackgroundColor = '#000';
      bodyColor = '#fff';
      headingColor = '#ddd';
      linkColor = '#17a2b8';
      navbarBackgroundColor = '#343a40';
      navbarColor = '#fff';
      break;
    case 'gray':
      bodyBackgroundColor = '#808080';
      bodyColor = '#000';
      headingColor = '#555';
      linkColor = '#007BFF';
      navbarBackgroundColor = '#f8f9fa';
      navbarColor = '#333';
      break;
    case 'white':
      bodyBackgroundColor = '#fff';
      bodyColor = '#333';
      headingColor = '#555';
      linkColor = '#007BFF';
      navbarBackgroundColor = '#f8f9fa';
      navbarColor = '#333';
      break;
    case 'blue':
      bodyBackgroundColor = '#4682B4';
      bodyColor = '#000';
      headingColor = '#fff';
      linkColor = '#87CEEB';
      navbarBackgroundColor = '#4169E1';
      navbarColor = '#fff';
      break;
    case 'green':
      bodyBackgroundColor = '#008000';
      bodyColor = '#fff';
      headingColor = '#008000';
      linkColor = '#32CD32';
      navbarBackgroundColor = '#008000';
      navbarColor = '#fff';
      break;
    default:
      // Oletusteema 
      bodyBackgroundColor = '#fff';
      bodyColor = '#333';
      headingColor = '#555';
      linkColor = '#007BFF';
      navbarBackgroundColor = '#f8f9fa';
      navbarColor = '#333';
  }

  // Valitse fonttiväri, käyttäjän valinnan mukaan
  switch (fontColor) {
    case 'black':
      bodyColor = '#000';
      headingColor = '#000';
      linkColor = '#000';
      navbarColor = '#000';
      break;
    case 'white':
      bodyColor = '#fff';
      headingColor = '#fff';
      linkColor = '#fff';
      navbarColor = '#fff';
      break;
    case 'red':
      headingColor = '#ff0000';
      break;
    case 'yellow':
      linkColor = '#FFFF00';
      break;
    case 'green':
      headingColor = '#008000';
      linkColor = '#008000';
      navbarColor = '#fff';
      break;
    default:

      break;
  }

  return (
    'body {' +
    '  background-color: ' + bodyBackgroundColor + ';' +
    '  color: ' + bodyColor + ';' +
    '}' +
    'h1, h2, h3 {' +
    '  color: ' + headingColor + ';' +
    '}' +
    'a {' +
    '  color: ' + linkColor + ';' +
    '}' +
    '.navbar {' +
    '  background-color: ' + navbarBackgroundColor + ';' +
    '  color: ' + navbarColor + ';' +
    '}' +
    'div, section, article {' +
    '  background-color: ' + bodyBackgroundColor + ';' +
    '  color: ' + bodyColor + ';' +
    '}' +
    'header {' +
    '  background-color: ' + navbarBackgroundColor + ';' +
    '  color: ' + navbarColor + ';' +
    '}' +
    'footer {' +
    '  background-color: ' + bodyBackgroundColor + ';' +
    '  color: ' + bodyColor + ';' +
    '}' +
    'nav {' +
    '  background-color: ' + navbarBackgroundColor + ';' +
    '  color: ' + navbarColor + ';' +
    '}' +
    'p {' +
    '  background-color: ' + bodyBackgroundColor + ';' +
    '  color: ' + bodyColor + ';' +
    '}' +
    '/* Muita? */'
  );
}