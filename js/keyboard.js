"use strict"
let language;
////////получаем language из LOCAL_STORAGE/////////////
window.addEventListener("load", getlanguage)
function getlanguage(){
  if(localStorage.getItem("language")){
    language = localStorage.getItem("language")
   } else{
    language= "eng"
   }  
}

document.addEventListener("DOMContentLoaded", function () {  
  if(localStorage.getItem("language")){
    language = localStorage.getItem("language")
   } else{
    language= "eng"
   }  
  Keyboard.init();
  document.querySelector(".use-keyboard-input").focus();
});


let keyArr =[
  {"key": "`", "code": "Backquote", "shift": "~", 'rus': 'ё', 'rusShift': 'Ё'},
  {"key": '1', "code": 'Digit1', "shift": "!", 'rus': '1', 'rusShift': '!'},
  {"key": '2', "code": 'Digit2', "shift": '@', 'rus': '2', 'rusShift': '"'},
  {"key": '3', "code": 'Digit3', "shift": '#', 'rus': '3', 'rusShift': '№'},
  {"key": '4', "code": 'Digit4', "shift": '$', 'rus': '4', 'rusShift': ';'},
  {"key": '5', "code": 'Digit5', "shift": '%', 'rus': '5', 'rusShift': '%'},
  {"key": '6', "code": 'Digit6', "shift": '^', 'rus': '6', 'rusShift': ':'},
  {"key": '7', "code": 'Digit7', "shift": '&', 'rus': '7', 'rusShift': '?'},
  {"key": '8', "code": 'Digit8', "shift": '*', 'rus': '8', 'rusShift': '*'},
  {"key": '9', "code": 'Digit9', "shift": '(', 'rus': '9', 'rusShift': '('},
  {"key": '0', "code": 'Digit0', "shift": ')', 'rus': '0', 'rusShift': ')'},
  {"key": '-', "code": 'Minus', "shift": '_', 'rus': '-', 'rusShift': '_'},
  {"key": '=', "code": 'Equal', "shift": '+', 'rus': '=', 'rusShift': '+'},
  {"key": '←', "code": 'Backspace', "shift": '←', 'rus': '←', 'rusShift': '←'},
  ////
  {"key": 'Tab', "code": 'Tab', "shift": 'Tab', 'rus': 'Tab', 'rusShift': 'Tab'},
  {"key": 'q', "code": 'KeyQ', "shift": 'Q', 'rus': 'й', 'rusShift': 'Й'}, 
  {"key": 'w', "code": 'KeyW', "shift": 'W', 'rus': 'ц', 'rusShift': 'Ц'}, 
  {"key": 'e', "code": 'KeyE', "shift": 'E', 'rus': 'у', 'rusShift': 'У'}, 
  {"key": 'r', "code": 'KeyR', "shift": 'R', 'rus': 'к', 'rusShift': 'К'}, 
  {"key": 't', "code": 'KeyT', "shift": 'T', 'rus': 'е', 'rusShift': 'Е'}, 
  {"key": 'y', "code": 'KeyY', "shift": 'Y', 'rus': 'н', 'rusShift': 'Н'}, 
  {"key": 'u', "code": 'KeyU', "shift": 'U', 'rus': 'г', 'rusShift': 'Г'}, 
  {"key": 'i', "code": 'KeyI', "shift": 'I', 'rus': 'ш', 'rusShift': 'Ш'}, 
  {"key": 'o', "code": 'KeyO', "shift": 'O', 'rus': 'щ', 'rusShift': 'Щ'}, 
  {"key": 'p', "code": 'KeyP', "shift": 'P', 'rus': 'з', 'rusShift': 'З'}, 
  {"key": '[', "code": 'BracketLeft', "shift": '{', 'rus': 'х', 'rusShift': 'Х'},
  {"key": ']', "code": 'BracketRight', "shift": '}', 'rus': 'ъ', 'rusShift': 'Ъ'}, 
  {"key": '\\', "code": 'Backslash', "shift": '|', 'rus': '\\', 'rusShift': '/'},  
   //
   {"key": 'CapsLock', "code": 'CapsLock', "shift": 'CapsLock', 'rus': 'CapsLock', 'rusShift': 'CapsLock'}, 
   {"key": 'a', "code": 'KeyA', "shift": 'A', 'rus': 'ф', 'rusShift': 'Ф'}, 
   {"key": 's', "code": 'KeyS', "shift": 'S', 'rus': 'ы', 'rusShift': 'Ы'}, 
   {"key": 'd', "code": 'KeyD', "shift": 'D', 'rus': 'в', 'rusShift': 'В'}, 
   {"key": 'f', "code": 'KeyF', "shift": 'F', 'rus': 'а', 'rusShift': 'А'}, 
   {"key": 'g', "code": 'KeyG', "shift": 'G', 'rus': 'п', 'rusShift': 'П'}, 
   {"key": 'h', "code": 'KeyH', "shift": 'H', 'rus': 'р', 'rusShift': 'Р'}, 
   {"key": 'j', "code": 'KeyJ', "shift": 'J', 'rus': 'о', 'rusShift': 'О'}, 
   {"key": 'k', "code": 'KeyK', "shift": 'K', 'rus': 'л', 'rusShift': 'Л'}, 
   {"key": 'l', "code": 'KeyL', "shift": 'L', 'rus': 'д', 'rusShift': 'Д'}, 
   {"key": ';', "code": 'Semicolon', "shift": ':', 'rus': 'ж', 'rusShift': 'Ж'}, 
   {"key": "'", "code": 'Quote', "shift": '"', 'rus': 'э', 'rusShift': 'Э'}, 
   {"key": 'Enter', "code": 'Enter', "shift": 'Enter', 'rus': 'Enter', 'rusShift': 'Enter'}, 
   //////
   {"key": 'Shift', "code": 'ShiftLeft', "shift": '_', 'rus': '-', 'rusShift': '_'},
   {"key": 'z', "code": 'KeyZ', "shift": 'Z', 'rus': 'я', 'rusShift': 'Я'}, 
   {"key": 'x', "code": 'KeyX', "shift": 'X', 'rus': 'ч', 'rusShift': 'Ч'}, 
   {"key": 'c', "code": 'KeyC', "shift": 'C', 'rus': 'с', 'rusShift': 'С'}, 
   {"key": 'v', "code": 'KeyV', "shift": 'V', 'rus': 'м', 'rusShift': 'М'}, 
   {"key": 'b', "code": 'KeyB', "shift": 'B', 'rus': 'и', 'rusShift': 'И'}, 
   {"key": 'n', "code": 'KeyN', "shift": 'N', 'rus': 'т', 'rusShift': 'Т'}, 
   {"key": 'm', "code": 'KeyM', "shift": 'M', 'rus': 'ь', 'rusShift': 'Ь'}, 
   {"key": ',', "code": 'Comma', "shift": '<', 'rus': 'б', 'rusShift': 'Б'}, 
   {"key": '.', "code": 'Period', "shift": '>', 'rus': 'ю', 'rusShift': 'Ю'}, 
   {"key": '/', "code": 'Slash', "shift": '?', 'rus': '.', 'rusShift': ','},
   {"key": '↑', "code": "ArrowUp", "shift": '↑', 'rus': '↑', 'rusShift': '↓'},
   {"key": 'Shift', "code": 'ShiftRight', "shift": 'Shift', 'rus': 'Shift', 'rusShift': 'Shift'},
  /////
  {"key": 'Ctrl', "code": 'ControlLeft', "shift": 'Ctrl', 'rus': 'Ctrl', 'rusShift': 'Ctrl'}, 
  {"key": 'Alt',  "code": 'AltLeft', "shift": 'Alt', 'rus': 'Alt', 'rusShift': 'Alt'},  
  {"key": '  ', "code": "Space", "shift": ' ', 'rus': ' ', 'rusShift': ' '}, 
  {"key": 'Alt', "code": "AltRight", "shift": 'Alt', 'rus': 'Alt', 'rusShift': 'Alt'},  
   {"key": 'Ctrl', "code": "ControlRight", "shift": 'Ctrl', 'rus': 'Ctrl', 'rusShift': 'Ctrl'}, 
   {"key": '←', "code": "ArrowLeft", "shift": '←', 'rus': '←', 'rusShift': '←'},  
   {"key": '↓', "code": "ArrowDown", "shift": '↓', 'rus': '↓', 'rusShift': '↓'},
   {"key": '→', "code": "ArrowRight", "shift": '→', 'rus': '→', 'rusShift': '→'}]
   
