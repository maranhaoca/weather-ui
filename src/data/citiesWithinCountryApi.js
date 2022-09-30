import { ExpandOutlined } from "@mui/icons-material";

function citiesWithinCountry (country) {
    var headers = new Headers();
    headers.append("X-CSCAPI-KEY", "API_KEY");

    var requestOptions = {
        method: 'GET',
        headers: headers,
        redirect: 'follow'
    };

    const loadCitiesWithinCountry = async () => {
        return await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=London&appid=6f70800cfc6e6b5ebadbdea80161e820`)
            .then(response => response.text())
            //.then(result => console.log(result))
            .catch(error => console.log('error', error));
    }

    return loadCitiesWithinCountry()    
}

export default citiesWithinCountry
