# Dev Notes

## Nginx

```nginx
  location /api {
    proxy_pass http://backend:1337/api;
    include proxy_params;
  }
    
  location /admin {
    proxy_pass http://backend:1337/admin;
    include proxy_params;
  }
    
  location /i18n {
    proxy_pass http://backend:1337/i18n;
    include proxy_params;
  }

  location /content-manager {
    proxy_pass http://backend:1337/content-manager;
    include proxy_params;
  }

  location /content-type-builder {
    proxy_pass http://backend:1337/content-type-builder;
    include proxy_params;
  }

  location /users-permissions {
    proxy_pass http://backend:1337/users-permissions;
    include proxy_params;
  }

  location /upload {
    proxy_pass http://backend:1337/upload;
    include proxy_params;
  }
```

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
