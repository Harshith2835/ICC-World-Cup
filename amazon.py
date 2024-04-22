import requests
from bs4 import BeautifulSoup
import openpyxl


excel=openpyxl.Workbook()
sheet=excel.active
sheet.title="amazon"

URL= "https://www.amazon.in/s?k=bags&crid=3HTJ56Y1I6RQ2&sprefix=bag%2Caps%2C277&ref=nb_sb_ss_recent_1_0_recent"
HEADERS=({"User-Agent":'https://explore.whatismybrowser.com/useragents/parse/?analyse-my-user-agent=yes',"Accept-Language":'en-US, en;q=0.5'})
r=requests.get(URL,headers=HEADERS)
r=BeautifulSoup(r.text,"html.parser")
bag_details=r.find_all("div",class_="a-section a-spacing-small a-spacing-top-small")
bag_details.remove(bag_details[0])
#print(bag_details)
for bag in bag_details:
  name_bag=bag.find("span",class_="a-size-medium a-color-base a-text-normal").text
  rating_bag=bag.find("a",class_="a-popover-trigger a-declarative").find("span",class_="a-icon-alt").text
  link_bag=bag.find("a",class_="a-link-normal s-underline-text s-underline-link-text s-link-style a-text-normal").get("href")

  print(link_bag)
  print("\n")





