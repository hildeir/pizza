window.onload = inicia;
function inicia() {
	//fechar o  box do moddaal
	document.querySelector(".fechar-box").addEventListener("click",function(){
		document.querySelector('.modal').style.display = "none";

	});	
	
	document.querySelector(".cont-carrinho").addEventListener("click",()=>{
		document.querySelector("aside").style.display = "block";
	});
	document.querySelector(".fechar-mobile").addEventListener("click",()=>{
		document.querySelector("aside").style.display = "none";
	})

	
	/// coloca os nommes da pizza no html ///
	let pizzasNomes = document.querySelectorAll(".nomePizza");
	for (var i = 0; i < pizzasNomes.length; i++) {
		pizzasNomes[i].innerHTML = pizzajson[i].nome;
	}
	/// fimm ////


	////  coloca as imaagens da pizza no html
	let pizzasImg = document.querySelectorAll(".img-pizza img");
	for (var i = 0; i < pizzasImg.length; i++) {
		pizzasImg[i].setAttribute("src",pizzajson[i].img); 
	}
	////ffim

	////  preco graandde da pizza no html
	let pizzaG = document.querySelectorAll(".pizzaG");
	for (var i = 0; i < pizzaG.length; i++) {
		let ret = pizzajson[i].tpreco("g");
		pizzaG[i].innerHTML = ` R$:${ret[1].toFixed(2)}`;
	}
	////ffim

	////  preco meddio da pizza no html
	let pizzaM = document.querySelectorAll(".pizzaM");
	for (var i = 0; i < pizzaM.length; i++) {
		let ret = pizzajson[i].tpreco("m");
		pizzaM[i].innerHTML = ` R$:${ret[1].toFixed(2)}`;
	}
	////ffim

	////  preco pequeno da pizza no html
	let pizzaP = document.querySelectorAll(".pizzaP");
	for (var i = 0; i < pizzaP.length; i++) {
		let ret = pizzajson[i].tpreco("m");
		pizzaP[i].innerHTML = ` R$:${ret[1].toFixed(2)}`;
	}
	////ffim
	verificaQuantCarrinho();
}	

