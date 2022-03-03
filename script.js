function pegarDados(){
    let row = document.querySelector('hr'); 
    row.classList.add('show'); 

	let result = document.querySelector('.hide'); 
    result.classList.remove('hide'); 
    result.classList.add('show');

    let camText = document.getElementById("texto").value;
    document.getElementById("camText").innerHTML = ("Seu nome:" + camText);
    let camTel = document.getElementById("fone").value;
    document.getElementById("camTel").innerHTML = ("Seu telefone:" + camTel);
    let camEmail = document.getElementById("e-mail").value;
    document.getElementById("camE-mail").innerHTML = ("Seu E-mail:" + camEmail);
    let camSenha = document.getElementById("senha").value;
    document.getElementById("camSenha").innerHTML = ("Sua senha:" + camSenha);

    let PriFaixa = document.getElementById("PriFaixa").value;
    document.getElementById("prifaixa").innerHTML = ("Valor da 1ª faixa:" + PriFaixa);

    let checkbox_info = document.getElementById("info");
    let checkbox_adm = document.getElementById("adm");
    let checkbox_enf = document.getElementById("enf");

    if(checkbox_info.checked){
        document.getElementById("campoinfo").innerHTML = ("Seu curso é: Informática")
    }if(checkbox_adm.checked){
        document.getElementById("campoadm").innerHTML = ("Seu curso é: Administração")
    }if(checkbox_enf.checked){
        document.getElementById("campoenf").innerHTML = ("Seu curso é: Enfermagem")
    }


    if(document.getElementById("info2").checked){
        document.getElementById("camRadio").innerHTML = ("Seu curso é: Informática");
    }else if(document.getElementById("adm2").checked){
        document.getElementById("camRadio").innerHTML = ("Seu curso é: Administração");
    }else if(document.getElementById("enf2").checked){
        document.getElementById("camRadio").innerHTML = ("Seu curso é: Enfermagem");
    }

    let ocult = document.getElementById("oculto").value;
    document.getElementById("campooculto").innerHTML = ("Valor oculto: " + ocult);


    let number = document.getElementById("num").value;
    document.getElementById("camponum").innerHTML = ("Campo do Tipo Number: " + number);


    let data = document.getElementById("data").value;
    document.getElementById("campodata").innerHTML = ("Campo de Data: " + data);    


    let hora = document.getElementById("hora").value;
    document.getElementById("campohora").innerHTML = ("Campo de Hora: " + hora);    


    let range = document.getElementById("range").value;
    document.getElementById("camporange").innerHTML = ("Valor Hange/Range: " + range);    
}