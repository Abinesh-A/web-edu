import React from "react";
import Page1 from "./Page1";
import "./Mygoal.css";

function Mygoal() {
  var carousel = document.querySelector(".carousel");
  var indicator = document.querySelector("#indicator");
  var elements = document.querySelectorAll(".carousel > *");
  var currentIndex = 0;

  function renderIndicator() {
    // this is just an example indicator; you can probably do better
    indicator.innerHTML = "";
    for (var i = 0; i < elements.length; i++) {
      var button = document.createElement("button");
      button.innerHTML = i === currentIndex ? "\u2022" : "\u25e6";
      (function (i) {
        button.onclick = function () {
          elements[i].scrollIntoView();
        };
      })(i);
      indicator.appendChild(button);
    }
  }

  var observer = new IntersectionObserver(
    function (entries, observer) {
      // find the entry with the largest intersection ratio
      var activated = entries.reduce(function (max, entry) {
        return entry.intersectionRatio > max.intersectionRatio ? entry : max;
      });
      if (activated.intersectionRatio > 0) {
        currentIndex = elementIndices[activated.target.getAttribute("id")];
        renderIndicator();
      }
    },
    {
      root: carousel,
      threshold: 0.5,
    }
  );
  var elementIndices = {};
  for (var i = 0; i < elements.length; i++) {
    elementIndices[elements[i].getAttribute("id")] = i;
    observer.observe(elements[i]);
  }
  return (
    <div className="mygoaldiv">
      <script src="https://polyfill.io/v2/polyfill.min.js?features=IntersectionObserver"></script>
      <div class="carousel">
        <div id="x">
          <Page1 />
        </div>
        <div id="y">y</div>
        <div id="z">z</div>
      </div>
      <div id="indicator">• ◦ ◦</div>
    </div>
  );
}

export default Mygoal;
