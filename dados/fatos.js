const fatosHistoricos = [
  { Ano: "1920", Fato: "As mulheres ganham o direito ao voto nos EUA" },
  { Ano: "1921", Fato: "O partido comunista chinês é fundado" },
  { Ano: "1922", Fato: "O império britânico diminui" },
  {
    Ano: "1923",
    Fato: "Ocorreu o grande terremoto na região de Kanto, no Japão",
  },
  { Ano: "1924", Fato: "Joseph Stalin assume o lugar de Vladmir Lenin" },
  {
    Ano: "1925",
    Fato: "O estado americano processa John Thomas Scopes por ensinar evolucionismo em uma escola do Tennessee.",
  },
  {
    Ano: "1926",
    Fato: "Os EUA iniciam o seu sistema de autoestradas numeradas",
  },
  {
    Ano: "1927",
    Fato: "Charles Lindbergh se torna a primeira pessoa a pilotar um avião sobre o oceano atlântico sem escalas.",
  },
  {
    Ano: "1928",
    Fato: "Amelia Earhart se torna a primeira mulher a cruzar o atlântico pilotando um avião.",
  },
  { Ano: "1929", Fato: "Ocorre a quebra da bolsa de valores de Nova York." },
  { Ano: "1930", Fato: "Ho Chi Minh funda o partido comunista do Vietnã" },
  { Ano: "1931", Fato: "A construção do Epire State Building é concluída." },
  {
    Ano: "1932",
    Fato: "Hitler renúcia a sua cidadania austríaca e se torna alemão",
  },
  {
    Ano: "1933",
    Fato: "Franklin  D. Roosvelt é eleito presidente dos Estados Unidos",
  },
  { Ano: "1934", Fato: "Hitler se consolida no poder." },
  {
    Ano: "1935",
    Fato: "O presidente Franklin Roosvelt anuncia o New Deal, criando o primeiro sistema de seguro social para aposentados do país.",
  },
  {
    Ano: "1936",
    Fato: "O corredor Afro-Americano Jesse Owens ganha 4 medalhas de ouro nas olimpíadas de Berlim durante o nazismo de Hitler.",
  },
  {
    Ano: "1937",
    Fato: "Trabalhadores da General Motors protestam por 44 dias ocupando a fábrica da GM e conseguem uma aumento de 5% no pagamento.",
  },
  {
    Ano: "1938",
    Fato: "O movimento anti-semita se inicia na Alemanha durante o Nazismo de Hitler.",
  },
  { Ano: "1939", Fato: "Tem início a segunda guerra mundial" },
  { Ano: "1940", Fato: "O McDonalds é fundado." },
  { Ano: "1941", Fato: "Tropas japonesas atacam a base de Pearl Harbor" },
  {
    Ano: "1942",
    Fato: "Tropas americanas chegam a Irlanda do Norte para lutar na guerra da Europa.",
  },
  {
    Ano: "1943",
    Fato: "O químico suíço Albert Hoffman descobre acidentalmente o LSD",
  },
  {
    Ano: "1944",
    Fato: "Ocorre a invasão da Normandia pelas forças aliadas para tirar as tropas nazistas da França",
  },
  {
    Ano: "1945",
    Fato: "A segunda guerra mundial termina com ataques atômicos a Hiroshima e Nagazaki, que causaram a rendição do Japão.",
  },
  {
    Ano: "1946",
    Fato: "Tem início a geração Baby Boom, só em 1946 foram mais de 3.4 milhões de crianças nascidas só nos EUA.",
  },
  {
    Ano: "1947",
    Fato: "A Índia consegue sua independência do império britânico, mas acaba divida e se torna duas nações, a Índia, para os Hindús e o Paquistão, para os muçulmanos.",
  },
  { Ano: "1948", Fato: "Acontece o nascimento do estado de Israel" },
  {
    Ano: "1949",
    Fato: "É fundada a Organização do Tratado do Atlântico Norte, a OTAN, para combater a ameaça Soviética.",
  },
  {
    Ano: "1950",
    Fato: "Tem início a Guerra das Coréias, quando a Coréia do Norte invade a Coréia do Sul, despertando a resposta imediata dos Estados Unidos. A guerra dura três anos.",
  },
  {
    Ano: "1951",
    Fato: "Julius e Ethel Rosenberg são condenados a morte nos EUA por espionagem, após terem vazado informações sobre bombas atômicas para a União Soviética.",
  },
  {
    Ano: "1952",
    Fato: "Os Estados Unidos detonam a primeira bomba de hidrogênio.",
  },
  {
    Ano: "1953",
    Fato: "Os cientistas James Watson e Francis Crick, da Universidade de Cambridge, são os primeiros a explicar o funcionamento do DNA na replicação dos genes e a sua transmissão para as futuras gerações.",
  },
  {
    Ano: "1954",
    Fato: "Linda Brown vence a disputa contra o conselho de educação e a suprema corte americana julga inconstitucional a segregação racial em escolas.",
  },
  {
    Ano: "1955",
    Fato: "Rosa Parks faz história ao se recursas a se levantar e dar lugar a um branco no ônibus. Sua prisão leva a um boicote a empresa e a ascenção do Pastor Martin Luther King Jr.",
  },
  {
    Ano: "1956",
    Fato: "Protestos na Hungria por democracia acaba na morte de milhares após invasão do Exercito Vermelho da Comunista União Soviética.",
  },
  {
    Ano: "1957",
    Fato: "O president Dwight Eisenhower ordena as tropas federais que proteja 9 alunos afro-americanos que começaram a estudar no colégio Little Rock para alunos brancos, essa foi a primeira ação do governo federal contra a segregação racial no país.",
  },
  {
    Ano: "1958",
    Fato: "Os Estados Unidos lançam seu primeiro satélite, o Explorer 1.",
  },
  {
    Ano: "1959",
    Fato: "Fidel Castro invade cuba e se consolida no poder, dando início a ditadura comunista.",
  },
  {
    Ano: "1960",
    Fato: "O restaurante Woolworth se recusa a atender 4 jovens afro-americanos, desencadeando uma enorme onda de protestos que durou 6 meses e resultou no fim da segregação nos restaurantes.",
  },
  { Ano: "1961", Fato: "Ocorre a construção do muro de Berlin" },
  {
    Ano: "1962",
    Fato: "A União Soviética testa misseis em Cuba, a 145km ao sul de Miami, dando início a resposta dos EUA sob o comando de John F Kennedy. A resposta de Kennedy faz a União Soviética remover os mísseis de Cuba.",
  },
  { Ano: "1963", Fato: "John F. Kennedy é assassinado." },
  {
    Ano: "1964",
    Fato: "O presidente Lyndon Johnson dá inicio a sua 'Guerra à Pobreza', destacando a necessidade de reduzir a probreza, acabar acabar com a segregação racial e cuidar da saúde dos idosos do país. Lyndon Johnson criou ainda o ato dos direitos civis no mesmo ano.",
  },
  {
    Ano: "1965",
    Fato: "O assassinato de Jimmy Lee Jackson pelas tropas do Alabama desencadeia uma passeata em protesto. O evento ficou conhecido como Domingo Sangrento.",
  },
  {
    Ano: "1966",
    Fato: "Mao Zedong inicia o extermínio de seus rivais políticos. O líder comunista enviou diversos opositores para campos de reeducação e trabalho forçado, e assassinou diversos outros que se opuseram ao seu governo.",
  },
  {
    Ano: "1967",
    Fato: "Acontece a guerra dos seis dias. Síria, Jordânia, Iraque e Egito atacam Israel, a guerra termina em 6 dias, com um cessar fogo após Israel ocupar areas importantes dos 4 países.",
  },
  { Ano: "1968", Fato: "Martin Luther King é assassinado." },
  {
    Ano: "1969",
    Fato: "Neil Armstrong, Buzz Aldrin e Michael Collins são as primeiras pessoas a pisarem na lua",
  },
  {
    Ano: "1970",
    Fato: "A guerra na ásia aumenta e desperta protestos anti-guerra nos Estados Unidos dado o involvimento do país no continente.",
  },
  {
    Ano: "1971",
    Fato: "New York Times publica documentos sobre o envolvimento do governo amerino na guerra do Vietnã",
  },
  {
    Ano: "1972",
    Fato: "O Presidente Anti-Comunista Richard Nixon faz sua primeira viagem oficial a China, com o objetivo de melhorar a relação entre os dois países.",
  },
  {
    Ano: "1973",
    Fato: "A suprema corte define que os estados podem impedir o aborto a partir do terceiro trimestre de gestação, exceto quando a gestação oferece risco a vida da mulher.",
  },
  {
    Ano: "1974",
    Fato: "O presidente Richard Nixon Renuncia durante o processo de impeachment causado pelo escandalo de Watergate.",
  },
  {
    Ano: "1975",
    Fato: "Dois anos depois as últimas tropas americanas deixarem o Vietnã, as tropas comunistas capturam Saigon.",
  },
  {
    Ano: "1976",
    Fato: "Dois jatos super-sônicos Concorde levatam voo simultâneamente. Um partindo de Londres para o Barein, e outro de Paris, para o Rio de Janeiro.",
  },
  {
    Ano: "1977",
    Fato: "Os primeiros computadores pessoais modernos começam a surgir",
  },
  {
    Ano: "1978",
    Fato: "Mais de 900 pessoas morrem em um suícidio em massa promovido por um culto em Jonestown, promovido por Jim Jones.",
  },
  { Ano: "1979", Fato: "O Irã se torna uma república islâmica" },
  {
    Ano: "1980",
    Fato: "Ronald Reagan é eleito presidente dos Estados Unidos.",
  },
  { Ano: "1981", Fato: "Surge a AIDS nos Estados Unidos" },
  {
    Ano: "1982",
    Fato: "Governo Mexicano diz a reserva federal dos Estados Unidos que o país não consegue pagar o empréstimo de 80 bilhões de dólares.",
  },
  { Ano: "1983", Fato: "Acontece o nascimento da Internet" },
  {
    Ano: "1984",
    Fato: "Desastre químico em Bophal, India, afeta mais de 600 mil pessoas, matando mais de 15 mil dessas. ",
  },
  {
    Ano: "1985",
    Fato: "Ronald Reagan se encontra com o Secretário Geral da União Soviética, Mikhail Gorbachev",
  },
  {
    Ano: "1986",
    Fato: "A nave Challenger exploduiu 73 segundos após decolar do Cabo Canaveral, causando a morte de 7 astronautas.",
  },
  {
    Ano: "1987",
    Fato: "A bolsa Dow Jones tem uma queda de 508 pontos, uma situação pior que a da quebra de 1929.",
  },
  {
    Ano: "1988",
    Fato: "O Tenente Coronel Oliver North e o Vice Almirante John Pointdexter são indiciados por conspiração após venderem armas para o Irã a fim de facilitar a soltura de reféns americanos.",
  },
  { Ano: "1989", Fato: "Acontece a queda do muro de Berlin." },
  {
    Ano: "1990",
    Fato: "Com o enfraquecimento da União Soviética e do comunismo, a Polônia dissolve o partido comunista e elege seu primeiro presidente, Lech Walesa.",
  },
  {
    Ano: "1991",
    Fato: "Os Estados Unidos vão para a guerra do oriente médio após Sadam Hussain invadir o Kuait.",
  },
  {
    Ano: "1992",
    Fato: "A guerra fria entre Rússia e os EUA termina semanas após o fim da União Soviética.",
  },
  { Ano: "1993", Fato: "É criada a União Européia." },
  { Ano: "1994", Fato: "O site Amazon.com é lançado" },
  {
    Ano: "1995",
    Fato: "Ataque terrorista acontece em Olklahoma com a explosão de um caminhão-bomba.",
  },
  { Ano: "1996", Fato: "A ovelha Dolly é Clonada com sucesso" },
  {
    Ano: "1997",
    Fato: "A IBM Deep Blue se tornou a primeira máquina a derrotar um campeão do Xadrez, derrotando Garry Kasparov duas vezes e empatando com ele três vezes em 6 partidas.",
  },
  { Ano: "1998", Fato: "É lançado o buscador Google" },
  { Ano: "1999", Fato: "A OTAN inicia sua primeira campanha militar" },
  { Ano: "2000", Fato: "A estação espacial internacional é inaugurada." },
  {
    Ano: "2001",
    Fato: "As torres gêmeas do World Trade Center são derrubadas em um ataque terrorista",
  },
  {
    Ano: "2002",
    Fato: "George W. Bush cria o departamento de segurança nacional.",
  },
  { Ano: "2003", Fato: "Os Estados Unidos inciam os ataques ao Iraque" },
  { Ano: "2004", Fato: "O Facebook é fundado" },
  { Ano: "2005", Fato: "o Furacão Katrina destrói New Orleans." },
  { Ano: "2006", Fato: "Saddam Hussein é executado" },
  { Ano: "2007", Fato: "Apple anuncia seu primeiro smartphone, o iPhone" },
  {
    Ano: "2008",
    Fato: "O indicador Dow Jones despenca outra vez, dessa vez caindo 777 pontos.",
  },
  {
    Ano: "2009",
    Fato: "Barack Obama é eleito presidente dos Estados Unidos e se torna o primeiro presidente afro-americano do país.",
  },
  {
    Ano: "2010",
    Fato: "11 trabalhadores morrem e 17 ficam feridos em uma explosão na costa da Lousiana em uma exploração de óleo.",
  },
  { Ano: "2011", Fato: "Bin Laden é assassinado." },
  {
    Ano: "2012",
    Fato: "Cientistas do CERN descobrem uma nova partícula através do colisor de hadrons que eles acreditam ser o Bóson de Higgs, a chamada 'Partícula de Deus'.",
  },
  {
    Ano: "2013",
    Fato: "Edward Snowden expões segredos de estado dos Estados Unidos e de governos europeus sobre espionagem de outros países.",
  },
  {
    Ano: "2014",
    Fato: "O Presidente Russo Vladmir Putin orquestra anexar a Crimeia à Rússia, causando sanções dos líderes mundiais ao país.",
  },
  {
    Ano: "2015",
    Fato: "A nave New Horizon se torna o primeiro objeto criado pela humanidade a passar por Plutão e observar o planeta de perto.",
  },
  { Ano: "2016", Fato: "Donald Trump é eleito presidente dos Estados Unidos" },
  {
    Ano: "2017",
    Fato: "Em um espaço de 4 semanas, 3 furações atingem os Estados Unidos, Harvey, Irma e Maria atingiram o Texas, Florida e  o Caribe",
  },
  { Ano: "2018", Fato: "Queimadas destroem a Carolina do Norte" },
  {
    Ano: "2019",
    Fato: "Protestos ocorrem em Hong Kong contra tentativa da China de tirar a autonomia do país.",
  },
  { Ano: "2020", Fato: "Tem início a pandemia de COVID-19" },
];

export default fatosHistoricos;
