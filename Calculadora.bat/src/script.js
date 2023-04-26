function limparResultado() {
            document.getElementById("resultado").innerHTML = "";
            document.getElementById("explicacao").innerHTML = "";
        }   
		function calcular() {
			// Captura os valores dos catetos
			var cateto1 = parseFloat(document.getElementById('cateto1').value);
            var cateto2 = parseFloat(document.getElementById('cateto2').value);
			
			// Calcula a hipotenusa
			var hipotenusa = Math.sqrt(cateto1 * cateto1 + cateto2 * cateto2);
			
			// Atualiza o resultado na tela
			document.getElementById('hipotenusa').innerHTML = hipotenusa.toFixed(2);
			
			// Exibe a seção do resultado e da explicação
			document.getElementById('resultado').style.display = 'block';
			document.getElementById('explicacao').style.display = 'block';
			
			// Adiciona a classe de animação
            document.getElementById('resultado').classList.add('mostrar');
			
			// Atualiza a explicação na tela
			var explicacao = document.getElementById('explicacao');
			explicacao.innerHTML = '';
			var p1 = document.createElement('p');
			p1.innerHTML = 'Para calcular a hipotenusa, utilizamos o Teorema de Pitágoras:';
			explicacao.appendChild(p1);
			var p2 = document.createElement('p');
			p2.innerHTML = 'hipotenusa² = cateto1² + cateto2²';
			explicacao.appendChild(p2);
			var p3 = document.createElement('p');
			p3.innerHTML = 'Substituindo pelos valores inseridos, temos:';
			explicacao.appendChild(p3);
			var p4 = document.createElement('p');
			p4.innerHTML = 'hipotenusa² = ' + cateto1 + '² + ' + cateto2 + '²';
			explicacao.appendChild(p4);
			var p5 = document.createElement('p');
			p5.innerHTML = 'hipotenusa² = ' + (cateto1 * cateto1).toFixed(2) + ' + ' + (cateto2 * cateto2).toFixed(2);
			explicacao.appendChild(p5);
			var p6 = document.createElement('p');
			p6.innerHTML = 'hipotenusa² = ' + (cateto1 * cateto1 + cateto2 * cateto2).toFixed(2);
			explicacao.appendChild(p6);
			var p7 = document.createElement('p');
			p7.innerHTML = 'hipotenusa = √' + (cateto1 * cateto1 + cateto2 * cateto2).toFixed(2);
			explicacao.appendChild(p7);
			var p8 = document.createElement('p');
			p8.innerHTML = 'hipotenusa = ' + hipotenusa.toFixed(2);
			explicacao.appendChild(p8);
			
			return false;
    }