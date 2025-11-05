# 🚀 Rick and Morty App - React Native (Expo/JSX) 

# EM DESENVOLVIMENTO ⏳⏳🔥🔥


Este projeto é um aplicativo mobile desenvolvido com **React Native** e **Expo**, utilizando JavaScript (JSX) puro. Ele consome a API pública do Rick and Morty para exibir uma lista de personagens com detalhes completos e navegação.

O aplicativo foi estruturado para cumprir os requisitos mínimos de entrega, focando em funcionalidade e eficiência.

## 🛠️ Ferramentas e Tecnologias Utilizadas

| Tecnologia | Finalidade |
| :--- | :--- |
| **React Native** | Framework principal para construção da interface móvel. |
| **Expo Go** | Toolkit e runtime para desenvolvimento rápido e testes em dispositivos. |
| **JavaScript (JSX)** | Linguagem de programação utilizada, sem a complexidade de tipagem (TypeScript). |
| **Axios** | Biblioteca para realizar requisições HTTP (GET) à API. |
| **React Navigation (Native Stack)** | Biblioteca para gerenciar a navegação entre as telas (Lista -> Detalhes). |
| **Rick and Morty API** | Fonte de dados para personagens e episódios. |

## ✨ Funcionalidades do Projeto

O aplicativo implementa as seguintes funcionalidades, conforme os requisitos:

* **Listagem de Personagens:** Exibe uma lista de personagens contendo Imagem, Nome, Status e Espécie.
* **Paginação / Infinite Scroll:** Utiliza o `FlatList` para carregar mais personagens automaticamente à medida que o usuário rola a tela.
* **Tela de Detalhes:** Ao clicar em um personagem, navega para uma tela que exibe:
    * Informações completas (Status, Gênero, Origem, Localização, etc.).
    * A lista de **Episódios** em que o personagem apareceu, buscando os nomes dos episódios separadamente na API.
* **Estrutura de Componentes:** Uso eficiente de `FlatList`, `View`, `Text` e `Image` para construção da UI.

## ⚙️ Como Executar o Projeto

Siga estes passos para clonar o repositório e executar o aplicativo no seu dispositivo móvel:

### Pré-requisitos

Certifique-se de ter instalado:
1.  **Node.js** e **npm**
2.  **Expo Go App** (no seu celular Android ou iOS)

### Instalação

1.  **Clone o Repositório:**

    ```bash
    git clone https://github.com/M-firmo/RickandMorty.app
    cd RickandMorty.app
    ```

2.  **Instale as Dependências:**

    ```bash
    npm install
    ```

### Rodando o Aplicativo

1.  **Inicie o Servidor de Desenvolvimento Expo:**

    O flag `--clear` é usado para garantir a limpeza de qualquer cache antigo. (É possível inicar somente sem "--clear")

    ```bash
    npx expo start --clear
    ```

2.  **Abra no Expo Go:**
    * Use o aplicativo **Expo Go** no seu celular para escanear o **Código QR** exibido no terminal.

O aplicativo será carregado no seu dispositivo, e você poderá interagir com a lista de personagens.

---

**Desenvolvido por:** [M-firmo]