const verseDisplay = document.getElementById('verse');
const generateBtn = document.getElementById('generate');
const loadingScreen = document.getElementById('loading');

const getRandomVerse = async () => {
  try {
    loadingScreen.style.display = 'block'; // show loading screen
    verseDisplay.style.display = 'none';

    const response = await fetch('https://labs.bible.org/api/?passage=random&type=json');
    const data = await response.json();
    verseDisplay.textContent = `${data[0].text} - ${data[0].bookname} ${data[0].chapter}:${data[0].verse}`;

    const body = document.querySelector('body');
    const backgroundImageResponse = await fetch('https://picsum.photos/3840/2160');
    const backgroundImageUrl = backgroundImageResponse.url;
    body.style.backgroundImage = `url(${backgroundImageUrl})`;

  } catch (error) {
    console.error(error);
  } finally {
    loadingScreen.style.display = 'none'; // hide loading screen
    verseDisplay.style.display = 'block';

  }
};

generateBtn.addEventListener('click', getRandomVerse);