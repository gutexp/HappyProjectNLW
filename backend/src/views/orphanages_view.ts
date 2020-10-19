import Orphanage from '../models/Orphanage';
import imagesView from './images_view';

export default{     //o importante da view é que através dela podemos filtrar o que nos vamos estar retornando na busca do usuário(o que queremos que ele veja)
    render(orphanage: Orphanage){
        return {
            id: orphanage.id,
            name: orphanage.name,
            latitude: orphanage.latitude,
            longitude: orphanage.longitude,
            about: orphanage.about,
            instructions: orphanage.instructions,
            opening_hours: orphanage.opening_hours,
            open_on_weekends: orphanage.open_on_weekends,
            images: imagesView.renderMany(orphanage.images),
        }
    },

    renderMany(orphanages: Orphanage[]){
        return orphanages.map(orphanage=> this.render(orphanage));
    }
}