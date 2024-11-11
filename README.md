# CRUD de Tareas - Django Rest Framework

Este proyecto es una API RESTful utilizando **Django** y **Django Rest Framework (DRF)** para gestionar un conjunto de tareas. Proporciona operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre el modelo `Task`. La API está pensada para facilitar la gestión de tareas, permitiendo realizar las operaciones estándar de una manera sencilla.

## Requisitos

- Python 3.x
- Django 3.x o superior
- Django Rest Framework 3.x o superior

## Instalación

### 1. Clona el repositorio

Si aún no lo has hecho, clona el proyecto desde GitHub:

```bash
git clone https://github.com/tu_usuario/tu_repositorio.git
2. Crea un entorno virtual
Si no tienes un entorno virtual, crea uno y actívalo:

bash
Copiar código
# En Linux/MacOS
python3 -m venv venv
source venv/bin/activate

# En Windows
python -m venv venv
venv\Scripts\activate
3. Instala las dependencias
Con el entorno virtual activo, instala las dependencias del proyecto:

bash
Copiar código
pip install -r requirements.txt
Si no tienes el archivo requirements.txt, puedes instalar Django y DRF manualmente:

bash
Copiar código
pip install django djangorestframework
4. Configura la base de datos
Asegúrate de que tienes una base de datos configurada. Si es necesario, puedes usar la base de datos SQLite predeterminada de Django para desarrollo:

bash
Copiar código
python manage.py migrate
5. Crear un superusuario (opcional)
Si deseas acceder al panel de administración de Django, crea un superusuario:

bash
Copiar código
python manage.py createsuperuser
Sigue las instrucciones para definir el nombre de usuario, correo electrónico y contraseña.

Uso de la API
 Correr el servidor
Para iniciar el servidor de desarrollo, ejecuta el siguiente comando:

bash
Copiar código
python manage.py runserver
La API estará disponible en http://127.0.0.1:8000/.
