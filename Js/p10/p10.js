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
        1: "Bros",
        2: "Limited",
        3: "Hub"
    }
    return obj[a];
}
let rand = Math.random()
let first, second, third;
if (rand < 0.33) {
    first = 1;
}
if (rand > 0.33 && rand < 0.66) {
    first = 2;
}
else {
    first = 3;
}
let ran2 = Math.random();
if (ran2 < 0.33) {
    second = 3;
}
if (ran2 > 0.33 && ran2 < 0.66) {
    second = 2;
}
else {
    second =1;
}
let ran3 = Math.random();
if (ran3 < 0.33) {
    third = 1;
}
if (ran3 > 0.33 && ran3 < 0.66) {
    third = 3;
}
else {
    third = 2;
}
console.log(`Generated name is : ${adjective(first)} ${ShopName(second)}  ${AnotherName(third)}`)
