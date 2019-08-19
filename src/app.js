import './app.scss';
import 'bootstrap';
import {default as data} from './json/data.json';
import {default as dataFed} from './json/dataFed.json';
import Chart from 'chart.js';
var moment = require('moment');
moment().format();

let dropdown = document.getElementById("dropdown");
/*let idArr = [
  ["RU-MOW",  "Москва"],
  ["RU-CHE", "Челябинская область"],
  ["RU-ORL",  "Орловская область"],
  ["RU-OMS",  "Омская область"],
  ["RU-LIP",  "Липецкая область"],
  ["RU-KRS",  "Курская область"],
  ["RU-RYA",  "Рязанская область"],
  ["RU-BRY",  "Брянская область"],
  ["RU-KIR",  "Кировская область"],
  ["RU-ARK",  "Архангельская область"],
  ["RU-MUR",  "Мурманская область"],
  ["RU-SPE",  "Санкт-Петербург"],
  ["RU-YAR",  "Ярославская область"],
  ["RU-ULY",  "Ульяновская область"],
  ["RU-NVS",  "Новосибирская область"],
  ["RU-TYU",  "Тюменская область"],
  ["RU-SVE",  "Свердловская область"],
  ["RU-NGR",  "Новгородская область"],
  ["RU-KGN",  "Курганская область"],
  ["RU-KGD",  "Калининградская область"],
  ["RU-IVA",  "Ивановская область"],
  ["RU-AST",  "Астраханская область"],
  ["RU-KHA",  "Хабаровский край"],
  ["RU-CE",  "Чеченская республика"],
  ["RU-UD",  "Удмуртская республика"],
  ["RU-SE",  "Республика Северная Осетия"],
  ["RU-MO",  "Республика Мордовия"],
  ["RU-KR",  "Республика  Карелия"],
  ["RU-KL",  "Республика  Калмыкия"],
  ["RU-IN",  "Республика  Ингушетия"],
  ["RU-AL",  "Республика Алтай"],
  ["RU-BA",  "Республика Башкортостан"],
  ["RU-AD",  "Республика Адыгея"],
  ["RU-CR",  "Республика Крым"],
  ["RU-SEV",  "Севастополь"],
  ["RU-KO",  "Республика Коми"],
  ["RU-PNZ",  "Пензенская область"],
  ["RU-TAM",  "Тамбовская область"],
  ["RU-LEN",  "Ленинградская область"],
  ["RU-VLG",  "Вологодская область"],
  ["RU-KOS",  "Костромская область"],
  ["RU-PSK",  "Псковская область"],
  ["RU-YAN",  "Ямало-Ненецкий АО"],
  ["RU-CHU",  "Чукотский АО"],
  ["RU-YEV",  "Еврейская автономская область"],
  ["RU-TY",  "Республика Тыва"],
  ["RU-SAK",  "Сахалинская область"],
  ["RU-AMU",  "Амурская область"],
  ["RU-BU",  "Республика Бурятия"],
  ["RU-KK",  "Республика Хакасия"],
  ["RU-KEM",  "Кемеровская область"],
  ["RU-ALT",  "Алтайский край"],
  ["RU-DA",  "Республика Дагестан"],
  ["RU-KB",  "Кабардино-Балкарская республика"],
  ["RU-KC",  "Карачаевая-Черкесская республика"],
  ["RU-KDA",  "Краснодарский край"],
  ["RU-ROS",  "Ростовская область"],
  ["RU-SAM",  "Самарская область"],
  ["RU-TA",  "Республика Татарстан"],
  ["RU-ME",  "Республика Марий Эл"],
  ["RU-CU",  "Чувашская республика"],
  ["RU-NIZ",  "Нижегородская край"],
  ["RU-VLA",  "Владимировская область"],
  ["RU-MOS",  "Московская область"],
  ["RU-KLU",  "Калужская область"],
  ["RU-BEL",  "Белгородская область"],
  ["RU-ZAB",  "Забайкальский край"],
  ["RU-PRI",  "Приморский край"],
  ["RU-KAM",  "Камачатский край"],
  ["RU-MAG",  "Магаданская область"],
  ["RU-SA",  "Республика Саха"],
  ["RU-KYA",  "Красноярский край"],
  ["RU-ORE",  "Оренбургская область"],
  ["RU-SAR",  "Саратовская область"],
  ["RU-VGG",  "Волгоградская область"],
  ["RU-VOR",  "Ставропольский край"],
  ["RU-SMO",  "Смоленская область"],
  ["RU-TVE",  "Тверская область"],
  ["RU-PER",  "Пермская область"],
  ["RU-KHM",  "Ханты-Мансийский АО"],
  ["RU-KHM",  "Ханты-Мансийский АО"],
  ["RU-TOM",  "Томская область"],
  ["RU-IRK",  "Иркутская область"],
  ["RU-NEN",  "Ненецскй АО"],
  ["RU-STA",  "Ставропольский край"],
  ["RU-TUL",  "Тульская область"]
];*/
/*let idArrFed = [["Central", "Центральный"], ["Northwestern", "Северо-Западный"], ["Southern-1", "Южный"], ["path5292", "Северо-Кавказский"], ["Volga", "Приволжский"], ["Urals", "Уральский"], ["Siberia", "Сибирский"], ["Far_Eastern", "Дальневосточный"]];*/
let oblast = document.querySelectorAll("path");
let description = document.querySelector(".description");
let enabled = document.querySelectorAll(".enabled");
let choise = document.querySelector(".choise");
let regions = document.querySelector(".regions");
let federal = document.querySelector(".federal");
let radio = document.querySelectorAll("input[name=map]");


