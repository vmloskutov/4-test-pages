import './app.scss';
import 'bootstrap';

let dropdown = document.getElementById("dropdown");
let idArr = [
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
];
let idArrFed = [["Central", "Центральный"], ["Northwestern", "Северо-Западный"], ["Southern-1", "Южный"], ["path5292", "Северо-Кавказский"], ["Volga", "Приволжский"], ["Urals", "Уральский"], ["Siberia", "Сибирский"], ["Far_Eastern", "Дальневосточный"]];
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
  fillDropdownReg();
  makeListHover(idArr);
  mouseFollow(idArr);
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
          fillDropdownReg();
          makeListHover(idArr);
          mouseFollow(idArr);
        }
        if (this.value === "1") {
          federal.style.display = "block";
          regions.style.display = "none";
          choise.innerHTML = "Выбрать округ";
          fillDropdownFed();
          makeListHover(idArrFed);
          mouseFollow(idArrFed);

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
      if ( a.style.display == 'none' ) {
        a.style.display = 'block'
      }
      else
        if ( a.style.display == 'block' ) {
        a.style.display = 'none';
        }
};

function addingIcons(input, rule) {
  input.addEventListener("change", () => {
    let parent = input.parentNode;
    let icon = document.querySelector(".approved-error");
    if (rule(input.value)) {
      input.style.border = "solid 1px #71bc90";
      if (icon != null) {
        icon.src = 'src/img/icons/approved.svg';
      } else {
        parent.insertAdjacentHTML('beforeend', "<img class='approved-error' src='src/img/icons/approved.svg' alt=''>" );
      }
    } else {
      input.style.border = "solid 1px #e53935";
      if (icon != null) {
        icon.src = 'src/img/icons/error.svg';
      } else {
        parent.insertAdjacentHTML('beforeend', "<img class='approved-error' src='src/img/icons/error.svg' alt=''>" )
      }
    }
  });
}

function onlyLetters(myString) {
  return /^[a-zA-ZA-я ]+$/.test(myString);
}

function emailCheck(myString) {
  return /^([a-z0-9_А-я\.-]+)@([a-z0-9_А-я\.-]+)\.([a-zА-я\.]{2,6})$/.test(myString);
}

let email = document.suggestion.email;
let name = document.suggestion.name;
addingIcons(name, onlyLetters);
addingIcons(email, emailCheck);
