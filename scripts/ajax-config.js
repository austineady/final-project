$.ajaxPrefilter(function(options, originalOptions, jqXHR){
  if(options.url.match(/api.parse.com/)){
    options.headers = options.headers || {};
    options.headers['X-Parse-Application-Id'] = 'yNYDA6j04da33mB4EYKTeTGUrYBQf6PogxbTZvJO';
    options.headers['X-Parse-REST-API-Key'] = 'KDyLxWvykTTXKYScdlZh8QlUsm8sHGp6NSLROQcu';
  }
});
