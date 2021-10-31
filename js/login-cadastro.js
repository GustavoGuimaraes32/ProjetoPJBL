usuario = [];
listaUsuario = [];

/* ~-~-~-~-~- Cadastro ~-~-~-~-~- */

window.onload = function()
{
    if(JSON.parse(window.localStorage.getItem('Cadastro')) != undefined)
    {
        listaUsuario = JSON.parse(window.localStorage.getItem('Cadastro'));
    }
    else
    {
        listaUsuario = [];
    }
}

function cadastro()
{
    var nome = document.getElementById("nome").value;
    var sobrenome = document.getElementById("sobrenome").value;
    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;
    var confirmSenha = document.getElementById("confirmSenha").value;

    if(nome.length < 2)
    {
        alert("O nome precisa ter no mínimo 2 caracteres");
    }
    if(sobrenome.length < 4)
    {
        alert("Sobrenome precisa ter no mínimo 4 caracteres");
    }
    if(email.indexOf("@") == -1)
    {
        alert('Deve possuir "@" para validar o e-mail');
    }
    if(senha.length < 8)
    {
        alert("Sua senha deve ter no mínimo 8 digitos");
    }
    if(senha == "senha")
    {
        alert("Sua senha não pode ser 'senha'");
    }
    if(confirmSenha != senha)
    {
        alert("Confirmar senha deve ser igual a senha");
    }

    if(nome.length >= 2 && sobrenome.length >= 4 && email.indexOf("@") != -1 && senha.length >= 8 && senha != "senha" && confirmSenha == senha)
    {
        usuario.push(nome);
        usuario.push(sobrenome);
        usuario.push(email);
        usuario.push(senha);
        usuario.push(confirmSenha);

        listaUsuario.push(usuario);
        console.log(listaUsuario);
        window.localStorage.setItem("Cadastro", JSON.stringify(listaUsuario));

        alert("Cadastro realizado com sucesso!");
    }

    document.getElementById("nome").value = "";
    document.getElementById("sobrenome").value = "";
    document.getElementById("email").value = "";
    document.getElementById("senha").value = "";
    document.getElementById("confirmSenha").value = "";
}

function Login()
{
    for(var i = 0; i < listaUsuario.length; i++)
    {
        var nomeLogin = document.getElementById("nomeLogin").value;
        var senhaLogin = document.getElementById("senhaLogin").value;

        if(nomeLogin != listaUsuario[i][0])
        {
            alert("Nome de Usuário inválido!");
        }
        if(senhaLogin == listaUsuario[i][3])
        {
            alert("Senha inválida!");
        }
        if(nomeLogin == listaUsuario[i][0] && senhaLogin == listaUsuario[i][3])
        {
            alert("Login realizado com sucesso!");
            window.location.href = "../index.html";
        }
    }
}