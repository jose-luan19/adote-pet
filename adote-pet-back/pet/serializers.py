from dataclasses import field, fields
from pyexpat import model
from rest_framework import serializers

from .models import Pet

class PetSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pet
        fields = ('id','name','history','urlImage')