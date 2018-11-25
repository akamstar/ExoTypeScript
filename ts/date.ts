export class date{
    private _year:number;
    private _month:number;
    private _day:number;
        constructor(year:number,month:number,day:number){
            
            this._year=year;
            this._month=month;
            this._day=day;
        }

        //getters
        get year() {
            return this._year;
        }
        get month() {
            return this._month;
        }
        get day() {
            return this._day;
        }
        //setters
        set year(year:number){
            this._year=year;
        }
        set month(month:number){
            this._month=this._month;
        }
        set day(day:number){
            this._day=day;
        }

        toString():string{
            return this._year+"-"+this._month+"-"+this._day;
        }

        create(year:number,month:number,day:number):string{
            this._year=year;
            this._month=month;
            this._day=day;
            return this.toString();
        }
        setDate(year:number,month:number,day:number):string{
            return this.create(year,month,day);
        }
        
        yesterday():string{
            let d=this._day,m=this._month,y=this._year;
            if(d-1==0){
                d=this.monthEnd(y,m-1);
                if(this._month-1==0){
                    y--;
                    m=12;
                }else{ m--;}
            }else{d--;}

            return y+"-"+m+"-"+d;
        }

        tomorrow():string{
            let d=this._day,m=this._month,y=this._year;
            if(d==this.monthEnd(y,m)){
                d=1;
                if(m+1>12){
                    m=1;
                    y++;
                }else{ m++;}
            }else{
                d++;
            }
            return y+"-"+m+"-"+d;
        }

        addDay(day:number=1):string{
            let d=this._day,m=this._month,y=this._year;

            while(d+day>this.monthEnd(y,m)){
                day=(this.monthEnd(y,m)-day)-1;
                d=1;
                m++;
                if(m>12){
                    y++;
                    m=1;
                }
                
            }
            d+=day;
            return y+"-"+m+"-"+d;
        }

        subDay(day:number=1):string{
            let d=this._day,m=this._month,y=this._year;

            while(d-day<1){
                
                m--;
                if(m<1){
                    y--;
                    m=12;
                }
                d=this.monthEnd(y,m);
                day=(this.monthEnd(y,m)-day);
                
            }
            d+=day;

            return y+"-"+m+"-"+d;
        }

        addMonth(month:number=1):string{
            
            let y=Math.floor((this._month+month)/12);
            let m=(this._month+month)%12;
            y+=this._year;
            return y+"-"+m+"-"+this._day;
        }
        subMonth(month:number=1):string{
            let d=this._day,m=this._month,y=this._year;
            let temp=0;
            while(m-month<1){
                temp++;
                m=12;
                month=Math.abs(m-month);
            }
            m-=month;
            y-=temp;
            return y+"-"+m+"-"+d;      
        }

        addYear(year:number=1):string{
            let y=this._year+year;

            return y+"-"+this._month+"-"+this._day; 
        }
        
        subYear(year:number=1):string{
            let y=this._year-year;

            return y+"-"+this._month+"-"+this._day;      
        }


        //les methodes privees
        private monthEnd(year:number,month:number):number{
            //var result:number;
            if(month==0) month=12;
            switch(month){
                case 1:
                case 3:
                case 5:
                case 7:
                case 8:
                case 10:
                case 12:
                    return 31;
                break;
                case 4:
                case 6:
                case 9:
                case 11:
                    return 30;
                break;
                case 2:
                    return (year%4==0)?29:28;
                break;
                
            }
        }


}