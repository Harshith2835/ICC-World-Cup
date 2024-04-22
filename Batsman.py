import requests
from bs4 import BeautifulSoup
import openpyxl

excel=openpyxl.Workbook()
sheet=excel.active
sheet.title="Washington Sundar"
sheet.append(['Year','Innings','Runs','Strike Rate','Average'])

URL= "http://www.cricmetric.com/playerstats.py?player=Washington+Sundar&role=all&format=ODI&groupby=year"
HEADERS=({"User-Agent":'https://explore.whatismybrowser.com/useragents/parse/?analyse-my-user-agent=yes',"Accept-Language":'en-US, en;q=0.5'})
r=requests.get(URL,headers=HEADERS)

soup=BeautifulSoup(r.text,"html.parser")
vk=soup.find("div",class_="table-responsive well").find("table",class_="table scoretable").find_all("td")

count=0
x=0
y=0
a=0
b=0
for i in range(0,len(vk)-13):
    if(i%13==0):
       data_year=vk[13*count].find("a").text
       count=count+1
    if(i%13==1):
        data_innings=vk[13*x+1].text
        x=x+1
    if(i%13==2):
        data_runs=vk[13*y+2].text
        y=y+1  
    if(i%13==5):
        data_avg=vk[13*a+5].text
        a=a+1
    if(i%13==6):
        data_sr=vk[13*b+6].text
        b=b+1
    if i%13==7:
        sheet.append([float(data_year),float(data_innings),float(data_runs),float(data_sr),float(data_avg)])
excel.save("Washington Sundar.xlsx")
