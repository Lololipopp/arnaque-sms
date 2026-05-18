import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {

  return [

    {

      url: "https://arnaque-sms.vercel.app",

      lastModified: new Date(),

    },

    {

      url: "https://arnaque-sms.vercel.app/arnaque-dhl",

      lastModified: new Date(),

    },

    {

      url: "https://arnaque-sms.vercel.app/arnaque-chronopost",

      lastModified: new Date(),

    },

    {

      url: "https://arnaque-sms.vercel.app/arnaque-colis",

      lastModified: new Date(),

    },

    {

      url: "https://arnaque-sms.vercel.app/arnaque-livraison-quefaire",

      lastModified: new Date(),

    },

    {

      url: "https://arnaque-sms.vercel.app/colis-bloque",

      lastModified: new Date(),

    },

    {

      url: "https://arnaque-sms.vercel.app/paiement-livraison",

      lastModified: new Date(),

    },

  ];

}