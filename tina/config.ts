import { defineConfig } from 'tinacms';

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || 'main';

export default defineConfig({
  branch,
  clientId: process.env.TINA_CLIENT_ID, // Get this from tina.io
  token: process.env.TINA_CONTENT_TOKEN, // Get this from tina.io

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
        format: 'json',
        fields: [
          { name: 'photoHome', label: "Photo - page d'accueil", type: 'image', required: true },
          { name: 'subTitle', label: 'Sous-titre', type: 'string', required: false },
          { name: 'announcement', label: "Bandeau d'annonce", type: 'string', required: false },
          {
            name: 'linksCards',
            label: 'Cartes - liens',
            type: 'object',
            fields: [
              { name: 'title', label: 'Titre', type: 'string', required: true },
              { name: 'text', label: 'Texte', type: 'string', required: true },
              { name: 'link', label: 'Lien', type: 'string', required: true },
              { name: 'image', label: 'Image', type: 'image', required: true },
              { name: 'imageAlt', label: 'Description image', type: 'string', required: true },
            ],
            list: true,
            required: false,
          },
        ],
      },
      {
        name: 'Bmx',
        path: 'src/content/pages',
        match: {
          include: 'bmx',
        },
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        format: 'md',
        fields: [
          { name: 'title', label: 'Titre', isTitle: true, type: 'string', required: true },
          { name: 'text', label: 'Texte', isBody: true, type: 'rich-text', required: false },
          {
            name: 'images',
            label: 'Images du carousel',
            list: true,
            type: 'object',
            required: true,
            fields: [
              { name: 'src', label: 'Image', type: 'image', required: true },
              { name: 'alt', label: 'Description', type: 'string', required: true },
            ],
          },
          {
            name: 'textareaDefault',
            label: 'Valeur par défaut du champ Vos Exigences',
            type: 'string',
            component: 'textarea',
            required: true,
          },
        ],
      },
      {
        name: 'Vente',
        path: 'src/content/pages',
        match: {
          include: 'vente',
        },
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        format: 'md',
        fields: [
          { name: 'title', label: 'Titre', isTitle: true, type: 'string', required: true },
          { name: 'text', label: 'Texte', isBody: true, type: 'rich-text', required: false },
          { name: 'brandTitle', label: 'Titre - marques', type: 'string', required: false },
          {
            name: 'brands',
            label: 'Marques',
            type: 'object',
            required: false,
            list: true,
            ui: {
              itemProps: (item) => ({ label: item.alt }),
            },
            fields: [
              { name: 'src', type: 'image', required: true, label: 'Image' },
              { name: 'alt', label: 'description', required: true, type: 'string' },
            ],
          },
        ],
      },
      {
        name: 'Reparation',
        path: 'src/content/pages',
        match: {
          include: 'reparation',
        },
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        format: 'md',
        fields: [
          { name: 'title', label: 'Titre', isTitle: true, type: 'string', required: true },
          { name: 'text', label: 'Texte', isBody: true, type: 'rich-text', required: false },
        ],
      },
      {
        name: 'post',
        label: 'Blog',
        path: 'src/content/posts',
        defaultItem() {
          return {
            title: '',
            date: new Date(),
            body: '',
            chapo: '',
            draft: true,
          };
        },
        fields: [
          {
            type: 'string',
            name: 'title',
            label: 'Title',
            isTitle: true,
            required: true,
          },
          {
            type: 'datetime',
            name: 'date',
            label: 'Date',
            required: true,
          },
          {
            type: 'string',
            name: 'chapo',
            label: 'Chapô',
            required: false,
          },
          {
            type: 'image',
            name: 'smallImgSrc',
            label: 'Image de liste',
            required: true,
            description: 'Une image au format 320px*320px',
          },
          {
            type: 'string',
            name: 'smallImgAlt',
            label: "description de l'image de liste",
            required: true,
          },
          {
            type: 'rich-text',
            name: 'body',
            label: 'Article',
            isBody: true,
          },
          {
            type: 'boolean',
            name: 'draft',
            label: 'Brouillon',
            required: false,
          },
        ],
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
