console.log("Loading container");

let load = ()=>{
    switch(window.location.hash){
        case "#/mfe1": import('mfe1/boostrap').then(module=>module.mount(root)); break;
        case "#/mfe2": import('mfe2/boostrap').then(module=>module.mount(root)); break;
    }
}
window.onhashchange = ()=>load();
load();
