const questions=[
  {q:"喜欢颜色？",a:["红","蓝","粉"],c:2}
];

let i=0;

function load(){
  if(i>=questions.length){
    window.location="cake.html";
    return;
  }

  document.getElementById("question").innerText=questions[i].q;

  let box=document.getElementById("options");
  box.innerHTML="";

  questions[i].a.forEach((t,idx)=>{
    let b=document.createElement("button");
    b.innerText=t;
    b.onclick=()=>{
      if(idx==questions[i].c){
        i++;load();
      }else{
        alert("再想想～");
      }
    };
    box.appendChild(b);
  });
}

load();
