import React from 'react';
import FooterLogo from './FooterLogo';
import FooterInfo from './FooterInfo';
import FooterCategories from './FooterCategories';
import FooterContact from './FooterContact';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo e descrição */}
          <FooterLogo />

          {/* Informação */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FooterInfo />
            <FooterCategories />
          </div>

          {/* Contato */}
          <FooterContact />
        </div>

        <div className="mt-8 pt-4 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>© 2022 Digital College</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
