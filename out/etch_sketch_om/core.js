// Compiled by ClojureScript 0.0-2657 {}
if(!goog.isProvided_('etch_sketch_om.core')) {
goog.provide('etch_sketch_om.core');
}
goog.require('cljs.core');
goog.require('goog.events');
goog.require('om.dom');
goog.require('om.core');
cljs.core.enable_console_print_BANG_.call(null);
etch_sketch_om.core.etch_point = (function etch_point(props){

var map__4992 = props;
var map__4992__$1 = ((cljs.core.seq_QMARK_.call(null,map__4992))?cljs.core.apply.call(null,cljs.core.hash_map,map__4992):map__4992);
var width = cljs.core.get.call(null,map__4992__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__4992__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var x = cljs.core.get.call(null,map__4992__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__4992__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var fill = cljs.core.get.call(null,map__4992__$1,new cljs.core.Keyword(null,"fill","fill",883462889));
if(typeof etch_sketch_om.core.t4993 !== 'undefined'){
} else {

/**
* @constructor
*/
etch_sketch_om.core.t4993 = (function (fill,y,x,height,width,map__4992,props,etch_point,meta4994){
this.fill = fill;
this.y = y;
this.x = x;
this.height = height;
this.width = width;
this.map__4992 = map__4992;
this.props = props;
this.etch_point = etch_point;
this.meta4994 = meta4994;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
etch_sketch_om.core.t4993.prototype.om$core$IRender$ = true;

etch_sketch_om.core.t4993.prototype.om$core$IRender$render$arity$1 = ((function (map__4992,map__4992__$1,width,height,x,y,fill){
return (function (_){
var self__ = this;
var ___$1 = this;
return React.DOM.rect({"fill": self__.fill, "y": self__.y, "x": self__.x, "height": self__.height, "width": self__.width});
});})(map__4992,map__4992__$1,width,height,x,y,fill))
;

etch_sketch_om.core.t4993.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__4992,map__4992__$1,width,height,x,y,fill){
return (function (_4995){
var self__ = this;
var _4995__$1 = this;
return self__.meta4994;
});})(map__4992,map__4992__$1,width,height,x,y,fill))
;

etch_sketch_om.core.t4993.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__4992,map__4992__$1,width,height,x,y,fill){
return (function (_4995,meta4994__$1){
var self__ = this;
var _4995__$1 = this;
return (new etch_sketch_om.core.t4993(self__.fill,self__.y,self__.x,self__.height,self__.width,self__.map__4992,self__.props,self__.etch_point,meta4994__$1));
});})(map__4992,map__4992__$1,width,height,x,y,fill))
;

etch_sketch_om.core.t4993.cljs$lang$type = true;

etch_sketch_om.core.t4993.cljs$lang$ctorStr = "etch-sketch-om.core/t4993";

etch_sketch_om.core.t4993.cljs$lang$ctorPrWriter = ((function (map__4992,map__4992__$1,width,height,x,y,fill){
return (function (this__3014__auto__,writer__3015__auto__,opt__3016__auto__){
return cljs.core._write.call(null,writer__3015__auto__,"etch-sketch-om.core/t4993");
});})(map__4992,map__4992__$1,width,height,x,y,fill))
;

etch_sketch_om.core.__GT_t4993 = ((function (map__4992,map__4992__$1,width,height,x,y,fill){
return (function __GT_t4993(fill__$1,y__$1,x__$1,height__$1,width__$1,map__4992__$2,props__$1,etch_point__$1,meta4994){
return (new etch_sketch_om.core.t4993(fill__$1,y__$1,x__$1,height__$1,width__$1,map__4992__$2,props__$1,etch_point__$1,meta4994));
});})(map__4992,map__4992__$1,width,height,x,y,fill))
;

}

