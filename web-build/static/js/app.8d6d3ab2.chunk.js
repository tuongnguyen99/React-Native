(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{139:function(e,t,a){e.exports=a.p+"static/media/jacket.e0e28588.jpg"},196:function(e,t,a){"use strict";a.d(t,"a",(function(){return se}));var n=a(0),r=a.n(n),i=a(6),o=a(339);var l=function(e){var t=e.name,a=void 0===t?"dots-horizontal":t,n=e.size,l=void 0===n?50:n,c=e.backgroundColor,u=void 0===c?"#000":c,s=e.iconColor,d=void 0===s?"#fff":s;return r.a.createElement(i.a,{style:{width:l,height:l,borderRadius:l/2,backgroundColor:u,justifyContent:"center",alignItems:"center"}},r.a.createElement(o.a,{name:a,size:l/2,color:d}))},c=a(32),u=a(3),s=a(23),d=(a(180),a(101),{primary:"#fc5c65",secondary:"#4ecdc4",black:"#000",white:"#fff",medium:"#6e6969",light:"#f8f4f4",dark:"#2c2c2c",danger:"#ff5252"});u.a.create({container:{paddingHorizontal:20,flexDirection:"row",padding:15,backgroundColor:d.white,alignItems:"center"},image:{width:60,height:60,borderRadius:50},detailsContainer:{justifyContent:"center",marginLeft:10,flex:1},title:{fontWeight:"bold",fontSize:16},subTitle:{color:"#ddd",fontSize:14}});var m=a(20),g=a(189),f=a(91);var h=u.a.create({screen:{paddingTop:"android"===m.a.OS?f.a.currentHeight:0,flex:1}}),b=function(e){var t=e.children,a=e.style;return r.a.createElement(g.a,{style:[h.screen,a]},t)};u.a.create({image:{width:"100%",height:300},detailsContainer:{padding:20},title:{fontWeight:"bold",marginBottom:10},subTitle:{color:"coral"}});var p=a(39),v=a.n(p),E=(a(73),a(35));u.a.create({container:{flex:1,backgroundColor:d.danger,width:70,justifyContent:"center",alignItems:"center"}});u.a.create({screen:{backgroundColor:d.light},container:{marginVertical:20}});var C=a(34);u.a.create({container:{flex:1,backgroundColor:"#000"},buttonsContainer:{flexDirection:"row",justifyContent:"space-between",marginHorizontal:20,marginTop:20},closeButton:{width:50,height:50,justifyContent:"center",alignItems:"center"},deleteButton:{width:50,height:50,justifyContent:"center",alignItems:"center"},imageContainer:{flex:1},image:{width:"100%",height:"100%",resizeMode:"contain"}});u.a.create({card:{backgroundColor:d.white,margin:20,borderRadius:10,overflow:"hidden",elevation:1},image:{width:"100%",height:200},detailsContainer:{padding:10},title:{marginBottom:6,fontWeight:"bold"},subTitle:{color:"coral"}}),a(139),a(233);u.a.create({screen:{backgroundColor:d.light}});var w=a(17),y=a.n(w),k=a(18),x=a.n(k),P={text:{fontSize:18,fontFamily:"android"===m.a.OS?"Roboto":"Avenir",color:d.dark}};var I=u.a.create({container:{backgroundColor:d.light,borderRadius:25,flexDirection:"row",padding:10,marginVertical:10},icon:{margin:10}}),j=function(e){var t=e.icon,a=e.width,n=void 0===a?"100%":a,l=x()(e,["icon","width"]);return r.a.createElement(i.a,{style:[I.container,{width:n}]},t&&r.a.createElement(o.a,{name:t,size:20,color:d.medium,style:I.icon}),r.a.createElement(E.c,y()({style:[P.text,{flex:1}]},l,{placeholderTextColor:d.medium})))},S=a(128),z=a(190);var O=function(e){var t=e.children,a=e.style;return r.a.createElement(s.a,{style:[P.text,a]},t)};var T=u.a.create({text:{padding:20}}),R=function(e){var t=e.item,a=e.onPress;return r.a.createElement(C.a,{onPress:a},r.a.createElement(O,{style:T.text},t.label))};var F=u.a.create({container:{backgroundColor:d.light,borderRadius:25,flexDirection:"row",padding:15,marginVertical:10,alignItems:"center"},icon:{margin:10},text:{flex:1},placeholder:{color:d.medium,flex:1}}),V=function(e){var t=e.icon,a=e.items,l=e.selectedItem,c=e.numberOfColumns,u=void 0===c?1:c,s=e.PickerItemComponent,m=void 0===s?R:s,g=e.placeholder,f=e.width,h=void 0===f?"100%":f,b=e.onSelectItem,p=Object(n.useState)(!1),C=v()(p,2),w=C[0],y=C[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(E.d,{onPress:function(){y(!0)}},r.a.createElement(i.a,{style:[F.container,{width:h}]},t&&r.a.createElement(o.a,{name:t,size:20,color:d.medium,style:F.icon}),l?r.a.createElement(O,{style:F.placeholder},l.label):r.a.createElement(O,{style:F.placeholder},g),r.a.createElement(o.a,{name:"chevron-down",size:20,color:d.medium}))),r.a.createElement(z.a,{visible:w,animationType:"slide"},r.a.createElement(S.a,{title:"Close",onPress:function(){y(!1)}}),r.a.createElement(E.a,{data:a,keyExtractor:function(e){return e.value.toString()},numColumns:u,renderItem:function(e){var t=e.item;return r.a.createElement(m,{item:t,onPress:function(){y(!1),b(t)}})}})))},q=a(27),B=a(45);var D=function(e){var t=e.initialValues,a=e.onSubmit,n=e.validationSchema,i=e.children;return r.a.createElement(B.a,{initialValues:t,onSubmit:a,validationSchema:n},(function(){return r.a.createElement(r.a.Fragment,null,i)}))};var H=u.a.create({text:{color:"red"}}),A=function(e){var t=e.error;return e.visible&&t?r.a.createElement(O,{style:H.text},t):null};var U=function(e){var t=e.name,a=e.width,n=x()(e,["name","width"]),i=Object(B.b)(),o=i.setFieldTouched,l=i.handleChange,c=i.errors,u=i.touched;return r.a.createElement(r.a.Fragment,null,r.a.createElement(j,y()({onBlur:function(){o(t)},onChangeText:l(t),width:a},n)),r.a.createElement(A,{error:c[t],visible:u[t]}))};var J=u.a.create({button:{justifyContent:"center",alignItems:"center",borderRadius:50,width:"100%",padding:14,marginBottom:20,backgroundColor:"red"},title:{color:d.white,textTransform:"uppercase",fontSize:18}}),M=function(e){var t=e.title,a=e.color,n=e.onPress;return r.a.createElement(C.a,{style:[J.button,{backgroundColor:d[a]}],onPress:n},r.a.createElement(s.a,{style:J.title},t))};var W=function(e){var t=e.title,a=Object(B.b)().handleSubmit;return r.a.createElement(M,{title:t,onPress:a,color:"primary"})};q.c().shape({email:q.d().required("Vui l\xf2ng nh\u1eadp email").email("Email kh\xf4ng h\u1ee3p l\u1ec7").label("Email"),password:q.d().required().min(4).label("Password")});u.a.create({container:{padding:12},logo:{width:100,height:100,alignSelf:"center",marginTop:50,marginBottom:20}}),q.c().shape({name:q.d().min(1).required(),email:q.d().required("Vui l\xf2ng nh\u1eadp email").email("Email kh\xf4ng h\u1ee3p l\u1ec7").label("Email"),password:q.d().required().min(4).label("Password")});u.a.create({container:{padding:10}});var L=u.a.create({container:{width:"33%",justifyContent:"center",alignItems:"center",padding:20},label:{textAlign:"center",marginTop:5}}),G=function(e){var t=e.item,a=e.onPress;return r.a.createElement(C.a,{style:L.container,onPress:a},r.a.createElement(l,{backgroundColor:t.backgroundColor,name:t.icon,size:80}),r.a.createElement(s.a,{style:L.label},t.label))};var N=function(e){var t=e.items,a=e.name,n=e.PickerItemComponent,i=e.numberOfColumns,o=e.placeholder,l=e.width,c=Object(B.b)(),u=c.errors,s=c.setFieldValue,d=c.touched,m=c.values;return r.a.createElement(r.a.Fragment,null,r.a.createElement(V,{items:t,onSelectItem:function(e){s(a,e)},PickerItemComponent:n,numberOfColumns:i,placeholder:o,selectedItem:m[a],width:l}),r.a.createElement(A,{error:u[a],visible:d[a]}))},Y=a(53),K=a.n(Y),Q=a(2),X=a.n(Q),Z=a(112),$=a(49);var _=u.a.create({container:{backgroundColor:"#ddd",width:100,height:100,borderRadius:20,marginRight:5,justifyContent:"center",alignItems:"center",overflow:"hidden"},image:{width:"100%",height:"100%"}}),ee=function(e){var t=e.imageUri,a=e.onPress;return Object(n.useEffect)((function(){!function(){var e;X.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,X.a.awrap(Z.b());case 2:e=t.sent,e.granted||alert("You need to enable to access your photos");case 5:case"end":return t.stop()}}),null,null,null,Promise)}()}),[]),r.a.createElement(C.a,{style:_.container,onPress:function(){var e;return X.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:if(!t){n.next=2;break}return n.abrupt("return",a(t));case 2:return n.prev=2,n.next=5,X.a.awrap(Z.a({mediaTypes:$.a.Images,quality:.5}));case 5:(e=n.sent).cancelled||a(e.uri),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(2),alert(n.t0);case 12:case"end":return n.stop()}}),null,null,[[2,9]],Promise)}},t?r.a.createElement(c.a,{source:{uri:t},style:_.image,key:t}):r.a.createElement(l,{name:"camera",backgroundColor:"transparent",size:80}))};var te=u.a.create({container:{flexDirection:"row"}}),ae=function(e){var t=e.imageUris,a=e.onAddImage,o=e.onRemoveImage,l=Object(n.useRef)();return r.a.createElement(i.a,null,r.a.createElement(E.b,{horizontal:!0,ref:l,onContentSizeChange:function(){l.current.scrollToEnd()},showsHorizontalScrollIndicator:!1},r.a.createElement(i.a,{style:te.container},t.map((function(e){return r.a.createElement(ee,{imageUri:e,onPress:o,key:e})})),r.a.createElement(ee,{onPress:a}))))};var ne=function(e){var t=e.name,a=Object(B.b)(),n=a.values,i=a.errors,o=a.touched,l=a.setFieldValue;return r.a.createElement(r.a.Fragment,null,r.a.createElement(ae,{imageUris:n[t],onAddImage:function(e){if(n[t].includes(e))return alert("photo is duplicated");l(t,[].concat(K()(n[t]),[e]))},onRemoveImage:function(e){l(t,n[t].filter((function(t){return t!==e})))}}),r.a.createElement(A,{error:i[t],visible:o[t]}))},re=a(113),ie=function(){var e=Object(n.useState)(),t=v()(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){!function(){var e,t,a,n;X.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,X.a.awrap(re.b());case 2:if(i.sent.granted){i.next=5;break}return i.abrupt("return");case 5:return i.next=7,X.a.awrap(re.a());case 7:e=i.sent,t=e.coords,a=t.latitude,n=t.longitude,r({latitude:a,longitude:n});case 12:case"end":return i.stop()}}),null,null,null,Promise)}()}),[]),a},oe=q.c().shape({title:q.d().min(1).required(),price:q.b().min(1).max(1e4),category:q.c().required().nullable(),description:q.d(),images:q.a().min(1,"Please select at least one image")}),le=[{backgroundColor:"#fc5c65",icon:"floor-lamp",label:"Furniture",value:1},{backgroundColor:"#fd9644",icon:"car",label:"Cars",value:2},{backgroundColor:"#fed330",icon:"camera",label:"Cameras",value:3},{backgroundColor:"#26de81",icon:"cards",label:"Games",value:4},{backgroundColor:"#2bcbba",icon:"shoe-heel",label:"Clothing",value:5},{backgroundColor:"#45aaf2",icon:"basketball",label:"Sports",value:6},{backgroundColor:"#4b7bec",icon:"headphones",label:"Movies & Music",value:7},{backgroundColor:"#a55eea",icon:"book-open-variant",label:"Books",value:8},{backgroundColor:"#778ca3",icon:"application",label:"Other",value:9}];var ce=u.a.create({container:{paddingHorizontal:10}}),ue=function(){var e=ie();return r.a.createElement(b,{style:ce.container},r.a.createElement(D,{initialValues:{title:"",price:"",category:le[0],description:"",images:[]},validationSchema:oe,onSubmit:function(t){alert(JSON.stringify(e))}},r.a.createElement(ne,{name:"images"}),r.a.createElement(U,{name:"title",placeholder:"Title"}),r.a.createElement(U,{name:"price",placeholder:"Price",keyboardType:"numeric",width:120}),r.a.createElement(N,{name:"category",items:le,placeholder:le[0].label,numberOfColumns:3,PickerItemComponent:G,width:200}),r.a.createElement(U,{name:"description",placeholder:"Description",multiline:!0,numberOfLines:3}),r.a.createElement(W,{title:"Post"})))};q.c().shape({name:q.d().min(1).required()});u.a.create({container:{padding:10}});function se(){return r.a.createElement(ue,null)}},199:function(e,t,a){e.exports=a(333)},232:function(e,t,a){e.exports=a.p+"static/media/chair.72b59f4a.jpg"},233:function(e,t,a){e.exports=a.p+"static/media/couch.ffe727c0.jpg"},332:function(e,t,a){e.exports=a.p+"static/media/logo-red.3cd9e5fe.png"},79:function(e,t,a){e.exports=a.p+"static/media/tuong.6a0faae0.jpg"}},[[199,1,2]]]);
//# sourceMappingURL=app.8d6d3ab2.chunk.js.map