function tamPizza(ele){
	let eleAll = document.querySelectorAll(".inline");

	for (var i = 0; i < eleAll.length; i++) {
		let r = eleAll[i].classList.remove("selected");
	}
	ele.classList.add("selected");
	/* tira  o hovverr quandoo o ellementoo  estiiveerr selecionnado */
	let keyT = ele.getAttribute("data-key");
	let classe;
	if(keyT == "0"){
		classe = "grande-hover";
		let m = document.querySelector(".media");
		let hoverM = m.classList.contains("media-hover");
		if(hoverM == false){
			m.classList.add("media-hover");
		}

		let p = document.querySelector(".pequena");
		let hoverP = p.classList.contains("pequena-hover");
		if(hoverP == false){
			p.classList.add("pequena-hover");
		}

	}
	if(keyT == "1"){
		classe = "media-hover";
		let g = document.querySelector(".grande");
		let hoverG = g.classList.contains("grande-hover");
		if(hoverG == false){
			g.classList.add("grande-hover");
		}

		let p = document.querySelector(".pequena");
		let hoverP = p.classList.contains("pequena-hover");
		if(hoverP == false){
			p.classList.add("pequena-hover");
		}
	}
	if(keyT == "2"){
		classe = "pequena-hover";
		let g = document.querySelector(".grande");
		let hoverG = g.classList.contains("grande-hover");
		if(hoverG == false){
			g.classList.add("grande-hover");
		}

		let m = document.querySelector(".media");
		let hoverM = m.classList.contains("media-hover");
		if(hoverM == false){
			m.classList.add("media-hover");
		}
	}
	ele.classList.remove(classe);
	/*// fim //*/

	let tamPizza = ele.getAttribute("data-key");
	document.querySelector(".box").setAttribute("data-tam-pizza",tamPizza);
	
	let idPizza = document.querySelector(".box").getAttribute("data-id-pizza");
	let t;
	if(tamPizza == 0){
		t = "g";
	}
	if(tamPizza == 1){
		t = "m";
	}
	if(tamPizza == 2){
		t = "p";
	}
	let pizza = pizzajson[idPizza].tpreco(t);
	let pizzaPreco = pizza[1];
	
	document.querySelector(".box .preco").innerHTML = `R$: ${pizzaPreco.toFixed(2)}`;
}
function abrir(x){
	//seta o id 
	document.querySelector(".box").setAttribute("data-id-pizza",x);
	//fim id
	//limpaa, deepois seta o selected no tamanho dda pizza grandde
	let eleAll = document.querySelectorAll(".inline");

	for (var i = 0; i < eleAll.length; i++) {
		let r = eleAll[i].classList.remove("selected");
	}
	document.querySelector(".grande").classList.add("selected");
	///fimmm
	let ele = document.querySelectorAll(".item-pizza");
	//abrrir o modaal
	document.querySelector('.modal').style.display = "flex";
	for (var i = 0; i < ele.length; i++) {
		if(i == x){
			let srcPizza = ele[x].querySelector("img").getAttribute('src');
			document.querySelector(".fotoPizza img").setAttribute("src",srcPizza);
			let pizza1 = pizzajson[x].tpreco("g");
			let pizzaGrG = pizza1[0];
			let pizzaTamGpreco = pizza1[1];

			let pizza2 = pizzajson[x].tpreco("m");
			let pizzaGrM = pizza2[0];
			let pizzaTamMpreco = pizza2[1];

			let pizza3 = pizzajson[x].tpreco("p");
			let pizzaGrP = pizza3[0];
			let pizzaTamPpreco = pizza3[1];

			/*
			let pizzaM =  pizzajson[x].size[1];
			let pizzaP = pizzajson[x].size[2];
			*/
			document.querySelector(".grande small").innerHTML = pizzaGrG;
			document.querySelector(".media small").innerHTML = pizzaGrM;
			document.querySelector(".pequena small").innerHTML = pizzaGrP;

			document.querySelector(".nome-pizza-box h2").innerHTML = pizzajson[x].nome;
			document.querySelector(".desc-pizza-box").innerHTML = pizzajson[x].desc;

			//por paddrao o preco vaai ser da grande
			document.querySelector(".preco").innerHTML =  `R$: ${pizzaTamGpreco.toFixed(2)}`;
		}
		
	}
	
}
function adicionarCarr(){
	//fechar o box
	document.querySelector(".modal").style.display = "none";
	//fimmm
	//tirra a margem dirreita do container///
	document.querySelector(".container").classList.add("margem-right");
	//fimmmm
	let id = document.querySelector(".box").getAttribute("data-id-pizza");

	let aside = document.getElementsByTagName("aside")[0];
	
	let modelItemCarr = document.querySelector(".model-item-carr");
	let localItemCarr = document.querySelector(".carr-pizza");
	let clone = modelItemCarr.cloneNode(true);
	clone.style.display = "flex";
	clone.querySelector("img").setAttribute("src",pizzajson[id].img);
	clone.querySelector(".nome-pizza-carr").innerHTML = pizzajson[id].nome;
	let tamPizza = document.querySelector(".box").getAttribute("data-tam-pizza");
	let tamPizzaInt = parseInt(tamPizza);

	let x = pizzajson[id].size;
	let nomeT = pizzajson[id].size[tamPizzaInt];
	let posicaoT = x.indexOf(nomeT);
	let t;
	let T;
	if(posicaoT == 0){
		t = "(G)";
		T = "g";
	}
	if(posicaoT == 1){
		t = "(M)";
		T = "m";
	}
	if(posicaoT == 2){
		t = "(P)";
		T = "p";
	}
	clone.querySelector('.tamanho-carr').innerHTML = t;
	let vquant = document.querySelector(".q-box span").innerText;
	clone.querySelector(".add-carr span").innerHTML = vquant;

	let resultPizza = pizzajson[id].tpreco(T);
	let preco = resultPizza[1];


	clone.setAttribute("data-carr-id",id);
	clone.setAttribute("data-preco-pizza",preco);
	clone.setAttribute("data-quant-pizza",vquant);
	localItemCarr.appendChild(clone);
	/* seta os valorees para o padrao, taamanho daa pizza graande e a  quantidadde para 1*/
	document.querySelector(".box").setAttribute("data-tam-pizza",0);
	document.querySelector(".q-box span").innerHTML = 1;
	
	//-------quando for mobile aparece a barra de carrinho--------------
	let tamanhoTela = window.innerWidth;
	if(tamanhoTela < 425){
		let resultado = calculaTotal();
		if(resultado > 0){
			document.querySelector(".cont-carrinho").style.display = "flex";
		}else{
			document.querySelector(".cont-carrinho").style.display = "none";
		}
		
	}else{
		let container = document.querySelector('.container');
		aside.style.display =  'block';
	}
	//----------- fim ----------- 
	calculaTotal();
	calculaQuantItemCarrinho();
}
function aum(e){
	let carrinho = e.target.closest(".add-carr");
	let modal = e.target.closest(".q-box");
	
	if(carrinho !== null){
		let v = carrinho.querySelector("span").innerText;
		let vint = parseInt(v);
		let aumenta = vint += 1;
		carrinho.querySelector("span").innerHTML = aumenta;
		/* atualizo o novo vaalor dee quantidade da pizza no item pizza no caarrinho de compras */
		let eleItemPizza = e.target.closest(".model-item-carr");
		eleItemPizza.setAttribute("data-quant-pizza",aumenta);
	}
	if(modal !== null){
		let v = modal.querySelector("span").innerText;
		let vint = parseInt(v);
		let aumenta = vint += 1;
		modal.querySelector("span").innerHTML = aumenta;

	}

	calculaTotal();
	calculaQuantItemCarrinho();
}
function dim(e){
	let carrinho = e.target.closest(".add-carr");
	let modal = e.target.closest(".q-box");
	if(carrinho !== null){
		let v = carrinho.querySelector("span").innerText;
		let vint = parseInt(v);
		if(vint >= 1){
			let aumenta = vint -= 1;
			carrinho.querySelector("span").innerHTML = aumenta;
			/* atualizo o novo vaalor dee quantidade da pizza no item pizza no caarrinho de compras */
			let eleItemPizza = e.target.closest(".model-item-carr");
			eleItemPizza.setAttribute("data-quant-pizza",aumenta);
		}
		
	}
	if(modal !== null){
		let v = modal.querySelector("span").innerText;
		let vint = parseInt(v);
		if(vint > 1){
			let aumenta = vint -= 1;
			modal.querySelector("span").innerHTML = aumenta;
		}
	}
	calculaTotal();
	calculaQuantItemCarrinho();
	verificaQuantCarrinho();
	exclui(e);
}
function calculaTotal(){
	
	let itemCarr = document.querySelectorAll('.carr-pizza .model-item-carr');
	let total = 0;
	for (var i = 0; i < itemCarr.length; i++) {
		let preco = parseInt(itemCarr[i].getAttribute("data-preco-pizza"));
		let quant = parseInt(itemCarr[i].getAttribute("data-quant-pizza"));
		
		total += (preco* quant);
	
	}
	document.querySelector(".totalCarr").innerHTML = `R$: ${total.toFixed(2)}`;
	/*fecha o carrinho */
	if(total == 0){
		let aside = document.getElementsByTagName("aside")[0];
		let container = document.querySelector(".container");
		aside.style.display = "none";
		container.classList.remove("margem-right");
	}
	return total;
	
}
function exclui(e){
	/* impede de carrega aa pagina por causa do a href*/
	e.preventDefault();
	/* fim */
	let idPizzaCarr = e.target.closest(".model-item-carr");
	idPizzaCarr.setAttribute("data-quant-pizza",0);
	calculaTotal();

	idPizzaCarr.remove();
	calculaQuantItemCarrinho();
	verificaQuantCarrinho();
}
function calculaQuantItemCarrinho(){
	let itemCarr = document.querySelectorAll('.carr-pizza .model-item-carr');
	let total = 0;
	for (var i = 0; i < itemCarr.length; i++) {
		let quant = parseInt(itemCarr[i].getAttribute("data-quant-pizza"));
		
		total += quant;
	
	}
	document.querySelector(".carrinho-quant").innerHTML = total;
}
function verificaQuantCarrinho(){
	let resultado = calculaTotal();
	let tamanhoTela = window.innerWidth;
	
	if(tamanhoTela < 425){
		if(resultado <= 0){
			document.querySelector(".cont-carrinho").style.display = "none";
		}else{
			document.querySelector(".cont-carrinho").style.display = "flex";
		}
		
	}

}