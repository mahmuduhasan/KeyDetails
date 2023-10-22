window.addEventListener("keypress", (e) => {
  const key = document.querySelector(".key div h1");
  const keyCode = document.querySelector(".keycode p");
  const code = document.querySelector(".code p");
  const shift = document.querySelector(".shift p");

  //   console.log(key, keyCode, code, shift);

  key.innerHTML = e.key === " " ? "Space" : e.key;
  keyCode.innerHTML = e.keyCode;
  code.innerHTML = e.code;
  let isShift = e.shiftKey.toString();
  shift.innerHTML = isShift[0].toUpperCase() + isShift.slice(1, isShift.length);
});
