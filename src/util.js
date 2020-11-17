export const resizeImage = (path, size) => {
    const image = path.match(/media\/screenshots/) ?
                path.replace("media/screenshots", `media/resize/${size}/-/screenshots`) 
                : path.replace("media/games", `media/resize/${size}/-/games`);
    return image;
}