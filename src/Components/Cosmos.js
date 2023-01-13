import {useEffect, useState} from "react";
import {faker} from '@faker-js/faker';

export default function Cosmos(props) {
    const [planetNum, setPlanetNum] = useState(props.planetNum);
    const [planetArray, setPlanetArray] = useState([]);
    const [planetGif, setPlanetGif] = useState([
        'planet1',
        'planet2',
        'planet3',
        'planet4',
        'planet5',
        'planet6',
        'planet7',
        'planet8',
        'planet9',
        'planet10',
        'planet11',
        'planet12',
        'planet13',
        'planet14',
        'star1',
        'star2',
        'asteroid1',
        'asteroid2',
        'asteroid3',
        'blackhole1',
        'blackhole2',
        'galaxy1',
        'galaxy2',
    ]);

    const randomPlanetsBaseOnNum = (num) => {
        let currentPlanetArray = [];
        for (let i = 0; i < num; i++) {
            const screenWidth = window.innerWidth;
            const screenHeight = window.innerHeight;
            let percent = Math.floor(Math.random() * (10 - 2) + 2);
            let planetSize = screenWidth * (percent / 100);
            let planetPosition_x = Math.floor(Math.random() * (screenWidth - 2 * planetSize) + planetSize);
            let planetPosition_y = Math.floor(Math.random() * (screenHeight - 2 * planetSize));
            let rotate = Math.floor(Math.random() * 360);
            let gif = 'assets/planets/' + planetGif[Math.floor(Math.random() * planetGif.length)] + '.gif';
            // This is just some trick to random planet fake data
            let planetDistanceFromEarth = Math.random() * planetSize * 100 + " km";
            let planetName = faker.name.firstName() + '_' + faker.random.alphaNumeric(5);
            let planetMass = faker.random.numeric(30) + " kg";
            let planetGravity = faker.random.numeric(3) / 100 + " m/s^2";
            let planetTemperature = faker.random.numeric(3) + " C";
            let planetAtmosphere = faker.random.numeric(5) / 10000 + " bar";
            let planetMoons = faker.name.lastName();
            let planetInfo = {
                planetName: planetName,
                planetDistanceFromEarth: planetDistanceFromEarth,
                planetMass: planetMass,
                planetGravity: planetGravity,
                planetTemperature: planetTemperature,
                planetAtmosphere: planetAtmosphere,
                planetMoons: planetMoons
            }


            let planet = {
                size: planetSize,
                position_x: planetPosition_x,
                position_y: planetPosition_y,
                rotate: rotate,
                gif: gif,
                info: planetInfo
            }
            currentPlanetArray.push(planet);
        }
        return currentPlanetArray;
    }

    const toggleDialog = (data) => {
        const isDialogPopup = props.isDialogPopup;
        if (!isDialogPopup) {
            props.openDialogFunc(!isDialogPopup);
        }
        props.dialogDataFunc(data);

    }
    useEffect(() => {
        setPlanetArray(randomPlanetsBaseOnNum(planetNum));
    }, [planetNum])

    return (<div className={"container"}>
        {planetArray.map((planet, index) => {
            let gif = planet.gif;
            return (<div key={index}
                         className={"bg-cover " +
                             " hover:animate-pulse" +
                             " hover:scale-150 cursor-pointer" }
                         style={{
                             width: planet.size,
                             height: planet.size,
                             position: "absolute",
                             top: planet.position_y,
                             left: planet.position_x,
                             backgroundImage: "url(" + gif + ")",
                             transform: "rotate(" + planet.rotate + "deg)",

                         }}
                         onClick={() => {
                             const planetInfoRender = () => {
                                 return (
                                     <div>
                                         <p className={"text-purple-700"}>Planet info</p>
                                         <p>Name: {planet.info.planetName}</p>
                                         <p>Distance from Earth: {planet.info.planetDistanceFromEarth}</p>
                                         <p>Mass: {planet.info.planetMass}</p>
                                         <p>Gravity: {planet.info.planetGravity}</p>
                                         <p>Temperature: {planet.info.planetTemperature}</p>
                                         <p>Atmosphere: {planet.info.planetAtmosphere}</p>
                                         <p>Moons: {planet.info.planetMoons}</p>

                                     </div>
                                 )
                             }
                             toggleDialog(planetInfoRender);

                         }
                         }
            ></div>)
        })}
    </div>)


}