window.onload = function(){
  oblast.forEach(function(item) {
    item.style.fill= "#dde1e6";
  });
  fillDropdownJSON(data);
  makeListHoverJSON(data);
  mouseFollowJSON(data);
}
oblast.forEach(function(item) {
  item.addEventListener("mouseover", function(event) {
    event.target.style.fill= "#ffffff";
  });
  item.addEventListener("mouseout", function(e) {
      event.target.style.fill= "#dde1e6";
  });
});

radio.forEach(function(item){
  item.addEventListener( 'change', function() {
      if(this.checked) {
        if (this.value === "0") {
          regions.style.display = "block";
          federal.style.display = "none";
          choise.innerHTML = "Выбрать регион";
          fillDropdownJSON(data);
          makeListHoverJSON(data);
          mouseFollowJSON(data);
        }
        if (this.value === "1") {
          federal.style.display = "block";
          regions.style.display = "none";
          choise.innerHTML = "Выбрать округ";
          fillDropdownJSON(dataFed);
          makeListHoverJSON(dataFed);
          mouseFollowJSON(dataFed);

        }
      }
    });
});

function fillDropdownFed() {
  dropdown.innerHTML = "";
  for (let i = 0; i < idArrFed.length; i++) {
    dropdown.insertAdjacentHTML('beforeend', `<li class=""><a href="#" class="list">${idArrFed[i][1]}<hr></a></li>`);
  };
}

function fillDropdownReg() {
  dropdown.innerHTML = "";
  for (let i = 0; i < idArr.length; i++) {
    dropdown.insertAdjacentHTML('beforeend', `<li class=""><a href="#" class="list">${idArr[i][1]}<hr></a></li>`);
  }
}

function fillDropdownJSON(data) {
  dropdown.innerHTML = "";
  for (let key in data) {
    dropdown.insertAdjacentHTML('beforeend', `<li class=""><a href="#" class="list">${data[key]}<hr></a></li>`);
  }
}

