// import { Name, WeatherLocation } from './modules/NameAndWeather';
import * as NameAndWeatherLocation from './modules/NameAndWeather'
import { Name as OtherName } from './modules/DuplicateName';
import { TempConverter } from './modules/tempConverter';

let name = new NameAndWeatherLocation.Name('William', 'Kolean');
let location = new NameAndWeatherLocation.WeatherLocation('raining', 'Tokyo');
let other = new OtherName();

let cTemp = TempConverter.convertFtoC('38');

let tuple: [string, string, string];
tuple = ['Tokyo', 'raining', TempConverter.convertFtoC('38')];

console.log(name.nameMessage);
console.log(location.weatherMessage);
console.log(other.message);
console.log(`The temp is ${cTemp}C`);
console.log(`It is ${tuple[2]} degress C and ${tuple[1]} in ${tuple[0]}`);

let cities: { [index: string]: [string, string] } = {};
cities['London'] = ['raining', TempConverter.convertFtoC('38')];
cities['Paris'] = ['sunny', TempConverter.convertFtoC('52')];
cities['Berlin'] = ['snowing', TempConverter.convertFtoC('23')];

for (let key in cities) {
  console.log(`${key}: ${cities[key][0]}, ${cities[key][1]}`);
}
