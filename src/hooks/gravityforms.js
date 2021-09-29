import { useStaticQuery, graphql } from 'gatsby'
export const AllGravityData = () => {
    const { allGfForm } = useStaticQuery(
        graphql`
            query {
                allGfForm {
                    edges {
                        node {
                            ...GravityFormComponent
                        }
                    }
                }
            }
        `
    )
    return allGfForm
}
