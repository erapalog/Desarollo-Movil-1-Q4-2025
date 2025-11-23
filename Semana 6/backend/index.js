const express = require("express");
const Estudiante = require("./Modelos/Estudiantes");

const app = express();

app.use(express.json());

//1. Metodo (get,post,put, delete, patch, etc)
//2. request, response}
//3. tabla, un archivo, un proceso interno
//4. codigos de respuesta 200,201, 203, 401,403, 404,500, etc

//crud

app.get("/estudiante", async (req, resp) => {
  try {
    //select *from estudiantes

    const resultado = await Estudiante.findAll();

    if (resultado.length > 0) {
      resp.status(200).json(resultado);
    } else {
      resp.status(400).json(resultado);
    }
  } catch (error) {
    resp.status(500).json({ mensjae: "Ocurrio un error" + error });
  }
});

app.post("/estudiante", async (req, resp) => {
  try {
    console.log(req.body);

    //insert into estudiante values(?,?,?)
    const respuesta = await Estudiante.create(req.body);

    if (respuesta != null) resp.status(200).json(respuesta);
    else resp.status(400).json({ mensja: "No se creo el registro" });
  } catch (error) {
    resp.status(500).json({ mensjae: "Ocurrio un error" + error });
  }
});

app.put("/estudiante/:IdEstudiante", async (req, resp) => {
  try {
    console.log(req.params.IdEstudiante);

    let idestudiante = req.params.IdEstudiante;

    const [updated] = await Estudiante.update(req.body, {
      where: { IdEstudiante: idestudiante },
    });

    if (updated) {
      resp.status(200).json({ mensaje: "registro actualizad" });
    } else {
      resp.status(400).json({ mensja: "No se actualizó el registro" });
    }

    // update estudiante set nombre=?, genero=? where idestudiante=?
  } catch (error) {
    resp.status(500).json({ mensjae: "Ocurrio un error" + error });
  }
});

app.delete("/estudiante/:idEstudiante", async (req, resp) => {
  //delete from estudiante where idEstudiante=?
  try {
    const deleted = await Estudiante.destroy({
      where: { IdEstudiante: req.params.idEstudiante },
    });

    if (deleted) resp.status(200).json({ mensjae: "Eliminado correctamente" });
    else resp.status(400).json({ mensjae: "No se pudo eliminar" });
  } catch (error) {
    resp.status(500).json({ mensjae: "Ocurrio un error" + error });
  }
});

app.listen(5000, () => {
  console.log("Aplicacion ejecutando en puerto 5000");
});
