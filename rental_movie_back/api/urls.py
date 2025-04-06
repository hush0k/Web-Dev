from django.urls import path

from .views import GenreList, GenreDetail, MovieList

urlpatterns = [
    path('genres/', GenreList.as_view(), name='genres'),
    path('genres/<int:id>/', GenreDetail.as_view(), name='genre'),
    path('genres/<int:id>/movies/', MovieList.as_view(), name='movies'),
]