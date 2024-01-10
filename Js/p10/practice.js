function adjective(a) {
    let obj = {
        1: "Crazy",
        2: "Amazing",
        3: "Fire"
    }
    return obj[a];
}
function ShopName(a) {
    let obj = {
        1: "Engine",
        2: "Foods",
        3: "Garments"
    }
    return obj[a];
}
function AnotherName(a) {
    let obj = {
        1: "Broski",
        2: "LOst",
        3: "Boos"
    }
    return obj[a];
}

let rand1 = Math.random()
let first;
if (rand1 < .4) {
    first = 1;
}
else if (rand1 > .4 && rand1 < .6) {
    first = 2;
}
else {
    first = 3
}
let rand2 = Math.random()
let sec;
if (rand2 < .4) {
    sec = 1;
}
else if (rand2 > .4 && rand2 < .6) {
    sec = 2;
}
else {
    sec = 3
}
let rand3 = Math.random()
let third;
if (rand3 < .4) {
    third = 1;
}
else if (rand3 > .4 && rand3 < .6) {
    third = 2;
}
else {
    third = 3
}


console.log(`${adjective(first)} ${ShopName(sec)} ${AnotherName(third)}`)