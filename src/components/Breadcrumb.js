import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const BreadcrumbContainer = styled.nav`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`;

const BreadcrumbList = styled.ol`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

const BreadcrumbItem = styled.li`
  display: flex;
  align-items: center;
  font-size: 0.9rem;
  
  &:not(:last-child)::after {
    content: '/';
    margin: 0 0.5rem;
    color: rgba(255, 255, 255, 0.8);
  }
  
  a {
    color: rgba(255, 255, 255, 0.9);
    text-decoration: none;
    transition: color 0.2s;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
    
    &:hover {
      color: #ffffff;
      text-decoration: underline;
    }
  }
  
  &:last-child a {
    color: rgba(255, 255, 255, 0.7);
    pointer-events: none;
  }
`;

const Breadcrumb = () => {
  const location = useLocation();
  const { t } = useTranslation();
  
  // Don't render anything on the home page
  if (location.pathname === '/') {
    return null;
  }
  
  const getNavigationKey = (segment) => {
    // Map URL segments to navigation keys
    const keyMap = {
      'eventos-natureza': 'natureEvents',
      'areas-externas': 'areasExternas',
      'estacao-pesquisa': 'researchStation',
      'nascente-natural': 'nascentNatural',
      'guias-campo': 'fieldGuides',
      'safari-boat': 'safariBoat',
      'como-chegar': 'howToGet',
      'falaram-de-nos': 'theySpokeAboutUs',
      'nossa-historia': 'nossaHistoria'
    };
    
    return keyMap[segment] || segment;
  };
  
  const pathSegments = location.pathname.split('/').filter(segment => segment);
  
  const breadcrumbItems = [
    { path: '/', label: t('navigation.home') },
    ...pathSegments.map((segment, index) => ({
      path: '/' + pathSegments.slice(0, index + 1).join('/'),
      label: t(`navigation.${getNavigationKey(segment)}`)
    }))
  ];

  return (
    <BreadcrumbContainer aria-label="breadcrumb">
      <BreadcrumbList>
        {breadcrumbItems.map((item, index) => (
          <BreadcrumbItem key={item.path}>
            <Link to={item.path}>
              {item.label}
            </Link>
          </BreadcrumbItem>
        ))}
      </BreadcrumbList>
    </BreadcrumbContainer>
  );
};

export default Breadcrumb; 