from rest_framework import serializers
from .models import Trezentos

class TrezentosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Trezentos
        fields = ('id', 'nome', 'email', 'whatsapp')