var app = angular.module('personagemModule',[]);
app.controller('personagemControl',function($scope,$http){

var url = 'http://localhost:8080/rpg';

$scope.pesquisar = function(){
	$http.get(url).then(function(response){

		$scope.personagens = response.data;
	}, function(error){
		alert(error);
		console.log(error);

	});
	


}

$scope.pesquisar();

/*$scope.clientes =[

{
'codigo':'1',
 'nome':'carlos',
 'cargo':'professor',
 'endereco':'Rua teste,65,jardim das palmeiras',
 'cidade':'uberlândia',
 'cep':'38400-000',
 'pais':'brasil',
 'telefone':'3333333333',
 'fax':'3233232323'},
 {
 	'codigo':'2',
 	'nome':'Martin Fower',
 	'cargo':'ceo',
 	'endereco':'40,street view, google',
 	'cidade':'miami',
 	'cep':'49494949',
 	'pais':'usa',
 	'telefone':'3333333333',
 	'fax':'3233232323'
 }
] */




$scope.novo = function() {
	$scope.personagem = {};
}

$scope.salvar = function() {
	if(typeof $scope.personagem.codigo == 'undefined'){

		$http.post(url,$scope.personagem).then(function(response){
			$scope.novo();

		}, function (error){
			alert(error);
			console.log(error);
		})
	} else{

		$http.put(url,$scope.personagem).then(function(){
			$scope.pesquisar();
			$scope.novo();

		},function(error){

			alert(error);
			console.log(error);
		});
	}
	
}

$scope.excluir = function() {
	if($scope.personagem.codigo==''){

		alert('escolha um ator');
	}else{
		urlExcluir = url+"/"+$scope.personagem.codigo;
		$http.delete(urlExcluir).then(function(){

			$scope.pesquisar();
			$scope.novo();
		}, function(error){

			alert(error);
			console.log(error);
		});


	}
//$scope.clientes.splice($scope.clientes.indexOf($scope.cliente),1);
//$scope.novo();

}

$scope.seleciona = function(filme) {
	$scope.personagem = filme;
}

});