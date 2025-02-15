//rafce

import React from 'react'

const Obs = () => {
  return (
    <div>Obs</div>
  )
}

export default Obs

// front-end
// npm = node package manager
// na pasta: npm create vite@latest .
// npm i 
// npm run dev

// back-end
// na pasta: npm init -y
// npm i express

// Depois de fazer o back-end:
// ctrl shift f
// id
// match whole word 
// id => _id

// Arrow function
// const App2 = () => <h1>Olá</h1>;

// Nomeação de componente: PascalCase

// Nomeação de variável, função: camelCase

// Nomeação de classes: kebab-case

// Nomeação de classes em CSS: metodologia BEM
// Blocks, elements, modifiers 
// bloco__elemento--modificador
// header__link--small

// export default Obs: posso importar com qualquer nome e sem chaves
// import App from './Obs.jsx'

// export Obs: mesmo nome e com chaves
// import { Obs } from './Obs.jsx'

// self closing tag: <Header/>

// Tag vazia em React se chama fragment(o) 
// <> </>

// Componentes recebem "props" (parâmetros)

// Desestruturação props = {title}

// Template strings `` => {`Imagem de ${name}`}

// Spread operator ...object (cópia de objeto) 

// Componentes se re-renderizam:
// 1. variável de estado é atualizada

// Hook - useState