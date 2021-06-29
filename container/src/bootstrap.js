import {mount as mountProductName} from 'mfe1/productName';
import {mount as mountManufacturer} from 'mfe2/manufacturer';

window.onhashchange = function() {  
    routing();
}

const routing = function(){
    switch(window.location.hash){
        case '#/mfe1': mountProductName(root); break;
        case '#/mfe2': mountManufacturer(root); break;
    }
}

routing();
