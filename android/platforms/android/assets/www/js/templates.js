this["JST"] = this["JST"] || {};
this["JST"]["application"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<h1>Hello</h1>\n";
},"useData":true});
this["JST"]["create-user"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<form class=\"new-user-form\">\n  <input type=\"text\" class=\"new-user-username create-input\">\n  <input type=\"text\" class=\"new-user-password create-input\">\n  <input type=\"email\" class=\"new-user-email create-input\">\n  <input type=\"submit\" class=\"new-user-create-button\" value=\"Submit\">\n</form>\n";
},"useData":true});
this["JST"]["createitem"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"app-side-nav\">\n  <div class=\"side-nav show-search\"><core-icon icon=\"search\" class=\"side-nav-icon\"></core-icon></div>\n  <div class=\"side-nav show-list\"><core-icon icon=\"list\" class=\"side-nav-icon\"></core-icon></div>\n  <div class=\"side-nav show-create\"><core-icon icon=\"create\" class=\"side-nav-icon\"></core-icon></div>\n  <div class=\"side-nav show-gifts\"><i class=\"fa fa-gift side-nav-gift\"></i></div>\n</div>\n<div class=\"accordion-box\">\n  <form class=\"create-item\">\n    <paper-input class=\"create-item-input create-name\" floatingLabel=true label=\"What is your item's name?\" value=\"\"></paper-input>\n    <paper-input class=\"create-item-input create-color\" floatingLabel=true label=\"What color is your item?\" value=\"\"></paper-input>\n    <paper-input class=\"create-item-input create-manufacturer\" floatingLabel=true label=\"Who made your item?\" value=\"\"></paper-input>\n    <paper-input class=\"create-item-input create-price\" floatingLabel=true label=\"What is your item worth?\" value=\"\"></paper-input>\n    <paper-input class=\"create-item-input create-features\" floatingLabel=true label=\"What are the item's features? Separate each with a comma\" value=\"\"></paper-input>\n    <input class=\"create-item-file create-image\" type=\"url\" placeholder=\"Choose an image that best represents your item\" value=\"http://avasportcentral.com/wp-content/themes/micron/images/placeholders/placeholder_large_dark.jpg\">\n    <textarea class=\"create-item-textarea create-description\" placeholder=\"How would you describe your item?\" value=\"\"></textarea>\n    <paper-button class=\"create-item-save\" raised><core-icon icon=\"save\"></core-icon></paper-button>\n  </form>\n</div>\n";
},"useData":true});
this["JST"]["friend"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "<div class=\"friend-info\">\n  <img src=\""
    + alias2(alias1((depth0 != null ? depth0.profilePicture : depth0), depth0))
    + "\" class=\"friend-picture\">\n  <h3 class=\"show-friend-username\">"
    + alias2(alias1((depth0 != null ? depth0.username : depth0), depth0))
    + "</h3>\n</div>\n<div class=\"friend-items\"></div>\n";
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
    + "</h3>\n    <paper-button raised class=\"friend-item-gift\"><i class=\"fa fa-gift\"></i></paper-button>\n    <paper-button class=\"friend-item-link\"><core-icon icon=\"link\"></core-icon>Link</paper-button>\n    <paper-button raised class=\"friend-item-add\">Add to My List</paper-button>\n  </div>\n</paper-shadow>\n";
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
    return "<div class=\"app-side-nav\">\n  <div class=\"side-nav show-search\"><core-icon icon=\"search\" class=\"side-nav-icon\"></core-icon></div>\n  <div class=\"side-nav show-list\"><core-icon icon=\"list\" class=\"side-nav-icon\"></core-icon></div>\n  <div class=\"side-nav show-create\"><core-icon icon=\"create\" class=\"side-nav-icon\"></core-icon></div>\n  <div class=\"side-nav show-gifts\"><i class=\"fa fa-gift side-nav-gift\"></i></div>\n</div>\n<div class=\"gift-list accordion-box\"></div>\n";
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

  return " <core-drawer-panel drawerWidth=\"300px\" responsiveWidth=\"1500px\">\n  <core-header-panel drawer class=\"drawer-panel\">\n    <div class=\"drawer-content\">\n      <paper-shadow z=\"1\"><div class=\"drawer-menu\">\n        <div class=\"user-information\">\n          <img src="
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.attributes : depth0)) != null ? stack1.profilePicture : stack1)) != null ? stack1._url : stack1), depth0))
    + " class=\"drawer-user-picture\">\n          <h5 class=\"drawer-user\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.attributes : depth0)) != null ? stack1.username : stack1), depth0))
    + "</h5>"
    + alias2(helpers.log.call(depth0,depth0,{"name":"log","hash":{},"data":data}))
    + "\n        </div>\n        <!--<h2 class=\"app-title\"><i class=\"fa fa-square-o app-title-icon\"></i> StoreSquare</h2>-->\n      </div></paper-shadow>\n      <div class=\"drawer-option drawer-friends\">\n\n      </div>\n      <h3 class=\"trending-header\"><core-icon icon=\"social:whatshot\"></core-icon> Trending</h3>\n      <div class=\"drawer-option trending-list\">\n\n      </div>\n    </div>\n  </core-header-panel>\n  <core-header-panel main>\n    <paper-shadow z=\"2\">\n      <header class=\"app-header\">\n        <paper-icon-button icon=\"menu\" class=\"menu-drawer-icon\" core-drawer-toggle></paper-icon-button>\n        <h2 class=\"app-title\"><i class=\"fa fa-square-o app-title-icon\"></i> StoreSquare</h2>\n        <!--<paper-icon-button  icon=\"search\" class=\"app-title-user\"></paper-icon-button>-->\n      </header>\n    </paper-shadow>\n    <section class=\"accordion-container\">\n    </section>\n  </core-header-panel>\n</core-drawer-panel>\n";
},"useData":true});
this["JST"]["landing"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<header class=\"app-header\">\n  <h1 class=\"app-title\">StoreSquare <i class=\"fa fa-square-o app-icon\"></i></h1>\n  <h4 class=\"app-user\"><i class=\"fa fa-user\"></i> Log In</h4>\n</header>\n<div class=\"landing-box\">\n  <div class=\"login-box  login-hidden\">\n    <form class=\"landing-form\">\n      <input type=\"text\" class=\"user-username landing-input\" placeholder=\"USERNAME\">\n      <input type=\"password\" class=\"user-password landing-input\" placeholder=\"PASSWORD\">\n      <paper-button type=\"submit\" class=\"user-submit landing-button\" raised>Log In</paper-button>\n    </form>\n    <paper-button raised class=\"new-user-button landing-button\">Don't have an account? Join Us</paper-button>\n  </div>\n  <div class=\"landing-search-box search-box\">\n  <form class=\"home-search-form\">\n    <input type=text class=\"home-search-bar\" placeholder=\"SEARCH\">\n  </form>\n    <section class=\"search-results\">\n\n    </section>\n  </div>\n</div>\n";
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
this["JST"]["listitem"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<paper-shadow z=\"1\" class=\"list-card\">\n  <div class=\"list-card-top\">\n    <div class=\"list-card-image\">\n      <img src=\""
    + alias3(((helper = (helper = helpers.image || (depth0 != null ? depth0.image : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"image","hash":{},"data":data}) : helper)))
    + "\" class=\"list-item-thumbnail\">\n    </div>\n  </div>\n  <div class=\"card-bottom\">\n    <div class=\"card-title\">"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</div>\n    <h5 class=\"card-date\">"
    + alias3((helpers.moment || (depth0 && depth0.moment) || alias1).call(depth0,(depth0 != null ? depth0.createdAt : depth0),{"name":"moment","hash":{},"data":data}))
    + "</h5>\n  </div>\n</paper-shadow>\n";
},"useData":true});
this["JST"]["modal"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<div class=\"item-information\">\n  <div class=\"item-picture-box\">\n    <img src=\""
    + alias3(((helper = (helper = helpers.image || (depth0 != null ? depth0.image : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"image","hash":{},"data":data}) : helper)))
    + "\" class=\"item-picture\">\n  </div>\n<form class=\"list-item-edit-form\">\n  <paper-input class=\"list-item-edit-input edit-name\" floatingLabel=true value=\""
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

  return "<div class=\"item-information\">\n  <div class=\"item-picture-box\">\n    <img src=\""
    + alias3(((helper = (helper = helpers.image || (depth0 != null ? depth0.image : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"image","hash":{},"data":data}) : helper)))
    + "\" class=\"item-picture\">\n  </div>\n  <h4 class=\"item-title-information\">"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</h4>\n  <h4 class=\"item-price\">Price: $"
    + alias3(((helper = (helper = helpers.salePrice || (depth0 != null ? depth0.salePrice : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"salePrice","hash":{},"data":data}) : helper)))
    + "</h4>\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.color : depth0),{"name":"if","hash":{},"fn":this.program(4, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.customerReviewAverage : depth0),{"name":"if","hash":{},"fn":this.program(6, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.shortDescription : depth0),{"name":"if","hash":{},"fn":this.program(8, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.features : depth0),{"name":"if","hash":{},"fn":this.program(10, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "  <paper-button class=\"reviews\"><core-icon icon=\"maps:rate-review\"></core-icon> Reviews</paper-button>\n  <div class=\"review-box\"></div>\n  <paper-button><a href=\""
    + alias3(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"url","hash":{},"data":data}) : helper)))
    + "\"><core-icon icon=\"link\"></core-icon></a>Link</paper-button><paper-button class=\"list-item-edit\"><core-icon icon=\"assignment\"></core-icon> Edit</paper-button><paper-button class=\"list-item-delete\"><core-icon icon=\"delete\"></core-icon> Delete</paper-button>\n</div>\n";
},"4":function(depth0,helpers,partials,data) {
    var helper;

  return "  <h5 class=\"item-color\">Color: "
    + this.escapeExpression(((helper = (helper = helpers.color || (depth0 != null ? depth0.color : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"color","hash":{},"data":data}) : helper)))
    + "</h5>\n";
},"6":function(depth0,helpers,partials,data) {
    var helper;

  return "  <h4 class=\"item-average-review\">Average Review Score: "
    + this.escapeExpression(((helper = (helper = helpers.customerReviewAverage || (depth0 != null ? depth0.customerReviewAverage : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"customerReviewAverage","hash":{},"data":data}) : helper)))
    + "</h4>\n";
},"8":function(depth0,helpers,partials,data) {
    var helper;

  return "  <p class=\"item-description\">Description: "
    + this.escapeExpression(((helper = (helper = helpers.shortDescription || (depth0 != null ? depth0.shortDescription : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"shortDescription","hash":{},"data":data}) : helper)))
    + "</p>\n";
},"10":function(depth0,helpers,partials,data) {
    var stack1;

  return "  <ul class=\"item-features\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.features : depth0),{"name":"each","hash":{},"fn":this.program(11, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "  </ul>\n";
},"11":function(depth0,helpers,partials,data) {
    var helper;

  return "      <li class=\"item-single-feature\">"
    + this.escapeExpression(((helper = (helper = helpers.feature || (depth0 != null ? depth0.feature : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"feature","hash":{},"data":data}) : helper)))
    + "</li>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<paper-button class=\"close-modal\"><core-icon icon=\"close\"></core-icon></paper-button>\n<div class=\"modal-background\"></div>\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.isEditing : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.program(3, data, 0),"data":data})) != null ? stack1 : "");
},"useData":true});
this["JST"]["newuser"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<form class=\"new-user-form\">\n  <input type=\"text\" class=\"new-user-username create-input\" placeholder=\"Username\">\n  <input type=\"text\" class=\"new-user-password create-input\" placeholder=\"Password\">\n  <input type=\"email\" class=\"new-user-email create-input\" placeholder=\"Email\">\n  <input type=\"submit\" class=\"new-user-create-button\" value=\"Submit\">\n</form>\n";
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
this["JST"]["renderlist"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"app-side-nav\">\n  <div class=\"side-nav show-search\"><core-icon icon=\"search\" class=\"side-nav-icon\"></core-icon></div>\n  <div class=\"side-nav show-list\"><core-icon icon=\"list\" class=\"side-nav-icon\"></core-icon></div>\n  <div class=\"side-nav show-create\"><core-icon icon=\"create\" class=\"side-nav-icon\"></core-icon></div>\n  <div class=\"side-nav show-gifts\"><i class=\"fa fa-gift side-nav-gift\"></i></div>\n</div>\n<div class=\"list-box accordion-box\">\n  <ul class=\"user-list\"></ul>\n  <paper-shadow z=\"4\" class=\"item-modal modal-disabled\"></paper-shadow>\n</div>\n";
},"useData":true});
this["JST"]["rendersearch"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"app-side-nav\">\n  <div class=\"side-nav show-search\"><core-icon icon=\"search\" class=\"side-nav-icon\"></core-icon></div>\n  <div class=\"side-nav show-list\"><core-icon icon=\"list\" class=\"side-nav-icon\"></core-icon></div>\n  <div class=\"side-nav show-create\"><core-icon icon=\"create\" class=\"side-nav-icon\"></core-icon></div>\n  <div class=\"side-nav show-gifts\"><i class=\"fa fa-gift side-nav-gift\"></i></div>\n</div>\n<div class=\"search-box accordion-box\">\n<form class=\"home-search-form\">\n  <input type=text class=\"home-search-bar\" placeholder=\"SEARCH\">\n</form>\n  <section class=\"search-results\">\n\n  </section>\n</div>\n";
},"useData":true});
this["JST"]["review"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.reviews : depth0),{"name":"each","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"2":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "<div class=\"review-container\">\n  <h4 class=\"review-date\"><core-icon icon=\"today\"></core-icon> "
    + alias2(alias1((depth0 != null ? depth0.submissionTime : depth0), depth0))
    + "</h4>\n  <h4 class=\"reviewer-name\"><core-icon icon=\"social:person-outline\"></core-icon> "
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.reviewer : depth0)) != null ? stack1['0'] : stack1)) != null ? stack1.name : stack1), depth0))
    + "</h4>\n  <h4 class=\"review-rating\">"
    + alias2(alias1((depth0 != null ? depth0.rating : depth0), depth0))
    + " of 5</h4>\n  <h3 class=\"review-title\">"
    + alias2(alias1((depth0 != null ? depth0.title : depth0), depth0))
    + "</h3>\n  <p class=\"review-content\">"
    + alias2(alias1((depth0 != null ? depth0.comment : depth0), depth0))
    + "</p>\n</div>\n";
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
    + "</div>\n    </div>\n</paper-shadow>\n";
},"useData":true});
this["JST"]["searchmodal"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper;

  return "  <h5 class=\"item-color\">Color: "
    + this.escapeExpression(((helper = (helper = helpers.color || (depth0 != null ? depth0.color : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"color","hash":{},"data":data}) : helper)))
    + "</h5>\n";
},"3":function(depth0,helpers,partials,data) {
    var helper;

  return "  <h4 class=\"item-average-review\">Average Review Score: "
    + this.escapeExpression(((helper = (helper = helpers.customerReviewAverage || (depth0 != null ? depth0.customerReviewAverage : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"customerReviewAverage","hash":{},"data":data}) : helper)))
    + "</h4>\n";
},"5":function(depth0,helpers,partials,data) {
    var helper;

  return "  <p class=\"item-description\">Description: "
    + this.escapeExpression(((helper = (helper = helpers.shortDescription || (depth0 != null ? depth0.shortDescription : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"shortDescription","hash":{},"data":data}) : helper)))
    + "</p>\n";
},"7":function(depth0,helpers,partials,data) {
    var stack1;

  return "  <ul class=\"item-features\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.features : depth0),{"name":"each","hash":{},"fn":this.program(8, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "  </ul>\n";
},"8":function(depth0,helpers,partials,data) {
    var helper;

  return "      <li class=\"item-single-feature\">"
    + this.escapeExpression(((helper = (helper = helpers.feature || (depth0 != null ? depth0.feature : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"feature","hash":{},"data":data}) : helper)))
    + "</li>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "<paper-button class=\"close-modal\"><core-icon icon=\"close\"></core-icon></paper-button>\n<div class=\"item-information\">\n  <div class=\"item-picture-box\">\n    <img src=\""
    + alias3(((helper = (helper = helpers.image || (depth0 != null ? depth0.image : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"image","hash":{},"data":data}) : helper)))
    + "\" class=\"item-picture\">\n  </div>\n  <h4 class=\"item-title-information\">"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</h4>\n  <h4 class=\"item-price\">Price: $"
    + alias3(((helper = (helper = helpers.salePrice || (depth0 != null ? depth0.salePrice : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"salePrice","hash":{},"data":data}) : helper)))
    + "</h4>\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.color : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.customerReviewAverage : depth0),{"name":"if","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.shortDescription : depth0),{"name":"if","hash":{},"fn":this.program(5, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.features : depth0),{"name":"if","hash":{},"fn":this.program(7, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "  <paper-button class=\"reviews\"><core-icon icon=\"maps:rate-review\"></core-icon> Reviews</paper-button>\n  <div class=\"review-box\"></div>\n  <paper-button><a href=\""
    + alias3(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"url","hash":{},"data":data}) : helper)))
    + "\"><core-icon icon=\"link\"></core-icon></a>Link</paper-button>\n  <paper-fab icon=\"add\" class=\"search-item-list-add\"></paper-fab>\n</div>\n";
},"useData":true});
this["JST"]["searchresults"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<ul class=\"search-results-box\">\n  <div class=\"pagination-nav\">\n    <paper-button raised class=\"search-backwards\"><core-icon icon=\"arrow-back\"></core-icon></paper-button>\n    <paper-button raised class=\"search-forwards\"><core-icon icon=\"arrow-forward\"></core-icon></paper-button>\n  </div>\n  <paper-shadow z=\"4\" class=\"search-item-modal search-modal-disabled\"></paper-shadow>\n</ul>\n";
},"useData":true});
this["JST"]["trending"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"trending-box\"></div>\n";
},"useData":true});
this["JST"]["trendingitem"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "<paper-shadow z='1' class=\"trending-item\">\n  <img src=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.images : depth0)) != null ? stack1.standard : stack1), depth0))
    + "\" width=\"150px\">\n  <h5 class=\"trending-name\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.names : depth0)) != null ? stack1.title : stack1), depth0))
    + "</h5>\n  <h5 class=\"trending-price\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.prices : depth0)) != null ? stack1.current : stack1), depth0))
    + "</h5>\n  <paper-fab mini icon=\"add\" class=\"trending-item-list-add\"></paper-fab>\n</paper-shadow>\n";
},"useData":true});