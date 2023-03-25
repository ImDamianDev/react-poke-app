const pokemonData = (data) => {
    const { id, name, sprites, types, stats } = data;
    const spriteKeys = ['front_default', 'front_shiny', 'front_female', 'front_shiny_female'];
  
    // Buscar la primera sprite que exista
    const sprite = sprites[spriteKeys.find(key => sprites[key])];
  
    // Obtener los tipos del Pokemon
    const pokemonTypes = types.map(type => type.type.name);
  
    // Obtener los stats del Pokemon
    const pokemonStats = stats.map(stat => ({
      name: stat.stat.name,
      value: stat.base_stat
    }));
  
    return {
      id,
      name,
      sprite,
      types: pokemonTypes,
      stats: pokemonStats
    };
  };
  
  export default pokemonData;