return (new etch_sketch_om.core.t4993(fill,y,x,height,width,map__4992__$1,props,etch_point,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),30,new cljs.core.Keyword(null,"end-line","end-line",1837326455),22,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"line","line",212345235),15,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/jwoo/github/etch-sketch-om/src/etch_sketch_om/core.cljs"], null)));
});
etch_sketch_om.core.etch_trail = (function etch_trail(props){

if(typeof etch_sketch_om.core.t4999 !== 'undefined'){
} else {

/**
* @constructor
*/
etch_sketch_om.core.t4999 = (function (props,etch_trail,meta5000){
this.props = props;
this.etch_trail = etch_trail;
this.meta5000 = meta5000;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
etch_sketch_om.core.t4999.prototype.om$core$IRender$ = true;

etch_sketch_om.core.t4999.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.call(null,om.dom.g,null,cljs.core.map.call(null,((function (___$1){
return (function (point){
return om.core.build.call(null,etch_sketch_om.core.etch_point,point);
});})(___$1))
,self__.props));
});

etch_sketch_om.core.t4999.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5001){
var self__ = this;
var _5001__$1 = this;
return self__.meta5000;
});

etch_sketch_om.core.t4999.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5001,meta5000__$1){
var self__ = this;
var _5001__$1 = this;
return (new etch_sketch_om.core.t4999(self__.props,self__.etch_trail,meta5000__$1));
});

etch_sketch_om.core.t4999.cljs$lang$type = true;

etch_sketch_om.core.t4999.cljs$lang$ctorStr = "etch-sketch-om.core/t4999";

etch_sketch_om.core.t4999.cljs$lang$ctorPrWriter = (function (this__3014__auto__,writer__3015__auto__,opt__3016__auto__){
return cljs.core._write.call(null,writer__3015__auto__,"etch-sketch-om.core/t4999");
});

etch_sketch_om.core.__GT_t4999 = (function __GT_t4999(props__$1,etch_trail__$1,meta5000){
return (new etch_sketch_om.core.t4999(props__$1,etch_trail__$1,meta5000));
});

}

return (new etch_sketch_om.core.t4999(props,etch_trail,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),64,new cljs.core.Keyword(null,"end-line","end-line",1837326455),29,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),26,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/jwoo/github/etch-sketch-om/src/etch_sketch_om/core.cljs"], null)));
});
etch_sketch_om.core.etch_sketch = (function etch_sketch(props){

var map__5007 = props;
var map__5007__$1 = ((cljs.core.seq_QMARK_.call(null,map__5007))?cljs.core.apply.call(null,cljs.core.hash_map,map__5007):map__5007);
var cursor = cljs.core.get.call(null,map__5007__$1,new cljs.core.Keyword(null,"cursor","cursor",1011937484));
var svg = cljs.core.get.call(null,map__5007__$1,new cljs.core.Keyword(null,"svg","svg",856789142));
var trail = cljs.core.get.call(null,map__5007__$1,new cljs.core.Keyword(null,"trail","trail",-272340561));
var map__5008 = svg;
var map__5008__$1 = ((cljs.core.seq_QMARK_.call(null,map__5008))?cljs.core.apply.call(null,cljs.core.hash_map,map__5008):map__5008);
var width = cljs.core.get.call(null,map__5008__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__5008__$1,new cljs.core.Keyword(null,"height","height",1025178622));
if(typeof etch_sketch_om.core.t5009 !== 'undefined'){
} else {

/**
* @constructor
*/
etch_sketch_om.core.t5009 = (function (height,width,map__5008,trail,svg,cursor,map__5007,props,etch_sketch,meta5010){
this.height = height;
this.width = width;
this.map__5008 = map__5008;
this.trail = trail;
this.svg = svg;
this.cursor = cursor;
this.map__5007 = map__5007;
this.props = props;
this.etch_sketch = etch_sketch;
this.meta5010 = meta5010;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
etch_sketch_om.core.t5009.prototype.om$core$IRender$ = true;

etch_sketch_om.core.t5009.prototype.om$core$IRender$render$arity$1 = ((function (map__5007,map__5007__$1,cursor,svg,trail,map__5008,map__5008__$1,width,height){
return (function (_){
var self__ = this;
var ___$1 = this;
return React.DOM.svg({"height": self__.height, "width": self__.width},om.core.build.call(null,etch_sketch_om.core.etch_trail,self__.trail),om.core.build.call(null,etch_sketch_om.core.etch_point,self__.cursor));
});})(map__5007,map__5007__$1,cursor,svg,trail,map__5008,map__5008__$1,width,height))
;

etch_sketch_om.core.t5009.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__5007,map__5007__$1,cursor,svg,trail,map__5008,map__5008__$1,width,height){
return (function (_5011){
var self__ = this;
var _5011__$1 = this;
return self__.meta5010;
});})(map__5007,map__5007__$1,cursor,svg,trail,map__5008,map__5008__$1,width,height))
;

etch_sketch_om.core.t5009.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__5007,map__5007__$1,cursor,svg,trail,map__5008,map__5008__$1,width,height){
return (function (_5011,meta5010__$1){
var self__ = this;
var _5011__$1 = this;
return (new etch_sketch_om.core.t5009(self__.height,self__.width,self__.map__5008,self__.trail,self__.svg,self__.cursor,self__.map__5007,self__.props,self__.etch_sketch,meta5010__$1));
});})(map__5007,map__5007__$1,cursor,svg,trail,map__5008,map__5008__$1,width,height))
;

