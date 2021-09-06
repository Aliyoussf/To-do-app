let addBtn = document.getElementById('addBtn');
let taskinput = document.getElementById('taskinput');
let notasks = document.getElementById('notasks');
let alltasks = document.getElementById('alltasks');



let notasksShow = ()=>{
  if(alltasks.childElementCount > 0){
    notasks.classList.add('none')
}
else{
  notasks.classList.remove('none')
}
  }


let addtask = ()=>{
  let  taskdata = taskinput.value
  if(taskdata. trim() == ""   ){
   alert("you must enter valied data")
  }else{
    
      notasks.classList.add('none')
      alltasks.innerHTML +=`
      <div class="alert alert-info">  ${taskdata}  <i class=" float-right delete    fas fa-trash-alt" style="font-size: 20px;"></i> </div>`
      taskinput.value= "";

  }
}

 addBtn.addEventListener('click' , addtask);



 document.addEventListener('click' , (e)=>{
if(e.target.classList.contains('delete')){
  e.target.parentElement.remove();
  notasksShow();
}

 })