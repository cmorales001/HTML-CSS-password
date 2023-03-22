
const validarFormGestor=()=>{
    let txtNamePassword = document.getElementById("txtNamePassword").value;
    let txtRegPassword = document.getElementById("txtRegPassword").value;
    
    if (txtNamePassword == "" || txtRegPassword == "") {
      var errorElement = document.getElementsByClassName("error")[0];
      errorElement.innerHTML = "Ambos campos son requeridos.";
      return false;
    }
    
    return true;
}

const validarFormGenerador=()=>{
    let txtNamePassword = document.getElementById("txtNamePassword").value;
    let txtRegPassword = document.getElementById("txtRegPassword").value;
    
    if (txtNamePassword == "" || txtRegPassword == "") {
      var errorElement = document.getElementsByClassName("error")[0];
      errorElement.innerHTML = "Ambos campos son requeridos.";
      return false;
    }
    
    return true;
}

