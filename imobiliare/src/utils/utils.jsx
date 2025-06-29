export const formatPropertyObject = (property) => {
  console.log(property);
  return {
    id: property.property_id,
    title: property.title,
    location: `${property.area}, ${property.city}`,
    price: `${property.price.toLocaleString()} EUR`,
    surface: property.surface,
    rooms: property.rooms,
    bathrooms: property.bathrooms,
    images: property.images,
    rating: 5,
    tip: property.type,
    zona: property.area,
    oras: property.city,
    agent: `${property.agent?.firstname || ""} ${
      property.agent?.lastname || ""
    }`.trim(),
    code: property.property_id,
  };
};
