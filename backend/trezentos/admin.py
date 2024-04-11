from django.contrib import admin
from .models import Trezentos
# Register your models here.

class TrezentosAdmin(admin.ModelAdmin):
    list_display = ('nome', 'email', 'whatsapp')

# Register the model
admin.site.register(Trezentos, TrezentosAdmin)