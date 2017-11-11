usuario.factory('usuarioService', usuarioService);

function usuarioService(uuid) {

  function getAll() {
    return this.usuarios;
  }

  function save(usuario) {
    this.usuarios = this.usuarios.filter(auxiliar => auxiliar.id !== usuario.id);
    this.usuarios.push(usuario);
  }

  function remove(id) {
    this.usuarios = this.usuarios.filter(auxiliar => auxiliar.id !== id);
  }

  function getById(id) {
    var data = this.usuarios.filter(auxiliar => auxiliar.id === id)[0];
    return data;
  }

  function getByPerfil(perfil){
    debugger;
    var data = this.usuarios.filter(auxiliar => auxiliar.perfilId === perfil);
    return data;
  }

  return {
    remove : remove,
    getAll : getAll,
    save : save,
    getById : getById,
    getByPerfil: getByPerfil,
    usuarios : [
        {
            id: 'a360be4a-69a6-40ee-9c48-f500af8408c1',
            nome: "André Luis",
            cpf: "000.000.000-22",
            rg: "555555555",
            dataDeNascimento: "10/10/1990",
            celular: "(44) 9999-9999",
            telefone: "(44) 9999-9999",
            email: "teste@gmail.com",
            sexo: "masculino",
            endereco: {
                cep: "87060330",
                logradouro: "Rua do arame",
                numero: 100,
                bairro: "Jardim Bela Vista",
                complemento: "Jardim bela vista",
                estado: "Paraná",
                cidade: "Maringá"
            },
            status: true,
            usuario: "andre.luis",
            senha: "123mudar",
            imagem: "",
            perfilId: 1
        },
        {
            id: 'b360be4a-69a6-40ee-9c48-f500af8408c1',
            nome: "Gabriel Lopes",
            cpf: "000.000.000-22",
            rg: "555555555",
            dataDeNascimento: "21/02/1996",
            celular: "(44) 9999-9999",
            telefone: "(44) 9999-9999",
            email: "teste@gmail.com",
            sexo: "masculino",
            endereco: {
                cep: "86900000",
                logradouro: "Rua da lapa",
                numero: 100,
                bairro: "Jardim Bela Vista",
                complemento: "Jardim bela vista",
                estado: "Paraná",
                cidade: "Jandaia do Sul"
            },
            status: true,
            usuario: "gabriel.lopes",
            senha: "123mudar",
            imagem: "",
            perfilId: 1
        },
        {
            id: 'c360be4a-69a6-40ee-9c48-f500af8408c1',
            nome: "Zé do gás",
            cpf: "000.000.000-22",
            rg: "555555555",
            dataDeNascimento: "10/10/1990",
            celular: "(44) 9999-9999",
            telefone: "(44) 9999-9999",
            email: "teste@gmail.com",
            sexo: "masculino",
            endereco: {
                cep: "87060330",
                logradouro: "Rua do arame",
                numero: 100,
                bairro: "Jardim Bela Vista",
                complemento: "Jardim bela vista",
                estado: "Paraná",
                cidade: "Maringá"
            },
            status: true,
            usuario: "admin",
            senha: "123mudar",
            imagem: "",
            perfilId: 3
        }
    ]
  };

}
