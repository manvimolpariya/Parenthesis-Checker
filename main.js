let stack = new Array();
let current=-1;
let index=-1;
let hold;

function paranthesischecker(){
    let inputtxt =document.getElementById("input-txt");
    let indexof =document.getElementById("index");
   
let p=inputtxt.value;
if(p.length==""){
    false;
}

indexof.style.display="none";
    for(let i=0;i<p.length;i++){
      
indexof.style.display="block";
        ++index;
        hold=p.charAt(i);
        if(openParanthesis(hold)){
            current++;
            stack.push(hold); 
         
        }
        else{
           if(isEmpty()){
        
           indexof.innerHTML= `pair not matched at position :${index} of &nbsp"${hold}"`;
           stack.length=0;
      index=-1;
      inputtxt.value="";
           return false ;
           }
            else if(!ismatching(stack[stack.length-1],hold)){
                let temp=stack[stack.length-1];
                indexof.innerHTML= `pair not matched at position :${index} of &nbsp "${temp}"`;
                stack.length=0;
      index=-1;
      inputtxt.value="";
                return false;
            }else if (ismatching(stack[stack.length-1],hold)){
                stack.pop();
            }
            else{
                indexof.innerHTML= `pair not matched`;
                return false;
            }
        }
    } 
    let temp = stack[stack.length-1];
    inputtxt.value="";
    if(stack.length==1 && hold=='('){
        indexof.innerHTML= `pair not matched for &nbsp "${temp}"`;
        stack.length=0;
        index=-1;
        return false;
    }
   else if(stack.length>1 && hold=='('){
        indexof.innerHTML= `pair not matched for &nbsp "${temp}"`;
        stack.length=0;
        index=-1;
        return false;
    }
   else if(stack.length==1 && hold=='{'){
        indexof.innerHTML= `pair not matched for &nbsp "${temp}"`;
        stack.length=0;
        index=-1;
        return false;
    }
   else if(stack.length>1 && hold=='{'){
        indexof.innerHTML= `pair not matched for &nbsp "${temp}"`;
        stack.length=0;
        index=-1;
        return false;
    }
   else if(stack.length==1 && hold=='['){
        indexof.innerHTML= `pair not matched for &nbsp "${temp}"`;
        stack.length=0;
        index=-1;
        return false;
    }
   else if(stack.length>1 && hold=='['){
        indexof.innerHTML= `pair not matched for &nbsp "${temp}"`;
        stack.length=0;
        index=-1;
        return false;
    }
   else if(stack.length ==0){
       indexof.innerHTML="All pairs are matched";
      stack.length=0;
      index=-1;
      return false;
    }
  else  if(stack.length >0){
     
        indexof.innerHTML= `pair not matched at position :${index+1} of &nbsp "${temp}"`;
        stack.length=0;
        index=-1;
        return false;
    }   
}
console.log(stack);
function ismatching(a,b){
if(a=='(' && b==')'){
    return true;
}
 else if (a=='{' && b=='}') { return true}
else if (a=='[' && b==']'){ return true}
else{
  return false;
}
}
function openParanthesis(item){
  if(item=="(" || item=="{" || item=="[")
  {
    return true;
  }
}
function isEmpty(){
    if(stack.length==0){
        return true ;
    }
    return false;
}
paranthesischecker();
function clearPage(){
    let inputtxt =document.getElementById("input-txt");
    let indexof =document.getElementById("index");
   inputtxt.value="";
   indexof.innerHTML="";
}