import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{i as m}from"./assets/vendor-BbbuE1sJ.js";const t=document.querySelector(".form");function n(e,o){return new Promise((r,s)=>{setTimeout(()=>{o?r(e):s(e)},e)})}t.addEventListener("submit",e=>{e.preventDefault();const o=Number(t.elements.delay.value),s=t.elements.state.value==="fulfilled";n(o,s).then(i=>{m.show({title:"Success",message:`✅ Fulfilled promise in ${i}ms`,color:"green",position:"topRight",timeout:2e3})}).catch(i=>{m.show({title:"Error",message:`❌ Rejected promise in ${i}ms`,color:"red",position:"topRight",timeout:2e3})}),t.reset()});
//# sourceMappingURL=2-snackbar.js.map
