from .views import TaskView
from django.urls import path,include
from rest_framework import routers#genera todas las url de las vistas
from rest_framework.documentation import include_docs_urls#url doc


router=routers.DefaultRouter()
router.register(r'tasks',TaskView,'tasks')#string sin  caracteres y se denomina r'tasks' ruta 


urlpatterns = [
    #versionando api
    path("api/v1/",include(router.urls)),#genera todas la rutas el crud
    path('docs/',include_docs_urls(title="Tasks API")),
]