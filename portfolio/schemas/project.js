export default {
    name: "project",
    title: "Project",
    type: "document",
    fields: [
        {
            name: "title",
            type: "string",

        },
        {
            name: "description",
            type: "text",
        },
        {
            name: "technology",
            type: "text",
        },
        {
            name: 'mainImage',
            title: 'Main image',
            type: 'image',
            options: {
              hotspot: true,
            },
          },
        {
            name: "githubLink",
            title: "Github Link",
            type: "url",
        },
        {
            name: "deployedLink",
            title: "Deployed Link",
            type: "url",
        },
    ]
}