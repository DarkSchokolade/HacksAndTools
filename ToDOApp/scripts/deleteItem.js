// This is a script to check on what item on the list was clicked 
//after it being clicked the target.innerText is queried to delete drom list

function getEventTarget(e) {
    e = e || window.event;
    return e.target || e.srcElement;
}

var ul = document.getElementById('test');
ul.onclick = function (event) {
    var target = getEventTarget(event);
    // alert(target.innerHTML);
    window.location.href= "/todolist/"+target.innerText;
};