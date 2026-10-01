# Effency Labs · Demos

Un proyecto estático para las propuestas web presentes y futuras. La portada sólo contiene enlaces. Cada negocio tiene su ruta y sus propios archivos; no hay panel, base de datos, API, pedidos, pagos ni datos de clientes.

## Publicar con GitHub Pages

El contenido publicable está en `docs/`, con `.nojekyll`. Usar la rama `main` y la carpeta `/docs` como fuente de Pages. No requiere build ni un workflow personalizado. Todos los enlaces internos son relativos y funcionan bajo `/effency-demos/<slug>/`.

La creación del repositorio público, el push y la activación de Pages deben realizarse sólo después de confirmar la cuenta y autorización. No se agregó `CNAME` ni se modificó DNS.

Guía: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Rutas

- `cafe-pipetua/`
- `lion-restaurante/`
- `estetica-san-juan/`
- `session-haus/`
- `gaia-pergamino/`
- `praga-bar/`
- `espacio-arvo/`
- `passiflora/`
- `la-esquina-del-choripan/`
- `tia-maria-home-bistro/`

Cada demo conserva un aviso visible de propuesta no oficial. Sus controles de consulta sólo muestran ejemplos dentro de la página; no envían mensajes ni confirman reservas. Passiflora usa una foto fija de los datos del menú, no el administrador privado. El archivo `menu.json` pertenece únicamente a esa propuesta.

## Agregar una demo

1. Crear `docs/nuevo-slug/index.html` y `docs/nuevo-slug/assets/`
2. Usar enlaces relativos (`./assets/...`), sin referencias a otros proyectos privados
3. Agregar el nombre y slug a `demos.json`
4. Ejecutar `npm run build` y `npm run check`
5. Verificar en escritorio/móvil antes de publicar el cambio

No necesita instalar dependencias de Node: los scripts sólo usan su biblioteca estándar. El HTML, CSS y JavaScript estáticos están listos.

## Alternativa Docker / Coolify

Incluye Dockerfile con NGINX no privilegiado y puerto interno 8080. En Coolify se puede elegir build desde Dockerfile, configurar puerto 8080 y asociar únicamente el subdominio que el propietario apruebe. El proxy de Coolify debe resolver HTTPS. No publicar puertos adicionales ni tocar apex, www o correo.

`docker compose up --build -d` es una alternativa local. `compose.yaml` sólo expone 8080 dentro de la red Docker; no vincula un puerto del host. No hay secretos ni credenciales. La imagen viene del proyecto oficial https://github.com/nginx/docker-nginx-unprivileged. Para reproducibilidad exacta, fijar un digest verificado al desplegar.

Docker/NGINX no estaban disponibles en el entorno de preparación, por lo que no se ejecutó el contenedor. Sí se validaron archivos/rutas, JavaScript y las versiones renderizadas equivalentes en escritorio y móvil. Antes de reemplazar un destino existente, construir el contenedor y comprobar `/healthz`, las diez rutas, recursos y HTTPS.

## Contenido y derechos

Los conceptos no fueron encargados ni avalados por los negocios. Fotografías y marcas se tomaron de fuentes públicas y se atribuyen en cada página; no se verificó una licencia de uso comercial. La publicación del código no concede derechos sobre esos materiales. Validar datos, precios y permisos con el titular antes del uso comercial definitivo.

Passiflora: 40 registros de la carta enlazada por su perfil, consultada el 1/10/2026. El PDF fue modificado el 12/9/2026, sin fecha de vigencia impresa. Usa `$`; pesos argentinos es una inferencia explícita. Precios y disponibilidad pendientes de confirmación. Otros menús/agendas indican sus campos pendientes sin inventar información.

`noindex` y `.nojekyll` no hacen privado un sitio. Todo lo que se publique aquí debe ser apto para acceso público.
