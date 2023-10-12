# Para executar com docker
```bash
docker-compose up
```
## Lembrar também de executar as migrations do back para o banco
```bash
docker exec api bash -c "python manage.py migrate"
```
