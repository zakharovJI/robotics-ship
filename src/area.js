"use strict";

import './stylesheets/styles.sass'
let scripts = require('./scripts.js');

    const smoothing = 0.2

    const points = [
        [
            [0, 420],
            [50, 425],
            [140, 355],
            [160, 346]
        ],
        [
            [160, 343],
            [250, 330],
            [346, 340]
        ],
        [
            [350, 340],
            [430, 345],
            [480, 340],
            [520, 325]
        ],
        [
            [520, 325],
            [560, 295],
            [580, 280],
            [600, 265],
            [630, 250]
        ],
        [
            [630, 250],
            [670, 245],
            [710, 248],
        ],
        [
            [710, 248],
            [740, 255],
            [790, 270],
            [810, 275]
        ],
        [
            [810, 275],
            [840, 270],
            [880, 245],
            [930, 190]
        ],
        [
            [930, 190],
            [950, 170],
            [970, 155],
            [990, 143],
            [1020, 130],
            [1050, 120]
        ],
        [
            [1050, 120],
            [1070, 118],
            [1150, 115],
            [1200, 102],
        ]
    ];


    let temp_index = 0;
    let temp_year = 2001;

    const line = (pointA, pointB) => {
        const lengthX = pointB[0] - pointA[0]
        const lengthY = pointB[1] - pointA[1]
        return {
            length: Math.sqrt(Math.pow(lengthX, 2) + Math.pow(lengthY, 2)),
            angle: Math.atan2(lengthY, lengthX)
        }
    }

    const controlPoint = (current, previous, next, reverse) => {

        const p = previous || current
        const n = next || current

        const o = line(p, n)

        const angle = o.angle + (reverse ? Math.PI : 0)
        const length = o.length * smoothing

        const x = current[0] + Math.cos(angle) * length
        const y = current[1] + Math.sin(angle) * length
        return [x, y]
    }

    const bezierCommand = (point, i, a) => {

        const cps = controlPoint(a[i - 1], a[i - 2], point)

        const cpe = controlPoint(point, a[i - 1], a[i + 1], true)
        return `C ${cps[0]},${cps[1]} ${cpe[0]},${cpe[1]} ${point[0]},${point[1]}`
    }

    const svgPath = (points, command) => {
        let x = points[points.length - 1][0] - 20;
        let y = points[points.length - 1][1] + 60;
        const d = points.reduce((acc, point, i, a) => i === 0
            ? `M ${point[0]},${point[1]}`
            : `${acc} ${command(point, i, a)}`
            , '')
        return `<path class="svg-path" d="${d}" id="path-${temp_index}" fill="none" stroke="#dfecf3" stroke-width="5" stroke-linecap="round" stroke-dasharray="0, 10" />`
            + ((x < 1100) ? (`<rect class="svg-rect" id="rect-${temp_index}" fill="#fff" x="${x - 12}" y="${y - 21}" rx="5" ry="5" width="68" height="30"/>` +
                `<text id="text-${temp_index++}" fill="#000" class="svg-text" x="${x}" y="${y}">${temp_year++}</text>`) : ``)
    }

    const svgCircle = () => {
        let str = ''
        for (let i = 0; i < points.length; i++) {
            let x = points[i][points[i].length - 1][0];
            let y = points[i][points[i].length - 1][1];
            if (i !== points.length - 1) {
                str += `<circle id="circle-${i}" class="svg-circle" cx="${x}" cy="${y}" r="8" fill="#529fd9" />`
            }
        }
        return str
    }

    let $svg = document.getElementById('svg-area');


    $svg.innerHTML = svgPath(points[0], bezierCommand) + svgPath(points[1], bezierCommand) + svgPath(points[2], bezierCommand) +
        svgPath(points[3], bezierCommand) + svgPath(points[4], bezierCommand) + svgPath(points[5], bezierCommand) +
        svgPath(points[6], bezierCommand) + svgPath(points[7], bezierCommand) + svgPath(points[8], bezierCommand) + svgCircle();


    let $g = document.createElementNS("http://www.w3.org/2000/svg", 'g');


    $g.innerHTML = '<polyline points="0,14 24,20 21,23.9" fill="#3da086"></polyline>' + '<polyline points="0,14 13,37 30,28" fill="#4fd0ad"></polyline>'
        + '<polyline points="13,37 50,37 30,28" fill="#3da086"></polyline>' + '<polyline points="30,28 50,37 60,14" fill="#4fd0ad"></polyline>'
        + '<polyline points="60,14 36,20 39,23.8" fill="#3da086"></polyline>' + '<polyline points="39,23.8 30,28 21,23.9 30,8" fill="#78e5c7"></polyline>'
        + '<polyline points="30,12 30,28 32,27" fill="#4aceaa"></polyline>' + '<polyline points="30,1 30,8, 21, 4" fill="#dd4643"></polyline>';
    $g.id = 'svg-ship';
    $g.setAttribute("transform", "translate(-40,-70)");

    $svg.appendChild($g);


