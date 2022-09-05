// Mudar a Descrição ao passar o cursor em cada stack que conhecimento
const changeDescription = (nameCard, text) => {
    let infoSkills = document.querySelector('#info-skills')
    let cardName = document.querySelector('.card-name')

    document.querySelector(nameCard).addEventListener('mouseover', () => {
        infoSkills.innerHTML = text
        if(nameCard === '.java') {
            cardName.innerHTML = ' Java '
        } 
        if(nameCard === '.spring') {
            cardName.innerHTML = ' Spring Boot '
        }
        if(nameCard === '.js') {
            cardName.innerHTML = ' Java Script '
        }
        if(nameCard === '.git') {
            cardName.innerHTML = ' Git '
        } 
        if(nameCard === '.html') {
            cardName.innerHTML = ' Html '
        } 
        if(nameCard === '.css') {
            cardName.innerHTML = ' Css '
        } 
    })

    document.querySelector(nameCard).addEventListener('mouseout', () => {
        infoSkills.innerHTML = '* passe o cursor sobre os ícones para saber mais *'
        cardName.innerHTML = ""
    })
}

changeDescription(
    '.java',
    'POO, SOLID, Testes Unitários (JUnit, Mockito), Design Patterns. '
)

changeDescription(
    '.spring',
    'Spring Boot, Spring MVC, Spring REST, Spring Security, JPA, Hibernate.'
)

changeDescription(
    '.js',
    'Manipulação de DOM, consumo de API, tipos de dados, métodos, funções e eventos.'
)

changeDescription(
    '.git',
    'Versionamento de código e principais comandos.'
)

changeDescription(
    '.html',
    'Estrutura de layouts, principais tags, HTML Semântico, criação de tabelas e formulários.'
)
changeDescription(
    '.css',
    'Estilização de layouts, reutilização de classes, box model, CSS Grid, FlexBox e pseudo-classes.'
)