function entrarEmContato(){
    var whatsapp = prompt("Digite seu telefone:");
    document.write("Entraremos em contato com você atravésdo número ",+whatsapp);
}

function conhecaNossaEquipe(){
    var listaEquipe = ["Yasmim", "Guilherme", "Fabricio", "Lucio", "Jessica"];
    var emailEquipe = ["yasmim@gmail.com", "gui@gmail.com", "fabricio@gmail.com", "lucio@gmail.com", "jessica@gmail.com"];
    var opcao = prompt("Digite a opção desejada: 1) listar equipe 2) Listar Equipe + contato");
    var opcaoValida = false;

    while(!opcaoValida){
        switch (opcao){
            case "1":
                for (var i = 0; i<listaEquipe.length; i++){
                    document.write(listaEquipe[i], "<br>");
                }
                opcaoValida = true;
                break;
            case "2":
                for (var i = 0; i<listaEquipe.length; i++){
                    document.write(listaEquipe[i], "<br>");
                    document.write(emailEquipe[i], "<br>");
                }
                opcaoValida = true;
                break;
        default:
            document.write("Opção Inválida.")
            opcao = prompt("Digite 1 ou 2: ")
        }
        
        for (var i = 0; i<listaEquipe.length; i++){
            document.write(listaEquipe[i], "<br>");
            document.write(emailEquipe[i], "<br>");
        }
    }
}