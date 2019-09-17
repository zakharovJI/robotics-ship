
function scripts() {
    document.addEventListener('DOMContentLoaded', () => {

        let expanded = false;

        //TODO: Отладить корабли - полсе большого пути влево дропает первый путь вправо
        let data = [
            {
                title: 'Расширение возможностей',
                content: 'ВЛБАНК (ОАО) перешёл на промышленную эксплуатацию\n' +
                    ' автоматизированной банковской системы ЦФТ-Банк, современного масштабируемого решения,\n' +
                    ' позволяющего банку перестроить свой технологический цикл и расширить потенциальные возможности\n' +
                    ' для развития',
                date: '15 сентября 2001 г.',
                year: 2001
            },
            {
                title: 'Расширение возможностей',
                content: 'ВЛБАНК (ОАО) перешёл на промышленную эксплуатацию\n' +
                    ' автоматизированной банковской системы ЦФТ-Банк, современного масштабируемого решения,\n' +
                    ' позволяющего банку перестроить свой технологический цикл и расширить потенциальные возможности\n' +
                    ' для развития',
                date: '24 августа 2002 г.',
                year: 2002
            },
            {
                title: 'Расширение возможностей',
                content: 'ВЛБАНК (ОАО) перешёл на промышленную эксплуатацию\n' +
                    ' автоматизированной банковской системы ЦФТ-Банк, современного масштабируемого решения,\n' +
                    ' позволяющего банку перестроить свой технологический цикл и расширить потенциальные возможности\n' +
                    ' для развития',
                date: '24 августа 2003 г.',
                year: 2003
            },
            {
                title: 'Расширение возможностей',
                content: 'ВЛБАНК (ОАО) перешёл на промышленную эксплуатацию\n' +
                    ' автоматизированной банковской системы ЦФТ-Банк, современного масштабируемого решения,\n' +
                    ' позволяющего банку перестроить свой технологический цикл и расширить потенциальные возможности\n' +
                    ' для развития',
                date: '24 августа 2004 г.',
                year: 2004
            },
            {
                title: 'Расширение возможностей',
                content: 'ВЛБАНК (ОАО) перешёл на промышленную эксплуатацию\n' +
                    ' автоматизированной банковской системы ЦФТ-Банк, современного масштабируемого решения,\n' +
                    ' позволяющего банку перестроить свой технологический цикл и расширить потенциальные возможности\n' +
                    ' для развития',
                date: '24 августа 2005 г.',
                year: 2005
            },
            {
                title: 'Расширение возможностей',
                content: 'ВЛБАНК (ОАО) перешёл на промышленную эксплуатацию\n' +
                    ' автоматизированной банковской системы ЦФТ-Банк, современного масштабируемого решения,\n' +
                    ' позволяющего банку перестроить свой технологический цикл и расширить потенциальные возможности\n' +
                    ' для развития. ВЛБАНК (ОАО) перешёл на промышленную эксплуатацию\n' +
                    ' автоматизированной банковской системы ЦФТ-Банк, современного масштабируемого решения,\n' +
                    ' позволяющего банку перестроить свой технологический цикл и расширить потенциальные возможности\n' +
                    ' для развития. ВЛБАНК (ОАО) перешёл на промышленную эксплуатацию\n' +
                    ' автоматизированной банковской системы ЦФТ-Банк, современного масштабируемого решения,\n' +
                    ' позволяющего банку перестроить свой технологический цикл и расширить потенциальные возможности\n' +
                    ' для развития. ВЛБАНК (ОАО) перешёл на промышленную эксплуатацию\n' +
                    ' автоматизированной банковской системы ЦФТ-Банк, современного масштабируемого решения,\n' +
                    ' позволяющего банку перестроить свой технологический цикл и расширить потенциальные возможности\n' +
                    ' для развития',
                date: '24 августа 2006 г.',
                year: 2006
            },
            {
                title: 'Расширение возможностей',
                content: 'ВЛБАНК (ОАО) перешёл на промышленную эксплуатацию\n' +
                    ' автоматизированной банковской системы ЦФТ-Банк, современного масштабируемого решения,\n' +
                    ' позволяющего банку перестроить свой технологический цикл и расширить потенциальные возможности\n' +
                    ' для развития. ВЛБАНК (ОАО) перешёл на промышленную эксплуатацию\n' +
                    ' автоматизированной банковской системы ЦФТ-Банк, современного масштабируемого решения,\n' +
                    ' позволяющего банку перестроить свой технологический цикл и расширить потенциальные возможности\n' +
                    ' для развития. ВЛБАНК (ОАО) перешёл на промышленную эксплуатацию\n' +
                    ' автоматизированной банковской системы ЦФТ-Банк, современного масштабируемого решения,\n' +
                    ' позволяющего банку перестроить свой технологический цикл и расширить потенциальные возможности\n' +
                    ' для развития. ВЛБАНК (ОАО) перешёл на промышленную эксплуатацию\n' +
                    ' автоматизированной банковской системы ЦФТ-Банк, современного масштабируемого решения,\n' +
                    ' позволяющего банку перестроить свой технологический цикл и расширить потенциальные возможности\n' +
                    ' для развития',
                date: '24 августа 2007 г.',
                year: 2007
            },
            {
                title: 'Расширение возможностей',
                content: 'ВЛБАНК (ОАО) перешёл на промышленную эксплуатацию\n' +
                    ' автоматизированной банковской системы ЦФТ-Банк, современного масштабируемого решения,\n' +
                    ' позволяющего банку перестроить свой технологический цикл и расширить потенциальные возможности\n' +
                    ' для развития. ВЛБАНК (ОАО) перешёл на промышленную эксплуатацию\n' +
                    ' автоматизированной банковской системы ЦФТ-Банк, современного масштабируемого решения,\n' +
                    ' позволяющего банку перестроить свой технологический цикл и расширить потенциальные возможности\n' +
                    ' для развития. ВЛБАНК (ОАО) перешёл на промышленную эксплуатацию\n' +
                    ' автоматизированной банковской системы ЦФТ-Банк, современного масштабируемого решения,\n' +
                    ' позволяющего банку перестроить свой технологический цикл и расширить потенциальные возможности\n' +
                    ' для развития. ВЛБАНК (ОАО) перешёл на промышленную эксплуатацию\n' +
                    ' автоматизированной банковской системы ЦФТ-Банк, современного масштабируемого решения,\n' +
                    ' позволяющего банку перестроить свой технологический цикл и расширить потенциальные возможности\n' +
                    ' для развития',
                date: '24 августа 2008 г.',
                year: 2008
            }
        ];

        let animationFlag = false;
        let animationStack = [];

        let tempItemForColor = 1;

        let tempItemForCoord = 1;


        const createAnimation = (pathNum, lastPath, duration) => {
            let animation = document.createElementNS("http://www.w3.org/2000/svg", "animateMotion");

            // animation.setAttribute("xlink:href", "#svg-ship");
            animation.setAttribute("dur", duration);
            animation.setAttribute("repeatCount", "1");
            animation.setAttribute("fill", "freeze");
            animation.setAttribute("rotate", "auto");
            animation.setAttribute("onend", "animationFlag = false");
            animation.setAttribute("onbegin", "animationFlag = true");
            // animation.setAttribute("begin", "0s");

            let mpath = document.createElementNS("http://www.w3.org/2000/svg", "mpath");
            mpath.setAttribute("href", `#path-${pathNum}`);


            let animationID = `#animation-${pathNum}`;
            animation.setAttribute("id", animationID);
            animation.appendChild(mpath);
            let ship = document.getElementById('svg-ship');
            let previous_animation = document.getElementById(`#animation-${lastPath}`);
            if (previous_animation != null) {
                // ship.removeChild(previous_animation)
            }
            ship.appendChild(animation)
        }


        const move = (lastPath, pathNum) => {
            createAnimation(pathNum, lastPath, "1s");
            document.getElementById("svg-area").setCurrentTime(0);

        }

        let temp_item = 1;


        document.getElementsByClassName('year-item-expending')[temp_item].style.color = '#49a2c7';

        document.getElementById('years-wrapper-header').addEventListener('mousedown', () => {
            rotateArrow();
            if (expanded) {
                // document.getElementsByClassName('years-wrapper-content')[0].style.visibility = 'visible'
                document.getElementsByClassName('years-wrapper-content')[0].className = 'years-wrapper-content year-wrapper vis'
            } else {
                document.getElementsByClassName('years-wrapper-content')[0].className = 'years-wrapper-content year-wrapper'
            }
        });

        let $year__title = document.getElementById('years-wrapper-header__title');

        let $years = document.getElementsByClassName('years-wrapper-content__item');
        let $footer_content = document.getElementById('footer__content');
        let $footer_date = document.getElementById('footer__date');
        let $footer_title = document.getElementById('footer__title');
        let $circles = document.getElementsByClassName('svg-circle');
        let texts = document.getElementsByClassName('svg-text');

        let g = Snap("#svg-area");

        let FLAG = false;


        for (let i = 0; i < $years.length; i++) {
            $years[i].addEventListener('click', () => {
                $footer_title.textContent = data[i].title;
                $footer_date.textContent = data[i].date;
                $footer_content.textContent = data[i].content;
                onYearClicked(tempItemForColor, i, i);
                tempItemForColor = i;
                if (expanded) {
                    rotateArrow();
                }            });

            $circles[i].addEventListener('click', () => {
                $footer_title.textContent = data[i].title;
                $footer_date.textContent = data[i].date;
                $footer_content.textContent = data[i].content;
                onYearClicked(tempItemForColor, i, i);
                tempItemForColor = i;
                if (expanded) {
                    rotateArrow();
                }            });

            texts[i].addEventListener('click', () => {
                $footer_title.textContent = data[i].title;
                $footer_date.textContent = data[i].date;
                $footer_content.textContent = data[i].content;
                onYearClicked(tempItemForColor, i, i);
                tempItemForColor = i;
                if (expanded) {
                    rotateArrow();
                }
            });
        }


        function onYearClicked(prev, next, i) {

            console.log(`200${i + 1} clicked`);

            $year__title.textContent = document.getElementsByClassName('year-item-expending')[next].textContent;
            document.getElementsByClassName('years-wrapper-content')[0].className = 'years-wrapper-content year-wrapper';

            document.getElementsByClassName('year-item-expending')[prev].style.color = '#767676';
            document.getElementsByClassName('year-item-expending')[next].style.color = '#49a2c7';

            document.getElementById(`circle-${prev}`).style.fill = '#529fd9';
            document.getElementById(`circle-${next}`).style.fill = '#dc594a';

            document.getElementById(`rect-${prev}`).style.fill = '#fff';
            document.getElementById(`rect-${next}`).style.fill = '#dc594a';
            //
            document.getElementById(`text-${prev}`).style.fill = '#000';
            document.getElementById(`text-${next}`).style.fill = '#fff';

            tempItemForCoord = next;


            if (Math.abs(tempItemForColor - i) !== 1) {
                if (tempItemForColor > i) {
                    if (animationStack.length <= 1) {
                        let temp = tempItemForColor + 1;
                        console.log('KJADKFJADF')
                        while (temp > i) {
                            animationStack.push(temp);
                            temp -= 1;
                        }
                        temp_item += 1;
                    } else {
                        if (Math.abs(tempItemForColor - i) !== 1) {
                            console.log('first')
                            let temp = tempItemForColor;
                            while (temp >= i) {
                                animationStack.push(temp);
                                temp -= 1;
                            }
                        } else {
                            animationStack.push(i);
                        }
                    }
                    animationEnd()
                } else if (tempItemForColor < i) {
                    if (animationStack.length <= 1) {
                        let temp = tempItemForColor;
                        while (temp <= i) {
                            animationStack.push(temp);
                            temp += 1;
                        }
                        temp_item -= 1;
                        console.log(temp_item)
                    } else {
                        if (Math.abs(tempItemForColor - i) !== 1) {
                            console.log('second')
                            let temp = tempItemForColor;
                            while (temp <= i) {
                                animationStack.push(temp);
                                temp += 1;
                            }
                        } else {
                            animationStack.push(i);
                        }
                    }
                    // console.log('stack', animationStack)
                    animationEnd()
                }
            } else {
                // console.log('LONELY CLICK')
                FLAG = true;
                moveShip(temp_item, i, FLAG);
                temp_item = i;
            }

        };

        //7 4 3

        function moveShip(lastPath, pathNum, flag) {
            lastPath = parseInt(lastPath.toString());
            pathNum = parseInt(pathNum.toString());


            let xDif = 0;
            let yDif = 0;

            if (lastPath < pathNum) {
                switch (tempItemForCoord) {
                    case 0:
                        xDif = 50;
                        yDif = 70;
                        break;
                    case 1:
                        xDif = 30;
                        yDif = 70;
                        break;
                    case 2:
                        xDif = 50;
                        yDif = 65;
                        break;
                    case 3:
                        xDif = 50;
                        yDif = 65;
                        break;
                    case 4:
                        xDif = 30;
                        yDif = 70;
                        break;
                    case 5:
                        xDif = 30;
                        yDif = 70;
                        break;
                    case 6:
                        xDif = 70;
                        yDif = 50;
                        break;
                    case 7:
                        xDif = 50;
                        yDif = 60;
                        break;
                }
            } else {
                switch (tempItemForCoord) {
                    case 0:
                        xDif = 40;
                        yDif = 60;
                        break;
                    case 1:
                        xDif = 30;
                        yDif = 70;
                        break;
                    case 2:
                        xDif = 60;
                        yDif = 60;
                        break;
                    case 3:
                        xDif = 40;
                        yDif = 65;
                        break;
                    case 4:
                        xDif = 20;
                        yDif = 65;
                        break;
                    case 5:
                        xDif = 40;
                        yDif = 65;
                        break;
                    case 6:
                        xDif = 60;
                        yDif = 50;
                        break;
                    case 7:
                        xDif = 70;
                        yDif = 70;
                        break;
                }
            }

            console.log('MOVE: ', lastPath, pathNum, tempItemForCoord, 'xDIF', xDif, 'yDIF', yDif, 'with stack = ', animationStack);


            let g = Snap("#svg-area");

            let ship = g.select('#svg-ship'),
                invisiblePath = g.select(`#path-${lastPath < pathNum ? pathNum : flag ? pathNum + 1 : pathNum}`),
                lenPath = Snap.path.getTotalLength(invisiblePath.attr("d")),
                moveTime = lenPath;
            let pathStartPos = lastPath < pathNum ? invisiblePath.getPointAtLength(0) : invisiblePath.getPointAtLength(1);

            ship.attr({
                transform: 't' + [pathStartPos.x - xDif, pathStartPos.y - yDif] + 'r' + (pathStartPos.alpha - 180)
            });


            if (lastPath < pathNum) {
                Snap.animate(0, lenPath, function (val) {
                    let pos = invisiblePath.getPointAtLength(val);

                    ship.attr({
                        transform: 't' + [pos.x - xDif, pos.y - yDif] +
                            'r' + (pos.alpha - 180)
                    });
                }, moveTime, mina.linear);
            } else if (lastPath >= pathNum) {
                Snap.animate(lenPath, 0, function (val) {
                    let pos = invisiblePath.getPointAtLength(val);

                    ship.attr({
                        transform: 't' + [pos.x - xDif, pos.y - yDif] +
                            'r' + (pos.alpha - 180)
                    });
                }, moveTime, mina.linear);
            }


            animationFlag = true;

            temp_item = pathNum;
            if (lastPath !== pathNum) {
                setTimeout(() => {
                    animationEnd()
                }, moveTime);
            } else {
                animationEnd();
            }

            FLAG = false;

        }

        const animationEnd = () => {
            if (animationStack.length > 0) {
                moveShip(temp_item, animationStack.splice(0, 1));
            }
        }


        moveShip(0, 1);
        onYearClicked(0, 1);

            let s = Snap("#arrow-svg-area");

            let arrow = s.select('#arrow');


        function rotateArrow() {
            if (expanded) {
                Snap.animate(0, 200000, function (val) {
                    arrow.attr({
                        points: "1,6 6,2 11,6"
                    })
                });
            } else {
                Snap.animate(0, 2000, function (val) {
                    arrow.attr({
                        points: "1,3 6,7 11,3"
                    })
                });
            }
            console.log(expanded)
            expanded = !expanded;

        };


    })
}

module.exports = scripts();
