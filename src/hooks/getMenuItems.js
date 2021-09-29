import { useStaticQuery, graphql } from "gatsby";

const flatListToHierarchical = (
    data = [],
    {idKey='id',parentKey='parentId',childrenKey='children'} = {}
) => {
    const tree = [];
    const childrenOf = {};
    data.forEach((item) => {
        const newItem = {...item};
        const { [idKey]: id, [parentKey]: parentId = 0 } = newItem;
        childrenOf[id] = childrenOf[id] || [];
        newItem[childrenKey] = childrenOf[id];
        parentId
            ? (
                childrenOf[parentId] = childrenOf[parentId] || []
            ).push(newItem)
            : tree.push(newItem);
    });
    return tree;
};

export const GetMenuItems = () => {
    const { primaryNav, footerNav } = useStaticQuery(graphql`
        query footerMenuItemsAndPrimaryMenuItems {
          primaryNav: wpcontent {
            menuItems(where: {location: PRIMARY_NAVIGATION}) {
              nodes {
                id
                parentId
                label
                path
              }
            }
          }
          footerNav: wpcontent {
            menuItems(where: {location: FOOTER_NAVIGATION}) {
              nodes {
                path
                label
              }
            }
          }
        }
    `)
    return {
        primaryNav: flatListToHierarchical(primaryNav.menuItems.nodes),
        footerNav: footerNav.menuItems.nodes
    }
}
