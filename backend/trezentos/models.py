from django.db import models

# Create your models here.
class Trezentos(models.Model):
    nome = models.CharField(max_length=120)
    email = models.EmailField()
    whatsapp = models.CharField(max_length=15)

    def _str_(self):
        return self.nome