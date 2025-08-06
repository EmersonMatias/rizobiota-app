export default function RizobiotaAgro() {
  const benefits = [
    'Melhor gestão do manejo de microganismos de solo',
    'Mapeamento do potencial de risco',
    'Auxiliar tomada de decisão assertiva',
    'Gestão eficiente dos investimentos e recursos'
  ]

  const collectionInstructions = [
    'Definir a zona de amostragem. Para uma avaliação precisa, sugerimos pelo menos 1 amostra por zona de manejo ou zona de contraste. Rrealizar amostras compostas formadas por 10 a 20 amostras simples, cobrindo a área de interesse. Dúdivdas sobre o número de amostras? Entre em contato e nosso time te ajuda.',
    'Para cada ponto de amostragem, remover a cobertura vegetal, pedras ou outros detritos. com o auxílio de um trado, coletar amostras e colocar em um recipiente limpo. Coletar na faixa de 0-10 centímetros de profundidade para análise da microbiota e 0-20 centímetros para análise da microbiota e análise físico-químico. Para nematoides na área, coletar solo junto com raiz',
    'Misturar as amostras simples em um recipiente limpo, e separar uma sub-amostra para análise em saco plástico devidamente identificado. Coloque aproximadamente 50-100 gramas de solo para análise da microbiota e de 300-400 gramas de solo para análise da microbiota e análise físico-químico.',
    'O cadastro das amostras é feito através da nossa plataforma. Os dados de acesso serão fornecidos pela Rizobiota. https://client.bymycell.com/',
    'Mantenha as amostras a  temperatura ambiente. Para o envio, acondicione as amostras em caixa de papelão e envie via sedex ou via transportadora à sede da Rizobiota em Ribeirão Preto.Comunique o código de rastreamente a equipe da Rizobiota para acompanhamento da entrega.',
    'Enviar as amostras para o endereço: ByMyCell Inova Simples Ltda - CNPJ 40.439.752/0001-78 RUA MARTINICO PRADO, 555, Piso Térreo - VILA TIBERIO, Ribeirão Preto - SP. CEP: 14050-050. Fone: (16) 99466-4643. Aos cuidados de: tania petta. E-mail: contato@bymycell.com'
  ]

  return (
    <main className=" pb-20">
      <img src="/hero-section-bg.jpg" alt="" className="w-full lg:max-h-[400px] lg:object-cover" />

      <div className="w-full lg:max-w-[1000px] px-5 lg:mx-auto">
        <h2 className="font-gabarito text-center font-bold text-2xl tracking-widest  md:text-3xl lg:text-4xl mt-10">
          Rizobiota Agro + Fertilidade: Análise Metagenômica de Solo para{' '}
          <span className="text-secondary">Agricultura de Precisão</span>.
        </h2>

        <p className="mt-5 lg:text-xl lg:mt-10">
          Análise avançada da microbiota e parâmetros de fertilidade e granulometria do solo que te
          dão o poder de tomar decisões agronômicas verdadeiramente estratégicas!
        </p>

        <div className="mt-10 lg:mt-20">
          <h6 className="text-lg font-semibold mb-2 lg:text-2xl">Mas como isso funciona?</h6>
          <p className="lg:text-xl">
            O Rizobiota Agro identifica os microrganismos benéficos, patogênicos (maléficos) e
            nematoides presentes no solo. Isso ocasiosa:
          </p>

          <div className="flex flex-col gap-5 mt-5 lg:grid lg:grid-cols-2">
            {benefits.map((benefit, index) => (
              <div
                className="bg-primary text-white px-5 py-2 rounded-md text-center font-bold"
                key={index}
              >
                {benefit}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 lg:mt-20">
          <h6 className="text-lg font-semibold mb-2 lg:text-2xl">Instruções de Coleta</h6>
          <div className="flex flex-col gap-5 mt-5 lg:grid lg:grid-cols-2">
            {collectionInstructions.map((instructions, index) => (
              <div
                className="bg-primary text-white px-5 py-4 rounded-md text-justify lg:text-xl"
                key={index}
              >
                <p className="font-bold text-3xl"> {index + 1}</p> {instructions}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <p className="text-4xl font-bold mb-6 text-center">Ficou com alguma dúvida?</p>

          <button className="w-full py-4 text-2xl font-bold bg-secondary text-white rounded-md">
            Fale com a gente!
          </button>
        </div>
      </div>
    </main>
  )
}
