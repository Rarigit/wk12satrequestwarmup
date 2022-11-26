function getBrewery(){
    axios.request({
        url : "https://api.openbrewerydb.org/breweries/random",
        method: "GET"
    }).then(gbSuccess).catch(gbFailure);
}

function getCrypto(){
    axios.request({
        url : "https://api2.binance.com/api/v3/ticker/24hr",
        method: "GET"
    }).then(cryptoSuccess).catch(cryptoFailure);
}

function cryptoSuccess(response){
    let rates = response.data;
    for (rate of rates){
        resultContainer.insertAdjacentHTML(`beforeend`, `<p>${rate.symbol}: $${rate.lastPrice}</p>`);
    }
}

function clearResults(){
    resultContainer.innerHTML = "";
}


function cryptoFailure(error){
    resultContainer.innerHTML = `<h2>ERROR</h2>`;
    console.log(error);
}

function gbSuccess(response){
    let brewery = response.data[0];
    resultContainer.innerHTML = `<h3>${brewery.name}</h3>`;
    resultContainer.innerHTML = `<h5>${brewery.street}</h5>`;
}

function gbFailure(error){
    resultContainer.innerHTML = `<h2>ERROR</h2>`;
    console.log(error);
}

const resultContainer = document.getElementById(`results`);
document.getElementById(`getBrewery`).addEventListener(`click`, getBrewery);
document.getElementById(`getToken`).addEventListener(`click`, getCrypto);
document.getElementById(`clearResult`).addEventListener(`click`, clearResults);