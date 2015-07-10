this["JST"] = this["JST"] || {};
this["JST"]["application"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<h1>Hello</h1>\n";
},"useData":true});
this["JST"]["create-user"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<form class=\"new-user-form\">\n  <input type=\"text\" class=\"new-user-username create-input\">\n  <input type=\"text\" class=\"new-user-password create-input\">\n  <input type=\"email\" class=\"new-user-email create-input\">\n  <input type=\"submit\" class=\"new-user-create-button\" value=\"Submit\">\n</form>\n";
},"useData":true});
this["JST"]["header"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<header class=\"app-header\">\n  <h1 class=\"app-title\">StoreSquare <i class=\"fa fa-square-o\"></i></h1>\n  <h4 class=\"app-user\"><i class=\"fa fa-user\"></i> "
    + this.escapeExpression(this.lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1.attributes : stack1)) != null ? stack1.username : stack1), depth0))
    + "</h4>\n</header>\n";
},"useData":true});
this["JST"]["home"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "<core-drawer-panel drawerWidth=\"300px\">\n  <core-header-panel drawer class=\"drawer-panel\">\n    <core-toolbar>\n    </core-toolbar>\n    <div class=\"drawer-content\">\n      <paper-shadow z=\"1\"><div class=\"drawer-menu\">\n        <h5 class=\"drawer-user-email\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.attributes : depth0)) != null ? stack1.email : stack1), depth0))
    + "</h5>\n        <h5 class=\"drawer-user\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.attributes : depth0)) != null ? stack1.username : stack1), depth0))
    + "</h5>"
    + alias2(helpers.log.call(depth0,depth0,{"name":"log","hash":{},"data":data}))
    + "\n      </div></paper-shadow>\n    </div>\n  </core-header-panel>\n  <core-header-panel main>\n    <paper-shadow z=\"3\">\n      <header class=\"app-header\">\n        <paper-icon-button icon=\"menu\" class=\"menu-drawer-icon\" core-drawer-toggle></paper-icon-button><h1 class=\"app-title\"><i class=\"fa fa-square-o app-title-icon\"></i> StoreSquare</h1>\n        <paper-icon-button  icon=\"search\" class=\"app-title-user\"></paper-icon-button>\n      </header>\n    </paper-shadow>\n    "
    + alias2(helpers.log.call(depth0,depth0,{"name":"log","hash":{},"data":data}))
    + "\n    <section class=\"accordion-container\">\n    <div id=\"accordion\" class=\"home-accordion\">\n      <h3 class=\"accordion-header header-search\"><core-icon icon=\"search\"></core-icon></h3>\n      <div class=\"search-box accordion-box\">\n      <form class=\"home-search-form\">\n        <input type=text class=\"home-search-bar\" placeholder=\"Search for products\">\n      </form>\n        <section class=\"search-results\">\n\n        </section>\n      </div>\n      <paper-shadow z=\"2\"><h3 class=\"accordion-header header-list\"><core-icon icon=\"list\"></core-icon></paper-shadow>\n      <div class=\"list-box accordion-box\">\n        <div class=\"user-list\"></div>\n        <paper-fab icon=\"add\" class=\"item-list-add\"></paper-fab>\n      </div>\n      <paper-shadow z=\"2\"><h3 class=\"accordion-header header-plus\"></h3></paper-shadow>\n      <div class=\"plus-box accordion-box\">\n        <form class=\"plus-form\">\n          <paper-input type=\"url\" class=\"plus-input plus-url\" floatingLabel=true label=\"What is the url?\"></paper-input>\n          <paper-input type=\"text\" class=\"plus-input plus-name\" floatingLabel=true label=\"What do you want to call it?\"></paper-input>\n          <paper-autogrow-textarea><textarea class=\"plus-input plus-description\" placeholder=\"Any notes you want to leave?\"></textarea></paper-autogrow-textarea>\n          <input type=\"file\" class=\"plus-input plus-picture\" placeholder=\"You can add pictures if you want\">\n          <paper-button raised class=\"plus-input plus-submit\">Save</paper-button>\n        </form>\n      </div>\n    </div>\n      <!--<footer class=\"home-footer\">\n        <i class=\"fa fa-list-ul home-icon home-list\"></i><i class=\"fa fa-plus home-icon home-plus\"></i>\n      </footer>-->\n    </section>\n  </core-header-panel>\n</core-drawer-panel>\n";
},"useData":true});
this["JST"]["landing"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<form class=\"landing-form\">\n  <input type=\"text\" class=\"user-username landing-input\" placeholder=\"Username\">\n  <input type=\"password\" class=\"user-password landing-input\" placeholder=\"Password\">\n  <input type=\"submit\" class=\"user-submit landing-button\">\n</form>\n<button class=\"new-user-button landing-button\">Don't have an account? Join In</button>\n";
},"useData":true});
this["JST"]["listitem"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
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

  return "<paper-shadow z=\"1\" class=\"list-item-header\"><h4 class=\"item-title\"><span class=\"list-item-header-name\">"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"name","hash":{},"data":data}) : helper)))
    + "</span></h4></paper-shadow>\n<div class=\"item-information\">\n  <div class=\"item-picture-box\">\n    <img src=\""
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
    + "  <a href=\""
    + alias3(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"url","hash":{},"data":data}) : helper)))
    + "\"><i class=\"fa fa-external-link list-item-link-icon\"></i></a>\n</div>\n";
},"useData":true});
this["JST"]["newuser"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<form class=\"new-user-form\">\n  <input type=\"text\" class=\"new-user-username create-input\" placeholder=\"Username\">\n  <input type=\"text\" class=\"new-user-password create-input\" placeholder=\"Password\">\n  <input type=\"email\" class=\"new-user-email create-input\" placeholder=\"Email\">\n  <input type=\"submit\" class=\"new-user-create-button\" value=\"Submit\">\n</form>\n";
},"useData":true});
this["JST"]["searchitem"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1;

  return "  <ul class=\"search-item-features\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.features : depth0),{"name":"each","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "  </ul>\n";
},"2":function(depth0,helpers,partials,data) {
    var helper;

  return "      <li class=\"search-item-single-feature\">"
    + this.escapeExpression(((helper = (helper = helpers.feature || (depth0 != null ? depth0.feature : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"feature","hash":{},"data":data}) : helper)))
    + "</li>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "<h3 class=\"search-item-header\">\n  <span class=\"search-result-name\">"
    + alias2(alias1((depth0 != null ? depth0.name : depth0), depth0))
    + " <i class=\"fa fa-angle-down\"></i></span>\n<h3>\n<div class=\"search-item-information\">\n  <div class=\"search-item-image-box\"><img src=\""
    + alias2(alias1((depth0 != null ? depth0.image : depth0), depth0))
    + "\" class=\"search-result-image\"></div>\n  <h5 class=\"search-item-price\">Price: $"
    + alias2(alias1((depth0 != null ? depth0.salePrice : depth0), depth0))
    + "</h5>\n  <h5 class=\"search-item-color\">Color: "
    + alias2(alias1((depth0 != null ? depth0.color : depth0), depth0))
    + "</h5>\n  <p class=\"search-item-description\">Description: "
    + alias2(alias1((depth0 != null ? depth0.shortDescription : depth0), depth0))
    + "</p>\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.features : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "  <paper-fab mini icon=\"add\" class=\"search-item-list-add\"></paper-fab>\n</div>\n";
},"useData":true});
this["JST"]["searchresults"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"search-results-box\"></div>\n";
},"useData":true});