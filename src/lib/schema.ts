// Datos verificados del CV público de Jonathan Briones. No inventar afiliaciones
// ni métricas: solo nombre, rol, ubicación, enlaces y tecnologías confirmadas.

export const SITE_URL = 'https://jonathanbriones.com';

export const linkedIn = 'https://www.linkedin.com/in/jonathan-patricio-briones-lavados';
export const gitHub = 'https://github.com/JonasBriones';

export function personSchema(site: string = SITE_URL) {
  return {
    '@type': 'Person',
    '@id': `${site}/#person`,
    name: 'Jonathan Briones Lavados',
    alternateName: 'Jonathan Briones',
    url: site,
    jobTitle: 'Líder Técnico / Arquitecto Cloud',
    description:
      'Líder Técnico y Arquitecto Cloud con más de 13 años de experiencia en AWS, Terraform, Kubernetes, Docker, CI/CD y FinOps.',
    sameAs: [linkedIn, gitHub],
    knowsAbout: [
      'AWS',
      'Azure',
      'Terraform',
      'Kubernetes',
      'Docker',
      'CI/CD',
      'FinOps',
      'Liderazgo técnico'
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Valladolid',
      addressCountry: 'ES'
    }
  };
}

export function profilePageSchema(pageUrl: string, site: string = SITE_URL) {
  return {
    '@type': 'ProfilePage',
    '@id': `${pageUrl}#profilepage`,
    url: pageUrl,
    name: 'Jonathan Briones — Perfil profesional',
    inLanguage: 'es',
    isPartOf: { '@type': 'WebSite', '@id': `${site}/#website`, name: 'Jonathan Briones', url: site },
    mainEntity: { '@id': `${site}/#person` },
    dateModified: '2026-11-25'
  };
}

export function articleSchema({
  headline,
  description,
  url,
  datePublished,
  dateModified,
  image
}: {
  headline: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  image: string;
}) {
  const author = personSchema();
  return {
    '@type': 'Article',
    '@id': `${url}#article`,
    headline,
    description,
    url,
    mainEntityOfPage: url,
    image,
    inLanguage: 'es',
    datePublished,
    dateModified: dateModified ?? datePublished,
    author: { '@id': author['@id'] },
    publisher: { '@id': author['@id'] },
    isPartOf: { '@type': 'WebSite', '@id': `${SITE_URL}/#website`, name: 'Jonathan Briones', url: SITE_URL }
  };
}
