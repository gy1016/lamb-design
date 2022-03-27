import React, { useCallback, useLayoutEffect, useRef } from 'react';
export var Carousel = function (props) {
    var imgArr = props.imgArr, timeout = props.timeout;
    var firstLi = useRef(null);
    var lastLi = useRef(null);
    var timer = useRef(null);
    var ulRef = useRef(null);
    var preRef = useRef(null);
    var nextRef = useRef(null);
    var next = function () {
        firstLi.current = ulRef.current.children[0];
        ulRef.current.style.transition = '0.4s';
        ulRef.current.style.transform = "translateX(".concat(-20, "%)");
        var tmp = setTimeout(function () {
            ulRef.current.appendChild(firstLi.current);
            ulRef.current.style.transition = 'none';
            ulRef.current.style.transform = "translateX(0%)";
            clearTimeout(tmp);
        }, 400);
    };
    var pre = function () {
        firstLi.current = ulRef.current.children[0];
        lastLi.current = ulRef.current.children[imgArr.length - 1];
        ulRef.current.insertBefore(lastLi.current, firstLi.current);
        ulRef.current.style.transition = 'none';
        ulRef.current.style.transform = "translateX(".concat(-20, "%)");
        var tmp = setTimeout(function () {
            ulRef.current.style.transition = '0.4s';
            ulRef.current.style.transform = "translateX(0%)";
            clearTimeout(tmp);
        }, 0);
    };
    var animation = useCallback(function () {
        timer.current = setInterval(next, timeout);
    }, [timeout]);
    var getNext = function () {
        clearInterval(timer.current);
        next();
        animation();
    };
    var getPre = function () {
        clearInterval(timer.current);
        pre();
        animation();
    };
    useLayoutEffect(function () {
        animation();
    }, [animation]);
    return (React.createElement("div", { className: "lamb-carousel-component" },
        React.createElement("ul", { id: "carousel-banner", ref: ulRef, onMouseEnter: function () {
                clearInterval(timer.current);
            }, onMouseLeave: animation }, imgArr.map(function (img, idx) { return (React.createElement("li", { key: img.id },
            React.createElement("img", { src: img.src, alt: img.name }))); })),
        React.createElement("div", { id: "carousel-pre", ref: preRef, onClick: getNext }),
        React.createElement("div", { id: "carousel-next", ref: nextRef, onClick: getPre })));
};
export default Carousel;
