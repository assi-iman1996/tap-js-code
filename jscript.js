
var sum=function(number,targ)
{
    for (let i=0;i<number.length;i++)
{
        for (let j=0;j.length<number;j++)
{
            If (i==j)
{
                continue
            }
            If (number[i]+number[j]==targ)
{
                return[i,j];
            }
        }
    }
}
