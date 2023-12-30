
var s3 = document.getElementById('iu');
var s4 = document.getElementById('s4');
let contries = [

    { nme: 'iran', shahr: ['semnan', 'tehran', 'esfahan', 'shiraz', 'kerman'] },
    { nme: 'USA', shahr: ['NewYork', 'vashington', 'tegzaz', 'mishigan'] },
    { nme: 'spain', shahr: ['Madrid', 'Barcelon', 'Ctalanoia', 'Atletoco'] },
    { nme: 'selectfrom', shahr: ['selectshahr'] },




];
import { aded } from "./ex.js";
var tty = aded();
if (tty) {

    contries.push(tty)
}


contries.forEach((u) => {
    var cr = document.createElement('option');
    cr.innerHTML = u.nme;
    cr.value = u.nme;
    s3.append(cr)
    if (cr.innerHTML == 'selectfrom') {
        cr.setAttribute('selected', '');
    }
});

window.onload = ch();

s3.addEventListener('change', ch)
function ch() {
    // cl()
    contries.forEach((u) => {
        if (s3.value == u.nme) {
            while (s4.firstChild) {
                s4.removeChild(s4.firstChild)
            }
            u.shahr.forEach((s) => {
                let tag = document.createElement('option');
                tag.innerHTML = s;
                tag.value = s;
                s4.append(tag);
            })
        }
    })
}
let inpi = document.getElementsByTagName('input');
function cl() {
    for (var f = 0; f < inpi.length; f++) {
        inpi[f].value = ""
    }


}
cl()
