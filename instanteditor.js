

function instantEditor(){
  
function formatDate(dt) {
  var y = dt.getFullYear();
  var m = ('00' + (dt.getMonth()+1)).slice(-2);
  var d = ('00' + dt.getDate()).slice(-2);
  var h = ('00' + dt.getHours()).slice(-2);
  var min= ('00' + dt.getMinutes()).slice(-2);
  var s= ('00' + dt.getSeconds()).slice(-2);
  
  return (y + '-' + m + '-' + d +' ' + h +':' +min+':'+s);
}
  
  
 var el=document.querySelector('[contenteditable="true"]');
 if(!el) return console.log("notfound contenteditable");
  
 var style=`
<style> 
 [contenteditable="true"]{
  position:relative;padding:1rem;border:1px solid gray;
}
[contenteditable="true"]:after{
  left:0;
  position:absolute;bottom:-3rem;content:attr(time);
}
</style>
 `;
  document.body.insertAdjacentHTML("beforeend",style);
 /*
 */ 
  
var savekey=location.href;
var savetimekey=savekey+"-time";
var dat = localStorage.getItem(savekey);
var time= localStorage.getItem(savetimekey);
 if(dat) el.innerHTML=dat;
 if(time) el.setAttribute('time',time);

  
function update(){
  //
  dat=el.innerHTML;
  localStorage.setItem(savekey,dat);
  //
  time = formatDate(new Date());
  el.setAttribute('time',time);
  localStorage.setItem(savetimekey,time);  
}
el.onkeydown=_.debounce(update,500);

};
instantEditor();
/*usage
div(contenteditable="true")
*/
