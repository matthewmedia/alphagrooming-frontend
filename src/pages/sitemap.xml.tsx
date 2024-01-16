import { GetServerSideProps } from 'next';
import { DOMAIN } from '@/lib/constant';


import { getSlugs } from '@/api/api';

const Sitemap: React.FC = () => {
    return null;
};
export default Sitemap;
export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const slugs = await getSlugs();


  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
          <loc>${DOMAIN}</loc>
      </url>
      ${slugs.map((slug) => {
        return `
              <url>
                  <loc>${DOMAIN}/${slug}</loc>
              </url>
          `;
      })}
      
  </urlset>
  `;
  res.setHeader('Content-Type', 'text/xml');
  res.write(xml);
  res.end();

  return {
    props: {},
  };
};

{/** */}

