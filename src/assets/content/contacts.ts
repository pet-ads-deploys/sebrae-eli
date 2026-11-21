import fundoCinza from "../../assets/images/fundocinza.avif";

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
    name: 'Ana Beatriz Ramos',
    role: 'Gestora de espaço compartilhado',
    bio: 'Cuida da rotina do coworking e apresenta quem chega a quem já está lá dentro',
    organization: 'Sebrae-SP São Carlos',
    avatarUrl: fundoCinza,
    email: 'ana.beatriz@sebrae-sp.com.br',
    phone: '(16) 3333-4444',
    linkedinUrl: 'https://www.linkedin.com',
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