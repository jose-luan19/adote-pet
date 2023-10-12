# Use uma imagem base com suporte ao Python e ao sistema operacional desejado.
FROM python:3.10

# Defina as variáveis de ambiente para evitar problemas de codificação
ENV PYTHONUNBUFFERED 1

# Crie um diretório de trabalho no contêiner
WORKDIR /app

RUN pip install --upgrade pip
RUN pip install --upgrade setuptools


# Copie o arquivo requirements.txt para o contêiner
COPY requirements.txt /app/

# Instale as dependências Python a partir do arquivo requirements.txt
RUN pip install -r requirements.txt

# Copie todo o conteúdo do seu projeto para o contêiner
COPY . /app/

EXPOSE 8000

# Inicie o aplicativo Django
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]