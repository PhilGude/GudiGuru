var postsApp = angular.module('postsApp', []);

postsApp.controller('PostsListCrtl', function ($scope, $sce) {
  $scope.trustSrc = function(src) {
    return $sce.trustAsResourceUrl(src);
  }
  $scope.posts = [
      {
     'title': 'The Kraken will eat you',
     'date': 'Friday, the 15th April 2017',
     'intro':'My dear cousin Dimitri released with Vouipe his fourth cd. Being the mix enginineer was fun. Its quite a family business now :-)',
     'iframe':'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/320795628&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false',
     'class':'mdl-card on-the-road-again mdl-cell mdl-cell--12-col'
    },
    {
     'title': 'Is This real Life ?',
     'date': 'Friday, the 10th April 2015',
 	   'intro':'I have been helping my good friend Organ Mug on his latest record Is This Real Life? The record was made during a worldtour and discussing eq and compression between switzerland, India, Sri Lanka and Japan was good fun. Go discover his fantastic music',
  	 'iframe':'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/200551259&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false',
     'class':'mdl-card on-the-road-again mdl-cell mdl-cell--12-col'
  	},
  	{
  	 'title': 'Vouipe - Moop',
     'date': 'Saturday, the 17th January 2015',
 	   'intro':'The Swiss band Vouipe released there third opus. I was involved as mix engineer and drummer. The songs Medicament is broadcasted at the swiss radio couleur 3.',
  	 'iframe':'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/133268807&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false',
      'class':'mdl-card shopping mdl-cell mdl-cell--12-col'
  	},
    {
     'title': 'Nandeyanen!? (Original Game Soundtrack)',
     'date': 'Thursday, the 1st January 2015',  
     'intro':'Tchagata Games released the original game soundtrack of the video game Nandeyanen!? I proudly composed and mixed 5 songs for the games.',
     'iframe':'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/184784596&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false',
     'class':'mdl-card coffee-pic mdl-cell mdl-cell--12-col'
    }
  ];
});