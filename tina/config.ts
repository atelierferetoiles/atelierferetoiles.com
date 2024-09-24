import { defineConfig } from 'tinacms';

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || 'main';

export default defineConfig({
  branch,
  clientId: process.env.TINA_CLIENT_ID, // Get this from tina.io
  token: process.env.TINA_CONTENT_TOKEN, // Get this from tina.io
  // search: {
  //   tina: {
  //     indexerToken: process.env.TINA_SEARCH_TOKEN,
  //   },
  // },

  build: {
    outputFolder: 'admin',
    publicFolder: 'static',
  },
  media: {
    tina: {
      mediaRoot: 'asset',
      publicFolder: 'static',
    },
  },
  schema: {
    collections: [
      {
        name: 'Home',
        path: 'src/content/pages',
        match: {
          include: 'home-page',
        },
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        format: 'md',
        fields: [
          { name: 'photoHome', label: "Photo - page d'accueil", type: 'image', required: true },
          { name: 'subTitle', label: 'Sous-titre', type: 'string', required: false },
          { name: 'announcement', label: "Bandeau d'annonce", type: 'string', required: false },
          // {
          //   name: 'linksCards',
          //   label: 'Cartes - liens',
          //   type: 'object',
          //   fields: [
          //     { name: 'title', label: 'Titre', type: 'string', required: true },
          //     { name: 'text', label: 'Texte', type: 'string', required: true },
          //     { name: 'link', label: 'Lien', type: 'string', required: true },
          //     { name: 'image', label: 'Image', type: 'image', required: true },
          //     { name: 'imageAlt', label: 'Description image', type: 'string', required: true },
          //   ],
          //   list: true,
          //   required: false,
          // },
          {
            name: 'body',
            label: 'Contenu',
            type: 'rich-text',
            isBody: true,
          },
        ],
      },
      {
        name: 'Formations',
        path: 'src/content/pages',
        match: {
          include: 'formations',
        },
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        format: 'md',
        fields: [
          {
            name: 'body',
            label: 'Contenu',
            type: 'rich-text',
            isBody: true,
          },
        ],
      },
      {
        name: 'Expo_Vente',
        path: 'src/content/pages',
        match: {
          include: 'expo-vente',
        },
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        format: 'md',
        fields: [
          {
            name: 'body',
            label: 'Contenu',
            type: 'rich-text',
            isBody: true,
          },
        ],
      },
      {
        name: 'post',
        label: 'Réalisations',
        path: 'src/content/posts',
        defaultItem() {
          return {
            title: '',
            body: '',
            draft: false,
            date: new Date().toISOString(),
          };
        },
        ui: {
          filename: {
            slugify: (values) => {
              return values.title
                .toString()
                .toLowerCase()
                .trim()
                .replace(/[^\w\s-]/g, '') // remove non-word [a-z0-9_], non-whitespace, non-hyphen characters
                .replace(/[\s_-]+/g, '_') // swap any length of whitespace, underscore, hyphen characters with a single _
                .replace(/^-+|-+$/g, ''); // remove leading, trailing -
            },
          },
        },
        fields: [
          {
            type: 'string',
            name: 'title',
            label: 'Titre',
            isTitle: true,
            required: true,
          },
          {
            type: 'number',
            name: 'price',
            label: 'Prix (€)',
            required: true,
          },
          {
            label: 'Catégorie',
            type: 'reference',
            name: 'category',
            collections: ['categories'],
          },
          {
            type: 'object',
            list: true,
            name: 'imgSrcList',
            label: 'Images',
            required: true,
            ui: {
              itemProps: (item) => {
                return { label: item?.alt };
              },
              min: 1,
            },
            fields: [
              {
                name: 'src',
                label: 'Image',
                type: 'image',
                description: '2000*1500px',
                required: true,
              },
              { name: 'alt', label: 'Description', type: 'string', required: true },
            ],
          },
          {
            type: 'rich-text',
            name: 'body',
            label: 'Description - texte',
            isBody: true,
          },
          {
            type: 'datetime',
            name: 'date',
            label: 'Date',
            description: 'Utilisé pour trier les articles',
            ui: {
              timeFormat: 'HH:mm',
            },
          },
          {
            type: 'boolean',
            name: 'draft',
            label: 'Brouillon',
            required: false,
            description: 'Cache ou affiche un produit',
          },
        ],
      },
      {
        name: 'categories',
        label: 'Catégories de produits',
        path: 'src/content/categories',
        format: 'json',
        fields: [{ name: 'name', type: 'string', label: 'Nom', isTitle: true, required: true }],
      },
      {
        name: 'Footer',
        path: 'src/content/pages',
        match: {
          include: 'footer',
        },
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        format: 'json',
        fields: [
          { name: 'address', label: 'Adresse', type: 'string', required: true },
          {
            name: 'addressLink',
            label: "Lien de l'adresse",
            type: 'string',
            required: true,
            description: 'Lien vers google maps',
          },
          {
            name: 'mapsEmbedLink',
            label: "Lien d'intégration maps",
            required: true,
            type: 'string',
          },
          {
            name: 'hours',
            label: 'Horaires',
            type: 'object',
            required: true,
            list: true,
            fields: [
              { type: 'string', name: 'day', label: 'Jour', required: true },
              { type: 'string', name: 'hours', label: 'Horaire', required: true },
            ],
          },
          { name: 'hoursTitle', label: 'Titre - horaires', required: false, type: 'string' },
          {
            name: 'imageHoursSrc',
            label: 'Image - horaires',
            type: 'image',
            required: false,
          },
          {
            name: 'imageHoursAlt',
            label: 'Description image - horaires',
            type: 'string',
            required: false,
          },
        ],
      },
    ],
  },
});
