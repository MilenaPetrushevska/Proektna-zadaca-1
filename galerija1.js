/*var count = new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
function fja(br) {
    var par = document.getElementById("br"+ br);
    count[br]++;
    par.innerHTML = count[br];
}
function com(txt,i)
{
    var p=document.getElementById(i);
    
    if(event.key === 'Enter') {
        if(count[i-1]==0)
        {
            p.innerHTML=txt.value;
            count[i-1]++;
        }
        else{
            var br = document.createElement("br");
            p.appendChild(br);
            var node=document.createTextNode(txt.value); 
            p.appendChild(node); 
        }
     txt.value='';        
    }
    
}
*/
var count = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
function fja(br) {
    var par = $("#br" + br);
    count[br]++;
    par.html(count[br]);
}
function com(txt, i) {
    var p = $("#" + i);

    if (event.key === 'Enter') {
        if (count[i - 1] == 0) {
            p.html(txt.value);
            count[i - 1]++;
        }
        else {
            var br = $("<br>");
            p.append(br);
            var node = $("<p>" + txt.value + "</p>");
            p.append(node);
        }
        txt.value = '';
    }

}
