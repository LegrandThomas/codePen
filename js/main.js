function affiche(){
    let html=document.getElementById("HTML").value;
    let css="<style>"+document.getElementById("CSS").value+"</style>";
    let js="<script>"+document.getElementById("JS").value+"</script>";
    let code=document.getElementById("code").contentWindow.document;
    let compteur=document.getElementById("code").innerHTML;
    let test = html.replace(/(<([^>]+)>)/gi, "");
    


     code.open();
     code.write(html+css+js);
     compteur=html.length;
     //console.log(compteur);
     code.close();
     //console.log(test);

   
   }

     document.getElementById('HTML').addEventListener('keyup', function() {
        let y=document.getElementById("y").innerHTML;
        let progressBar=document.getElementById("progressBar");
        
        

        y=document.getElementById("HTML").value.replace(/(<([^>]+)>)/gi, "");
        document.getElementById('compteur').innerHTML =y.length;
        let num= y.length/2;
        progressBar.value=num;
   
       
    
        // console.log(progressBar);
        // console.log(y.length);
    });

    let baliseB=document.getElementById('b').addEventListener('click',function(){
      let html=document.getElementById("HTML").value+="<b></b>";
    });
  
    let baliseh=document.getElementById('h').addEventListener('click',function(){
      let html=document.getElementById("HTML").value+="<h1></h1>";
    });
  
    let balisea=document.getElementById('a').addEventListener('click',function(){
      let html=document.getElementById("HTML").value+="<a></a>";
    });
   
    let f=document.getElementById('section').addEventListener('click',function(){
      let spinner=document.getElementById("infinity-loader");
         spinner.className = "test";
        // console.log(spinner.className);
    });


        const boxes = document.querySelectorAll('textarea');
        boxes.forEach(box => {
        box.addEventListener('click', function handleClick(event) {
        let spinner=document.getElementById("infinity-loader");
        spinner.className = "infinity-loader";  
  });
});

let color
let defaultColor = "#0000ff";

window.addEventListener("load", startup, false);
   
function startup() {
  color = document.querySelector("#color");
  color.value = defaultColor;
  color.addEventListener("input", updateFirst, false);
  color.addEventListener("change", updateAll, false);
  color.select();
}
function updateFirst(event) {
  var p = document.querySelector("textarea");

  if (p) {
    p.style.color = event.target.value;
  }
}
function updateAll(event) {
  document.querySelectorAll("HTML").forEach(function(textarea) {
    textarea.style.color = event.target.value;
    
  
  });
}


let color1=document.getElementById('color1').addEventListener('click',function(){
  let css=document.getElementById("CSS").value+="color: green";
});

let color2=document.getElementById('color2').addEventListener('click',function(){
  let css=document.getElementById("CSS").value+="color: yellow";
});

let color3=document.getElementById('color3').addEventListener('click',function(){
  let css=document.getElementById("CSS").value+="color: red";
});

