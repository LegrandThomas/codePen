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
        y=document.getElementById("HTML").value.replace(/(<([^>]+)>)/gi, "");
        document.getElementById('compteur').innerHTML =y.length;
        console.log(y.length);
    });
  
   
  
  










