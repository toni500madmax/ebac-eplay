import { useParams } from 'react-router-dom'
import { Hero } from '../../components/Hero'
import { Section } from '../../components/Section'
import { Gallery } from '../../components/Gallery'
import zelda from '../../assets/images/zelda.png'

import residentEvil from '../../assets/images/resident.png'

export const Product = () => {
  /*
   * Este useParams retorna um objeto que pertence à essa rota
   * const teste = useParams()
   * console.log(teste)
   */

  const { id } = useParams()

  return (
    <>
      <Hero />
      <Section title="Sobre o jogo" background="black">
        <p>
          Hogwarts Legacy é um RPG de ação imersivo e de mundo aberto ambientado
          no mundo introduzido pela primeira vez nos livros do Harry Potter.
          Embarque em uma jornada por locais novos e familiares enquanto explora
          e descubra animais fantásticos, personalize seu personagem e crie
          poções, domine o lançamento de feitiços, aprimore talentos e torne-se
          o bruxo que deseja ser.Experimente Hogwarts da década de 1800. Seu
          personagem é um estudante com chave de um antigo segredo que ameaça
          destruir o mundo bruxo. Faça aliados, lute contra os bruxos das trevas
          e decida o destino do mundo bruxo. Seu legado é o que você faz dele.
          Viva o Inesperado.
        </p>
      </Section>
      <Section title="Mais detalhes" background="gray">
        <p>
          <strong>Plataforma</strong>: PlayStation 5.
          <br />
          <strong>Desenvolvedor</strong>: Avalanche Software.
          <br />
          <strong>Editora</strong>: Portkey Games, subsidiária da Warner Bros.
          Interactive Entertainment.
          <br />
          <strong>Idiomas</strong>: O jogo oferece suporte a diversos idiomas,
          incluindo inglês, espanhol, francês, alemão, italiano, português,
          entre outros. As opções de áudio e legendas podem ser ajustadas nas
          configurações do jogo.
        </p>
      </Section>
      <Gallery name="Teste" defaultCover={residentEvil} />
    </>
  )
}
