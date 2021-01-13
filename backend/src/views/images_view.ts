import Image from '../models/Image';

export default{     //o importante da view é que através dela podemos filtrar o que nos vamos estar retornando na busca do usuário(o que queremos que ele veja)
    render(image: Image){
        return {
            id: image.id,
            //url: `http://192.168.15.3:3333/uploads/${image.path}`,  //utilizado para o celular
            // url: `http://localhost:3333/uploads/${image.path}`,  //utilizado para o browser
            url: `${process.env.API_URL}/uploads/${image.path}`     //utilizado para nosso deploy
        };
    },

    renderMany(images: Image[]){
        return images.map(image=> this.render(image));
    }
}