const getValidSprite = (sprites) => {
    // Verifica si la sprite "front_default" existe
    if (sprites.other.dream_world.front_default) {
      return sprites.other.dream_world.front_default;
    }
    // Si no existe, verifica si alguna de las otras sprites existe
    const spriteKeys = Object.keys(sprites).filter(
      (key) =>
        key !== "back_default" &&
        key !== "back_shiny" &&
        sprites[key] !== null
    );
    if (spriteKeys.length > 0) {
      return sprites[spriteKeys[0]];
    }
    // Si no existe ninguna sprite válida, retorna null
    return null;
  };

export default getValidSprite;