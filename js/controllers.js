var postsApp = angular.module('postsApp', []);

postsApp.controller('PostsListCrtl', function ($scope, $sce) {
  $scope.trustSrc = function(src) {
    return $sce.trustAsResourceUrl(src);
  }
  $scope.posts = [
    {
     'title': 'Is This real Life ?',
     'date': 'Friday, the 10th April 2015',
 	   'intro':'I have been helping my good friend Organ Mug on his latest record Is This Real Life? The record was made during a worldtour and discussing eq and compression between switzerland, India, Sri Lanka and Japan was good fun. Go discover his fantastic music',
  	 'iframe':'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/200551259&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false'
  	},
  	{
  	 'title': 'Vouipe - Moop',
     'date': 'Saturday, the 17th January 2015',
 	   'intro':'The Swiss band Vouipe released there third opus. I was involved as mix engineer and drummer. The songs Medicament is broadcasted at the swiss radio couleur 3.',
  	 'iframe':'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/133268807&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false'
  	},
    {
     'title': 'Nandeyanen!? (Original Game Soundtrack)',
     'date': 'Thursday, the 1st January 2015',  
     'intro':'Tchagata Games released the original game soundtrack of the video game Nandeyanen!? I proudly composed and mixed 5 songs for the games.',
     'iframe':'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/184784596&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false'
    }
  ];
});