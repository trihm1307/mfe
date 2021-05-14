console.log("Loading container");
console.log(window.location.pathname);
switch(window.location.pathname){
    case "/mfe1": import('mfe1/boostrap').then(module=>module.mount(root)); break;
    case "/mfe2": import('mfe2/boostrap').then(module=>module.mount(root)); break;
}