etch_sketch_om.core.t5009.cljs$lang$type = true;

etch_sketch_om.core.t5009.cljs$lang$ctorStr = "etch-sketch-om.core/t5009";

etch_sketch_om.core.t5009.cljs$lang$ctorPrWriter = ((function (map__5007,map__5007__$1,cursor,svg,trail,map__5008,map__5008__$1,width,height){
return (function (this__3014__auto__,writer__3015__auto__,opt__3016__auto__){
return cljs.core._write.call(null,writer__3015__auto__,"etch-sketch-om.core/t5009");
});})(map__5007,map__5007__$1,cursor,svg,trail,map__5008,map__5008__$1,width,height))
;

etch_sketch_om.core.__GT_t5009 = ((function (map__5007,map__5007__$1,cursor,svg,trail,map__5008,map__5008__$1,width,height){
return (function __GT_t5009(height__$1,width__$1,map__5008__$2,trail__$1,svg__$1,cursor__$1,map__5007__$2,props__$1,etch_sketch__$1,meta5010){
return (new etch_sketch_om.core.t5009(height__$1,width__$1,map__5008__$2,trail__$1,svg__$1,cursor__$1,map__5007__$2,props__$1,etch_sketch__$1,meta5010));
});})(map__5007,map__5007__$1,cursor,svg,trail,map__5008,map__5008__$1,width,height))
;

}

return (new etch_sketch_om.core.t5009(height,width,map__5008__$1,trail,svg,cursor,map__5007__$1,props,etch_sketch,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),42,new cljs.core.Keyword(null,"end-line","end-line",1837326455),41,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"line","line",212345235),35,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/jwoo/github/etch-sketch-om/src/etch_sketch_om/core.cljs"], null)));
});
/**
* increment that our sketch works off of
*/
etch_sketch_om.core.increment = (10);
etch_sketch_om.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),(800),new cljs.core.Keyword(null,"height","height",1025178622),(600),new cljs.core.Keyword(null,"point-fill","point-fill",-1479930634),"black"], null),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"width","width",-384071477),etch_sketch_om.core.increment,new cljs.core.Keyword(null,"height","height",1025178622),etch_sketch_om.core.increment,new cljs.core.Keyword(null,"fill","fill",883462889),"grey"], null),new cljs.core.Keyword(null,"trail","trail",-272340561),cljs.core.PersistentVector.EMPTY], null));
om.core.root.call(null,(function (app,owner){
if(typeof etch_sketch_om.core.t5012 !== 'undefined'){
} else {

/**
* @constructor
*/
etch_sketch_om.core.t5012 = (function (owner,app,meta5013){
this.owner = owner;
this.app = app;
this.meta5013 = meta5013;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
etch_sketch_om.core.t5012.prototype.om$core$IRender$ = true;

etch_sketch_om.core.t5012.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return React.DOM.div(null,React.DOM.h1({"key": new cljs.core.Keyword(null,"title","title",636505583)},"Welcome to Etch-Sketch Land"),om.core.build.call(null,etch_sketch_om.core.etch_sketch,self__.app));
});

etch_sketch_om.core.t5012.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5014){
var self__ = this;
var _5014__$1 = this;
return self__.meta5013;
});

etch_sketch_om.core.t5012.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5014,meta5013__$1){
var self__ = this;
var _5014__$1 = this;
return (new etch_sketch_om.core.t5012(self__.owner,self__.app,meta5013__$1));
});

