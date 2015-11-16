this["JST"] = this["JST"] || {};
this["JST"]["adventure"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"adventure-list\"></div>\n";
},"useData":true});
this["JST"]["adventureitem"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "<div class=\"adventure-item\">\n  <img src=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.images : depth0)) != null ? stack1.standard : stack1), depth0))
    + "\" class=\"adventure-picture\">\n    <h3 class=\"adventure-item-name\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.names : depth0)) != null ? stack1.title : stack1), depth0))
    + "</h3>\n</div>\n";
},"useData":true});
this["JST"]["application"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "";
},"useData":true});
this["JST"]["categoryitem"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "<div class=\"library-category category-"
    + alias2(alias1((depth0 != null ? depth0.categoryId : depth0), depth0))
    + "\">"
    + alias2(alias1((depth0 != null ? depth0.categoryName : depth0), depth0))
    + "</div>\n";
},"useData":true});
this["JST"]["connectedhome"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"home-list\"></div>\n";
},"useData":true});
this["JST"]["create-user"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<header class=\"app-header\">\n  <h2 class=\"landing-title\"><core-icon icon=\"social:share\" class=\"app-icon\"></core-icon> Wishbone</h2>\n  <paper-button raised class=\"app-user\"><core-icon icon=\"social:person\"></core-icon> Log In</paper-button>\n</header>\n<div class=\"landing-box\">\n  <div class=\"login-box  login-hidden\">\n    <form class=\"new-user-form\">\n      <input type=\"text\" class=\"new-user-username landing-input\" placeholder=\"USERNAME\">\n      <input type=\"password\" class=\"new-user-password landing-input\" placeholder=\"PASSWORD\">\n      <input type=\"email\" class=\"new-user-email landing-input\" placholder=\"EMAIL\">\n      <paper-button type=\"submit\" class=\"new-user-create-button landing-button\" raised>Log In</paper-button>\n    </form>\n  </div>\n</div>\n";
},"useData":true});
this["JST"]["createitem"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"accordion-box\">\n  <form class=\"create-item\">\n    <paper-input class=\"create-item-input create-name\" floatingLabel=true label=\"What is your item's name?\" value=\"\"></paper-input>\n    <paper-input class=\"create-item-input create-color\" floatingLabel=true label=\"What color is your item?\" value=\"\"></paper-input>\n    <paper-input class=\"create-item-input create-manufacturer\" floatingLabel=true label=\"Who made your item?\" value=\"\"></paper-input>\n    <paper-input class=\"create-item-input create-price\" floatingLabel=true label=\"What is your item worth?\" value=\"\"></paper-input>\n    <paper-input class=\"create-item-input create-features\" floatingLabel=true label=\"What are the item's features? Separate each with a comma\" value=\"\"></paper-input>\n    <input class=\"create-item-file create-image\" type=\"url\" placeholder=\"Choose an image that best represents your item\" value=\"http://avasportcentral.com/wp-content/themes/micron/images/placeholders/placeholder_large_dark.jpg\">\n    <textarea class=\"create-item-textarea create-description\" placeholder=\"How would you describe your item?\" value=\"\"></textarea>\n    <paper-button class=\"create-item-save\" raised><core-icon icon=\"save\"></core-icon></paper-button>\n  </form>\n</div>\n";
},"useData":true});
this["JST"]["features"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1;

  return "<ul class=\"item-features\">\n"
    + ((stack1 = helpers.each.call(depth0,((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1.features : stack1),{"name":"each","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</ul>\n";
},"2":function(depth0,helpers,partials,data) {
    var helper;

  return "    <li class=\"item-single-feature\">"
    + this.escapeExpression(((helper = (helper = helpers.feature || (depth0 != null ? depth0.feature : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"feature","hash":{},"data":data}) : helper)))
    + "</li>\n";
},"4":function(depth0,helpers,partials,data) {
    return "<h4>There is no data on features for this product</h4>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers['if'].call(depth0,((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1.features : stack1),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.program(4, data, 0),"data":data})) != null ? stack1 : "");
},"useData":true});
this["JST"]["feed"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"hot-box\">\n</div>\n<div class=\"hot-popular-header\">Most Popular Today :</div>\n<div class=\"drawer-option trending-list\">\n\n</div>\n<div class=\"home-container\">\n  <div class=\"home-text\">\n    <h4 class=\"home-info\">Connected Home</h4>\n    <h5 class=\"home-info info-two\">A guide to the top home automation products</h5>\n  </div>\n<div class=\"connected-home\">\n\n</div>\n</div>\n<div class=\"adventure-container\">\n  <div class=\"adventure-text\">\n    <h4 class=\"adventure-info\">Active Adventurer</h4>\n    <h5 class=\"adventure-info info-two\">A guide to the top products for fitness and outdoor enthusiasts</h5>\n  </div>\n  <div class=\"active-adventurer\">\n\n  </div>\n</div>\n";
},"useData":true});
this["JST"]["feedimage"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1;

  return "<img src=\""
    + this.escapeExpression(this.lambda(((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1.largeFrontImage : stack1), depth0))
    + "\" class=\"hot-picture\">\n";
},"3":function(depth0,helpers,partials,data) {
    var stack1;

  return "<img src=\""
    + this.escapeExpression(this.lambda(((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1.largeImage : stack1), depth0))
    + "\" class=\"hot-picture\">\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"hot-picture-box\">\n"
    + ((stack1 = helpers['if'].call(depth0,((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1.largeFrontImage : stack1),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "</div>\n<div class=\"hot-picture-text\">"
    + this.escapeExpression(this.lambda(((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1.name : stack1), depth0))
    + "</div>\n";
},"useData":true});
this["JST"]["friend"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "<div class=\"friend-info\">\n  <img src=\""
    + alias2(alias1((depth0 != null ? depth0.profilePicture : depth0), depth0))
    + "\" class=\"friend-picture\">\n  <h3 class=\"show-friend-username\">"
    + alias2(alias1((depth0 != null ? depth0.username : depth0), depth0))
    + "</h3>\n  <paper-button class=\"unfriend\">Unfriend</paper-button>\n</div>\n<div class=\"friend-items\"></div>\n";
},"useData":true});
this["JST"]["frienditem"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1;

  return "    <p class=\"friend-item-description\">"
    + this.escapeExpression(this.lambda(((stack1 = (depth0 != null ? depth0.attributes : depth0)) != null ? stack1.shortDescription : stack1), depth0))
    + "</p>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.escapeExpression, alias2=this.lambda;

  return alias1(helpers.log.call(depth0,depth0,{"name":"log","hash":{},"data":data}))
    + "\n<paper-shadow z=\"1\" class=\"friend-profile-item\">\n  <div class=\"friend-item-image-box\">\n    <img src=\""
    + alias1(alias2(((stack1 = (depth0 != null ? depth0.attributes : depth0)) != null ? stack1.image : stack1), depth0))
    + "\" class=\"friend-item-image\">\n  </div>\n  <div class=\"friend-item-information\">\n    <h3 class=\"friend-item-name\">"
    + alias1(alias2(((stack1 = (depth0 != null ? depth0.attributes : depth0)) != null ? stack1.name : stack1), depth0))
    + "</h3>\n"
    + ((stack1 = helpers['if'].call(depth0,((stack1 = (depth0 != null ? depth0.attributes : depth0)) != null ? stack1.shortDescription : stack1),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    <h3 class=\"friend-item-price\">$"
    + alias1(alias2(((stack1 = (depth0 != null ? depth0.attributes : depth0)) != null ? stack1.salePrice : stack1), depth0))
    + "</h3>\n  </div>\n  <div class=\"friend-options\">\n    <paper-button raised class=\"friend-item-gift\"><i class=\"fa fa-gift\"></i></paper-button>\n    <paper-button class=\"friend-item-link\"><core-icon icon=\"link\"></core-icon>Link</paper-button>\n    <paper-button raised class=\"friend-item-add\">Add to My List</paper-button>\n  </div>\n</paper-shadow>\n";
},"useData":true});
this["JST"]["friendlist"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<core-icon icon=\"social:people\"></core-icon> Friends:\n<div class=\"friend-list\">\n</div>\n";
},"useData":true});
this["JST"]["friendlistitem"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"friend-box\">\n<h5 class=\"drawer-friend\"><core-icon icon=\"social:person\"></core-icon>"
    + this.escapeExpression(this.lambda((depth0 != null ? depth0.username : depth0), depth0))
    + " <core-icon icon=\"chevron-right\"></core-icon></h5>\n</div>\n";
},"useData":true});
this["JST"]["gift"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"gift-list accordion-box\"></div>\n";
},"useData":true});
this["JST"]["giftitem"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1;

  return "    <h3 class=\"gift-name\">"
    + this.escapeExpression(this.lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.item : depth0)) != null ? stack1['0'] : stack1)) != null ? stack1.shortDescription : stack1), depth0))
    + "</h3>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "<div class=\"gift-item\">\n  <div class=\"gift-item-image-box\">\n    <img class=\"gift-image\" src=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.item : depth0)) != null ? stack1['0'] : stack1)) != null ? stack1.image : stack1), depth0))
    + "\">\n  </div>\n  <div class=\"gift-information\">\n    <div class=\"gift-owner-information\">\n      <h3 class=\"gift-date\">"
    + alias2((helpers.moment || (depth0 && depth0.moment) || helpers.helperMissing).call(depth0,(depth0 != null ? depth0.createdAt : depth0),{"name":"moment","hash":{},"data":data}))
    + "</h3>\n      <h3 class=\"gift-owner\">"
    + alias2(alias1((depth0 != null ? depth0.oppositeUser : depth0), depth0))
    + "</h3>\n    </div>\n    <h3 class=\"gift-name\">"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.item : depth0)) != null ? stack1['0'] : stack1)) != null ? stack1.name : stack1), depth0))
    + "</h3>\n"
    + ((stack1 = helpers['if'].call(depth0,((stack1 = ((stack1 = (depth0 != null ? depth0.item : depth0)) != null ? stack1['0'] : stack1)) != null ? stack1.shortDescription : stack1),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    <h3 class=\"gift-price\">$"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.item : depth0)) != null ? stack1['0'] : stack1)) != null ? stack1.salePrice : stack1), depth0))
    + "</h3>\n  </div>\n  <div class=\"gift-options\">\n    <!--<a href=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.item : depth0)) != null ? stack1['0'] : stack1)) != null ? stack1.url : stack1), depth0))
    + "\"><paper-button raised><core-icon icon=\"launch\"></core-icon></paper-button></a>-->\n    <paper-button class=\"delete-gift\" raised>Delete Item</paper-button>\n  </div>\n</div>\n";
},"useData":true});
this["JST"]["header"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "\n";
},"useData":true});
this["JST"]["home"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "    <div class=\"drawer-modal drawer-hidden\"></div>\n    <div class=\"drawer-content drawer-hidden\">\n      <div class=\"drawer-menu\">\n        <div class=\"user-information\">\n          <img src="
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.attributes : depth0)) != null ? stack1.profilePicture : stack1), depth0))
    + " class=\"drawer-user-picture\">\n          <h5 class=\"drawer-user\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.attributes : depth0)) != null ? stack1.username : stack1), depth0))
    + "</h5>\n        </div>\n      </div>\n      <div class=\"side-nav show-search\"><i class=\"fa fa-newspaper-o side-nav-feed\"></i> The Feed</div>\n      <div class=\"side-nav show-list\"><core-icon icon=\"list\" class=\"side-nav-icon\"></core-icon> My List</div>\n      <div class=\"side-nav show-create\"><core-icon icon=\"create\" class=\"side-nav-icon\"></core-icon> Create</div>\n      <div class=\"side-nav show-gifts\"><i class=\"fa fa-gift side-nav-gift\"></i> Gift List</div>\n      <div class=\"side-nav show-library\"><core-icon icon=\"maps:local-library\" class=\"side-nav-icon\"></core-icon> Library</div>\n      <div class=\"drawer-option drawer-friends\">\n\n      </div>\n      <h4 class=\"user-list-header\">Click a name below to add a friend!</h4>\n      <div class=\"users-list\">\n\n      </div>\n      <paper-button raised class=\"log-out\">Logout</paper-button>\n    </div>\n      <header class=\"app-header\">\n        <paper-button class=\"menu-drawer-icon\"><core-icon icon=\"menu\"></core-icon></paper-button>\n        <h2 class=\"app-title\"><!--<core-icon icon=\"social:share\" class=\"app-icon\"></core-icon>--><!--<img src=\"https://files.slack.com/files-pri/T03FAV5N3-F081X2HHR/logo-sized.png\" class=\"app-icon\">--> Wishbone</h2>\n      </header>\n    <section class=\"accordion-container\">\n    </section>\n    <div class=\"modal-underlay search-modal-disabled\">\n      <div class=\"search-item-modal search-modal-disabled\"></div>\n    </div>\n";
},"useData":true});
this["JST"]["homeitem"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "<div class=\"home-item\">\n  <img src=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.images : depth0)) != null ? stack1.standard : stack1), depth0))
    + "\" class=\"home-picture\">\n  <h3 class=\"home-item-name\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.names : depth0)) != null ? stack1.title : stack1), depth0))
    + "</h3>\n</div>\n";
},"useData":true});
this["JST"]["itemimage"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<img src=\""
    + this.escapeExpression(this.lambda((depth0 != null ? depth0.model : depth0), depth0))
    + "\" class=\"item-picture-default\">\n";
},"useData":true});
this["JST"]["landing"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"landing-box\">\n  <div class=\"login-box  login-hidden\">\n    <form class=\"landing-form\">\n      <core-icon icon=\"close\" class=\"login-cancel\"></core-icon>\n      <input type=\"text\" class=\"user-username landing-input\" placeholder=\"USERNAME\">\n      <input type=\"password\" class=\"user-password landing-input\" placeholder=\"PASSWORD\">\n      <paper-button type=\"submit\" class=\"user-submit landing-button\" raised>Log In</paper-button>\n      <paper-button raised class=\"new-user-button landing-button\">Don't have an account? Join Us</paper-button>\n    </form>\n  </div>\n  <div class=\"landing-picture-box\">\n    <div class=\"landing-title\"><img src=\"https://files.slack.com/files-pri/T03FAV5N3-F081X2HHR/logo-sized.png\" class=\"app-icon\"><h4 class=\"app-name\">Wishbone</h4></div>\n    <paper-button class=\"app-user\">Log In</paper-button>\n    <div class=\"landing-picture\">\n          Manage the items that mean the most\n    </div>\n  </div>\n  <div class=\"feature-content\">\n    <div class=\"feature-container\">Your List<div class=\"feature-box feature-list\"><div class=\"feature-box-overlay\"><h3 class=\"feature-text\"><core-icon icon=\"list\" class=\"feature-icon\"></core-icon> My List</h3>Keep track of the products important to you</div></div></div>\n    <div class=\"feature-container\">Your Friends<div class=\"feature-box feature-social\"><div class=\"feature-box-overlay\"><h3 class=\"feature-text\"><i class=\"fa fa-gift\"></i> My Gifts</h3>Interact with the products your friends are interested in</div></div></div>\n    <div class=\"feature-container\">Your Products<div class=\"feature-box feature-library\"><div class=\"feature-box-overlay\"><h3 class=\"feature-text\"><core-icon icon=\"maps:local-library\" class=\"feature-icon\"></core-icon> My Library</h3>Search through thousands of different products</div></div></div>\n    <div class=\"feature-container\">Your Life<div class=\"feature-box feature-hot\"><div class=\"feature-box-overlay\"><h3 class=\"feature-text\"><i class=\"fa fa-newspaper-o\"></i> My Feed</h3>Keep up with products that are new and popular</div></div></div>\n  </div>\n  <h1 class=\"landing-instruction\">Only want to look up an item?</h1>\n  <div class=\"landing-search-box search-box\">\n  <form class=\"home-search-form\">\n    <input type=text class=\"home-search-bar\" placeholder=\"SEARCH\">\n  </form>\n    <section class=\"search-results\">\n\n    </section>\n  </div>\n</div>\n";
},"useData":true});
this["JST"]["landingsearch"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"search-results-box\"></div>\n";
},"useData":true});
this["JST"]["landingsearchitem"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "<paper-shadow z=\"1\" class=\"card\">\n    <div class=\"card-top\">\n      <div class=\"card-image\">\n        <img src=\""
    + alias2(alias1((depth0 != null ? depth0.image : depth0), depth0))
    + "\" class=\"card-url\">\n      </div>\n    </div>\n    <div class=\"card-bottom\">\n      <div class=\"card-title\">"
    + alias2(alias1((depth0 != null ? depth0.name : depth0), depth0))
    + "</div>\n    </div>\n</paper-shadow>\n";
},"useData":true});
this["JST"]["library"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"library-box\">\n  <form class=\"library-search\">\n    <input type=\"text\" class=\"home-search-bar\" placeholder=\"SEARCH\">\n  </form>\n  <div class=\"library-nav\">\n    <div class=\"category-list\">\n\n  </div>\n  <div class=\"subcat-box subcat-box-inactive\">\n\n  </div>\n  <div class=\"subcat-product-box\">\n\n  </div>\n</div>\n</div>\n";
},"useData":true});
this["JST"]["librarysearch"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<ul class=\"search-results-box\">\n  <div class=\"pagination-nav\">\n    <paper-button raised class=\"search-backwards\"><core-icon icon=\"arrow-back\"></core-icon></paper-button>\n    <paper-button raised class=\"search-forwards\"><core-icon icon=\"arrow-forward\"></core-icon></paper-button>\n  </div>\n  <paper-shadow z=\"4\" class=\"search-item-modal search-modal-disabled\"></paper-shadow>\n</ul>\n";
},"useData":true});
this["JST"]["listitem"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"list-card grid-item\">\n  <div class=\"list-card-top\">\n    <div class=\"list-card-image\">\n      <img src=\""
    + alias3(((helper = (helper = helpers.image || (depth0 != null ? depth0.image : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"image","hash":{},"data":data}) : helper)))
    + "\" class=\"list-item-thumbnail\">\n    </div>\n  </div>\n  <div class=\"card-bottom\">\n    <div class=\"card-title\">"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</div>\n    <h5 class=\"card-date\">"
    + alias3((helpers.moment || (depth0 && depth0.moment) || alias1).call(depth0,(depth0 != null ? depth0.createdAt : depth0),{"name":"moment","hash":{},"data":data}))
    + "</h5>\n  </div>\n</div>\n";
},"useData":true});
this["JST"]["modal"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"item-information\">\n  <div class=\"item-picture-box\">\n    <img src=\""
    + alias3(((helper = (helper = helpers.largeFrontImage || (depth0 != null ? depth0.largeFrontImage : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"largeFrontImage","hash":{},"data":data}) : helper)))
    + "\" class=\"item-picture\">\n</div>\n<form class=\"list-item-edit-form\">\n  <paper-input class=\"list-item-edit-input edit-name\" floatingLabel=true value=\""
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "\" label=\"My item's name\"></paper-input>\n  <paper-input class=\"list-item-edit-input edit-color\" floatingLabel=true value=\""
    + alias3(((helper = (helper = helpers.color || (depth0 != null ? depth0.color : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"color","hash":{},"data":data}) : helper)))
    + "\" label=\"My item's color\"></paper-input>\n  <paper-input class=\"list-item-edit-input edit-price\" floatingLabel=true value=\""
    + alias3(((helper = (helper = helpers.salePrice || (depth0 != null ? depth0.salePrice : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"salePrice","hash":{},"data":data}) : helper)))
    + "\" label=\"My item's price\"></paper-input>\n  <textarea class=\"list-item-edit-input edit-description\" placeholder=\""
    + alias3(((helper = (helper = helpers.shortDescription || (depth0 != null ? depth0.shortDescription : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"shortDescription","hash":{},"data":data}) : helper)))
    + "\"></textarea>\n  <paper-button class=\"list-item-edit-save\"><core-icon icon=\"save\"></core-icon> Save</paper-button>\n</form>\n  <paper-button class=\"list-item-edit-cancel\"><core-icon icon=\"close\"></core-icon> Cancel</paper-button>\n</div>\n\n";
},"3":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"item-information\">\n  <div class=\"item-picture-box\">\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.largeFrontImage : depth0),{"name":"if","hash":{},"fn":this.program(4, data, 0),"inverse":this.program(6, data, 0),"data":data})) != null ? stack1 : "")
    + "  </div>\n  <div class=\"image-options\">\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.largeFrontImage : depth0),{"name":"if","hash":{},"fn":this.program(8, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.backViewImage : depth0),{"name":"if","hash":{},"fn":this.program(10, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.leftViewImage : depth0),{"name":"if","hash":{},"fn":this.program(12, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.rightViewImage : depth0),{"name":"if","hash":{},"fn":this.program(14, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.topViewImage : depth0),{"name":"if","hash":{},"fn":this.program(16, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.alternateViewsImage : depth0),{"name":"if","hash":{},"fn":this.program(18, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.angleImage : depth0),{"name":"if","hash":{},"fn":this.program(20, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.spin360Url : depth0),{"name":"if","hash":{},"fn":this.program(22, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "  </div>\n  <h4 class=\"item-title-information\">"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</h4>\n  <h4 class=\"item-price\">Price: $"
    + alias3(((helper = (helper = helpers.salePrice || (depth0 != null ? depth0.salePrice : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"salePrice","hash":{},"data":data}) : helper)))
    + "</h4>\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.customerTopRated : depth0),{"name":"if","hash":{},"fn":this.program(24, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.color : depth0),{"name":"if","hash":{},"fn":this.program(26, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.customerReviewAverage : depth0),{"name":"if","hash":{},"fn":this.program(28, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.shortDescription : depth0),{"name":"if","hash":{},"fn":this.program(30, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "  <paper-button class=\"features-head option-head\"><core-icon icon=\"description\"></core-icon> Features</paper-button>\n  <paper-button class=\"shipping option-head\"><core-icon icon=\"maps:local-shipping\"></core-icon> Shipping</paper-button>\n  <paper-button class=\"reviews option-head\"><core-icon icon=\"maps:rate-review\"></core-icon> Reviews</paper-button>\n  <div class=\"option-box\"></div>\n  <paper-button class=\"list-item-edit\"><core-icon icon=\"drafts\"></core-icon> Edit</paper-button>\n  <paper-button class=\"list-item-delete\"><core-icon icon=\"delete\"></core-icon> Delete</paper-button>\n  <!--<paper-button raised class=\"item-launch\"><a href=\""
    + alias3(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"url","hash":{},"data":data}) : helper)))
    + "\"><core-icon icon=\"launch\"></core-icon></a>Link</paper-button>-->\n</div>\n";
},"4":function(depth0,helpers,partials,data) {
    var helper;

  return "    <img src=\""
    + this.escapeExpression(((helper = (helper = helpers.largeFrontImage || (depth0 != null ? depth0.largeFrontImage : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"largeFrontImage","hash":{},"data":data}) : helper)))
    + "\" class=\"item-picture-default\">\n";
},"6":function(depth0,helpers,partials,data) {
    var helper;

  return "    <img src=\""
    + this.escapeExpression(((helper = (helper = helpers.image || (depth0 != null ? depth0.image : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"image","hash":{},"data":data}) : helper)))
    + "\" class=\"item-picture\">\n";
},"8":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "    <img src=\""
    + alias3(((helper = (helper = helpers.largeFrontImage || (depth0 != null ? depth0.largeFrontImage : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"largeFrontImage","hash":{},"data":data}) : helper)))
    + "\" class=\"front-view "
    + alias3(((helper = (helper = helpers.LargeFrontImage || (depth0 != null ? depth0.LargeFrontImage : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"LargeFrontImage","hash":{},"data":data}) : helper)))
    + " image-list\" height=\"50\">\n";
},"10":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "    <img src=\""
    + alias3(((helper = (helper = helpers.backViewImage || (depth0 != null ? depth0.backViewImage : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"backViewImage","hash":{},"data":data}) : helper)))
    + "\" class=\"back-view "
    + alias3(((helper = (helper = helpers.backViewImage || (depth0 != null ? depth0.backViewImage : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"backViewImage","hash":{},"data":data}) : helper)))
    + " image-list\" height=\"50\">\n";
},"12":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "    <img src=\""
    + alias3(((helper = (helper = helpers.leftViewImage || (depth0 != null ? depth0.leftViewImage : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"leftViewImage","hash":{},"data":data}) : helper)))
    + "\" class=\"left-view "
    + alias3(((helper = (helper = helpers.leftViewImage || (depth0 != null ? depth0.leftViewImage : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"leftViewImage","hash":{},"data":data}) : helper)))
    + " image-list\" height=\"50\">\n";
},"14":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "    <img src=\""
    + alias3(((helper = (helper = helpers.rightViewImage || (depth0 != null ? depth0.rightViewImage : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"rightViewImage","hash":{},"data":data}) : helper)))
    + "\" class=\"right-view "
    + alias3(((helper = (helper = helpers.rightViewImage || (depth0 != null ? depth0.rightViewImage : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"rightViewImage","hash":{},"data":data}) : helper)))
    + " image-list\" height=\"50\">\n";
},"16":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "    <img src=\""
    + alias3(((helper = (helper = helpers.topViewImage || (depth0 != null ? depth0.topViewImage : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"topViewImage","hash":{},"data":data}) : helper)))
    + "\" class=\"top-view "
    + alias3(((helper = (helper = helpers.topViewImage || (depth0 != null ? depth0.topViewImage : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"topViewImage","hash":{},"data":data}) : helper)))
    + " image-list\" height=\"50\">\n";
},"18":function(depth0,helpers,partials,data) {
    var helper;

  return "    <img src=\""
    + this.escapeExpression(((helper = (helper = helpers.alternateViewsImage || (depth0 != null ? depth0.alternateViewsImage : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"alternateViewsImage","hash":{},"data":data}) : helper)))
    + "\" class=\"alternate-view image-list\" height=\"50\">\n";
},"20":function(depth0,helpers,partials,data) {
    var helper;

  return "    <img src=\""
    + this.escapeExpression(((helper = (helper = helpers.angleImage || (depth0 != null ? depth0.angleImage : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"angleImage","hash":{},"data":data}) : helper)))
    + "\" class=\"angle-view image-list\" height=\"50\">\n";
},"22":function(depth0,helpers,partials,data) {
    var helper;

  return "    <img src=\""
    + this.escapeExpression(((helper = (helper = helpers.spin360Url || (depth0 != null ? depth0.spin360Url : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"spin360Url","hash":{},"data":data}) : helper)))
    + "\" class=\"spin-view image-list\" height=\"50\">\n";
},"24":function(depth0,helpers,partials,data) {
    return "    <h4 class=\"item-top-rated\">Customer Top Rated: <i class=\"fa fa-thumbs-up top-rated-icon\"></i></h4>\n";
},"26":function(depth0,helpers,partials,data) {
    var helper;

  return "  <h4 class=\"item-color\">Color: "
    + this.escapeExpression(((helper = (helper = helpers.color || (depth0 != null ? depth0.color : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"color","hash":{},"data":data}) : helper)))
    + "</h4>\n";
},"28":function(depth0,helpers,partials,data) {
    var helper;

  return "  <h4 class=\"item-average-review\">Average Review Score: "
    + this.escapeExpression(((helper = (helper = helpers.customerReviewAverage || (depth0 != null ? depth0.customerReviewAverage : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"customerReviewAverage","hash":{},"data":data}) : helper)))
    + "</h4>\n";
},"30":function(depth0,helpers,partials,data) {
    var helper;

  return "  <p class=\"item-description\">Description: "
    + this.escapeExpression(((helper = (helper = helpers.shortDescription || (depth0 != null ? depth0.shortDescription : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"shortDescription","hash":{},"data":data}) : helper)))
    + "</p>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<paper-button class=\"close-modal\"><core-icon icon=\"close\"></core-icon></paper-button>\n<div class=\"modal-background\"></div>\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.isEditing : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.program(3, data, 0),"data":data})) != null ? stack1 : "");
},"useData":true});
this["JST"]["newuser"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<header class=\"app-header\">\n  <h2 class=\"landing-title\">Wishbone</h2>\n</header>\n<div class=\"landing-box\">\n  <div class=\"login-box\">\n    <form class=\"new-user-form\">\n      <input type=\"text\" class=\"new-user-username landing-input\" placeholder=\"USERNAME\">\n      <input type=\"password\" class=\"new-user-password landing-input\" placeholder=\"PASSWORD\">\n      <input type=\"email\" class=\"new-user-email landing-input\" placeholder=\"EMAIL\">\n      <paper-button class=\"new-user-create-button landing-button\" raised>Sign Up</paper-button>\n    </form>\n  </div>\n</div>\n\n<h2 class=\"sign-up-text\">After signing up, you will be able to access your:</h2>\n<div class=\"sign-up-text\">\n  <core-icon icon=\"list\" class=\"feature-icon\"></core-icon> List<h3 class=\"sign-up-instruction\"> Add products to your list that contain day to day updates of prices and shipping information</h3>\n</div>\n<div class=\"sign-up-text\">\n  <i class=\"fa fa-gift new-icon\"></i> Gift List<h3 class=\"sign-up-instruction\"> Keep track of items that your friends are interested in</h3>\n</div>\n<div class=\"sign-up-text\">\n  <core-icon icon=\"maps:local-library\" class=\"feature-icon\"></core-icon> Library<h3 class=\"sign-up-instruction\"> Access the library containing thousands of different products</h3>\n</div>\n<div class=\"sign-up-text\">\n  <i class=\"fa fa-newspaper-o new-icon\"></i> Feed<h3 class=\"sign-up-instruction\"> Access the most popular items in the store and stay informed on the newest products</h3>\n</div>\n";
},"useData":true});
this["JST"]["renderitem"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1;

  return "    <ul class=\"search-item-features\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.features : depth0),{"name":"each","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </ul>\n";
},"2":function(depth0,helpers,partials,data) {
    var helper;

  return "        <li class=\"search-item-single-feature\">"
    + this.escapeExpression(((helper = (helper = helpers.feature || (depth0 != null ? depth0.feature : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"feature","hash":{},"data":data}) : helper)))
    + "</li>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "<div class=\"search-item-information\">\n    <div class=\"search-item-image-box\"><img src=\""
    + alias2(alias1((depth0 != null ? depth0.image : depth0), depth0))
    + "\" class=\"search-result-image\"></div>\n    <h5 class=\"search-item-price\">Price: $"
    + alias2(alias1((depth0 != null ? depth0.salePrice : depth0), depth0))
    + "</h5>\n    <h5 class=\"search-item-color\">Color: "
    + alias2(alias1((depth0 != null ? depth0.color : depth0), depth0))
    + "</h5>\n    <p class=\"search-item-description\">Description: "
    + alias2(alias1((depth0 != null ? depth0.shortDescription : depth0), depth0))
    + "</p>\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.features : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    <paper-fab mini icon=\"add\" class=\"search-item-list-add\"></paper-fab>\n</div>\n";
},"useData":true});
this["JST"]["renderlist"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    return "  <h1>"
    + this.escapeExpression(this.lambda((depth0 != null ? depth0.error : depth0), depth0))
    + "</h1>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"list-box accordion-box\">\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.error : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "  <div class=\"user-list grid\"></div>\n</div>\n<div class=\"modal-underlay search-modal-disabled\">\n  <div class=\"search-item-modal search-modal-disabled\"></div>\n</div>\n";
},"useData":true});
this["JST"]["rendersearch"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"search-box accordion-box\">\n<form class=\"home-search-form\">\n  <input type=text class=\"home-search-bar\" placeholder=\"SEARCH\">\n</form>\n  <section class=\"search-results\">\n\n  </section>\n</div>\n";
},"useData":true});
this["JST"]["review"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.reviews : depth0),{"name":"each","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"2":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.escapeExpression, alias2=this.lambda;

  return "  <h4 class=\"review-date\"><core-icon icon=\"today\"></core-icon> "
    + alias1((helpers.moment || (depth0 && depth0.moment) || helpers.helperMissing).call(depth0,(depth0 != null ? depth0.submissionTime : depth0),{"name":"moment","hash":{},"data":data}))
    + "</h4>\n  <h4 class=\"reviewer-name\"><core-icon icon=\"social:person-outline\"></core-icon> "
    + alias1(alias2(((stack1 = ((stack1 = (depth0 != null ? depth0.reviewer : depth0)) != null ? stack1['0'] : stack1)) != null ? stack1.name : stack1), depth0))
    + "</h4>\n  <h4 class=\"review-rating\">"
    + alias1(alias2((depth0 != null ? depth0.rating : depth0), depth0))
    + " of 5</h4>\n  <h3 class=\"review-title\">"
    + alias1(alias2((depth0 != null ? depth0.title : depth0), depth0))
    + "</h3>\n  <p class=\"review-content\">"
    + alias1(alias2((depth0 != null ? depth0.comment : depth0), depth0))
    + "</p>\n";
},"4":function(depth0,helpers,partials,data) {
    return "<h4 class=\"review-error\">There are currently no reviews for this product</h4>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.reviews : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.program(4, data, 0),"data":data})) != null ? stack1 : "");
},"useData":true});
this["JST"]["searchitem"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "<paper-shadow z=\"1\" class=\"card\">\n    <div class=\"card-top\">\n      <div class=\"card-image\">\n        <img src=\""
    + alias2(alias1((depth0 != null ? depth0.image : depth0), depth0))
    + "\" class=\"card-url\">\n      </div>\n    </div>\n    <div class=\"card-bottom\">\n      <div class=\"card-title\">"
    + alias2(alias1((depth0 != null ? depth0.name : depth0), depth0))
    + "</div>\n      <h4 class=\"card-price\">"
    + alias2(alias1((depth0 != null ? depth0.salePrice : depth0), depth0))
    + "</h4>\n    </div>\n</paper-shadow>\n";
},"useData":true});
this["JST"]["searchmodal"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper;

  return "    <img src=\""
    + this.escapeExpression(((helper = (helper = helpers.largeFrontImage || (depth0 != null ? depth0.largeFrontImage : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"largeFrontImage","hash":{},"data":data}) : helper)))
    + "\" class=\"item-picture-default\">\n";
},"3":function(depth0,helpers,partials,data) {
    var helper;

  return "    <img src=\""
    + this.escapeExpression(((helper = (helper = helpers.image || (depth0 != null ? depth0.image : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"image","hash":{},"data":data}) : helper)))
    + "\" class=\"item-picture\">\n";
},"5":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "    <img src=\""
    + alias3(((helper = (helper = helpers.largeFrontImage || (depth0 != null ? depth0.largeFrontImage : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"largeFrontImage","hash":{},"data":data}) : helper)))
    + "\" class=\"front-view "
    + alias3(((helper = (helper = helpers.LargeFrontImage || (depth0 != null ? depth0.LargeFrontImage : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"LargeFrontImage","hash":{},"data":data}) : helper)))
    + " image-list\" height=\"50\">\n";
},"7":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "    <img src=\""
    + alias3(((helper = (helper = helpers.backViewImage || (depth0 != null ? depth0.backViewImage : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"backViewImage","hash":{},"data":data}) : helper)))
    + "\" class=\"back-view "
    + alias3(((helper = (helper = helpers.backViewImage || (depth0 != null ? depth0.backViewImage : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"backViewImage","hash":{},"data":data}) : helper)))
    + " image-list\" height=\"50\">\n";
},"9":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "    <img src=\""
    + alias3(((helper = (helper = helpers.leftViewImage || (depth0 != null ? depth0.leftViewImage : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"leftViewImage","hash":{},"data":data}) : helper)))
    + "\" class=\"left-view "
    + alias3(((helper = (helper = helpers.leftViewImage || (depth0 != null ? depth0.leftViewImage : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"leftViewImage","hash":{},"data":data}) : helper)))
    + " image-list\" height=\"50\">\n";
},"11":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "    <img src=\""
    + alias3(((helper = (helper = helpers.rightViewImage || (depth0 != null ? depth0.rightViewImage : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"rightViewImage","hash":{},"data":data}) : helper)))
    + "\" class=\"right-view "
    + alias3(((helper = (helper = helpers.rightViewImage || (depth0 != null ? depth0.rightViewImage : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"rightViewImage","hash":{},"data":data}) : helper)))
    + " image-list\" height=\"50\">\n";
},"13":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "    <img src=\""
    + alias3(((helper = (helper = helpers.topViewImage || (depth0 != null ? depth0.topViewImage : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"topViewImage","hash":{},"data":data}) : helper)))
    + "\" class=\"top-view "
    + alias3(((helper = (helper = helpers.topViewImage || (depth0 != null ? depth0.topViewImage : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"topViewImage","hash":{},"data":data}) : helper)))
    + " image-list\" height=\"50\">\n";
},"15":function(depth0,helpers,partials,data) {
    var helper;

  return "    <img src=\""
    + this.escapeExpression(((helper = (helper = helpers.alternateViewsImage || (depth0 != null ? depth0.alternateViewsImage : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"alternateViewsImage","hash":{},"data":data}) : helper)))
    + "\" class=\"alternate-view image-list\" height=\"50\">\n";
},"17":function(depth0,helpers,partials,data) {
    var helper;

  return "    <img src=\""
    + this.escapeExpression(((helper = (helper = helpers.angleImage || (depth0 != null ? depth0.angleImage : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"angleImage","hash":{},"data":data}) : helper)))
    + "\" class=\"angle-view image-list\" height=\"50\">\n";
},"19":function(depth0,helpers,partials,data) {
    var helper;

  return "    <img src=\""
    + this.escapeExpression(((helper = (helper = helpers.spin360Url || (depth0 != null ? depth0.spin360Url : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"spin360Url","hash":{},"data":data}) : helper)))
    + "\" class=\"spin-view image-list\" height=\"50\">\n";
},"21":function(depth0,helpers,partials,data) {
    return "    <h4 class=\"item-top-rated\">Customer Top Rated: <i class=\"fa fa-thumbs-up top-rated-icon\"></i></h4>\n";
},"23":function(depth0,helpers,partials,data) {
    var helper;

  return "  <h4 class=\"item-color\">Color: "
    + this.escapeExpression(((helper = (helper = helpers.color || (depth0 != null ? depth0.color : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"color","hash":{},"data":data}) : helper)))
    + "</h4>\n";
},"25":function(depth0,helpers,partials,data) {
    var helper;

  return "  <h4 class=\"item-average-review\">Average Review Score: "
    + this.escapeExpression(((helper = (helper = helpers.customerReviewAverage || (depth0 != null ? depth0.customerReviewAverage : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"customerReviewAverage","hash":{},"data":data}) : helper)))
    + "</h4>\n";
},"27":function(depth0,helpers,partials,data) {
    var helper;

  return "  <h5 class=\"item-description\">Description: "
    + this.escapeExpression(((helper = (helper = helpers.shortDescription || (depth0 != null ? depth0.shortDescription : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"shortDescription","hash":{},"data":data}) : helper)))
    + "</h5>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<paper-button class=\"close-modal\"><core-icon icon=\"close\"></core-icon></paper-button>\n<div class=\"item-information\">\n  <h2 class=\"item-title-information\">"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</h2>\n  <div class=\"item-picture-box\">\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.largeFrontImage : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + "  </div>\n  <div class=\"image-options\">\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.largeFrontImage : depth0),{"name":"if","hash":{},"fn":this.program(5, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.backViewImage : depth0),{"name":"if","hash":{},"fn":this.program(7, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.leftViewImage : depth0),{"name":"if","hash":{},"fn":this.program(9, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.rightViewImage : depth0),{"name":"if","hash":{},"fn":this.program(11, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.topViewImage : depth0),{"name":"if","hash":{},"fn":this.program(13, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.alternateViewsImage : depth0),{"name":"if","hash":{},"fn":this.program(15, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.angleImage : depth0),{"name":"if","hash":{},"fn":this.program(17, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.spin360Url : depth0),{"name":"if","hash":{},"fn":this.program(19, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "  </div>\n  <h4 class=\"item-price\">Price: $"
    + alias3(((helper = (helper = helpers.salePrice || (depth0 != null ? depth0.salePrice : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"salePrice","hash":{},"data":data}) : helper)))
    + "</h4>\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.customerTopRated : depth0),{"name":"if","hash":{},"fn":this.program(21, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.color : depth0),{"name":"if","hash":{},"fn":this.program(23, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.customerReviewAverage : depth0),{"name":"if","hash":{},"fn":this.program(25, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.shortDescription : depth0),{"name":"if","hash":{},"fn":this.program(27, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "  <paper-button class=\"features-head option-head\"><core-icon icon=\"description\"></core-icon> Features</paper-button>\n  <paper-button class=\"shipping option-head\"><core-icon icon=\"maps:local-shipping\"></core-icon> Shipping</paper-button>\n  <paper-button class=\"reviews option-head\"><core-icon icon=\"maps:rate-review\"></core-icon> Reviews</paper-button>\n  <div class=\"option-box\"></div>\n  <!--<paper-button raised class=\"item-launch\"><a href=\""
    + alias3(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"url","hash":{},"data":data}) : helper)))
    + "\"><core-icon icon=\"launch\"></core-icon></a>Link</paper-button>-->\n  <paper-button class=\"search-item-list-add\">Add to List</paper-button>\n</div>\n";
},"useData":true});
this["JST"]["searchresults"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<ul class=\"search-results-box\">\n  <div class=\"pagination-nav\">\n    <paper-button raised class=\"search-backwards\"><core-icon icon=\"arrow-back\"></core-icon></paper-button>\n    <paper-button raised class=\"search-forwards\"><core-icon icon=\"arrow-forward\"></core-icon></paper-button>\n  </div>\n  <paper-shadow z=\"4\" class=\"search-item-modal search-modal-disabled\"></paper-shadow>\n</ul>\n";
},"useData":true});
this["JST"]["shipping"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    return "  <h3 class=\"item-free-shipping shipping-active\"><core-icon icon=\"check\" class=\"free-shipping-check\"></core-icon> Free Shipping</h3>\n";
},"3":function(depth0,helpers,partials,data) {
    return "  <h3 class=\"item-shipping-cost shipping-active\">Standard Shipping Cost: $"
    + this.escapeExpression(this.lambda((depth0 != null ? depth0.modelshippingCost : depth0), depth0))
    + "</h3>\n";
},"5":function(depth0,helpers,partials,data) {
    return "  <h3 class=\"item-store-availability shipping-active\"><core-icon icon=\"check\"></core-icon> In Store Availability</h3>\n";
},"7":function(depth0,helpers,partials,data) {
    var stack1;

  return "  <h3 class=\"item-online shipping-active\"><core-icon icon=\"check\"></core-icon> Available Online - "
    + this.escapeExpression(this.lambda(((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1.onlineAvailabilityText : stack1), depth0))
    + "</h3>\n";
},"9":function(depth0,helpers,partials,data) {
    return "<h3 class=\"item-store-pickup shipping-active\"><core-icon icon=\"check\"></core-icon> Store Pickup Available</h3>\n";
},"11":function(depth0,helpers,partials,data) {
    return "  <h3 class=\"item-ffpickup shipping-active\"><core-icon icon=\"check\"></core-icon> Friends and Family Pickup Available</h3>\n";
},"13":function(depth0,helpers,partials,data) {
    return "  <h3 class=\"item-home-delivery shipping-active\"><core-icon icon=\"check\"></core-icon> Home Delivery Available</h3>\n";
},"15":function(depth0,helpers,partials,data) {
    return "  <h3 class=\"item-special\"><core-icon icon=\"warning\" class=\"warning-icon\"></core-icon> This item requires special handling</h3>\n";
},"17":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "  <div class=\"price-box\">\n    <h2>Prices:</h2>\n    <h3>Ground: $"
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1.shipping : stack1)) != null ? stack1['0'] : stack1)) != null ? stack1.ground : stack1), depth0))
    + "</h3>\n    <h3>Next Day: $"
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1.shipping : stack1)) != null ? stack1['0'] : stack1)) != null ? stack1.nextDay : stack1), depth0))
    + "</h3>\n    <h3>Second Day: $"
    + alias2(alias1(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1.shipping : stack1)) != null ? stack1['0'] : stack1)) != null ? stack1.secondDay : stack1), depth0))
    + "</h3>\n"
    + ((stack1 = helpers['if'].call(depth0,((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1.shipping : stack1)) != null ? stack1['0'] : stack1)) != null ? stack1.vendorDelivery : stack1),{"name":"if","hash":{},"fn":this.program(18, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "  </div>\n";
},"18":function(depth0,helpers,partials,data) {
    var stack1;

  return "    <h3>Vendor Delivery: $"
    + this.escapeExpression(this.lambda(((stack1 = ((stack1 = ((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1.shipping : stack1)) != null ? stack1['0'] : stack1)) != null ? stack1.vendorDelivery : stack1), depth0))
    + "</h3>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers['if'].call(depth0,((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1.freeShipping : stack1),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers['if'].call(depth0,((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1.inStoreAvailability : stack1),{"name":"if","hash":{},"fn":this.program(5, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers['if'].call(depth0,((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1.onlineAvailability : stack1),{"name":"if","hash":{},"fn":this.program(7, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers['if'].call(depth0,((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1.inStorePickup : stack1),{"name":"if","hash":{},"fn":this.program(9, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers['if'].call(depth0,((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1.friendsAndFamilyPickup : stack1),{"name":"if","hash":{},"fn":this.program(11, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers['if'].call(depth0,((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1.homeDelivery : stack1),{"name":"if","hash":{},"fn":this.program(13, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "<h3 class=\"item-orderable shipping-active\"><core-icon icon=\"check\"></core-icon> Ordering Services: "
    + this.escapeExpression(this.lambda(((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1.orderable : stack1), depth0))
    + "</h3>\n"
    + ((stack1 = helpers['if'].call(depth0,((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1.specialOrder : stack1),{"name":"if","hash":{},"fn":this.program(15, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers['if'].call(depth0,((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1.shipping : stack1),{"name":"if","hash":{},"fn":this.program(17, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
this["JST"]["subcat"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"subcategory-list\"></div>\n";
},"useData":true});
this["JST"]["subcatitem"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "<h4 class=\"subcategory subcat-"
    + alias2(alias1((depth0 != null ? depth0.id : depth0), depth0))
    + "\">"
    + alias2(alias1((depth0 != null ? depth0.name : depth0), depth0))
    + "</h4>\n";
},"useData":true});
this["JST"]["subcatproduct"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"subcat-product-list\"></div>\n<paper-button raised class=\"search-backwards\"><core-icon icon=\"arrow-back\"></core-icon></paper-button>\n<paper-button raised class=\"search-forwards\"><core-icon icon=\"arrow-forward\"></core-icon></paper-button>\n<paper-shadow z=\"4\" class=\"search-item-modal search-modal-disabled\"></paper-shadow>\n";
},"useData":true});
this["JST"]["subcatproductitem"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "<div class=\"category-product\">\n  <img src=\""
    + alias2(alias1((depth0 != null ? depth0.image : depth0), depth0))
    + "\" class=\"category-product-image\">\n  <h4 class=\"category-product-name\">"
    + alias2(alias1((depth0 != null ? depth0.name : depth0), depth0))
    + "</h4>\n  <h4 class=\"category-product-price\">$"
    + alias2(alias1((depth0 != null ? depth0.salePrice : depth0), depth0))
    + "</h4>\n</div>\n";
},"useData":true});
this["JST"]["trending"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"trending-box\"></div>\n";
},"useData":true});
this["JST"]["trendingitem"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<paper-shadow z='1' class=\"trending-item\">\n  <img src=\""
    + this.escapeExpression(this.lambda(((stack1 = (depth0 != null ? depth0.images : depth0)) != null ? stack1.standard : stack1), depth0))
    + "\">\n</paper-shadow>\n";
},"useData":true});
this["JST"]["userslist"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1;

  return "  <div class=\"user-list-name\">"
    + this.escapeExpression(this.lambda(((stack1 = (depth0 != null ? depth0.attributes : depth0)) != null ? stack1.username : stack1), depth0))
    + "</div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0,depth0,{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\n<!--<paper-button class=\"add-friend\"><core-icon icon=\"add\"></core-icon></paper-button>-->\n";
},"useData":true});