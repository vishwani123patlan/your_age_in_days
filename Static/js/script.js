//Challange 1 : Your Age in Days
function ageInDays()
{

let date= new Date();
let year=date.getFullYear();
let month=date.getMonth()+1;
let day=date.getDate();

let date_of_birth = prompt("Enter your date of birth dear friend in the format ddmmyyyy 01011999");
let dd =date_of_birth.slice(0,2);
dd=parseInt(dd);
let mm =date_of_birth.slice(2,4);
mm=parseInt(mm);
let yy = date_of_birth.slice(4,8);
yy=parseInt(yy)
let leap_year=0;
let common_year=0;
let d_day=0;
let d_day2=0;
let ly;
if(date_of_birth.length==8 && dd<=31 && mm<=12 && yy<=year)
{
     leapYearCall=leapYear(yy,year)
        function leapYear( start , end)
        {
            y=start;
           
            for(i=start; i<=end; i++)
            {
                
                if(i%4==0)
                {
                    if(i%100==0)
                    {
                        if(i%400==0)
                        {
                            if(i==y)
                            {
                                lyp=true;
                            }
                           ly=true
                            leap_year++;
                            
                            
                        }
                        else
                        {
                            if(i==y)
                            {
                                lyp=false;
                            }
                            ly=false;
                            common_year++;
                            
                        }
                    }
                    else
                    {   
                        if(i==y)
                        {
                            lyp=true;
                        }
                        ly=true;
                        leap_year++;
                       
                        
                        
                        
                    }
                }
                else
                {
                    if(i==y)
                    {
                        lyp=false;
                    }
                   ly=false; 
                    common_year++;
               
                }
            }
        }
        
      
        let leap_days=leap_year*366;
        let common_days=common_year*365;
       
            for (m=1;m<month;m++)
            {
                
                    if(m<=7)
                    {
                        if(m%2!=0)
                        {
                            d_day=d_day+31;
                        }
                        if(m%2==0)
                        {
                            d_day=d_day+30;
                        }
                    }
                    else
                    {
                        if(m%2==0)
                        {
                            d_day=d_day+31;
                        }
                        if(m%2!=0)
                        {
                            d_day=d_day+30;
                        }
                    }
            
                
            }

            


            for (n=1;n<mm;n++)
            {
                
                    if(n<=7)
                    {
                        if(n%2!=0)
                        {
                            d_day2=d_day2+31;
                        }
                        if(n%2==0)
                        {
                            d_day2=d_day2+30;
                        }
                    }
                    else
                    {
                        if(n%2==0)
                        {
                            d_day2=d_day2+31;
                        }
                        if(n%2!=0)
                        {
                            d_day2=d_day2+30;
                        }
                    }
            
               
            }
            
          if(lyp)
          {
              if(dd<29 && mm<=02)
              {
                  d_day2=d_day2+dd;
                 
              }
              else
              {
                d_day2=d_day2+dd-1;
                
              }
              
              
          }
          else
          {
              d_day2=d_day2+dd-2;
          }
          


        var total_days=leap_days+common_days;

            
            if(ly)
            {
                d_day=d_day+day-1;
                total_days=total_days-(366-d_day);
                
            }
            else
            {
                d_day=d_day-2;
                total_days=total_days-(365-d_day);
                
            }
            
            total_days=total_days-d_day2;
            console.log(total_days)
            
           
        
}
else
{
    console.log('enter valid details');
}

var h1=document.createElement("h1");
var text=document.createTextNode('your age is '+total_days+' days');
h1.setAttribute('id','ageInDays');
h1.appendChild(text);
document.getElementById('flex-ageInDays').appendChild(h1);

};

function reset()
{
document.getElementById('ageInDays').remove();
};