const Keyboard = {
  shift: {
    shiftEng: false,
    rusShift: false,
  },
  elements: {
    main: null,
    keysContainer: null,
    keys: [],
    input: null,
  },
  eventHandlers: {
    oninput: null,
    onclose: null,
  },
  properties: {
    value: "",
    capsLock: false,
    shift: false,
  },

  init() {
    // Create main elements
    this.elements.main = document.createElement("div");
    this.elements.main.classList.add("keyboard");

    this.elements.main.input = document.createElement("textarea");
    this.elements.main.input.classList.add("use-keyboard-input");
    this.elements.main.input.setAttribute(
      "placeholder",
      "OS-Windows. To change language: (LEFT shift + LEFT alt) /*/согласно критериям работы, присутствие кнопки delete не обязательно! /*/ Так как в виртуальной клавиатуре две клавиши одновременно мышкой нажать нельзя, shift реализован при одиночном клике /*/ При переходе с виртуальной клавиатуры на физическую не забудьте поставить курсор в место ввода текста// СПАСИБО"
    );

    this.elements.keysContainer = document.createElement("div");
    this.elements.keysContainer.classList.add("keyboard__keys");
    this.elements.keysContainer.setAttribute("id", "keyboard__keys");

    // Add to DOM
    this.elements.main.prepend(this.elements.main.input);
    document.body.append(this.elements.main);
    this.elements.main.append(this.elements.keysContainer);

    // Automatically use keyboard for elements with .use-keyboard-input
    document.querySelectorAll(".use-keyboard-input").forEach((element) => {
      element.addEventListener("focus", () => {
        this.open(element.value, (currentValue) => {
          element.value = currentValue;
        });
      });
    });

    this.createKeysBox();
  },

  createKeysBox() {
    this.elements.keysContainer.append(this.createKeys());
    this.elements.keys =
      this.elements.keysContainer.querySelectorAll(".keyboard__key");
  },

  createKeys() {
    const fragment = document.createDocumentFragment();
    // Creates HTML for an icon
    const createIconHTML = (icon_name) => {
      return `<i class="material-icons">${icon_name}</i>`;
    };
    // Creates HTML keys
    keyArr.forEach((k) => {
      let nameKey;
      if (language=== "eng" && !this.shift.shiftEng) {
        nameKey = k.key;
      }
      if (language=== "eng" && this.shift.shiftEng) {
        nameKey = k.shift;
      }
      if (language=== "ru" && !this.shift.rusShift) {
        nameKey = k.rus;
      }
      if (language=== "ru" && this.shift.rusShift) {
        nameKey = k.rusShift;
      }
      const keyElement = document.createElement("button");

      // Add attributes/classes
      keyElement.setAttribute("type", "button");
      keyElement.setAttribute("data-key", `${k.code}`);
      keyElement.classList.add("keyboard__key");

      switch (
        k.code //"Ctrl":
      ) {
        case "ControlLeft":
        case "ControlRight":
          keyElement.innerHTML = "CTRL";
          keyElement.classList.add("keyboard__key--wide");
          keyElement.classList.add("ctrl__key");
          break;

        case "AltRight": //"Alt":
        case "AltLeft":
          keyElement.innerHTML = "ALT";
          keyElement.classList.add("alt__key");
          break;

        case "ArrowDown": //"↓":
          keyElement.innerHTML = createIconHTML("keyboard_arrow_down");
          keyElement.addEventListener("click", () => {
            this.properties.value += "↓";
            this._triggerEvent("oninput");
          });
          break;
        case "ArrowRight": //"→":
          keyElement.innerHTML = createIconHTML("keyboard_arrow_right");
          keyElement.addEventListener("click", () => {
            this.properties.value += "→";
            this._triggerEvent("oninput");
          });
          break;

        case "ArrowLeft": //"←":
          keyElement.innerHTML = createIconHTML("keyboard_arrow_left");
          keyElement.addEventListener("click", () => {
            this.properties.value += "←";
            this._triggerEvent("oninput");
          });
          break;
        case "ArrowUp": //"↑":
          keyElement.innerHTML = createIconHTML("keyboard_arrow_up");
          keyElement.addEventListener("click", () => {
            this.properties.value += "↑";
            this._triggerEvent("oninput");
          });
          break;
        case "ShiftRight": //"Shift":
        case "ShiftLeft":
          keyElement.classList.add(
            "keyboard__key--wide",
            "shift__key--activatable"
          );
          keyElement.classList.add("shift");
          keyElement.innerHTML = createIconHTML("straight");

          keyElement.addEventListener("click", () => {
            this._toggleShift();
          });

          break;
        case "Tab": //"Tab":
          keyElement.classList.add("keyboard__key--wide");
          keyElement.innerHTML = createIconHTML("keyboard_tab");

          keyElement.addEventListener("click", () => {
            this.properties.value += "  ";
            this._triggerEvent("oninput");
          });

          break;

        case "Backspace": //"backspace":
          keyElement.classList.add("keyboard__key--wide");
          keyElement.innerHTML = createIconHTML("backspace");

          keyElement.addEventListener("click", () => {
            this.properties.value = this.properties.value.substring(
              0,
              this.properties.value.length - 1
            );
            this._triggerEvent("oninput");
          });

          break;

        case "CapsLock": //"capsLook":
          keyElement.classList.add(
            "keyboard__key--wide",
            "keyboard__key--activatable"
          );
          keyElement.innerHTML = createIconHTML("keyboard_capslock");
          keyElement.addEventListener("click", () => {
            this._toggleCapsLock();
            keyElement.classList.toggle("keyboard__key--active");
          });

          break;

        case "Enter": //"Enter":
          keyElement.classList.add("keyboard__key--wide");
          keyElement.innerHTML = createIconHTML("keyboard_return");
          keyElement.addEventListener("click", () => {
            this.properties.value += "\n";
            this._triggerEvent("oninput");
          });

          break;

        case "Space": //"space":
          keyElement.classList.add("keyboard__key--extra-wide");
          keyElement.innerHTML = createIconHTML("space_bar");
          keyElement.addEventListener("click", () => {
            this.properties.value += " ";
            this._triggerEvent("oninput");
          });

          break;

        default:
          keyElement.textContent = nameKey;
          keyElement.addEventListener("click", () => {
            this.properties.value +=
              this.properties.capsLock || this.properties.shift
                ? nameKey.toUpperCase()
                : nameKey.toLowerCase();
            this._triggerEvent("oninput");
          });

          break;
      }

      fragment.append(keyElement);

      if (
        k.code === "Backspace" ||
        k.code === "Backslash" ||
        k.code === "Enter" ||
        k.code === "ShiftRight"
      ) {
        fragment.append(document.createElement("br"));
      }
    });

    return fragment;
  },
  _triggerEvent(handlerName) {
    if (typeof this.eventHandlers[handlerName] == "function") {
      this.eventHandlers[handlerName](this.properties.value);
    }
  },
  _toggleShift() {
    this.properties.shift = !this.properties.shift;  
  
    if (this.properties.shift){
       if ( language ==="ru")  {
      this.shift.rusShift = true;
      this.shift.shiftEng = false;
      clearContainerKeys();
      this.createKeysBox()
    } else {
      this.shift.rusShift = false;
      this.shift.shiftEng = true;
      clearContainerKeys();
      this.createKeysBox()
    }
    addClassActivShift()
    }
     if(!this.properties.shift){
      this.shift.rusShift = false;
      this.shift.shiftEng = false;
      clearContainerKeys();
      this.createKeysBox();        
     }
     
  },

  _toggleCapsLock() {
    this.properties.capsLock = !this.properties.capsLock;
    for (const key of this.elements.keys) {
      if (
        key.childElementCount === 0 &&
        !key.classList.contains("ctrl__key") &&
        !key.classList.contains("alt__key")
      ) {
        key.textContent = this.properties.capsLock
          ? key.textContent.toUpperCase()
          : key.textContent.toLowerCase();
      }
    }
  },

  open(initialValue, oninput, onclose) {
    this.properties.value = initialValue || "";
    this.eventHandlers.oninput = oninput;
    this.eventHandlers.onclose = onclose;
  }, 
};

