# import requests
# import lxml
# response = requests.get(url )
# print(response.status_code)
# # print(response.content)
# # print(response.text)

# from bs4 import BeautifulSoup
# soup = BeautifulSoup( response.content , 'lxml')

# a =soup.find_all('table')
# rows = a[2].find_all('tr')
# operand=[]
# opcode=[]
# size=[]
# for i  in range(len(rows)):
#     operand.append(rows[i].find('td' , width="171").text)
#     opcode.append(rows[i].find('td' , width="157").text)
#     size.append(rows[i].find('td' , width="152").text)

# dic ={}
# for i  in range(1 , len(operand)):
#     dic[operand[i]]= { "name" : opcode[i] , "size" : size[i]}

# print(dic)
# import json
# x = json.dumps(dic)
# with open('data.json' , 'w') as f:
#     f.write(x)
# f.close()

import json
with open('data.json' , 'r' ) as f:
    data = f.read()
dic = json.loads(data)
# print(len(dic.keys()))
nd = dic

x = json.dumps(nd)
with open('new_data.json' , 'w' ) as f:
    f.write(x)
f.close()










