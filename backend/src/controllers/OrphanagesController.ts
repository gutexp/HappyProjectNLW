import {Request, Response} from 'express';
import { getRepository} from 'typeorm';
import orphanageView from '../views/orphanages_view';
import Orphanage from '../models/Orphanage';
import * as Yup from 'yup';

export default{
    
    async index(request: Request, response: Response){  //método para listagem de todos os orfanatos
        const orphanagesRepository = getRepository(Orphanage);

        const orphanages = await orphanagesRepository.find({
            relations: ['images']
        });   //como não temos nenhuma condição imposta então vai acabar retornando todos os orfanatos

        return response.json(orphanageView.renderMany(orphanages));

    },
    async show(request: Request, response: Response){   //método para buscar um orfanato específico pelo id
        const { id} = request.params;

        const orphanagesRepository = getRepository(Orphanage);

        const orphanage = await orphanagesRepository.findOneOrFail(id,{
            relations: ['images']
        });

        return response.json(orphanageView.render(orphanage));

    },
    
    async create(request: Request,response: Response){
        //desestruturando os dados recebidos pelo post (request.body)
    const {
        name,
        latitude,
        longitude,
        about,
        instructions,
        opening_hours,
        open_on_weekends,
    } = request.body;

    //criando o repositório que irá salvar no nosso DB o que fora inserido
    const orphanagesRepository = getRepository(Orphanage);

    const requestImages = request.files as Express.Multer.File[];   //essa parte do as é necessária para especificarmos que os arquivos são um array

    const images = requestImages.map(image =>{
        return {path: image.filename}
    })

    const data = {
        name,
        latitude,
        longitude,
        about,
        instructions,
        opening_hours,
        open_on_weekends: open_on_weekends == 'true',
        images,
    };

    const schema = Yup.object().shape({     //yup é a biblioteca que estamos utilizando para validação de dados
        name: Yup.string().required(),
        latitude: Yup.number().required(),
        longitude: Yup.number().required(),
        about: Yup.string().required().max(300),    //max300 serve para que seja restrito até 300 caracteres
        instructions: Yup.string().required(),
        opening_hours: Yup.string().required(),
        open_on_weekends: Yup.boolean().required(),
        images: Yup.array(
            Yup.object().shape({
                path: Yup.string().required()
            })
        )
    });

    await schema.validate(data, {
        abortEarly: false,  //colocando como falso o abortEarly, vai nos permitir que ele liste todos os erros encontrados caso haja mais que um, se fosse true ele pararia no primeiro
    });

    const orphanage = orphanagesRepository.create(data);

    await orphanagesRepository.save(orphanage);


    return response.status(201).json(orphanage);    //código 201 quer dizer que algo foi criado, e deu certo sua criação o status irá retornar esse código
    }
}