etch_sketch_om.core.t5012.cljs$lang$type = true;

etch_sketch_om.core.t5012.cljs$lang$ctorStr = "etch-sketch-om.core/t5012";

etch_sketch_om.core.t5012.cljs$lang$ctorPrWriter = (function (this__3014__auto__,writer__3015__auto__,opt__3016__auto__){
return cljs.core._write.call(null,writer__3015__auto__,"etch-sketch-om.core/t5012");
});

etch_sketch_om.core.__GT_t5012 = (function __GT_t5012(owner__$1,app__$1,meta5013){
return (new etch_sketch_om.core.t5012(owner__$1,app__$1,meta5013));
});

}

return (new etch_sketch_om.core.t5012(owner,app,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),40,new cljs.core.Keyword(null,"end-line","end-line",1837326455),59,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"line","line",212345235),55,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/jwoo/github/etch-sketch-om/src/etch_sketch_om/core.cljs"], null)));
}),etch_sketch_om.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));
/**
* axis to dimension translation hashmap
*/
etch_sketch_om.core.axis_to_dimension = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"height","height",1025178622)], null);
etch_sketch_om.core.move_cursor = (function move_cursor(axis,operator){

var app = cljs.core.deref.call(null,etch_sketch_om.core.app_state);
var map__5016 = app;
var map__5016__$1 = ((cljs.core.seq_QMARK_.call(null,map__5016))?cljs.core.apply.call(null,cljs.core.hash_map,map__5016):map__5016);
var svg = cljs.core.get.call(null,map__5016__$1,new cljs.core.Keyword(null,"svg","svg",856789142));
var cursor = cljs.core.get.call(null,map__5016__$1,new cljs.core.Keyword(null,"cursor","cursor",1011937484));
var dimension = etch_sketch_om.core.axis_to_dimension.call(null,axis);
var limit = dimension.call(null,svg);
var value = axis.call(null,cursor);
var update = operator.call(null,value,etch_sketch_om.core.increment);
if(((update >= (0))) && ((update < limit))){
return cljs.core.swap_BANG_.call(null,etch_sketch_om.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"cursor","cursor",1011937484),cljs.core.assoc.call(null,cursor,axis,update));
} else {
return null;
}
});
etch_sketch_om.core.same_point_value = (function same_point_value(a,b){

return (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(a),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(b))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(a),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(b)));
});
etch_sketch_om.core.mark_trail = (function mark_trail(){

var app = cljs.core.deref.call(null,etch_sketch_om.core.app_state);
var map__5019 = app;
var map__5019__$1 = ((cljs.core.seq_QMARK_.call(null,map__5019))?cljs.core.apply.call(null,cljs.core.hash_map,map__5019):map__5019);
var cursor = cljs.core.get.call(null,map__5019__$1,new cljs.core.Keyword(null,"cursor","cursor",1011937484));
var trail = cljs.core.get.call(null,map__5019__$1,new cljs.core.Keyword(null,"trail","trail",-272340561));
var svg = cljs.core.get.call(null,map__5019__$1,new cljs.core.Keyword(null,"svg","svg",856789142));
var point_fill = new cljs.core.Keyword(null,"point-fill","point-fill",-1479930634).cljs$core$IFn$_invoke$arity$1(svg);
var map__5020 = cursor;
var map__5020__$1 = ((cljs.core.seq_QMARK_.call(null,map__5020))?cljs.core.apply.call(null,cljs.core.hash_map,map__5020):map__5020);
var x = cljs.core.get.call(null,map__5020__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__5020__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
if(cljs.core.not_any_QMARK_.call(null,((function (app,map__5019,map__5019__$1,cursor,trail,svg,point_fill,map__5020,map__5020__$1,x,y){
return (function (a){
return etch_sketch_om.core.same_point_value.call(null,cursor,a);
});})(app,map__5019,map__5019__$1,cursor,trail,svg,point_fill,map__5020,map__5020__$1,x,y))
,trail)){
return cljs.core.swap_BANG_.call(null,etch_sketch_om.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"trail","trail",-272340561),cljs.core.conj.call(null,trail,cljs.core.assoc.call(null,cursor,new cljs.core.Keyword(null,"fill","fill",883462889),point_fill)));
} else {
return null;
}
});
/**
* keycodes that we care about for the keydown event
*/
etch_sketch_om.core.KeyCodes = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"h","h",1109658740),(72),new cljs.core.Keyword(null,"left","left",-399115937),(37),new cljs.core.Keyword(null,"j","j",-1397974765),(74),new cljs.core.Keyword(null,"up","up",-269712113),(38),new cljs.core.Keyword(null,"k","k",-2146297393),(75),new cljs.core.Keyword(null,"down","down",1565245570),(40),new cljs.core.Keyword(null,"l","l",1395893423),(76),new cljs.core.Keyword(null,"right","right",-452581833),(39)], null);
etch_sketch_om.core.handleKeydown = (function handleKeydown(keyCode){
var map__5022 = etch_sketch_om.core.KeyCodes;
var map__5022__$1 = ((cljs.core.seq_QMARK_.call(null,map__5022))?cljs.core.apply.call(null,cljs.core.hash_map,map__5022):map__5022);
var h = cljs.core.get.call(null,map__5022__$1,new cljs.core.Keyword(null,"h","h",1109658740));
var left = cljs.core.get.call(null,map__5022__$1,new cljs.core.Keyword(null,"left","left",-399115937));
var j = cljs.core.get.call(null,map__5022__$1,new cljs.core.Keyword(null,"j","j",-1397974765));
var down = cljs.core.get.call(null,map__5022__$1,new cljs.core.Keyword(null,"down","down",1565245570));
var k = cljs.core.get.call(null,map__5022__$1,new cljs.core.Keyword(null,"k","k",-2146297393));
var up = cljs.core.get.call(null,map__5022__$1,new cljs.core.Keyword(null,"up","up",-269712113));
var l = cljs.core.get.call(null,map__5022__$1,new cljs.core.Keyword(null,"l","l",1395893423));
var right = cljs.core.get.call(null,map__5022__$1,new cljs.core.Keyword(null,"right","right",-452581833));
etch_sketch_om.core.mark_trail.call(null);

if((cljs.core._EQ_.call(null,h,keyCode)) || (cljs.core._EQ_.call(null,left,keyCode))){
return etch_sketch_om.core.move_cursor.call(null,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core._);
} else {
if((cljs.core._EQ_.call(null,j,keyCode)) || (cljs.core._EQ_.call(null,down,keyCode))){
return etch_sketch_om.core.move_cursor.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core._PLUS_);
} else {
if((cljs.core._EQ_.call(null,k,keyCode)) || (cljs.core._EQ_.call(null,up,keyCode))){
return etch_sketch_om.core.move_cursor.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core._);
} else {
if((cljs.core._EQ_.call(null,l,keyCode)) || (cljs.core._EQ_.call(null,right,keyCode))){
return etch_sketch_om.core.move_cursor.call(null,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core._PLUS_);
} else {
return null;
}
}
}
}
});
goog.events.listen(document,goog.events.EventType.KEYDOWN,(function (e){
var keyCode = e.keyCode;
return etch_sketch_om.core.handleKeydown.call(null,keyCode);
}));

//# sourceMappingURL=core.js.map