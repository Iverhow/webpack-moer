import './style.css';

var btn = document.createElement('button');
btn.innerText = 'Add';
document.body.appendChild(btn);

btn.onclick = function () {
    var div = document.createElement('div');
    div.innerHTML = 'Item';
    document.body.appendChild(div);
}