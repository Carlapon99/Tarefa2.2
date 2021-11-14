var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider

  .when('/', {
    templateUrl : 'pages/quemsoueu.html',
    controller  : 'QuemSouEuController'
  })

  .when('/oquefaco', {
    templateUrl : 'pages/oquefaco.html',
    controller  : 'OQueFacoController'
  })

  .when('/hobbies', {
    templateUrl : 'pages/hobbies.html',
    controller  : 'HobbiesController'
  })

  .otherwise({redirectTo: '/'});
});

app.controller('QuemSouEuController', function($scope) {
  $scope.message = 'Olá! Eu sou a Carla, tenho 22 anos e sou da ilha da Madeira.';
});

app.controller('OQueFacoController', function($scope) {
  $scope.message = 'Sou licenciada em engenharia informática e estou neste momento a realizar um estágio profissional.';
});

app.controller('HobbiesController', function($scope) {
  $scope.message = 'Tenho diversos hobbies que pratico nas minhas horas livres, tais como : visualização de séries e filmes; ida ao ginásio; passear com a minha família e amigos.';
});
