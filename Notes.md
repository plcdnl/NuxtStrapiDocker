# Dev Notes

## Frontend

```dockerfile
# Dockerfile
CMD ["sh", "-c", "if [ \"$NODE_ENV\" = \"production\" ]; then yarn generate; else yarn dev; fi"]
```

```bash
# Dev
docker run -p 3000:3000 -e NODE_ENV=development frontend
# Prod
docker run -p 3000:3000 -e NODE_ENV=production frontend
# Build
docker build -t frontend .
```

## Backend

```dockerfile
# Dockerfile
CMD ["sh", "-c", "if [ \"$NODE_ENV\" = \"production\" ]; then yarn start; else yarn develop; fi"]
```

```bash
# Dev
docker run -p 1337:1337 -e NODE_ENV=development backend
# Prod
docker run -p 1337:1337 -e NODE_ENV=production backend
# Build
docker build -t backend .
```