/// очистка блока кнопок///////
function clearContainerKeys() {   
  while(document.getElementById("keyboard__keys").firstChild){
    document.getElementById("keyboard__keys").removeChild(document.getElementById("keyboard__keys").firstChild); 
  }  
}

////////////////Комбинации клавиш///////
///////функция для обработки двойных нажатий клавиш//////
function runDoubleKeys(func, ...codes) {
  let pressed = new Set();
  document.addEventListener('keydown', function(event) {
    pressed.add(event.code);
    for (let code of codes) { // все ли клавиши из набора нажаты?
      if (!pressed.has(code)) {
        return;
      }
    }
  // чтобы избежать "залипания" клавиши -- обнуляем статус всех клавиш, пусть нажимает всё заново
    pressed.clear();
    func();
  });
  document.addEventListener('keyup', function(event) {
    pressed.delete(event.code);
  });
}
////////////////////'ShiftLeft' && 'AltLeft'- смена языка///////
  function changeLang() {
   if(language=== "ru") {
    language = "eng"
    localStorage.setItem("language", "eng")  
    clearContainerKeys()
    Keyboard.createKeysBox() 
   } else{
    language = "ru"
    localStorage.setItem("language", "ru")  
    clearContainerKeys()
    Keyboard.createKeysBox()    
   } 
}

