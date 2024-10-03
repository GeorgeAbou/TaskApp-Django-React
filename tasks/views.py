from rest_framework import viewsets
from .models import Task
from .serializer import TaskSerializer


#maneja crud completo
class TaskView(viewsets.ModelViewSet):
    serializer_class = TaskSerializer
    queryset = Task.objects.all()
   






