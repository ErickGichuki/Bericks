from django.db import models
from django.contrib.auth.models import AbstractUser

class CustomUser(AbstractUser):
    ADMIN = 'Admin'
    USER = 'User'
    ROLE_CHOICES = [
        (ADMIN, 'Admin'),
        (USER, 'User'),
    ]

    role = models.CharField(
        max_length=10,
        choices=ROLE_CHOICES,
        default=USER,
    )
