import Card from "../../../../commons/toolkit/Card";
import Avatar from "../../../../commons/toolkit/Avatar";
import Badge from "../../../../commons/toolkit/Badge";
import type { ContactItem } from "../../../../../assets/content/contacts";
import {Header, HeaderInfo, Footer, Name, Role, Bio, Organization, SocialLink, SocialActions} from "./styles";
import LinkedInIcon from "../../../../../assets/icon/contact/linkedin.svg";
import { Mail, Phone } from "lucide-react";

type ContactCardProps = Omit<ContactItem, "id" | "categoryId">;

export default function ContactCard({
  badge,
  avatarUrl,
  name,
  role,
  bio,
  organization,
  email,
  phone,
  linkedinUrl,
}: ContactCardProps) {
  return (
    <Card>
      <Badge>{badge}</Badge>

      <Header>
        <Avatar src={avatarUrl} alt={`Foto de perfil de ${name}`} />
        <HeaderInfo>
          <Name>{name}</Name>
          <Role>{role}</Role>
        </HeaderInfo>
      </Header>

      <Bio>{bio}</Bio>

      <Footer>
        <Organization>{organization}</Organization>

        <SocialActions>
          {email && (
            <SocialLink
              href={`mailto:${email}`}
              aria-label={`Enviar e-mail para ${name}`}
            >
              <Mail size={20} />
            </SocialLink>
          )}

          {phone && (
            <SocialLink
              href={`tel:${phone.replace(/\D/g, "")}`}
              aria-label={`Ligar para ${name}`}
            >
              <Phone size={20} />
            </SocialLink>
          )}

          {linkedinUrl && (
            <SocialLink
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Perfil no LinkedIn de ${name}`}
            >
              <img src={LinkedInIcon} alt="LinkedIn" width={20} height={20} />
            </SocialLink>
          )}
        </SocialActions>
      </Footer>
    </Card>
  );
}