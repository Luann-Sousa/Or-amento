### PARA CRIAR SEU PROJETO EM REACT NATIVE
npx react-native init App

### PARA RODA NOSSO PROJETO EM UM DISPOSIVO OU EMULADOR 
npx react-native run-android

### NAO FECHAR A JANELA DO EMULADOR BUNDLER, CASO TENHA FECHADO
### PARA RODA SOMENTE EXECUTA O COMANDO DISPOSIVO
npx react-native start

### VAMOS CRIAR NOSSAS ROTAS(navegacao entre paginas) DISSO PRECISAMOS INTSALAR ALGUMAS DEPEDENCIAS
### PRECISAMOS DE NAVEGAR ATE https://reactnavigation.org/docs/drawer-navigator/
### ISTALAMOS A DEPENCIA COM SEGUINTE COMANDO E OUTRAS DEPEDENCIAS TBM
npm install @react-navigation/native

npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view

npm install @react-navigation/stack

### NAO IREMOS USAR O STYLE DO PROPIO REACT NATIVE VAMOS USAR UMA DEPENDECIA 
### PARA TRASFORMA PODERMOS USA O CCS LA DO HTML EM NOSSO APLICATIVO
npm install --save styled-components

### VAMOS COMUNICAR COM NOSSA API ATRAZ DE UM CARA CHAMADO AXIOS RSRRS
npm install --save axios