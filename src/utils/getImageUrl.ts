export const getImageUrl = (name: string | undefined) => {
    if (!name) return '';
    return new URL(`../assets/images/${name}`, import.meta.url).href;
};
