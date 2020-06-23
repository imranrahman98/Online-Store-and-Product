const settitlebutton = document.querySelector('.settitle');
settitlebutton.addEventListener('click', settitle);
const title=document.querySelector('.titleContant');
const label1=document.querySelector('.lab1');

function settitle(){
  pagetitle=document.createElement('title');
  pagetitle.textContent=title.value;
  document.body.appendChild(pagetitle);
  header1=document.createElement('h1');
  header1.textContent=title.value;
  document.body.appendChild(header1);
  Counter=1;

  remove();
  }

function remove(){
  label1.parentNode.removeChild(label1);
  settitlebutton.parentNode.removeChild(settitlebutton);
  title.parentNode.removeChild(title);
  addproductform();
  }

  newline=document.createElement('br');
  lable1=document.createElement('lable');
  input1=document.createElement('input');
  submit1=document.createElement('button');
  pproduct=document.createElement('p');

function addproductform(){
  input1.value.length=0;
  lable1.textContent='Enter your 5 product list:';
  document.body.appendChild(lable1);
  document.body.appendChild(newline);
  lable1.textContent='Please add product:';
  document.body.appendChild(input1);
  document.body.appendChild(newline);
  submit1.textContent='Add product:';
  document.body.appendChild(submit1);
  submit1.addEventListener('click',addyourProduct);
  addyourProduct();
  }

function addyourproduct(){
  if(input1.value.length==0 || input1.value=='Please add product'){
    input1.value='please add product';
  }

  else{
  if (Counter <=5){
    pproduct= document.createElement('p');
    pproduct.textContent=Counter + '. ' + input.value;
    document.body.appendChild(pproduct);
    document.body.appendChild(newline);
    input1.value='Please add product';
    Counter=Counter+1;
  }
  if (Counter >5){
    input1.parentNode.removeChild(input1);
    lable1.parentNode.removeChild(lable1);
    submit1.parentNode.removeChild(submit1);
  }
}
}