function makeListHover(arr) {
  let list = document.querySelectorAll(".list");
  list.forEach( function(item) {
    item.onmouseover = function () {
      for (let i = 0; i < arr.length; i++) {
        if (this.innerHTML.slice(0, -4) === arr[i][1]) {
          let selected = document.getElementById(arr[i][0]);
          description.classList.add('active');
          description.innerHTML = this.innerHTML.slice(0, -4);
          selected.style.fill="#ffffff"
          let centerX = selected.getBoundingClientRect().left + selected.getBoundingClientRect().width / 2 - description.getBoundingClientRect().width / 2;
          let centerY = selected.getBoundingClientRect().top - description.getBoundingClientRect().height - 10;
          description.style.left = centerX + "px";
          description.style.top = centerY + "px";
        }
      }
    };
    item.onmouseout = function() {
      for (let i = 0; i < arr.length; i++) {
        if (this.innerHTML.slice(0, -4) === arr[i][1]) {
          let selected = document.getElementById(arr[i][0]);
          description.classList.remove('active');
          selected.style.fill="#dde1e6"
        }
    }
  };
  });
}

function makeListHoverJSON(data) {
  let list = document.querySelectorAll(".list");
  list.forEach( function(item) {
    item.onmouseover = function () {
      for (let key in data) {
        if (this.innerHTML.slice(0, -4) === data[key]) {
          let selected = document.getElementById(key);
          description.classList.add('active');
          description.innerHTML = this.innerHTML.slice(0, -4);
          selected.style.fill="#ffffff"
          let centerX = selected.getBoundingClientRect().left + selected.getBoundingClientRect().width / 2 - description.getBoundingClientRect().width / 2;
          let centerY = selected.getBoundingClientRect().top - description.getBoundingClientRect().height - 10;
          description.style.left = centerX + "px";
          description.style.top = centerY + "px";
        }
      }
    };
    item.onmouseout = function() {
      for (let key in data) {
        if (this.innerHTML.slice(0, -4) === data[key]) {
          let selected = document.getElementById(key);
          description.classList.remove('active');
          selected.style.fill="#dde1e6"
        }
    }
  };
  });
}

function mouseFollow(arr) {
  for (let i = 0; i < arr.length; i++) {
    let area = document.getElementById(arr[i][0]);
    area.addEventListener("mouseover", function () {
      area.addEventListener('mousemove', function(e){
        let x = e.pageX - description.getBoundingClientRect().width / 2;
        description.style.left = x + "px";
        let y = e.pageY - 70
        description.style.top = y + "px";
      });
      description.classList.add('active');
      description.innerHTML = arr[i][1];
    });
    area.addEventListener("mouseout", function() {
      description.classList.remove("active");
    });
  };
}

function mouseFollowJSON(data) {
  for (let key in data) {
    let area = document.getElementById(key);
    area.addEventListener("mouseover", function () {
      area.addEventListener('mousemove', function(e){
        let x = e.pageX - description.getBoundingClientRect().width / 2;
        description.style.left = x + "px";
        let y = e.pageY - 70
        description.style.top = y + "px";
      });
      description.classList.add('active');
      description.innerHTML = data[key];
    });
    area.addEventListener("mouseout", function() {
      description.classList.remove("active");
    });
  };
}





let laptop = document.querySelector(".laptop");
let mobile = document.querySelector(".mobile");
window.addEventListener("load", function() {
    if (window.screen.width <= 933) {
      laptop.classList.remove("current");
      mobile.classList.add("current");
    } else {
      laptop.classList.add("current");
      mobile.classList.remove("current");
    }
});
window.addEventListener('resize', function(event){
    if (window.screen.availWidth <= 933) {
      console.log("!!!");
      laptop.classList.remove("current");
      mobile.classList.add("current");
    } else {
      laptop.classList.add("current");
      mobile.classList.remove("current");
    }
});

