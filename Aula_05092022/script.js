let b = document.getElementById("botao");
b.addEventListener('click', function (){
	function Carro(marca, modelo, ano, cor, kilometragem, valor){
		this.marca = marca;
		this.modelo = modelo;
		this.ano = ano;
		this.cor = cor;
		this.kilometragem = kilometragem;
		this.valor = valor;			
	}
	
	let marca = document.querySelector("#marca").value;
	let modelo = document.querySelector("#modelo").value;
	let ano = document.querySelector("#ano").value;
	let cor = document.querySelector("#cor").value;
	let kilometragem = document.querySelector("#km").value;
	let valor = document.querySelector("#fipe").value;
	
	let dataAtual = new Date();
	let anoAtual = dataAtual.getFullYear();
	
	let carro = new Carro(marca, modelo, ano, cor, kilometragem, valor);
	
	function anosUtilização(ano, atual){
		idadeVeiculo = atual - ano;
		return idadeVeiculo;
	}
	
	let idade = anosUtilização(ano, anoAtual);
	
	function valorMercado(anosUtilizados, qtdeKm, preco){
		let media = qtdeKm / anosUtilizados;
		
		if (media < 30000){
			return preco * 1.1;
		} else if ( media >= 30000 & media < 50000){
			return preco * 1;
		} else {
			return preco * 0.9;
		}
	}
	
	document.write("O veículo possui " + idade + " anos de uso.");
	
	
	
	document.write("Seu valor de mercado é " + valorMercado(idade, kilometragem, valor) + ".");
	
});
