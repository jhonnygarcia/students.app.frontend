# Students.App Cli

### Caracteristicas de la applicación
- Se encuentra realizado sobre el angular v13.2.0

### Pasos previos para ejecutar la applicación
- npm i
- ng serve

## Los valores que configuran la aplicación se encuentra en el environment
```typescript
export const environment: AppConfig = {
  production: false,
  serverUri: 'https://localhost:5001',
  accessTokenNameCache: 'ACCESS_TOKEN',
  expireInNameCache: 'EXPIRE_IN',
  timeCacheInMinute: 5
};
```

Los mas importantes para la prueba son:
- **serverUri**
Desde aqui se configura donde se encuentra expuesto el backend

- **timeCacheInMinute**
Esta propidad configura el periodo de tiempo que se cachea los informes


## Las traducciones se encuentra en la ruta: assets/i18n/es.json