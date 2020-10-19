import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn} from 'typeorm'; //estamos pegando o onetomany para que possamos relacionar um orfanato com várias imagens
import Image from './Image';

// O que estamos usando logo abaixo é um decorator, muito parecido com o que temos no spring do java, ele serve para linkar o nosso código e mostrar que ele pertence ao banco de dados orphanages

@Entity('orphanages')
export default class Orphanage{
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    name: string;

    @Column()
    latitude: number;

    @Column()
    longitude: number;

    @Column()
    about: string;

    @Column()
    instructions: string;
    
    @Column()
    opening_hours: string;

    @Column()
    open_on_weekends: boolean;

    @OneToMany(() => Image, image => image.orphanage,{
        cascade: ['insert', 'update'],
    })
    @JoinColumn({name: 'orphanage_id'})
    images: Image[];

}