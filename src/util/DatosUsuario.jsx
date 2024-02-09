export const datosUsuario=(data) => ({
    nombre: data.nombre,
    apellido: data.apellido,
    email: data.email,
    dni: data.dni,
    fechaNacimiento: data.fechaNacimiento,
    password: data.password,
    direcciones: [
      {
        calle: data.calle,
        numero: data.numero,
        dpto: data.dpto,
        pais: data.pais,
        provincia: data.provincia,
        localidad: data.localidad,
        barrio: data.barrio,
      },
    ],
    telefonos: [
      {
        telefono: data.telefono,
      },
    ],
  })