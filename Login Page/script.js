var itr=1;
function next(id){
  if(id == ''){
  } else {
    var text =  document.getElementById(id).value;
    console.log(text);
    if(text.length < 3){
      add_remove_effects(document.getElementById(id).parentElement,'empty');
      return ;
    }
  }
  document.getElementById('cube').style.transform = "translateZ(-25px) rotateX("+(itr*90)+"deg)";
  itr++;
}


var add_remove_effects = function(ref,classname){
  var $a = ref.classList.add(classname);
  $a = ref;
  var $b = classname;
    setTimeout(function(){
      $a.classList.remove($b);
    },450);     
}
