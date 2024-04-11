from django.shortcuts import render
from rest_framework import viewsets
from .serializers import TrezentosSerializer
from .models import Trezentos

# Create your views here.

class TrezentosView(viewsets.ModelViewSet):
    serializer_class = TrezentosSerializer
    queryset = Trezentos.objects.all()