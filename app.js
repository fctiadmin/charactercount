var charcount=document.getElementById('charcount');
var result=document.getElementById('result');
charcount.addEventListener('keyup',function(){
    result.innerHTML=charcount.value.length;
  if(charcount.value.length>160){
    charcount.style.border="1px solid red";
  }else{
    charcount.style.border="1px solid green";
  }
})