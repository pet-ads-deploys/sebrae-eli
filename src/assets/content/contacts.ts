import fundoCinza from "../../assets/images/fundocinza.avif";
import AntonioPedrini from "../../assets/images/AntonioCesarPedrini.jpg";
import MicaelaMacedo from "../../assets/images/MicaelaMacedo.jpeg";
import CristianeFragalle from "../../assets/images/CristianeVieiraPeresFragalle.jfif";
import KarenFavaro from "../../assets/images/KarenFavaro.jpg";
import RodolfoMeneguette from "../../assets/images/RodolfoIpolitoMeneguette.jpeg";
import MirleneSimoes from "../../assets/images/MirleneSimões.jpg";
import ClaudioTole from "../../assets/images/ClaudioTole.jpg";
import ViniciusMicali from "../../assets/images/ViniciusRafaelMicaliSoares.jpeg";
import PrimoMelare from "../../assets/images/PrimoUplab.jpg";
import RegianeTravensolo from "../../assets/images/RegianeTravensolo.jpg";
import MarciusLeandro from "../../assets/images/MarciusLeandro.png";
import AlineSuave from "../../assets/images/AlineSuave.jpeg";
import AnaFlaviaMendes from "../../assets/images/AnaFlavia.jfif";

export interface ContactItem {
  id: string;
  categoryId: string;
  badge: string;
  name: string;
  role: string;
  bio: string;
  organization: string;
  avatarUrl: string;
  email: string;
  phone: string;
  linkedinUrl?: string;
}

