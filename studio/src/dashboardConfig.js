export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "618e159d6d02d730dc59489c",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-uy5x35rk",
                  apiId: "88244f9b-4897-4ab7-96f0-5bfce3c9fdf1",
                },
                {
                  buildHookId: "618e159d00fe131255a77942",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-2hgmwhg8",
                  apiId: "9d43abc4-c74b-482d-89a0-ca720a4213e6",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/aequitas321/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-2hgmwhg8.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
