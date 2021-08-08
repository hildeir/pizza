let pizzajson = [
	{id:0,img:"imagenspizza/pizza.png",nome:"Mussarela",desc:"Muita saborasa e cremosa com gosto de uva,nao perca o tempo e aproveite",size:["700g","500g","300g"],
		tpreco:function(pizzaTam){
			if(pizzaTam == "g"){
				let resul = ["700g",560.00];
				return resul;
			}
			if(pizzaTam == "m"){
				let resul = ["500g",270.00];
				return resul;
			}
			if(pizzaTam == "p"){
				let resul = ["300g",100.00];
				return resul;
			}
		}
	},
	{id:1,img:"imagenspizza/pizza2.png",nome:"Chocolate",desc:"Muita saborasa e cremosa com gosto de uva",size:["800g","600g","400g"],
		tpreco:function(pizzaTam){
			if(pizzaTam == "g"){
				let resul = ["800g",500.00];
				return resul;
			}
			if(pizzaTam == "m"){
				let resul = ["600g",330.00];
				return resul;
			}
			if(pizzaTam == "p"){
				let resul = ["400g",200.00];
				return resul;
			}
		}
	},
	{id:2,img:"imagenspizza/pizza3.png",nome:"Calabresa",desc:"Muita saborasa e cremosa com gosto de uva,nao perca o tempo e aproveite",size:["700g","500g","300g"],
		tpreco:function(pizzaTam){
			if(pizzaTam == "g"){
				let resul = ["700g",560.00];
				return resul;
			}
			if(pizzaTam == "m"){
				let resul = ["500g",270.00];
				return resul;
			}
			if(pizzaTam == "p"){
				let resul = ["300g",100.00];
				return resul;
			}
		}
	},
	{id:3,img:"imagenspizza/pizza4.png",nome:"Misto",desc:"Muita saborasa e cremosa com gosto de uva",size:["800g","600g","400g"],
		tpreco:function(pizzaTam){
			if(pizzaTam == "g"){
				let resul = ["800g",500.00];
				return resul;
			}
			if(pizzaTam == "m"){
				let resul = ["600g",330.00];
				return resul;
			}
			if(pizzaTam == "p"){
				let resul = ["400g",200.00];
				return resul;
			}
		}
	},
	{id:4,img:"imagenspizza/pizza5.png",nome:"Frango catupiri",desc:"Muita saborasa e cremosa com gosto de uva,nao perca o tempo e aproveite",size:["700g","500g","300g"],
		tpreco:function(pizzaTam){
			if(pizzaTam == "g"){
				let resul = ["700g",560.00];
				return resul;
			}
			if(pizzaTam == "m"){
				let resul = ["500g",270.00];
				return resul;
			}
			if(pizzaTam == "p"){
				let resul = ["300g",100.00];
				return resul;
			}
		}
	},
	{id:5,img:"imagenspizza/pizza6.png",nome:"Leite moça",desc:"Muita saborasa e cremosa com gosto de uva",size:["800g","600g","400g"],
		tpreco:function(pizzaTam){
			if(pizzaTam == "g"){
				let resul = ["800g",500.00];
				return resul;
			}
			if(pizzaTam == "m"){
				let resul = ["600g",330.00];
				return resul;
			}
			if(pizzaTam == "p"){
				let resul = ["400g",200.00];
				return resul;
			}
		}
	}
];