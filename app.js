async function main() {
  let string = "";
  let numbers = document.getElementById("numbers");

  for (let i = 0; i < 100; ++i) {
    let data = await fetch(
      `https://www.omdbapi.com/?apikey=da79f3d4&s=fast&page=${[i]}`
    );
    let dataResults = await data.json();

    if (dataResults.Response === "True") {
      string += `<a href="https://www.omdbapi.com/?apikey=da79f3d4&s=fast&page=${[
        i,
      ]}">${i}</a>`;
      numbers.innerHTML =string
    }
  }
}

main();
