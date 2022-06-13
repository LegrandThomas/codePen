function affiche(){
    let html=document.getElementById("HTML").value;
    let css="<style>"+document.getElementById("CSS").value+"</style>";
    let js="<script>"+document.getElementById("JS").value+"</script>";
    let code=document.getElementById("code").contentWindow.document;

     code.open();
     code.write(html+css+js);
     code.close();
}