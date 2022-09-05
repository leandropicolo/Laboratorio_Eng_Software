function Palindromo(){
			let palavra = document.querySelector("#texto");
			let texto = palavra.value;
			texto = texto.split(" ").join("").normalize("NFD").replace(/[^a-zA-Z\s]/g, "").toUpperCase();
			let palindromo = "";
			
			for(let i = texto.length - 1; i >= 0; i--) {
			   palindromo += texto[i];
			}
			if (texto == palindromo) {
			   alert("A PALAVRA " + texto + " É UM PALÍNDROMO");
			} else {
			   alert("A PALAVRA " + texto + " NÃO É UM PALÍNDROMO");
			}
		}
