// Requireds
const fs = require('fs');
const colors = require('colors');

let crearArchivo = async (base, limite = 10) => {

   if( !Number(base) || !Number(limite) ) throw new Error('El valor introducido no es un numero');

   let data = '';

   for(let i=1; i<=limite; i++){
      data += `${base} * ${i} = ${base*i}\n`;
   }

   fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
      if (err){
         throw new Error('Error al generar el archivo');
      }else{
         return `tabla-${ base }.txt`;;
      }
   });
};


let listarTabla = (base, limite = 10) => {
   for(let i=1; i<=limite; i++){
      console.log(`${base} * ${i} = ${base*i}`.red);
   }
}


module.exports = {
   crearArchivo,
   listarTabla
}