let dropdownButton = document.querySelector('.dropdown-punkt');
dropdownButton.onclick = () => {
    let a = document.getElementById('dropdownEl');
    let arrow = document.querySelector('.arrow-down');
      if ( a.style.display == 'none' ) {
        a.style.display = 'block'
        arrow.style.transform = 'rotate(90deg)'
      }
      else
        if ( a.style.display == 'block' ) {
        a.style.display = 'none';
        arrow.style.transform = 'rotate(-90deg)'
        }
};

let formArrow = document.querySelector(".form-arrow-up");
formArrow.onclick = () => {
      formArrow.classList.toggle("form-arrow-down");
      let restForm = document.querySelector(".rest-form");
      let formLabel = document.querySelector(".form-label");
      if (restForm.style.display === "none") {
        restForm.style.display = "block";
        formLabel.style.marginBottom = "32px";
      } else {
        restForm.style.display = "none";
        formLabel.style.marginBottom = "0";
      }
}

let dropdownButtonReg = document.querySelector('.dropdown-reg');
dropdownButtonReg.onclick = () => {
      let a = document.getElementById('dropdown');
      (a.style.display == "none") ? a.style.display = "block" : a.style.display = "none";
};

function addingIcons(input, rule) {
  input.addEventListener("keyup", () => {
    if (input.value !== "") {
    let parent = input.parentNode;
    let icon = parent.querySelector(".approved-error");
      if (rule(input.value)) {
        input.style.border = "solid 1px #71bc90";
        if (icon !== null) {
          icon.style.display = "block";
          icon.src = 'src/img/icons/approved.svg';
        } else {
          parent.insertAdjacentHTML('beforeend', "<img class='approved-error' src='src/img/icons/approved.svg' alt=''>" );
        }
      } else {
        input.style.border = "solid 1px #e53935";
        if (icon !== null) {
          icon.style.display = "block";
          icon.src = 'src/img/icons/error.svg';
        } else {
          parent.insertAdjacentHTML('beforeend', "<img class='approved-error' src='src/img/icons/error.svg' alt=''>" )
        }
      }
      input.addEventListener("blur", () => {
        if (lastCheck(input, rule)) {
          input.style.border = "solid 1px #71bc90";
        } else {
          input.style.border = "solid 1px #e53935";
        }
      });
      input.addEventListener("focus", () => {
        input.style.border = "solid 1px #62b0ff";
      });
    } else {
      input.style.border = "solid 1px #62b0ff";
      let parent = input.parentNode;
      let icon = parent.querySelector(".approved-error");
      icon.style.display = "none";
      input.addEventListener("blur", () => {
          input.style.border = 0;
      });
      input.addEventListener("focus", () => {
        input.style.border = "solid 1px #62b0ff";
      });
    }
  });

}

function onlyLetters(myString) {
  return /^[[a-zA-ZA-я]+\s?]*$/.test(myString);
}

function notEmpty(myString) {
  //return /^[a-zA-Z0-9_]+( [a-zA-Z0-9_]+)*$/.test(myString);
  return /^[\wА-я.]+(\s+[\wА-я.]+)*$/.test(myString);
}

function emailCheck(myString) {
  return /^([a-z0-9_А-я\.-]+)@([a-z0-9_А-я\.-]+)\.([a-zА-я\.]{2,6})$/.test(myString);
}

function telNumCheck(myString) {
return /^(\+7\(\d{3}\)\-\d{3}\-\d{2}\-\d{2})$/.test(myString);

}

let theme = document.suggestion.theme
let email = document.suggestion.email;
let name = document.suggestion.name;
let message = document.suggestion.message;
let telephone = document.suggestion.telephone;
let formCheckbox = document.querySelector(".form-checkbox");
let formButton = document.querySelector(".form-button");
let inputs = [[theme, notEmpty], [telephone, telNumCheck], [name, onlyLetters], [email, emailCheck], [message, notEmpty]];

let maskOptions = {
  mask: '{+7}(000)-000-00-00'
};
let mask = IMask(telephone, maskOptions);

