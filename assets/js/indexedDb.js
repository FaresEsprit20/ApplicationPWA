import {Dexie} from '/dexie';

export default class Database {
            
    // our implementation will go here...

    constructor(){

        this.db = new Dexie('Chartsdb');

        this.db.version(1).stores({
            monthscharts: 'id,ligne,produit,qte,date,year,heure,months'
        });
    }


    // get single Chart by id
    getPet = (id) => {
        return this.db.monthscharts.get(id);
    };

    // get list of monthscharts 
    queryMonthsCharts = () => {
        return this.db.monthscharts.orderBy('date').toArray();
    };

    // create or update monthscharts
    saveMonthsChart = (obj) => {
       return this.db.monthscharts.put(obj);
    };

    // delete monthscharts
    deleteMonthChart = (id) => {
        return this.db.monthscharts.delete(id)
    };
    

}
