angular.module('fccDaFrontEndApp')
  .factory('d3Service', ['$document', '$q', '$rootScope', '$window', function($document, $q, $rootScope, $window) {
    return {
      d3: function() {
        var deffered = $q.defer();
        function onScriptLoad() {
          $rootScope.$apply(function(){ deffered.resolve($window.d3)});
        }
        var scriptTag = $document[0].createElement('script');
        scriptTag.type = 'text/javascript';
        scriptTag.async = true;
        scriptTag.src = 'https://cdnjs.cloudflare.com/ajax/libs/d3/3.5.6/d3.min.js';
        scriptTag.onreadystatechange = function(){
          if(this.readyState == 'complete') onScriptLoad();
        }
        scriptTag.onload = onScriptLoad;
        var s = $document[0].getElementsByTagName('body')[0];
        s.appendChild(scriptTag);
        return deffered.promise;
      }
    }
  }]);