export const CONTACTS_DATA: ContactItem[] = [
  {
    id: '1',
    categoryId: 'ambiente-inovacao',
    badge: 'COWORKING',
    name: 'Antonio Cesar Pedrini',
    role: 'Engenheiro Eletricista & Gestor de Projetos',
    bio: 'Engenheiro Eletricista formado pelo Instituto Tecnológico da Aeronáutica. Desenvolveu pesquisas e projetos no Instituto de Atividades Espaciais (IAE) dentro do Centro Tecnológico da Aeronáutica (CTA) nas áreas de sistemas bélicos e de foguetes. Pós graduado em Eficiência Energética em sistemas de Refrigeração/AC, Motores, Iluminação, Ar Comprimido, Projetos/Instalação de sistemas Fotovoltaicos e Gestão de Energia (ISO 50001) nas escolas SENAI. Primeiro Secretário da AEASC e Gestor do Projeto da CPL da Construção Civil de São Carlos.',
    organization: 'AEASC',
    avatarUrl: AntonioPedrini,
    email: 'acpedrini@gmail.com',
    phone: '16 991563323',
    linkedinUrl: '',
  },
  {
    id: '2',
    categoryId: 'ambiente-inovacao',
    badge: 'PRÉ-INCUBADORA',
    name: 'Icaro Spaziani Tiberti',
    role: 'Estratégia & Novos Negócios (Sebrae-SP)',
    bio: 'Atuo na interseção entre estratégia, novos negócios e fortalecimento de ecossistemas de inovação. No Sebrae-SP, lidero iniciativas de conexões corporativas, governança territorial e estruturação de soluções customizadas para o desenvolvimento empresarial e tecnológico. Tenho ampla experiência na facilitação de parcerias estratégicas multistakeholder, conectando startups, corporações, universidades e o poder público para viabilizar projetos de impacto real e inovação aplicada. No âmbito do ELI, dedico-me a estruturar e executar ações que impulsionem a competitividade dos setores estratégicos regionais.',
    organization: 'Sebrae-SP',
    avatarUrl: fundoCinza,
    email: 'icarost@sebraesp.com.br',
    phone: '16 33621821',
    linkedinUrl: 'http://www.linkedin.com/in/icaro-spaziani-tiberti',
  },
   {
    id: '2',
    categoryId: 'ambiente-inovacao',
    badge: 'PRÉ-INCUBADORA',
    name: 'Micaela Macedo',
    role: 'Diretora do Digitaly Hub & Head de Parcerias',
    bio: 'Diretora do Digitaly Hub, Head de Parcerias Estratégicas da Digitaly Tech e mentora de posicionamento e comunicação. Com experiência em estratégia comercial, relacionamento, comunicação e desenvolvimento de negócios com foco em desenvolvimento, autoridade e crescimento estratégico.',
    organization: 'Digitaly Technology',
    avatarUrl: MicaelaMacedo,
    email: 'micaela.macedo@digitaly.tech',
    phone: '16 992616747',
    linkedinUrl: 'https://www.linkedin.com/in/micaela-isabela/',
  },
  {
    id: '3',
    categoryId: 'ambiente-inovacao',
    badge: 'INCUBADORA',
    name: 'Cristiane Vieira Peres Fragalle',
    role: 'Analista da Embrapa',
    bio: 'Doutoranda no Departamento de Engenharia de Produção da Universidade Federal de São Carlos - UFSCar (2026 - atual). Mestre em Engenharia de produção pela UFSCar (2024) na linha de pesquisa de Inovação. Especialista em Gestão da Inovação Tecnológica pela UFSCar (2021). Certificada em Propriedade Intelectual pelo World Intellectual Property Organization - WIPO (2025). Especialista em Gestão da Comunicação nas Organizações pela Universidade Católica de Brasília (2002). Relações Públicas pelo Centro Universitário de Brasília (1997). Desde 2000 é analista da Empresa Brasileira de Pesquisa Agropecuária (Embrapa). Atuou na Assessoria de Comunicação na sede da Embrapa de 2001 a 2008. Gerenciou o Núcleo de Comunicação Organizacional (NCO) da Embrapa Pecuária Sudeste de 2011 a 2022. Membro do Comitê Gestor do Programa de Recuperação de Pastagens Degradadas da Embrapa (2025 a atual). Membro da Rede Space Farming Brazil. Tem experiência na área de Comunicação com ênfase em planejamento e estratégia, gestão de relacionamentos, metodologias de engajamento, comunicação para transferência de tecnologia. Na área de inovação seus estudos estão voltados para gestão de inovação, inovação aberta, inovação aberta sustentável, com foco em governança da colaboração com parceiros em projetos de P&D. Acumula mais de duas décadas de atuação em projetos de P&D com atividades voltadas à sua área de conhecimento. Foi líder de projetos em rede de âmbito nacional e participa de diversos projetos de pesquisa agropecuária com ações de comunicação e inovação.',
    organization: 'Embrapa Pecuária Sudeste',
    avatarUrl: CristianeFragalle,
    email: 'cristiane.fragalle@embrapa.br',
    phone: '16 981486500',
    linkedinUrl: 'https://www.linkedin.com/in/cristiane-fragalle-45a80551',
  },
  {
    id: '4',
    categoryId: 'ambiente-inovacao',
    badge: 'INCUBADORA',
    name: 'Karen Simões Favaro ',
    role: 'Comunicadora & Mestre em CTS',
    bio: 'Comunicadora por formação e mestre em Ciência, Tecnologia e Sociedade pela Universidade Federal de São Carlos.',
    organization: 'Dtrip - Inteligência em Eventos',
    avatarUrl: KarenFavaro,
    email: 'karen@dtrip.com.br',
    phone: '16 988121107',
    linkedinUrl: 'https://www.linkedin.com/in/karen-favaro-bb7405167',
  },
  {
    id: '5',
    categoryId: 'ambiente-inovacao',
    badge: 'INCUBADORA',
    name: 'Rodolfo Ipolito Meneguette',
    role: 'Professor Associado (ICMC-USP)',
    bio: 'Sou professor associado do Instituto De Ciências Matemáticas e de Computação, bolsista produtividade CNPq desde 2019. Terminou o seu pós-doutoramento pela Universidade de Ottawa (UOttawa) em 2017. Em dezembro de 2013 obteve o título de doutor pela Universidade Estadual de Campinas - UNICAMP. Em 2009 finalizei o mestrado na Universidade Federal de São Carlos - UFSCAR. Formado pela Universidade Paulista - UNIP- de São José do Rio Preto campus JK. Atualmente é coordenador de projeto de pesquisa voltado para sistema de transporte inteligente financiado pelo CNPq coordena uma colaboração internacional junto a FAPESP. Eu também fui coordenador e colaborador de projetos de pesquisa financiadas pela FAPESP. Editor associado de 4 revistas sendo IEEE T-ITS, IEEE LATAMT, ELSEVIER VEHCOM e ReCiC. Estou entre os 2 dos pesquisadores mais influentes no mundo pela na lista Worlds Top 2 Scientists de 2021 a 2024 realizada pela universidade de Stanford. Obteve diversas publicações em eventos e periódicos nacionais e internacionais. Tem experiência na área de Ciência da Computação, com ênfase em Redes de computadores, atuando principalmente nos seguintes temas: redes veiculares, disseminação de dados, robótica, rede neural artificial e sistemas embarcados, sistema de transporte inteligente.',
    organization: 'Universidade de São Paulo ',
    avatarUrl: RodolfoMeneguette,
    email: 'meneguette@icmc.usp.br',
    phone: '',
    linkedinUrl: 'https://www.linkedin.com/in/rodolfo-meneguette-30287329/?isSelfProfile=true',
  },
  {
    id: '6',
    categoryId: 'ambiente-inovacao',
    badge: 'INCUBADORA',
    name: 'Mirlene Simões',
    role: 'Socióloga & Pesquisadora',
    bio: 'Possui Doutorado (2012) pelo Programa de Pós-Graduação em Sociologia da Faculdade de Ciências e Letras da UNESP de Araraquara. Realiza o Pós-Doutorado no Núcleo de Estudos de Gênero Pagu - Unicamp, junto ao INCT Caleidoscópio, Coordenação Sul-Sudeste (2024-atual). É co-líder do CP Gênero e Sexualidade da Sociedade Brasileira de Sociologia - SBS (2024-atual). É membro do comitê de governança de Ciência e Tecnologia de São Carlos (2024-atual). Membro da Comissão de Mulheres do SEBRAE/SP (2025-atual). É diretora do Sindicato dos Escritores do Estado de São Paulo (2025-atual). Membro do conselho de curadores da Fundação Parque de Alta Tecnologia de São Carlos, ParqTec (2024-atual). Foi consultora da UNESCO junto ao Ministério da Ciência, Tecnologia e Inovação do Governo Federal (2024). É coordenadora geral do Projeto Co-Labore (2023-2026) parceria entre o Instituto Angelim e o Ministério das Mulheres do Governo Federal. Coordenou o Projeto: Expandir o Presente, Criar o Futuro, Premiado pela Lei Aldir Blanc (2020-2021). Coordenou o Projeto Laboratório de Talentos (2020-2024) em parceria com o Consulado dos EUA no Brasil. Coordenou o projeto Mulheres na Ciência em São Carlos/SP, premiado pelo PROAC/SP (2020-2023). Foi Secretária Regional São Paulo da Sociedade Brasileira para o Progresso da Ciência - SBPC (2023-2025). É autora de livros, capítulos de livros e coordenadora de publicações diversas. É parecerista de revistas científicas. Atua nas seguintes temáticas: mulheres jovens, direitos humanos e mulheres, mulheres nas carreiras científicas, políticas públicas para inclusão de mulheres no mundo do trabalho, inovação e tecnologia social.',
    organization: 'Instituto Angelim',
    avatarUrl: MirleneSimoes,
    email: 'mirlenefatimasimoes@gmail.com',
    phone: '16 997099284',
    linkedinUrl: 'https://www.linkedin.com/in/mirlene-sim%C3%B5es-bb59171a1/?isSelfProfile=true',
  },
  {
    id: '7',
    categoryId: 'ambiente-inovacao',
    badge: 'INCUBADORA',
    name: 'Cláudio Fabiano Motta Toledo',
    role: 'Professor Livre-Docente (ICMC-USP)',
    bio: 'Cláudio Fabiano Motta Toledo é professor livre-docente do Instituto de Ciências Matemáticas e de Computação da Universidade de São Paulo (ICMC-USP) e bolsista de produtividade em pesquisa do CNPq, nível 2. Graduou-se em Matemática Aplicada e Computacional pela Universidade Estadual de Campinas (1995), onde também concluiu o mestrado (1999) e o doutorado (2005) em Engenharia Elétrica. Durante o doutorado, realizou período de estudos na Technische Universität Bergakademie Freiberg, na Alemanha. Obteve a livre-docência em Sistemas de Computação pela USP em 2016 e realizou pós-doutorado no Computer Science and Artificial Intelligence Laboratory (CSAIL) do Massachusetts Institute of Technology (MIT), entre 2014 e 2015.',
    organization: 'Universidade de São Paulo ',
    avatarUrl: ClaudioTole,
    email: 'claudio@icmc.usp.br',
    phone: '16 997101204',
    linkedinUrl: 'https://www.linkedin.com/in/claudio-toledo-3bbb90129/',
  },
  {
    id: '8',
    categoryId: 'ambiente-inovacao',
    badge: 'INCUBADORA',
    name: 'Sérgio Luisir Discola Junior',
    role: 'Coordenador de Pesquisa e Inovação (IFSP)',
    bio: 'Doutor e mestre em Ciência da Computação (2019 e 2004, respectivamente) e graduado em Engenharia da Computação (2002) pela Universidade Federal de São Carlos (UFSCar). É professor do Instituto Federal de Educação, Ciência e Tecnologia de São Paulo (IFSP), Campus São Carlos, onde exerce a função de Coordenador de Pesquisa e Inovação. Sua atuação acadêmica e profissional abrange as áreas de Mineração de Dados, Internet das Coisas (IoT) aplicada à Saúde, Engenharia de Software, com ênfase em métricas, processos, gerenciamento de configuração e sistemas de gestão da qualidade, e Desenvolvimento Web.',
    organization: 'IFSP - São Carlos',
    avatarUrl: fundoCinza,
    email: 'sergioldj@ifsp.edu.br',
    phone: '16 997143092',
    linkedinUrl: 'https://www.linkedin.com/in/sergio-discola-5759526/',
  },
  {
    id: '9',
    categoryId: 'ambiente-inovacao',
    badge: 'INCUBADORA',
    name: 'Vinicius Micali',
    role: 'Analista de TI & Pesquisador (UFSCar)',
    bio: 'Pesquisador em Engenharia de Software, Professor de Especialização e Analista de Tecnologia da Informação na Universidade Federal de São Carlos (UFSCar). Minha trajetória profissional se constrói na convergência entre Tecnologia, Educação e Inovação — três dimensões que, para mim, fazem mais sentido quando colocadas a serviço das pessoas.',
    organization: 'UFSCar',
    avatarUrl: ViniciusMicali,
    email: 'vmicali@gmail.com',
    phone: '16 996084978',
    linkedinUrl: 'https://www.linkedin.com/in/vinicius-micali',
  },
  {
    id: '10',
    categoryId: 'ambiente-inovacao',
    badge: 'INCUBADORA',
    name: 'Primo Melaré ',
    role: 'Especialista em Inovação (SENAI-SP)',
    bio: 'Primo Melaré é especialista em Inovação e Empreendedorismo no SENAI-SP, com atuação no desenvolvimento de ecossistemas de inovação, conexão entre empresas, startups, universidades e instituições de pesquisa, e estruturação de projetos de inovação industrial. À frente do UpLab SENAI São Carlos, atua no desenvolvimento de estratégias para aumento da performance empresarial, na captação de recursos para inovação, na implementação de soluções voltadas à produtividade, eficiência operacional e economicidade. Seu trabalho busca transformar desafios industriais em oportunidades de inovação, conectando competências, tecnologias e recursos para gerar resultados concretos, fortalecer a competitividade das empresas e impulsionar o desenvolvimento econômico regional.',
    organization: 'SENAI',
    avatarUrl: PrimoMelare,
    email: 'primo.pedro@sp.senai.br',
    phone: '16 976000029',
    linkedinUrl: 'http://www.linkedin.com/in/primomelare',
  },
  {
    id: '11',
    categoryId: 'ambiente-inovacao',
    badge: 'INCUBADORA',
    name: 'Regiane de Fátima Travensolo',
    role: 'Empreendedora em Biotecnologia & Inovação',
    bio: 'Co-fundadora das empresas PARTECURAE e PROTHERA BIOTECNOLOGIA, além de Agente de Biotecnologia do Mercosul. Possui graduação em Engenharia Agronômica pela Universidade Estadual de Londrina (UEL) e títulos de Mestre e Doutora pela Universidade Estadual Paulista Júlio de Mesquita Filho (UNESP). Concluiu dois Pós-Doutorados na USP (IQSC-USP). Atuou como Diretora Científica na PARTECURAE e na Prothera biotecnologia, o qual também foi sócia fundadora dessas empresas. Possui MBAs em Gestão de Negócios e Gestão de Projetos pela USP/PECEGE, onde também integra o Grupo de Orientadores dos cursos de MBA em Gestão de Projetos e Agronegócios. Aluna do Mestrado em Inovação e Empreendedorismo e do MBA em Administração e Direção de Empresas na Escola de Negócios Europeia de Barcelona - ENEB. Atualmente, é colaboradora na Agência de Inovação da UFSCar (AIn-UFSCar) nas áreas de transferência de tecnologias e Empreendedorismo e Mentora no Programa i2SP powered by inovAtiva. Sócia fundadora na empresa Prothera Consultoria e Gestora de Negócios no Centro de Ciência para o Desenvolvimento em Saúde Hidrossanitária e Qualidade de Vida (CCD - SHQV), do IQSC/USP.',
    organization: 'Agência de Inovação da UFSCar',
    avatarUrl: RegianeTravensolo,
    email: 'rtravensolo@yahoo.com.br',
    phone: '16 997082888',
    linkedinUrl: 'http://linkedin.com/in/regiane-travensolo-sacomano-7b720a7',
  },
  {
    id: '12',
    categoryId: 'ambiente-inovacao',
    badge: 'INCUBADORA',
    name: 'Marcius Leandro Junior ',
    role: 'Fundador & CEO (Shinier Solutions)',
    bio: 'Sou Marcius Leandro, fundador e CEO da Shinier Solutions, empreendedor, mentor de startups e negócios digitais e entusiasta da inovação como ferramenta de transformação social. Sou graduado em Ciência da Computação e Sistemas de Informação, com especialização em Dados e MBA em Negócios Digitais pela USP. Desde 2007, são 19 anos de experiência profissional em tecnologia, atuando na conexão entre conhecimento científico, empreendedorismo e desenvolvimento de negócios. Desde 2018, lidero a Shinier na criação e aceleração de startups, transformando ideias em negócios tecnológicos sustentáveis. Acredito na inovação colaborativa e no fortalecimento do Ecossistema Local de Inovação de São Carlos, aproximando universidades, empresas, governo e sociedade para gerar impacto social, ambiental e econômico.',
    organization: 'Empresa ',
    avatarUrl: MarciusLeandro,
    email: 'contato@shinier.com.br',
    phone: '16 981354817',
    linkedinUrl: 'https://www.linkedin.com/in/marcius-leandro',
  },
  {
    id: '13',
    categoryId: 'ambiente-inovacao',
    badge: 'INCUBADORA',
    name: 'Aline L Suave',
    role: 'Pesquisadora & Fundadora (Solimpactus)',
    bio: 'Doutora em Ciência da Informação, Mestra em Ciência da Informação, Filósofa, Pedagoga, Pesquisadora e Professora. Atualmente, realiza estágio de Pós-Doutorado no Departamento de Ciência da Computação da Universidade Federal de São Carlos (UFSCar), desenvolvendo pesquisas nas áreas de ética da informação, inteligência artificial, tecnologias digitais e inovação. Atua como Coordenadora de Projetos no Instituto de Informação para Inovação (i2i), é fundadora da Solimpactus e da Cognisum e docente em cursos de pós-graduação e MBA da UFSCar, com experiência em ética informacional, inovação pedagógica, mediação tecnológica e gestão do conhecimento. É também pesquisadora de Tecnologias Sociais no projeto SAVITS (Sistema de Avaliação e Validação de Impactos em Tecnologias Sociais), do Instituto Brasileiro de Informação em Ciência e Tecnologia (Ibict). Integra o Grupo de Articulação Pró-Simpacto (GAS), uma rede informal que reúne organizações públicas e privadas para promover o ecossistema de Investimentos e Negócios de Impacto (INIs) e contribuir para a estruturação do Sistema Nacional de Economia de Impacto (Simpacto) no Brasil. Nessa atuação, contribui para a articulação de iniciativas voltadas à inovação, ao empreendedorismo, às tecnologias sociais e à promoção do impacto socioeconômico.',
    organization: 'Instituto de Informação para Inovação',
    avatarUrl: AlineSuave,
    email: 'aline.suave@i2i.org.br',
    phone: '16 996210708',
    linkedinUrl: 'https://www.linkedin.com/in/alinesuave/',
  },
  {
    id: '14',
    categoryId: 'ambiente-inovacao',
    badge: 'INCUBADORA',
    name: 'Ana Flávia mendes',
    role: 'Comunidade & Experiências',
    bio: 'São-carlense, Construtora de Comunidades e Experiências e apaixonada pelo poder transformador das conexões humanas. No ONOVOLAB, hub de inovação, conecta pessoas, ambientes e ecossistemas para criar experiências que geram pertencimento, colaboração e oportunidades. Acredita que ambientes extraordinários vão além da infraestrutura: são construídos por pessoas, relações genuínas e propósitos compartilhados. Seu trabalho é transformar espaços em comunidades vivas, capazes de aproximar ideias, impulsionar negócios e gerar impacto.',
    organization: 'ONOVOLAB',
    avatarUrl: AnaFlaviaMendes,
    email: 'ana@onovolab.com',
    phone: '11 981248142',
    linkedinUrl: 'http://linkedin.com/in/anaflaviamendes',
  },
];