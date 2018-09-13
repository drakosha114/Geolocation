import Shop from '../models/Shop';
const AVERAGE_ARC_LENGTH = 6371;
const NEAREST_SHOPS_RADIUS = 15;

const SHOPS = [{
    id: 26,
    name: 'Рязанский проспект',
    address: 'г.Москва, Рязанский проспект, д.2, корп.3',
    lat: 55.730358,
    long: 37.734079,
},{
    id: 4,
    name: 'Алтуфьево',
    address: 'г.Мытищи, МКАД 84 км (внешн.)',
    lat: 55.915175,
    long: 37.572879,
},{
    id: 20,
    name: 'Лефортово',
    address: 'г. Москва, Энтузиастов шоссе, д.12 корп.2',
    lat: 55.746714,
    long: 37.707676,
},{
    id: 56,
    name: 'Юдино',
    address: 'г. Москва, село Юдино, д. 55д',
    lat: 55.658286,
    long: 37.18392,
},{
    id: 45,
    name: 'Косино',
    address: 'г. Москва, ул. Святоозёрская, д.1А',
    lat: 55.714933,
    long: 37.884662,
},{
    id: 3,
    name: 'Строгино',
    address: 'МКАД 66 километр (внешн.)',
    lat: 55.811032,
    long: 37.386869,
},{
    id: 40,
    name: 'Шолохово',
    address: 'Мытищинский район, деревня Шолохово',
    lat: 56.046474,
    long: 37.541622,
},{
    id: 2,
    name: 'Мытищи',
    address: 'г. Мытищи, 91 км МКАД',
    lat: 55.899215,
    long: 37.668593,
},{
    id: 65,
    name: 'Пушкино',
    address: 'г. Пушкино, Ярославское шоссе, 19 км от МКАД',
    lat: 56.015547,
    long: 37.88475,
},{
    id: 32,
    name: 'Новая рига',
    address: 'г. Москва, Новорижское шоссе, 22 км, вл. 1, стр. 5',
    lat: 55.799893,
    long: 37.297188,
},{
    id: 35,
    name: 'Зеленоград',
    address: 'г. Москва,  Солнечногорский р-н, р.п.Ржавки, мкр.№2',
    lat: 56.000286,
    long: 37.252302,
},{
    id: 51,
    name: 'Киевское шоссе',
    address: 'г. Москва, п. Московский, Киевское шоссе, 24-й км',
    lat: 55.621158,
    long: 37.389973,
},{
    id: 43,
    name: 'Каширское шоссе',
    address: 'г. Москва, МКАД 24 километр (внешн.)',
    lat: 55.589154,
    long: 37.726762,
},{
    id: 28,
    name: 'Ногинск',
    address: 'Ногинск г., Горьковское ш., 52-й км',
    lat: 55.830921,
    long: 38.398272,
},{
    id: 5,
    name: 'Химки',
    address: 'г. Химки 9 Мая ул., вл. 20 с.1',
    lat: 55.903448,
    long: 37.415802,
},{
    id: 6,
    name: 'Сокольники',
    address: 'г. Москва, Верхняя Красносельская ул., 3а',
    lat: 55.786248,
    long: 37.663781,
},{
    id: 22,
    name: 'Климовск',
    address: 'г. Климовск, ул. Молодежная, д. 15',
    lat: 55.387527,
    long: 37.549443,
},{
    id: 49,
    name: 'Люберцы',
    address: 'г. Москва, Новорязанское шоссе, д. 5/2',
    lat: 55.664577,
    long: 37.883503,
}];

const toRadians = (val) => {
    return val * Math.PI / 180;
};


const toDegrees = (val) => {
    return val * 180 / Math.PI;
};
// Calculate a point winthin a circle
// circle ={center:LatLong, radius: number} // in metres
const pointInsideCircle = (point, circle) => {
    let center = circle.center;
    let distance = distanceBetween(point, center);

    //alert(distance);
    return distance < circle.radius;
};

function calculateDistance(lat1,long1,lat2,long2) {
    const latCurrent = toRadians(lat1);
    const longCurrent = toRadians(long1);
    const latTarget = toRadians(lat2);
    const longTarget = toRadians(long2);

    return AVERAGE_ARC_LENGTH*Math.acos(Math.sin(latCurrent)*Math.sin(latTarget)+Math.cos(latCurrent)*Math.cos(latTarget)*Math.cos(longCurrent-longTarget));
}

function calculateDistance2(lat1, lon1, lat2, lon2) {
    var R = 6371e3;
    var φ1 = toRadians(lat1),  λ1 = toRadians(lon1);
    var φ2 = toRadians(lat2), λ2 = toRadians(lon2);
    var Δφ = φ2 - φ1;
    var Δλ = λ2 - λ1;

    var a = Math.sin(Δφ/2) * Math.sin(Δφ/2)
        + Math.cos(φ1) * Math.cos(φ2)
        * Math.sin(Δλ/2) * Math.sin(Δλ/2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    var d = R * c;

    return d;

}
function getKey(currentId, tagetId) {
    return `${String(currentId)+String(tagetId)}`;
}
const NearestShops = SHOPS.map(shop => new Shop(shop));

const Distances = (function(){
    const Distances = new Map();
    let temp = 0;
    let l = NearestShops.length;
    while(temp < l) {
        const {id: idTemp, lat: latTemp, long: longTemp} = NearestShops[temp];
        for (let i = temp+1; i < l; i += 1) {
            const {id, lat, long} = NearestShops[i];
            const distance = calculateDistance(latTemp,longTemp,lat,long);
            Distances.set(getKey(idTemp, id), distance);
            Distances.set(getKey(id, idTemp), distance);
        }
        temp += 1;
    }
    return Distances;
}());

export default {
    getNearestShops: (id) => NearestShops.filter(shop => shop.id!==id).filter(shop=>{console.log(Distances.get(getKey(id, shop.id)));return Distances.get(getKey(id, shop.id))<NEAREST_SHOPS_RADIUS}),
    findShopById: (id) => NearestShops.find(shop => shop.id===id),
    getNearestShopsIds: (id) => NearestShops.filter(shop => shop.id!==id).filter(shop=>{console.log(Distances.get(getKey(id, shop.id)));return Distances.get(getKey(id, shop.id))<NEAREST_SHOPS_RADIUS}).map(shop=>shop.id).join(','),
    getShops: () => NearestShops,
    getDistance: (targetId, id) => Distances.get(getKey(targetId, id)),
}
