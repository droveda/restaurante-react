## React
* https://reactjs.org/docs/getting-started.html
* https://create-react-app.dev/docs/getting-started/
* npx create-react-app my-react-studies --template typescript --use-npm
* cd my-react-studies
* npm start
* npm run build
* npm test

## Notas
* npx:
  * O comando npx, diferente do comando npm, apenas executa um pacote, sem que precisemos instalá-lo na nossa máquina, como o create-react-app normalmente só é usado no começo para criar o projeto, o ideal é executar com npx pois isso fará com que você sempre execute a última versão do pacote.
* create-react-app
  * O nome do pacote que queremos executar.
* my-react-studies
  * O nome do projeto que queremos, assim como o nome da pasta.
* --template typescript
  * O Create React App nos permite usar vários templates, tendo como sintaxe o --template, que diz pro terminal que logo após iremos dizer qual template gostaríamos de usar, e o nome do template em si. O Create React App já tem o template typescript criado, mas caso tenha algum template que queira usar e não existe, você também pode criar o seu!
* --use-npm
  * Caso o yarn esteja instalado na sua máquina, o Create React App prioriza à utilização dele, e isso irá gerar um yarn.lock dentro da nossa aplicação, e nós queremos utilizar o npm ao invés do yarn, por isso precisamos usar o comando --use-npm se quisermos garantir que o Create React App utilize o npm para instalar as dependências necessárias e também garantir que ele gere o package-lock.json ao invés do yarn.lock.
* npm run build (gera a pasta build com o pacote optimizado para producao)


## CSS
* utilizar sass
  * para instalar: **npm install --save-dev sass**
* Usando CSS Modules
  * para instalar: **npm install -D typescript-plugin-css-modules**
  * depois de instalado colocar o seguinte no tsconfig.json:
    * "plugins": [{"name": "typescript-plugin-css-modules"}],
  * para usar:
    * renomear de style.scss para style.module.scss
    * em vez de dar import style fazer: **import style from './style.module.scss'**
    * exemplo no html: <div className={style.AppStyle}>
    * * renomear de style.module.scss para App.module.scss
    * finalmente renomeando vai ficar: **import style from './App.module.scss'** 
    * import BotaoStyle from './Botao.module.scss';
    * import ItemStyle from './Item.module.scss';

## Arquivos estáticos
* pasta assets
* import {ReactComponent as Logo } from 'assets/logo.svg'
* para configurar caminho absoluto
  * incluir no tsconfig.json o seguinte dentro de compilerOptions
    * "baseUrl": "src"

# Importar fontes externas
* google fonts - https://fonts.google.com/

## CSS Reset
* npm install normalize.css
* adicionar no index.tsx root o import:
  * import "normalize.css";

## Icones
* npm install react-icons

## Instalar e importar Pacote classNames
* para instalar: **npm install classnames**
  * para importar: **import classNames from 'classnames';**
  * ajuda a criar o nome de classes (nao precisa ficar fazendo concatenacoes confusas para montar nomes de classes css dinamicamente)
  * Exemplo: /src/pages/Cardapio/Filtros/index.tsx