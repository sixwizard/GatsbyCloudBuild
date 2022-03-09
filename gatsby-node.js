exports.createPages = async ({ graphql, page, actions }, plugin) => {
    const { createPage, deletePage } = actions

    await createPDP()

    async function createPDP() {

        const slug = `/abc`;
        //add active to use create or delete
        await createPage({
            path: slug,
            matchPath: `${slug}/*`,
            component: require.resolve(`./src/template/index.tsx`),
            context: { slug, time: new Date()},
        })
        console.log(`created page${slug}`)
    }
}

