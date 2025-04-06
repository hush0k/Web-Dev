from django.shortcuts import render
from rest_framework import  generics
from .models import Genre, Movie
from .serializers import GenreSerializer, MovieSerializer

# Create your views here.
class GenreList(generics.ListCreateAPIView):
    queryset = Genre.objects.all()
    serializer_class = GenreSerializer

class MovieList(generics.ListCreateAPIView):
    queryset = Movie.objects.all()
    serializer_class = MovieSerializer

    def get_queryset(self):
        genre_id = self.kwargs['id']
        return Movie.objects.filter(genre__id=genre_id)

class GenreDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Genre.objects.all()
    serializer_class = GenreSerializer

