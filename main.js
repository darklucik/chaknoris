let jokeBtn = document.getElementById('joke')

jokeBtn.addEventListener('click', ChuckJoke)



async function ChuckJoke() {
    try {
      const url = "https://api.chucknorris.io/jokes/random";
      const response = await fetch(url);
      const data = await response.json();
      const joke = data.value;
      console.log(joke);
    } catch (error) {
      console.log("Ошибка:", error);
    }
  }
  
  ChuckJoke();