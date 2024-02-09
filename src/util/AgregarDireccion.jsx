export const agregarDireccion = (data) => ({
  usuario_id: data.usuario_id,
  calle: data.calle,
  numero: data.numero,
  dpto: data.dpto,
  pais: data.pais,
  provincia: data.provincia,
  localidad: data.localidad,
  barrio: data.barrio,
});
