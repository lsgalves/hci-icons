import React from 'react'

const Footer: React.FC = () => (
  <footer className="footer">
    <a
      href="https://fundec.edu.br/unifadra"
      target="_blank"
      className="unifadra-logo"
    >
      Unifadra
    </a>
    <div className="informations">
      <div className="description">
        Está aplicação foi desenvolvida somente a fins educacionais como um
        trabalho da faculdade, para mais informações acesse o repositório no
        github.
      </div>
      <div className="row">
        <div className="col">
          <a
            href="https://github.com/LeonardoGalves/hci-icons/"
            target="_blank"
          >
            Código fonte no Github
          </a>
        </div>
        <div className="col">
          <span>&copy; Licença MIT.</span>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <a
            href="https://www.figma.com/file/wqMm5N5XmrAU2a2SW5TOUE/HCI-Icons"
            target="_blank"
          >
            Protótipo no Figma
          </a>
        </div>
        <div className="col">
          <span>Feito por Leonardo Galves.</span>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
