# bableSystemJsExample
This is simple project to understand babel and systemjs .
Babel used to transpile the es6 module to systemjs compatible file .
Systemjs used to load the es6 transpiled module to browser
.

## babel command to compile 
babel src -d dest/
 
##babel command to compile in watch mode
babel -w src -d dest/

##  plugin used by babel transpiler inside .babelrc
{
  "plugins": [
    ["transform-es2015-modules-systemjs", {
     "systemGlobal": "SystemJS"
    }]
  ]
}
## npm command to run 
npm run compile
npm run babel_compile (watch mode)
npm start (to start the lite server)


