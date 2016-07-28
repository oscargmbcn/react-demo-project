# ES2015 - ES6
- ES5 (EcmaScript 5) és la versió suportada per la majoria de browsers.
- Si fem el codi en ES6, cal convertir de ES6 a ES5 per a que l'aplicació pugui
  correr en el browser.
- Un exemple són els imports. Amb ES5 fariem `var XXX = require('xxx.js');` però
  amb ES6 podem fer `import XXX from 'xxx';`.

# NPM
Si fas primer `npm init` i et generes el fitxer `package.json` corresponent tots
els passos van actualitzant el fitxer.

```
npm install --save-dev babel-loader babel-core
npm install --save-dev babel-preset-es2015
npm install --save-dev babel-preset-react
npm install --save-dev react react-dom
npm install --save-dev webpack
```

Sino está todo instalado mediante npm no puedes hacer los imports de react en
las páginas.

# Webpack
Hem de configurar el webpack per a fer la transpilació del `js` de tipus babel a
javascript que es pugui executar en un navegador.
Indiques al fitxer `webpack.config.js` de quin directori llegirà els `js` en 
babel i a on generarà el fitxer `js` que poden interpretar els browsers.
Per cridar al webpack fas:
- `webpack` per generar el bundle
- `webpack --watch` per anar mirant els fitxers i si canvien generar
- `webpack -p` per generar el bundle minificat per producció
- `webpack -d` per incloure els source maps (que serveix per debuggar bé)

Al final això agafa la configuració del `webpack.config.js` i l'aplica.
Sinó cal posar correctament els fitxers d'entrada i sortida en la línia de
comandes.