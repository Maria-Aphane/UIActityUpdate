import{Injectable} from '@angular/core';

@Injectable()
export class  getInfo{


Codetribes=[];
detail=[];
temp=[];




constructor() {
  this.Codetribes=[
    {firstName:'Maria', LastName: 'Aphane',pic:'maria.jpg',MobileNo:'0827624009',email:'mariaaphane17@gmail.com'},
    {firstName:'Neo', LastName: 'sehlabane',pic:'neo.jpg',MobileNo:'0824545454',email:'ntshechengp@gmail.com'},
    {firstName:'Senzekile', LastName: 'Zwane',pic:'senzi.jpg',MobileNo:'0824545455',email:'senzi06@gmail.com'},
    {firstName:'Carol', LastName: 'XaBA',pic:'carol.jpg',MobileNo:'082454263',email:'carol23@gmail.com'},
    {firstName:'Khensane', LastName: 'Mathebula',pic:'khensi.jpg',MobileNo:'0824545450',email:'November@gmail.com'},

  ]

  console.log('');
}
getCodetribes(){
return this.Codetribes;
}

getDatails()
{

     return this.detail;


}
addDetails(index:number)
{
   this.detail.push(this.Codetribes[index]);

}

getTemp()
{

    return this.temp;
}


}