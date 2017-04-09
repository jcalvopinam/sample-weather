export class Weather {
    city:string;
    country:string;
    temperature:number;

    constructor (city:string, country:string, temperature:number){
        this.city = city;
        this.country = country;
        this.temperature = temperature;
    }

}
