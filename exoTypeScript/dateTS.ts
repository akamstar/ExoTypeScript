//classe date

export default class date {

    public _year : number;
    public _month : number;
    public _day : number;

//constructeurs

    constructor( year:number, month:number, day:number ){
        this._year = year;
        this._month = month;
        this._day = day;
    }

//getters

    get year (): number{
        return this._year;
    }

    get month (): number{
        return this._month;
    }

    get day (): number{
        return this._day;
    }

//setters

    set year (year:number){

        if (year<2999){
            this._year=year;
        }
        else{
            console.log("Error: inexistant year! Retry");
        }
    } 
    
    set month (month:number){

        if(month>12 || month<1){
            console.log("Error: inexistant month! Retry");
        }else{
            this._month=month;
        }
    }

    set day (day:number){

        if(day<31){
            this._day=day;
        }else{
            console.log("Error: inexistant day! Retry");
        }

    }

//méthodes    

    public toString ( year:number, month:number, day:number ) : string {
        let dateString : string = year + "-" + month + "-" + day ; 
        return dateString;
    }

    public Create ( year:number=2019, month:number=8, day:number=8 ) : string {
        this._year = year;
        this._month = month;
        this._day = day;
        let dateDefaut : string = this.toString(year,month,day) ;
        return dateDefaut;
    }

    public setDate ( year:number, month:number, day:number ) : string{
        let NewDate : string = this.Create(year,month,day);
        return NewDate; 
    }

    public yesterday(day:number=this._day): string{
        day = day - 1;
        let yestDate : string = this.toString(this._year,this._month,day) ;
        return yestDate;
    } 

    public tomorrow(day:number=this._day): string{
        day = day + 1;
        let tomoDate : string = this.toString(this._year,this._month,day) ;
        return tomoDate;
    } 

    public addDay( day:number=1 ): string{
        this._day = this._day + day;
        let aDay : string = this.toString(this._year,this._month, this._year) ;
        return aDay;
    }

    public subDay( day:number=1 ): string{
        this._day = this._day - day;
        let sDay : string = this.toString(this._year,this._month, this._year) ;
        return sDay;
    }

    public addMonth( month:number=1 ): string{
        this._month = this._month + month;
        let aMonth : string = this.toString(this._year,this._month, this._year) ;
        return aMonth;
    }

    public subMonth( month:number=1 ): string{
        this._month = this._month - month;
        let sMonth : string = this.toString(this._year,this._month, this._year) ;
        return sMonth;
    }

    public addYear( year:number=1 ): string{
        this._year = this._year + year;
        let aYear : string = this.toString(this._year,this._month, this._year) ;
        return aYear;
    }

    public subYear( year:number=1 ): string{
        this._year = this._year - year;
        let sYear : string = this.toString(this._year,this._month, this._year) ;
        return sYear;
    }

}