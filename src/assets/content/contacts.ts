import fundoCinza from "../../assets/images/fundocinza.avif";
import AntonioPedrini from "../../assets/images/AntonioCesarPedrini.jpg";

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
    phone: '16 99156-3323',
    linkedinUrl: '',
  },
  {
    id: '2',
    categoryId: 'ambiente-inovacao',
    badge: 'PRÉ-INCUBADORA',
    name: 'Diego Martineli',
    role: 'Coordenador de pré-incubação',
    bio: 'Acompanha as primeiras versões de ideias antes de virarem empresas.',
    organization: 'UFSCar',
    avatarUrl: fundoCinza,
    email: 'diego.martineli@ufscar.br',
    phone: '(16) 3333-5555',
    linkedinUrl: 'https://www.linkedin.com',
  },
  {
    id: '3',
    categoryId: 'ambiente-inovacao',
    badge: 'INCUBADORA',
    name: 'Renata Cardoso',
    role: 'Gerente de incubação',
    bio: 'Orienta negócios nascentes e apoia a estruturação das primeiras vendas.',
    organization: 'ParqTec',
    avatarUrl: fundoCinza,
    email: 'renata.cardoso@parqtec.com.br',
    phone: '(16) 3333-6666',
    linkedinUrl: 'https://www.linkedin.com',
  },
];