let apiURL = "https://apps.runescape.com/runemetrics/profile/profile?user="
const user = window.prompt("Enter username")

apiURL = apiURL + user + "&activities=20"

const requestOptions = {
  method: "GET",
  headers: {
    'Origin': "apps.runescape.com"
  }
}




fetch(apiURL, requestOptions)
  .then(data => {console.log(data);})