window.Map||function(){"use-strict"
var t,i,e,n=Object.create(null)
n.size=0,n["delete"]=function(i){return t=this.k.lastIndexOf(i),~t?(this.k.splice(t,1),this.v.splice(t,1),--this.size,!0):!1},n.get=function(t){return this.v[this.k.lastIndexOf(t)]},n.set=function(i,e){t=this.k.lastIndexOf(i),~t||(this.k[t=this.size++]=i),this.v[t]=e},n.has=function(t){return-1!==this.k.lastIndexOf(t)},n.clear=function(t){this.k.splice(0,this.size),this.v.splice(0,this.size),this.size=0},n.forEach=function(t,n){for(i=n?t.bind(n):t,e=this.size;e--;)i(this.k[e],e,this)},n.entries=function(t){var i=0,e=this,n=this.size
return{next:function(){return i!==n?{value:[e.k[i++],e.v[i]],done:!1}:{done:!0}}}},n.keys=function(t){var i=0,e=this,n=this.size
return{next:function(){return i!==n?{value:e.k[i++],done:!1}:{done:!0}}}},n.values=function(t){var i=0,e=this,n=this.size
return{next:function(){return i!==n?{value:e.v[i++],done:!1}:{done:!0}}}},Map=function(i){if(i instanceof Array){this.size=t=i.length
for(var e=Array(t),n=Array(t);t--;)e[t]=i[t][0],n[t]=i[t][1]
this.k=e,this.v=n}else this.k=[],this.v=[]},Map.prototype=n}(),window.WeakMap||Object.defineProperty((WeakMap=window.Map).prototype,"length",{get:function(){return this.size}})
