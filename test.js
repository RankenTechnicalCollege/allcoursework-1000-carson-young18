const apiKey = "8222dd8393ed41969cc978be1b236d73";
const base = "https://www.bungie.net/Platform";

const guardianLookup = () => {
  const data = {
    'displayName': document.getElementById('summoner').value,
    'displayNameCode': document.getElementById('tagline').value
  }
  const path = "/Destiny2/SearchDestinyPlayerByBungieName/-1/";
  const requestOptions ={
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      'X-API-Key': apiKey
    },
    body: data
  }

  fetch(base + path, requestOptions)
    .then(data => {console.log(data);})
};