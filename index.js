

const main = document.querySelector('main');
let string=['<i class="fa-brands fa-html5 fa-2xl" style="color: #c6602a;"></i>','<i class="fa-brands fa-html5 fa-2xl" style="color: #c6602a;"></i>', '<i class="fa-brands fa-html5 fa-2xl" style="color: #c6602a;"></i>', '<i class="fa-brands fa-html5 fa-2xl" style="color: #c6602a;"></i>'];

for (let i = 0; i < string.length; i++) {
  setTimeout(() => {
    main.innerHTML +=`<dfn>${string[i]}</dfn>`;
    console.log(main);
  }, i * 1000 );
}

