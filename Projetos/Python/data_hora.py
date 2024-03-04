'''
    TIPOS DE DADTAS

    data:      armazena uma data de calendário
    time:      armazena a hora do dia na forma de horas, minutos, segundos e microssegundos
    datetime:  armazena a data e hora
    timedelta: diferença entre dois valores de datas
    tzinfo:    fuso horário (time zone)

%Y = ano com quatro digitos
%y = ano com dois digitos

%m = para mes com dois digitos
%b = abreviado (Mar)
%B = Nome do mes completo (March)

%d = para dia com dois digitos

%a = nome dia da semana abreviado (Wed)
%A = nome dia da semana completo (Wednesday)
%w = numero de dias da semana

%H = hora em formato 24h (00 até 23)
%I = 12 horas (01 até 12)
%M = minutos (01 até 59)

%S = segundos (00 até 59)

%p = utilizado juntoco horas em formatos de 12 horas 
'''

'''
    DATETIME
    Ferramenta para criação e manipulação de séries no tempo par data frame
'''
from datetime import datetime
data = datetime(2024, 12, 13, 17, 54, 50, 55)  #informando as datas
print(data)

data2 = datetime.now() # informa a data/hora atual
print(data2)

'''
    Para realiar transformações de datas, utiliza strptime
'''
today = 'Wednesday, March, 28, 2024. 11:58 am'
datetime.strptime(today, '%A, %B, %d, %Y. %I:%M %p')
print(today)