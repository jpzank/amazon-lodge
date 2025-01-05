import { Cloudinary } from '@cloudinary/url-gen';

// Initialize Cloudinary instance
export const cld = new Cloudinary({
  cloud: {
    cloudName: 'dxlhv2mji'
  }
});

// Base URL for Cloudinary images
const CLOUDINARY_BASE_URL = 'https://res.cloudinary.com/dxlhv2mji/image/upload';

// Common transformations
const DEFAULT_TRANSFORMATIONS = 'f_auto,q_auto';

// Folder-specific image mappings
export const folderImageMapping = {
  acomodacoes: {
    'bangalo1': 'v1736085714/bangalo1_nktctx',
    'bangalo-familia': 'v1736085689/bangalo-familia_rsafvb',
    'bangalo-jardim': 'v1736085676/bangalo-jardim_fvql79',
    'casa-fazenda': 'v1736085704/casa-fazenda_n6bscy',
    'hero': 'v1736085769/acomodacoes_ghqhpo'
  },
  'area-externa': {
    'hero': 'v1736092424/area-externa_ml9enj',
    'piscina': 'v1736085772/piscina_knlf8d',
    'lagoa': 'v1736085748/lagoa_uaetsf'
  },
  birdwatching: {
    'hero': 'v1736085800/birdwatching_yywf16',
    'gallery': 'v1736085772/birdwatching_roqgxe',
    'tie-bicudo': 'v1736085691/tie-bicudo_wblb9s',
    'anambe': 'v1736085691/anambe_hlzcsj'
  },
  eventos: {
    'reuniao-executiva': 'v1736085711/reuniao-executiva_ouxhas',
    'eventos-especiais': 'v1736085709/eventos-especiais_wkym1o',
    'ocasioes-especiais': 'v1736085783/ocasioes-especiais_h44ve8'
  },
  'falaram-de-nos': {
    'wonderlust': 'v1736085727/wonderlust_alvd9p',
    'wonderlust-1': 'v1736085722/wonderlust-1_cnm4vl',
    'wonderlust-2': 'v1736085728/wonderlust-2_wn6zao',
    'camalote-capa': 'v1736085712/camalote-capa_xaeyct',
    'camalote-pagina1': 'v1736085720/camalote-pagina1_dz0ek4'
  },
  gastronomia: {
    'hero': 'v1736085785/gatronomia-hero_kqnp26',
    'cafe-da-manha': 'v1736085755/cafe-da-manha_ivpcds',
    'almoco': 'v1736085748/almoco_w6ysc9',
    'jantar': 'v1736085760/jantar_of4vxg',
    'pratos-casa': 'v1736085768/pratos-casa_kzicyc',
    'pratos-tipicos': 'v1736085776/pratos-tipicos_f4meuw',
    'sobremesas-especiais': 'v1736085770/sobremesas-especiais_osgafx',
    'prato-especial-do-chef': 'v1736085763/prato-especial-do-chef_w8ep8h',
    'especiarias-regionais': 'v1736085761/especiarias-regionais_vutp3x'
  },
  home: {
    'vista-aerea-lodge': 'v1736085794/vista-aerea-lodge_p33y1g',
    'familia-fogueira': 'v1736085753/familia-fogueira_xch5l3',
    'convivencia': 'v1736085682/convivencia_p3tve7'
  },
  logos: {
    'save-brasil': 'v1736085796/save-brasil_htbmhn',
    'save-brasil2': 'v1736085796/save-brasil2_o1so3g',
    'ebird': 'v1736085796/ebird_efzjha',
    'i-eco': 'v1736085795/i-eco_nkrmsg',
    'cornell-lab': 'v1736085793/cornell-lab_difgq1',
    'bird-life': 'v1736085791/bird-life_cnvssz'
  },
  primatas: {
    'hero': 'v1736085793/primates-hero_lodpmk',
    'gallery': 'v1736085802/primates_vklwye',
    'zogue-zogue': 'v1736085691/zogue-zogue_eqbdel',
    'parauacu': 'v1736085680/parauacu_udmaqc'
  },
  'safari-boat': {
    'hero': 'v1736085789/safari-rio-claro_rdbh6e',
    'mutum': 'v1736085678/mutum_iwmptx',
    'sucuri': 'v1736085678/sucuri_a6v6wa',
    'pintado': 'v1736085676/pintado_tdk4hx',
    'pirarucu': 'v1736085685/pirarucu_nwglqt'
  },
  shared: {
    'kiko': 'v1736085779/kiko_a7tmas',
    'birds': 'v1736085771/birds_wtstwh',
    'martim': 'v1736085735/martim_rwesvz'
  },
  trilhas: {
    'hero': 'v1736085696/trilhas_pafxet'
  }
};

// Function to get image URL from specific folder
export const getFolderImage = (folder, imageName, transformations = DEFAULT_TRANSFORMATIONS) => {
  const folderMappings = folderImageMapping[folder];
  if (!folderMappings) {
    console.warn(`No folder mapping found for: ${folder}`);
    return '';
  }

  const imageId = folderMappings[imageName];
  if (!imageId) {
    console.warn(`No image mapping found for: ${imageName} in folder: ${folder}`);
    return '';
  }

  return `${CLOUDINARY_BASE_URL}/${transformations}/${imageId}`;
};

// Function to get optimized Cloudinary URL with version
export const getCloudinaryUrl = (imageName, folder = 'shared') => {
  const folderMappings = folderImageMapping[folder];
  if (!folderMappings || !folderMappings[imageName]) {
    console.warn(`No mapping found for: ${imageName} in folder: ${folder}`);
    return '';
  }
  return `${CLOUDINARY_BASE_URL}/${DEFAULT_TRANSFORMATIONS}/${folderMappings[imageName]}`;
};

// Function to get image URL with custom transformations
export const getCloudinaryUrlWithTransforms = (imageName, folder = 'shared', transformations = DEFAULT_TRANSFORMATIONS) => {
  const folderMappings = folderImageMapping[folder];
  if (!folderMappings || !folderMappings[imageName]) {
    console.warn(`No mapping found for: ${imageName} in folder: ${folder}`);
    return '';
  }
  return `${CLOUDINARY_BASE_URL}/${transformations}/${folderMappings[imageName]}`;
}; 