inputs.forEach(item => {
  item[0].addEventListener("keyup", () => {
    let flag = true;
    let temp = inputs.length;
    for (let i = 0; i < temp; i++) {
      if (!lastCheck(inputs[i][0], inputs[i][1])) {
        flag = false;
      }
    }
    if (flag === true && formCheckbox.checked) {
      formButton.style.backgroundColor = "#0c49cd";
    } else {
      formButton.style.backgroundColor = "#dde1e6";
    }
  });
});

formCheckbox.addEventListener("change", () => {
  let flag = true;
  let temp = inputs.length;
  for (let i = 0; i < temp; i++) {
    if (!lastCheck(inputs[i][0], inputs[i][1])) {
      flag = false;
    }
  }
  if (flag === true && formCheckbox.checked) {
    formButton.style.backgroundColor = "#0c49cd";
  } else {
    formButton.style.backgroundColor = "#dde1e6";
  }
});

let temp = inputs.length;
for (let i = 0; i < temp-1; i++) {
  let oldPlaceholder;
  inputs[i][0].addEventListener("focus", () => {
    let parent = inputs[i][0].parentNode;
    let placeholder = parent.querySelector(".placeholder");
    oldPlaceholder = inputs[i][0].getAttribute("placeholder");
    inputs[i][0].setAttribute("placeholder", "");
    placeholder.style.display = "block";
    inputs[i][0].style.paddingTop = "40px";
  });
  inputs[i][0].addEventListener("blur", () => {
    let parent = inputs[i][0].parentNode;
    let placeholder = parent.querySelector(".placeholder");
    inputs[i][0].setAttribute("placeholder", `${oldPlaceholder}`);
    placeholder.style.display = "none";
    inputs[i][0].style.paddingTop = "20px";
  });
};

for (let i = 0; i < temp; i++) {
  inputs[i][0].addEventListener("change", () => {
    if (!lastCheck(inputs[i][0], inputs[i][1]) && inputs[i][0].value !== "") {
      let parent = inputs[i][0].parentNode;
      let hint = parent.querySelector(".hint");
      hint.style.display = "block";
    } else {
      hint.style.display = "none";
    }
  });
};

for (let i = 0; i < temp; i++) {
  inputs[i][0].addEventListener("keyup", () => {
    if (lastCheck(inputs[i][0], inputs[i][1])) {
      let parent = inputs[i][0].parentNode;
      let hint = parent.querySelector(".hint");
      hint.style.display = "none";
    }
  });
};

addingIcons(name, onlyLetters);
addingIcons(email, emailCheck);
addingIcons(telephone, telNumCheck);
addingIcons(theme, notEmpty);

function lastCheck(input, rule) {
  if (rule(input.value)) return true;
}

let button = document.querySelector(".form-button");
button.addEventListener("click", () => {
  if (lastCheck(name, onlyLetters) && lastCheck(email, emailCheck) && lastCheck(message, notEmpty) && formCheckbox.checked && lastCheck(telephone, telNumCheck) && lastCheck(theme, notEmpty)) {
    document.suggestion.submit();
  } else {
    alert(" Заполните форму правильно!")
  }
});

//ГРАФИКИ

Chart.defaults.MyLine = Chart.defaults.line;
Chart.controllers.MyLine = Chart.controllers.line.extend({
   draw: function(ease) {
      Chart.controllers.line.prototype.draw.call(this, ease);
      if (this.chart.tooltip._active && this.chart.tooltip._active.length) {
         let activePoint = this.chart.tooltip._active[0],
             ctx = this.chart.ctx,
             x = activePoint.tooltipPosition().x,
             y = activePoint.tooltipPosition().y,
             topY = this.chart.scales['y-axis-0'].top,
             bottomY = this.chart.scales['y-axis-0'].bottom;
         ctx.save();
         ctx.beginPath();
         ctx.moveTo(x, topY);
         ctx.lineTo(x, y - 6);
         ctx.moveTo(x, y + 6);
         ctx.lineTo(x, bottomY);
         ctx.setLineDash([1, 1]);
         ctx.lineWidth = 1;
         ctx.strokeStyle = '#0d49cc';
         ctx.stroke();
         ctx.restore();
         ctx.save();
         ctx.beginPath();
         ctx.arc(x, y, 6, 0, 2 * Math.PI);
         ctx.lineWidth = 2;
         ctx.strokeStyle = '#0d49cc';
         ctx.fillStyle ="#fff";
         ctx.fill();
         ctx.stroke();
         ctx.restore();
      }
   }
});

