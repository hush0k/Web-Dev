from django.db import models

# Create your models here.
class Genre(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Movie(models.Model):
    title = models.CharField(max_length=255)
    genre = models.ForeignKey(Genre, on_delete=models.CASCADE, related_name='movies')
    price_per_day = models.FloatField()
    available_copies = models.IntegerField()
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return self.title

