(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"./.storybook/preview.js-generated-config-entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"parameters",(function(){return parameters})),__webpack_require__.d(preview_namespaceObject,"loaders",(function(){return loaders})),__webpack_require__.d(preview_namespaceObject,"decorators",(function(){return decorators}));__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-properties.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var ClientApi=__webpack_require__("./node_modules/@storybook/client-api/dist/esm/ClientApi.js"),esm=__webpack_require__("./node_modules/@storybook/client-logger/dist/esm/index.js"),Scene=(__webpack_require__("./node_modules/core-js/modules/es.promise.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./stories/Scene.js"));function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}var parameters={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}},loaded=0,loaders=[_asyncToGenerator(regeneratorRuntime.mark((function _callee(){return regeneratorRuntime.wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:if(!(loaded++<1)){_context.next=6;break}return _context.next=3,Object(Scene.c)();case 3:_context.t0=_context.sent,_context.next=7;break;case 6:_context.t0=null;case 7:return _context.t1=_context.t0,_context.abrupt("return",{loader:_context.t1});case 9:case"end":return _context.stop()}}),_callee)})))],decorators=[function(story){return Object(Scene.b)({width:window.innerWidth-32,height:window.innerHeight-36}),story()}];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":case"argTypes":return esm.a.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(value));case"decorators":return value.forEach((function(decorator){return Object(ClientApi.d)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(ClientApi.e)(loader,!1)}));case"parameters":return Object(ClientApi.f)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(ClientApi.b)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return Object(ClientApi.c)(enhancer)}));case"render":return Object(ClientApi.g)(value);case"globals":case"globalTypes":var v={};return v[key]=value,Object(ClientApi.f)(v,!1);case"__namedExportsOrder":case"decorateStory":case"renderToDOM":return null;default:return console.log(key+" was not supported :( !")}}))},"./generated-stories-entry.js":function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__("./node_modules/@storybook/html/dist/esm/client/index.js").configure)([__webpack_require__("./stories sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$"),__webpack_require__("./stories sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$")],module,!1)}).call(this,__webpack_require__("./node_modules/webpack/buildin/module.js")(module))},"./src/utils/ColorUtils.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return parseColor}));__webpack_require__("./node_modules/core-js/modules/es.number.is-integer.js"),__webpack_require__("./node_modules/core-js/modules/es.number.constructor.js"),__webpack_require__("./node_modules/core-js/modules/es.parse-int.js"),__webpack_require__("./node_modules/core-js/modules/es.string.match.js"),__webpack_require__("./node_modules/core-js/modules/es.regexp.exec.js");function parseColor(value){if(Number.isInteger(value))return value;if(value&&"#"===value.charAt(0))return parseInt(value.substr(1),16);var re=/^rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/i;if(re.test(value)){var _parseInt,_parseInt2,_parseInt3,m=value.match(re);return(255&(null===(_parseInt=parseInt(m))||void 0===_parseInt?void 0:_parseInt[1]))<<16|(255&(null===(_parseInt2=parseInt(m))||void 0===_parseInt2?void 0:_parseInt2[2]))<<8|255&(null===(_parseInt3=parseInt(m))||void 0===_parseInt3?void 0:_parseInt3[3])}}},"./stories sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$":function(module,exports,__webpack_require__){var map={"./logo/Logo.stories.js":"./stories/logo/Logo.stories.js","./polygon/Polygon.stories.js":"./stories/polygon/Polygon.stories.js","./shapes/Burst.stories.js":"./stories/shapes/Burst.stories.js","./shapes/Gear.stories.js":"./stories/shapes/Gear.stories.js","./shapes/Star.stories.js":"./stories/shapes/Star.stories.js","./text/Text.stories.js":"./stories/text/Text.stories.js"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./stories sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$"},"./stories sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$":function(module,exports,__webpack_require__){var map={"./Introduction.stories.mdx":"./stories/Introduction.stories.mdx"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./stories sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$"},"./stories/Introduction.stories.mdx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"__page",(function(){return __page}));__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/react/index.js");var _mdx_js_react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@mdx-js/react/dist/esm.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/index.js"),_excluded=["components"];function _extends(){return _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var layoutProps={};function MDXContent(_ref){var components=_ref.components,props=_objectWithoutProperties(_ref,_excluded);return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("wrapper",_extends({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_6__.b,{title:"Example/Introduction",mdxType:"Meta"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("style",null,"\n"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("h1",{id:"storybook-for-pixijs"},"Storybook for Pixi.js"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)("p",null,"Using Storybook for Pixi.js graphics development"))}MDXContent.isMDXComponent=!0;var __page=function __page(){throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};var componentMeta={title:"Example/Introduction",includeStories:["__page"]},mdxStoryNameToKey={};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs=Object.assign({},componentMeta.parameters.docs||{},{page:function page(){return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_6__.a,{mdxStoryNameToKey:mdxStoryNameToKey,mdxComponentAnnotations:componentMeta},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.b)(MDXContent,null))}}),__webpack_exports__.default=componentMeta},"./stories/Scene.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return canvas})),__webpack_require__.d(__webpack_exports__,"d",(function(){return viewport})),__webpack_require__.d(__webpack_exports__,"b",(function(){return createScene})),__webpack_require__.d(__webpack_exports__,"c",(function(){return loadTextures}));__webpack_require__("./node_modules/core-js/modules/es.promise.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js");var pixi_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/pixi.js/dist/esm/pixi.js"),pixi_viewport__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/pixi-viewport/dist/esm/viewport.es.js");function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}var canvas=document.createElement("canvas"),app=new pixi_js__WEBPACK_IMPORTED_MODULE_2__.a({view:canvas,width:300,height:150,antialias:!0,autoDensity:!0,backgroundColor:1250067,resolution:devicePixelRatio}),viewport=new pixi_viewport__WEBPACK_IMPORTED_MODULE_3__.a({worldWidth:1e3,worldHeight:1e3,screenWidth:300,screenHeight:150,divWheel:app.view,interaction:app.renderer.plugins.interaction}).drag().pinch().wheel().decelerate();app.stage.addChild(viewport),app.ticker.start();var resize=function resize(width,height){app.renderer.resize(width,height),viewport.resize(width,height)};window.addEventListener("resize",(function(){resize(window.innerWidth-32,window.innerHeight-36)}));var createScene=function createScene(_ref){for(var width=_ref.width,height=_ref.height;viewport.children.length>0;){viewport.children.shift().destroy(!0)}resize(width,height)},loadTextures=function(){var _ref2=function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}(regeneratorRuntime.mark((function _callee(){return regeneratorRuntime.wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return _context.abrupt("return",new Promise((function(resolve,reject){var loader=new pixi_js__WEBPACK_IMPORTED_MODULE_2__.c;loader.add("images/logo.svg").load(),loader.onComplete.add((function(){resolve()})),loader.onError.add((function(){reject()}))})));case 1:case"end":return _context.stop()}}),_callee)})));return function loadTextures(){return _ref2.apply(this,arguments)}}()},"./stories/logo/Logo.stories.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"PixiLogo",(function(){return PixiLogo}));__webpack_require__("./node_modules/core-js/modules/es.string.anchor.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js");var pixi_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/pixi.js/dist/esm/pixi.js"),_Scene__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./stories/Scene.js");__webpack_exports__.default={title:"Example/Logos"};var PixiLogo=function PixiLogo(){var logo=pixi_js__WEBPACK_IMPORTED_MODULE_2__.d.from("images/logo.svg");return logo.anchor.set(.5,.5),logo.x=_Scene__WEBPACK_IMPORTED_MODULE_3__.d.screenWidth/2,logo.y=_Scene__WEBPACK_IMPORTED_MODULE_3__.d.screenHeight/2,_Scene__WEBPACK_IMPORTED_MODULE_3__.d.addChild(logo),_Scene__WEBPACK_IMPORTED_MODULE_3__.a};PixiLogo.parameters=Object.assign({storySource:{source:'() => {\n  const logo = PIXI.Sprite.from("images/logo.svg");\n  logo.anchor.set(0.5, 0.5);\n  logo.x = viewport.screenWidth / 2;\n  logo.y = viewport.screenHeight / 2;\n  viewport.addChild(logo);\n\n  return canvas;\n}'}},PixiLogo.parameters)},"./stories/polygon/Polygon.stories.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Triangle",(function(){return Triangle})),__webpack_require__.d(__webpack_exports__,"Square",(function(){return Square})),__webpack_require__.d(__webpack_exports__,"Pentagon",(function(){return Pentagon})),__webpack_require__.d(__webpack_exports__,"Hexagon",(function(){return Hexagon}));__webpack_require__("./node_modules/core-js/modules/es.array.fill.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js");var pixi=__webpack_require__("./node_modules/pixi.js/dist/esm/pixi.js"),Scene=__webpack_require__("./stories/Scene.js"),ColorUtils=__webpack_require__("./src/utils/ColorUtils.js");__webpack_exports__.default={title:"Example/Polygon",argTypes:{stroke:{control:{type:"range",min:0,max:5,step:.1}},color:{control:"color"},fill:{control:"color"},sides:{control:{type:"range",min:3,max:25,step:1}},radius:{control:{type:"range",min:1,max:100,step:1}},angle:{control:{type:"range",min:0,max:360,step:1}}}};var Polygon_stories_Template=function Template(_ref){var stroke=_ref.stroke,color=_ref.color,fill=_ref.fill,sides=_ref.sides,radius=_ref.radius,angle=_ref.angle,graphics=new pixi.b;return graphics.lineStyle(stroke,Object(ColorUtils.a)(color)),graphics.beginFill(Object(ColorUtils.a)(fill)),function drawPolygon(target,x,y,sides,radius){var n,dx,dy,angle=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0,step=2*Math.PI/sides,start=angle/180*Math.PI;for(target.moveTo(x+Math.cos(start)*radius,y-Math.sin(start)*radius),n=1;n<=sides;++n)dx=x+Math.cos(start+step*n)*radius,dy=y-Math.sin(start+step*n)*radius,target.lineTo(dx,dy);target.closePath()}(graphics,Scene.d.screenWidth/2,Scene.d.screenHeight/2,sides,radius,angle),Scene.d.addChild(graphics),Scene.a},Triangle=Polygon_stories_Template.bind({});Triangle.args={stroke:2,color:"#cfefff",fill:"#036191",sides:3,radius:50,angle:0};var Square=Polygon_stories_Template.bind({});Square.args={stroke:2,color:"#cfefff",fill:"#036191",sides:4,radius:50,angle:0};var Pentagon=Polygon_stories_Template.bind({});Pentagon.args={stroke:2,color:"#cfefff",fill:"#036191",sides:5,radius:50,angle:0};var Hexagon=Polygon_stories_Template.bind({});Hexagon.args={stroke:2,color:"#cfefff",fill:"#036191",sides:6,radius:50,angle:0},Triangle.parameters=Object.assign({storySource:{source:"({ stroke, color, fill, sides, radius, angle }) => {\n  const graphics = new PIXI.Graphics();\n  graphics.lineStyle(stroke, parseColor(color));\n  graphics.beginFill(parseColor(fill));\n  drawPolygon(\n    graphics,\n    viewport.screenWidth / 2,\n    viewport.screenHeight / 2,\n    sides,\n    radius,\n    angle\n  );\n\n  viewport.addChild(graphics);\n\n  return canvas;\n}"}},Triangle.parameters),Square.parameters=Object.assign({storySource:{source:"({ stroke, color, fill, sides, radius, angle }) => {\n  const graphics = new PIXI.Graphics();\n  graphics.lineStyle(stroke, parseColor(color));\n  graphics.beginFill(parseColor(fill));\n  drawPolygon(\n    graphics,\n    viewport.screenWidth / 2,\n    viewport.screenHeight / 2,\n    sides,\n    radius,\n    angle\n  );\n\n  viewport.addChild(graphics);\n\n  return canvas;\n}"}},Square.parameters),Pentagon.parameters=Object.assign({storySource:{source:"({ stroke, color, fill, sides, radius, angle }) => {\n  const graphics = new PIXI.Graphics();\n  graphics.lineStyle(stroke, parseColor(color));\n  graphics.beginFill(parseColor(fill));\n  drawPolygon(\n    graphics,\n    viewport.screenWidth / 2,\n    viewport.screenHeight / 2,\n    sides,\n    radius,\n    angle\n  );\n\n  viewport.addChild(graphics);\n\n  return canvas;\n}"}},Pentagon.parameters),Hexagon.parameters=Object.assign({storySource:{source:"({ stroke, color, fill, sides, radius, angle }) => {\n  const graphics = new PIXI.Graphics();\n  graphics.lineStyle(stroke, parseColor(color));\n  graphics.beginFill(parseColor(fill));\n  drawPolygon(\n    graphics,\n    viewport.screenWidth / 2,\n    viewport.screenHeight / 2,\n    sides,\n    radius,\n    angle\n  );\n\n  viewport.addChild(graphics);\n\n  return canvas;\n}"}},Hexagon.parameters)},"./stories/shapes/Burst.stories.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Burst",(function(){return Burst_stories_Burst}));__webpack_require__("./node_modules/core-js/modules/es.array.fill.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js");var pixi=__webpack_require__("./node_modules/pixi.js/dist/esm/pixi.js"),Scene=__webpack_require__("./stories/Scene.js");var ColorUtils=__webpack_require__("./src/utils/ColorUtils.js"),Burst_stories_Burst=(__webpack_exports__.default={title:"Example/Shapes",argTypes:{stroke:{control:{type:"range",min:0,max:5,step:.1}},color:{control:"color"},fill:{control:"color"},sides:{control:{type:"range",min:3,max:25,step:1}},innerRadius:{control:{type:"range",min:1,max:100,step:1}},outerRadius:{control:{type:"range",min:1,max:100,step:1}},angle:{control:{type:"range",min:0,max:360,step:1}}}},function Burst(_ref){var stroke=_ref.stroke,color=_ref.color,fill=_ref.fill,sides=_ref.sides,innerRadius=_ref.innerRadius,outerRadius=_ref.outerRadius,angle=_ref.angle,graphics=new pixi.b;return graphics.lineStyle(stroke,Object(ColorUtils.a)(color)),graphics.beginFill(Object(ColorUtils.a)(fill)),function drawBurst(target,x,y,sides,innerRadius,outerRadius){var n,dx,dy,cx,cy,angle=arguments.length>6&&void 0!==arguments[6]?arguments[6]:0,step=2*Math.PI/sides,halfStep=step/2,qtrStep=step/4,start=angle/180*Math.PI;for(target.moveTo(x+Math.cos(start)*outerRadius,y-Math.sin(start)*outerRadius),n=1;n<=sides;++n)cx=x+Math.cos(start+step*n-3*qtrStep)*(innerRadius/Math.cos(qtrStep)),cy=y-Math.sin(start+step*n-3*qtrStep)*(innerRadius/Math.cos(qtrStep)),dx=x+Math.cos(start+step*n-halfStep)*innerRadius,dy=y-Math.sin(start+step*n-halfStep)*innerRadius,target.quadraticCurveTo(cx,cy,dx,dy),cx=x+Math.cos(start+step*n-qtrStep)*(innerRadius/Math.cos(qtrStep)),cy=y-Math.sin(start+step*n-qtrStep)*(innerRadius/Math.cos(qtrStep)),dx=x+Math.cos(start+step*n)*outerRadius,dy=y-Math.sin(start+step*n)*outerRadius,target.quadraticCurveTo(cx,cy,dx,dy);target.closePath()}(graphics,Scene.d.screenWidth/2,Scene.d.screenHeight/2,sides,innerRadius,outerRadius,angle),Scene.d.addChild(graphics),Scene.a});Burst_stories_Burst.args={stroke:2,color:"#cfefff",fill:"#036191",sides:5,innerRadius:50,outerRadius:30,angle:0},Burst_stories_Burst.parameters=Object.assign({storySource:{source:"({\n  stroke,\n  color,\n  fill,\n  sides,\n  innerRadius,\n  outerRadius,\n  angle,\n}) => {\n  const graphics = new PIXI.Graphics();\n\n  graphics.lineStyle(stroke, parseColor(color));\n  graphics.beginFill(parseColor(fill));\n\n  drawBurst(\n    graphics,\n    viewport.screenWidth / 2,\n    viewport.screenHeight / 2,\n    sides,\n    innerRadius,\n    outerRadius,\n    angle\n  );\n\n  viewport.addChild(graphics);\n\n  return canvas;\n}"}},Burst_stories_Burst.parameters)},"./stories/shapes/Gear.stories.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Gear",(function(){return Gear_stories_Gear}));__webpack_require__("./node_modules/core-js/modules/es.array.fill.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js");var pixi=__webpack_require__("./node_modules/pixi.js/dist/esm/pixi.js"),Scene=__webpack_require__("./stories/Scene.js");var ColorUtils=__webpack_require__("./src/utils/ColorUtils.js"),Gear_stories_Gear=(__webpack_exports__.default={title:"Example/Shapes",argTypes:{stroke:{control:{type:"range",min:0,max:5,step:.1}},color:{control:"color"},fill:{control:"color"},sides:{control:{type:"range",min:3,max:25,step:1}},innerRadius:{control:{type:"range",min:1,max:100,step:1}},outerRadius:{control:{type:"range",min:1,max:100,step:1}},holeSides:{control:{type:"range",min:3,max:25,step:1}},holeRadius:{control:{type:"range",min:1,max:100,step:1}},angle:{control:{type:"range",min:0,max:360,step:1}}}},function Gear(_ref){var stroke=_ref.stroke,color=_ref.color,fill=_ref.fill,sides=_ref.sides,innerRadius=_ref.innerRadius,outerRadius=_ref.outerRadius,holeSides=_ref.holeSides,holeRadius=_ref.holeRadius,angle=_ref.angle,graphics=new pixi.b;return graphics.lineStyle(stroke,Object(ColorUtils.a)(color)),graphics.beginFill(Object(ColorUtils.a)(fill)),function drawGear(target,x,y,sides){var n,dx,dy,innerRadius=arguments.length>4&&void 0!==arguments[4]?arguments[4]:80,outerRadius=arguments.length>5&&void 0!==arguments[5]?arguments[5]:4,angle=arguments.length>6&&void 0!==arguments[6]?arguments[6]:0,holeSides=arguments.length>7&&void 0!==arguments[7]?arguments[7]:2,holeRadius=arguments.length>8&&void 0!==arguments[8]?arguments[8]:0,step=2*Math.PI/sides,qtrStep=step/4,start=angle/180*Math.PI;for(target.moveTo(x+Math.cos(start)*outerRadius,y-Math.sin(start)*outerRadius),n=1;n<=sides;++n)dx=x+Math.cos(start+step*n-3*qtrStep)*innerRadius,dy=y-Math.sin(start+step*n-3*qtrStep)*innerRadius,target.lineTo(dx,dy),dx=x+Math.cos(start+step*n-2*qtrStep)*innerRadius,dy=y-Math.sin(start+step*n-2*qtrStep)*innerRadius,target.lineTo(dx,dy),dx=x+Math.cos(start+step*n-qtrStep)*outerRadius,dy=y-Math.sin(start+step*n-qtrStep)*outerRadius,target.lineTo(dx,dy),dx=x+Math.cos(start+step*n)*outerRadius,dy=y-Math.sin(start+step*n)*outerRadius,target.lineTo(dx,dy);for(target.closePath(),step=2*Math.PI/holeSides,target.moveTo(x+Math.cos(start)*holeRadius,y-Math.sin(start)*holeRadius),n=1;n<=holeSides;++n)dx=x+Math.cos(start+step*n)*holeRadius,dy=y-Math.sin(start+step*n)*holeRadius,target.lineTo(dx,dy);target.closePath()}(graphics,Scene.d.screenWidth/2,Scene.d.screenHeight/2,sides,innerRadius,outerRadius,angle,holeSides,holeRadius),Scene.d.addChild(graphics),Scene.a});Gear_stories_Gear.args={stroke:2,color:"#cfefff",fill:"#036191",sides:8,innerRadius:35,outerRadius:50,holeSides:8,holeRadius:10,angle:0},Gear_stories_Gear.parameters=Object.assign({storySource:{source:"({\n  stroke,\n  color,\n  fill,\n  sides,\n  innerRadius,\n  outerRadius,\n  holeSides,\n  holeRadius,\n  angle,\n}) => {\n  const graphics = new PIXI.Graphics();\n  graphics.lineStyle(stroke, parseColor(color));\n  graphics.beginFill(parseColor(fill));\n\n  drawGear(\n    graphics,\n    viewport.screenWidth / 2,\n    viewport.screenHeight / 2,\n    sides,\n    innerRadius,\n    outerRadius,\n    angle,\n    holeSides,\n    holeRadius\n  );\n\n  viewport.addChild(graphics);\n\n  return canvas;\n}"}},Gear_stories_Gear.parameters)},"./stories/shapes/Star.stories.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Star",(function(){return Star_stories_Star}));__webpack_require__("./node_modules/core-js/modules/es.array.fill.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js");var pixi=__webpack_require__("./node_modules/pixi.js/dist/esm/pixi.js"),Scene=__webpack_require__("./stories/Scene.js");var ColorUtils=__webpack_require__("./src/utils/ColorUtils.js"),Star_stories_Star=(__webpack_exports__.default={title:"Example/Shapes",argTypes:{stroke:{control:{type:"range",min:0,max:5,step:.1}},color:{control:"color"},fill:{control:"color"},points:{control:{type:"range",min:3,max:25,step:1}},innerRadius:{control:{type:"range",min:1,max:100,step:1}},outerRadius:{control:{type:"range",min:1,max:100,step:1}},angle:{control:{type:"range",min:0,max:360,step:1}}}},function Star(_ref){var stroke=_ref.stroke,color=_ref.color,fill=_ref.fill,points=_ref.points,innerRadius=_ref.innerRadius,outerRadius=_ref.outerRadius,angle=_ref.angle,graphics=new pixi.b;return graphics.lineStyle(stroke,Object(ColorUtils.a)(color)),graphics.beginFill(Object(ColorUtils.a)(fill)),function drawStar(target,x,y,points,innerRadius,outerRadius){var angle=arguments.length>6&&void 0!==arguments[6]?arguments[6]:0;if(points>2){var step,halfStep,start,n,dx,dy;for(halfStep=(step=2*Math.PI/points)/2,start=angle/180*Math.PI,target.moveTo(x+Math.cos(start)*outerRadius,y-Math.sin(start)*outerRadius),n=1;n<=points;++n)dx=x+Math.cos(start+step*n-halfStep)*innerRadius,dy=y-Math.sin(start+step*n-halfStep)*innerRadius,target.lineTo(dx,dy),dx=x+Math.cos(start+step*n)*outerRadius,dy=y-Math.sin(start+step*n)*outerRadius,target.lineTo(dx,dy);target.closePath()}}(graphics,Scene.d.screenWidth/2,Scene.d.screenHeight/2,points,innerRadius,outerRadius,angle),Scene.d.addChild(graphics),Scene.a});Star_stories_Star.args={stroke:2,color:"#cfefff",fill:"#036191",points:5,innerRadius:25,outerRadius:50,angle:0},Star_stories_Star.parameters=Object.assign({storySource:{source:"({\n  stroke,\n  color,\n  fill,\n  points,\n  innerRadius,\n  outerRadius,\n  angle,\n}) => {\n  const graphics = new PIXI.Graphics();\n  graphics.lineStyle(stroke, parseColor(color));\n  graphics.beginFill(parseColor(fill));\n\n  drawStar(\n    graphics,\n    viewport.screenWidth / 2,\n    viewport.screenHeight / 2,\n    points,\n    innerRadius,\n    outerRadius,\n    angle\n  );\n\n  viewport.addChild(graphics);\n\n  return canvas;\n}"}},Star_stories_Star.parameters)},"./stories/text/Text.stories.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"TextStyle",(function(){return TextStyle}));__webpack_require__("./node_modules/core-js/modules/es.string.anchor.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js");var pixi_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/pixi.js/dist/esm/pixi.js"),_Scene__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./stories/Scene.js");__webpack_exports__.default={title:"Example/Text",argTypes:{text:{control:"text"},align:{control:{type:"radio",options:["left","center","right"]}}}};var TextStyle=function TextStyle(args){var textStyle=new pixi_js__WEBPACK_IMPORTED_MODULE_2__.f({fontsize:24,fill:16777215,align:args.align}),text=new pixi_js__WEBPACK_IMPORTED_MODULE_2__.e(args.text,textStyle);return text.resolution=8,text.anchor.set(.5),text.x=_Scene__WEBPACK_IMPORTED_MODULE_3__.d.screenWidth/2,text.y=_Scene__WEBPACK_IMPORTED_MODULE_3__.d.screenHeight/2,_Scene__WEBPACK_IMPORTED_MODULE_3__.d.addChild(text),_Scene__WEBPACK_IMPORTED_MODULE_3__.a};TextStyle.args={text:"Hello, World\n😀",align:"center"},TextStyle.parameters=Object.assign({storySource:{source:"(args) => {\n  const textStyle = new PIXI.TextStyle({\n    fontsize: 24,\n    fill: 0xffffff,\n    align: args.align,\n  });\n\n  const text = new PIXI.Text(args.text, textStyle);\n  text.resolution = 8;\n  text.anchor.set(0.5);\n  text.x = viewport.screenWidth / 2;\n  text.y = viewport.screenHeight / 2;\n\n  viewport.addChild(text);\n\n  return canvas;\n}"}},TextStyle.parameters)},"./storybook-init-framework-entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__("./node_modules/@storybook/html/dist/esm/client/index.js")},0:function(module,exports,__webpack_require__){__webpack_require__("./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),__webpack_require__("./node_modules/@storybook/core-client/dist/esm/globals/globals.js"),__webpack_require__("./storybook-init-framework-entry.js"),__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/frameworks/common/config.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/frameworks/html/config.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/html/dist/esm/client/preview/config-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-links/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-actions/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-actions/dist/esm/preset/addArgs.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-backgrounds/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-backgrounds/dist/esm/preset/addParameter.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-measure/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-outline/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./.storybook/preview.js-generated-config-entry.js"),module.exports=__webpack_require__("./generated-stories-entry.js")},1:function(module,exports){}},[[0,5,6]]]);