Chart.Tooltip.positioners.custom = function(elements, eventPosition) {
  var tooltip = this;
  return {
    x: eventPosition.x,
    y: elements[0]._chart.height
  };
}

function updateChart(chart) {
    for (let i=0; i < chartData.length; i++){
    chart.data.datasets[0].data[i] = Math.round(Math.random() * 100)}
    chart.update();
}

let cardArr = document.querySelectorAll(".card");

cardArr.forEach(item => {
  item.addEventListener("click", (e) => {
    let chosen = document.querySelector(".chosen");
    chosen.classList.remove("chosen");
    e.target.closest(".card").classList.add("chosen");
    updateChart(myChart)
  });
});


//let chartData = [60, 40, 20, 80, 60, 20, 100, 40, 60];
let chartData = []
for (let i = 0; i < 32; i++) {
  chartData.push(Math.round(Math.random() * 100));
}
let startDate = moment("2010-01-01");
let datesForChart = [];
datesForChart.push(startDate.format("YYYY"));
for (let i = 1; i < 32; i++) {
  console.log(moment(startDate).add(3, 'month'));
  startDate = moment(startDate).add(3, 'month');
  datesForChart.push(startDate.format("YYYY"));
}

//let labels =  ["10-02-2010", "11-03-2011", "12-04-2012", "13-05-2013", "14-06-2014", "15-07-2015", "16-08-2016", d.format("YYYY")];




var ctx = document.getElementById("myChart").getContext('2d');
var gradient = ctx.createLinearGradient(0, 0, 0, 500);
gradient.addColorStop(0, "#e2e9f9");
gradient.addColorStop(1, "#ffffff");
var myChart = new Chart(ctx, {
    type: 'MyLine',
    data: {
        labels: datesForChart,
        datasets: [{
            label: 'percent',
            data: chartData,
            borderColor: '#0c49cd',
            backgroundColor: gradient,
            pointRadius: 0,
        }]
    },
    options: {
      elements: {
          line: {
            tension: 0
          }
        },
      legend: {
         display: false,
       },
      tooltips: {
        axis: 'x',
        intersect: false,
        displayColors: false,

      },
        scales: {
          xAxes: [{
              ticks: {
                  autoSkip: true,
                  maxTicksLimit: 8,
                  padding: 29,
                  fontSize: 14,
                  fontColor: "#848e99",
              },
              gridLines: {
                  color: "#848e99",
                  height: 20,
                  display: false
              },
              callback: function (label, index, labels) {
                console.log("!!!");
                  return moment(label).format("YYYY");
              }
          }],
            yAxes: [{
                ticks: {
                    min: 0,
                    max: 100,
                    stepSize: 20,
                    padding: 29,
                    fontSize: 14,
                    fontColor: "#848e99",
                    beginAtZero: true,
                    callback: function (label, index, labels) {
                          switch (label) {
                              case 0:
                                  return '0%';
                              case 20:
                                  return '20%';
                              case 40:
                                  return '40%';
                              case 60:
                                  return '60%';
                              case 80:
                                  return '80%';
                              case 100:
                                  return '100%';
                          }
                      }
                    },
                gridLines: {
                  drawBorder: false,
                  display: false
                }
            }]
        }
    },
});
