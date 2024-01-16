const API_URL = `https://api.thecatapi.com/v1/`;
const GetAPI_Url = 'https://api.thecatapi.com/v1/images/search?limit=10'

const API_KEY =
  "live_L6gVZiuMbBTEAnxt04msUgyPTUO0M9xl0Fh0fbSTuohi1TpcvAguudh4Ud8JX2Vr";

const fetchAllCats = () => {
  fetch(GetAPI_Url, {
    headers: {
      "x-api-key": API_KEY,
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      // console.log(data); //array of objects
      // const AdoraImages = data.map((cat) => cat.url)
      // console.log(AdoraImages)
      data.map(function(image) {
        
      image = document.createElement('Img')
      image.src = `${data.url}`
      })
      
    });

};

fetchAllCats();
