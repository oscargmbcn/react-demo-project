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