runDoubleKeys(changeLang,'ShiftLeft', 'AltLeft');
runDoubleKeys(changeLang,'ShiftRight','AltRight');

////меняем цвет клавиш при нажатии/////////////

document.addEventListener("keydown", downColorKey);
document.addEventListener("keyup", upKey);

function upKey(event) {
  let keyCodePress = event.code;
  let dataSet = '.keyboard__key[data-key="' + keyCodePress + '"]';
  setTimeout(() => {
    document.querySelector(`${dataSet}`).style.background = "";
  }, 150); 
}

function downColorKey(event) {
  let keyCodePress = event.code;  
  let dataSet = '.keyboard__key[data-key="' + keyCodePress + '"]';
  let currentKey = document.querySelector(`${dataSet}`);
  currentKey.style.background = "rgba(0, 0, 0, 0.25)";
  if (keyCodePress === "CapsLock") {
    Keyboard._toggleCapsLock();
    document
      .querySelector(`${dataSet}`)
      .classList.toggle("keyboard__key--active");
  }
}
 //при нажатии на виртуальную  кнопку shift добавляем визуалку-красн точку///
function addClassActivShift(){
    document.querySelectorAll(".shift")[0].classList.add("shift__key--active")
    document.querySelectorAll(".shift")[1].classList.add("shift__key--active")
  }



