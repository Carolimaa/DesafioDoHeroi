let nomeDoHeroi = "Ralph"
let xp = 5000
let nivel = " "

let mensagemNivel = "";
  
  if (heroi.quantidadeXp <= 1000) {
    mensagemNivel = "Ferro";
  } else if (heroi.quantidadeXp > 1000 && heroi.quantidadeXp <= 2000) {
    mensagemNivel = "Bronze";
  } else if (heroi.quantidadeXp > 2000 && heroi.quantidadeXp <= 5000) {
    mensagemNivel = "Prata";
  } else if (heroi.quantidadeXp > 6000 && heroi.quantidadeXp <= 7000) {
    mensagemNivel = "Ouro";
  } else if (heroi.quantidadeXp > 7000 && heroi.quantidadeXp <= 8000) {
    mensagemNivel = "Platina";
  } else if (heroi.quantidadeXp > 8000 && heroi.quantidadeXp <= 9000) {
    mensagemNivel = "Ascendente";
  } else if (heroi.quantidadeXp > 9000 && heroi.quantidadeXp <= 10000) {
    mensagemNivel = "Imortal";
  } else if (heroi.quantidadeXp >= 10001) {
    mensagemNivel = "Radiante";
  }

  console.log("O Herói de nome " + heroi.nome + " está no nível de " + mensagemNivel);