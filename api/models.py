from django.db import models
from django.conf import settings
from django.contrib.auth.models import AbstractUser, PermissionsMixin

class User(AbstractUser):
    pass

class UserProfile(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    first_name = models.CharField(max_length=255, default='')
    last_name = models.CharField(max_length=255, default='')
    phone = models.CharField(max_length=20, default='')
    city = models.CharField(max_length=20, default='')

    def __str__(self):
        return self.first_name