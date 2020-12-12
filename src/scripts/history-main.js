import * as util from "./util.js"
import * as hist from "./ui-elements/history.js"

// const array = [10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26];
const array = [
    {"id": 10, "name":"ALE"},
    {"id": 11, "name":"ALE"},
    {"id": 12, "name":"ALE"},
    {"id": 13, "name":"ALE"},
    {"id": 14, "name":"ALE"},
    {"id": 15, "name":"ALE"},
    {"id": 16, "name":"ALE"},
    {"id": 17, "name":"ALE"},
    {"id": 18, "name":"ALE"},
    {"id": 19, "name":"PILSNER"},
    {"id": 20, "name":"PILSNER"},
    {"id": 21, "name":"PILSNER"},
    {"id": 22, "name":"PILSNER"},
    {"id": 23, "name":"PILSNER"},
    {"id": 24, "name":"PILSNER"},
    {"id": 25, "name":"PILSNER"},
    {"id": 26, "name":"PILSNER"},
    {"id": 27, "name":"KAGE"},
    {"id": 28, "name":"KAGE"},
    {"id": 29, "name":"KAGE"},
    {"id": 30, "name":"KAGE"},
    {"id": 31, "name":"KAGE"},
    {"id": 32, "name":"KAGE"},
    {"id": 33, "name":"KAGE"},
];

array.forEach(beer =>{
    new hist.history(beer.id, beer.name)
});
